import RAPIER from "@dimforge/rapier3d-compat";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { Socket } from "socket.io";
import { Socket as CliSocket } from "socket.io-client";

import { Physics } from "./rapier/physics.js";
import { useThree } from "./three/resource-managing.js";
import { GameBase, GameBaseClient } from "./game-base.js";
import { GameObjectNetworkedBase, GameObjectNetworkedBaseClient, TUserData } from "./game-object-base.js";


/** In ms. */
const NETWORK_UPDATE_INTERVAL = 1000

export type TNetworkObjectState = {
  userData: TUserData,
  translation: {
    x: number,
    y: number,
    z: number
  },
  rotation: {
    x: number,
    y: number,
    z: number,
    w: number
  }
}


export function getStateFromNetworkedObject(obj: GameObjectNetworkedBase): TNetworkObjectState {
  const pos = obj.translation()
  const rot = obj.rotation()

  return {
    userData: obj.userData,
    translation: {
      x: pos.x,
      y: pos.y,
      z: pos.z
    },
    rotation: {
      x: rot.x,
      y: rot.y,
      z: rot.z,
      w: rot.w
    }
  }
}


class GameObjectNetworked extends GameObjectNetworkedBase {
  async setup() {
    const cube = this.world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic()
    )
    cube.setTranslation({ x: 0, y: 3, z: 0 }, true)
    this.root = cube
    this.world.createCollider(
      RAPIER.ColliderDesc.cuboid(.5, .5, .5)
        .setRestitution(2),
      cube
    )
  }

  physicsLoopLogic(deltaTime: number) { }
}


export class GameBaseMultiplayerServer extends GameBase {
  #clients: Set<Socket>
  #networkClock: THREE.Clock
  #networkedObjects: WeakMap<Socket, GameObjectNetworkedBase>
  #networkLoopTimeoutId: number | NodeJS.Timeout

  constructor(clients: Socket[]) {
    super()
    this.#clients = new Set(clients)
    this.#networkClock = new THREE.Clock(true)
    this.#networkedObjects = new WeakMap()
  }

  /**
   * This function adds a client to the server instance of the game.
   * It should configure socket events and config 
   * @param socket client socket.io socket
   */
  async addClient(socket: Socket) {
    const socketId = socket.id

    console.log(`socket ${socketId} connected.`)

    // setup client
    const cliGameObject = new GameObjectNetworked(this.physics.world, { id: socketId, networked: true })
    await cliGameObject.setup()

    socket.on("state:player", (state: TNetworkObjectState) => {
      console.log(`msg from ${socketId}:`, state)
      // Prevent client from modifying positions of other objects.
      // This is very rudimentary as doesn't check if the position provided by the client is meaningful (i.e. they can send any position).
      if (state.userData.id !== socketId) return
    })

    socket.on("disconnect", (reason) => {
      this.physics.world.removeRigidBody(this.#networkedObjects.get(socket).root)
      this.#networkedObjects.delete(socket)
      this.#clients.delete(socket)
      this.notifyClientsClientLeft(socketId)
      console.log(`socket ${socketId} disconnected because: ${reason}.`)
    })

    this.#networkedObjects.set(socket, cliGameObject)
    this.#clients.add(socket)

    // notify all the other client about this new client
    this.notifyClientsNewClient(cliGameObject)

    // share the current state with the new client
    this.shareStateWithClient(socket)
  }

  shareStateWithClient(socket: Socket) {
    let states = []

    this.#clients.forEach(clientSocket => {
      if (clientSocket.id === socket.id) return

      const obj = this.#networkedObjects.get(clientSocket)
      const state = getStateFromNetworkedObject(obj)
      states.push(state)
    })

    socket.emit("client:new", { data: states })
  }

  notifyClientsNewClient(cliObject: GameObjectNetworked) {
    const state = getStateFromNetworkedObject(cliObject)

    this.#clients.forEach(clientSocket => {
      if (clientSocket.id !== cliObject.userData.id) {
        clientSocket.emit("client:new", { data: [state] })
      }
    })
  }

  notifyClientsClientLeft(cliId: string) {
    this.#clients.forEach(clientSocket => {
      clientSocket.emit("client:left", cliId)
    })
  }

  // Setup physical world.
  async setup() {
    const gravity = { x: 0, y: -10, z: 0 }
    this.physics = await Physics.setup(gravity)

    const world = this.physics.world

    const floor = world.createRigidBody(
      RAPIER.RigidBodyDesc.fixed()
    )
    floor.setTranslation({ x: 0, y: -0.1, z: 0 }, true)
    world.createCollider(
      RAPIER.ColliderDesc.cuboid(10, 0.1, 10),
      floor
    )
  }

  /**
   * Shares network state with all connected clients.
   * @param deltaTime time elapsed since last call.
   */
  networkLoopLogic(deltaTime: number) {
    let states = []

    this.#clients.forEach(clientSocket => {
      const obj = this.#networkedObjects.get(clientSocket)
      const state = getStateFromNetworkedObject(obj)
      states.push(state)
    })

    // Share network state with all connected clients
    this.#clients.forEach((clientSocket) => {
      clientSocket.emit("state:objects", states)
    })
  }

  /**
   * Needs to be an arrow function to save 'this' reference to the class in function scope.
   */
  startNetworkLoop = () => {
    const deltaTime = this.#networkClock.getDelta()

    // measure time it took to run the loop and subtract it from delay until next frame
    const tik = performance.now()
    this.networkLoopLogic(deltaTime)
    const tok = performance.now()

    this.#networkLoopTimeoutId = setTimeout(this.startNetworkLoop, NETWORK_UPDATE_INTERVAL - (tok - tik))
  }

  physicsLoopLogic(deltaTime: number) {
    this.physics.world.step()
  }

  derivedCleanup() {
    clearTimeout(this.#networkLoopTimeoutId)
    this.#clients.forEach((clientSocket) => clientSocket.disconnect(true))
  }
}


class GameObjectNetworkedClient extends GameObjectNetworkedBaseClient {
  async setup() {
    const { resources, createGeometry, createMaterial, createMesh } = useThree(this.threeResourceManager)

    const scene = resources.scene

    const cubeGeom = createGeometry(() => new THREE.BoxGeometry(1, 1, 1))
    const cubeMat = createMaterial(() => new THREE.MeshBasicMaterial({ color: 0x1111bb }))
    const cubeMesh = createMesh(cubeGeom, cubeMat)
    this.rendererRoot = cubeMesh
    scene.add(cubeMesh)

    const cube = this.world.createRigidBody(
      RAPIER.RigidBodyDesc.kinematicPositionBased()
    )
    cube.setTranslation({ x: 0, y: 3, z: 0 }, true)
    this.root = cube
    this.world.createCollider(
      RAPIER.ColliderDesc.cuboid(.5, .5, .5)
        .setRestitution(2),
      cube
    )
  }

  physicsLoopLogic(deltaTime: number) { }

  drawLoopLogic(deltaTime: number) {
    const pos = this.translation()
    const rot = this.rotation()

    this.rendererRoot.position.set(pos.x, pos.y, pos.z)
    this.rendererRoot.rotation.setFromQuaternion(new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w))
  }
}


export class GameBaseMultiplayerClient extends GameBaseClient {
  #socket: CliSocket
  #networkClock: THREE.Clock
  #networkReceiveClock: THREE.Clock
  /** In sec. */
  #networkReceiveDelta: number
  #networkedObjects: Map<string, GameObjectNetworkedClient>
  #networkedSelf: GameObjectNetworkedClient
  #networkLoopTimeoutId: number | NodeJS.Timeout

  #targetState: TNetworkObjectState = null

  #trySetIdOfNetworkedSelfTimeoutId: number | NodeJS.Timeout

  camera: THREE.PerspectiveCamera

  constructor(socket: CliSocket) {
    super()

    this.#networkedObjects = new Map()

    this.#networkClock = new THREE.Clock(true)
    this.#networkReceiveClock = new THREE.Clock(true)

    this.#socket = socket

    socket.on("connect", () => {
      // clear current timeout if there's one
      clearTimeout(this.#trySetIdOfNetworkedSelfTimeoutId)

      // see if the networked self object has been defined and set it's id to socket's id if it has
      // else set a timeout to try again in a short period of time
      const trySetIdOfNetworkedSelf = (attempt: number, maxAttempts: number) => {
        if (attempt > maxAttempts) {
          throw new Error("Too many attempts connecting to server.")
        }
        if (this.#networkedSelf) {
          this.#networkedSelf.userData.id = socket.id
        } else {
          this.#trySetIdOfNetworkedSelfTimeoutId = setTimeout(() => {
            trySetIdOfNetworkedSelf(attempt + 1, maxAttempts)
          }, 150)
        }
      }

      trySetIdOfNetworkedSelf(1, 3)
    })

    socket.on("state:objects", (networkObjectStates: TNetworkObjectState[]) => {
      this.#networkReceiveDelta = this.#networkReceiveClock.getDelta()

      // Parse the message, if the message is of type create object,
      // create it, if it's a data packet, replicate changes locally.
      for (const state of networkObjectStates) {
        if (state.userData.id === socket.id) {
          // copy object state for interpolation purposes
          this.#targetState = state
        } else {
          this.#networkedObjects.get(state.userData.id)?.root.setTranslation(state.translation, true)
          this.#networkedObjects.get(state.userData.id)?.root.setRotation(state.rotation, true)
        }
      }
    })

    socket.on("client:new", async (payload: { data: TNetworkObjectState[] }) => {
      console.log("new clients connected, their data:", payload)
      const clientsData = payload.data

      for (const cliData of clientsData) {
        const newClient = new GameObjectNetworkedClient(this.physics.world, this.threeResourceManager, { id: cliData.userData.id, networked: true })
        await newClient.setup()
        newClient.root.setTranslation(cliData.translation, true)
        newClient.root.setRotation(cliData.rotation, true)
        this.#networkedObjects.set(cliData.userData.id, newClient)
      }
    })

    socket.on("client:left", (cliId) => {
      console.log("client disconnected.")
      const obj = this.#networkedObjects.get(cliId)
      if (obj) {
        // remove object from physical world
        this.physics.world.removeRigidBody(obj.root)
        this.#networkedObjects.delete(cliId)
        // remove object from renderer world
        obj.rendererRoot.removeFromParent()
      }
    })

    socket.on("disconnect", (reason) => {
      if (!socket.active) {
        console.log(`socket disconnected because: ${reason}.`)
      }
    })
  }

  async setup(domGameRoot: HTMLElement) {
    const gravity = { x: 0, y: -10, z: 0 }
    this.physics = await Physics.setup(gravity)

    const world = this.physics.world

    // setup three.js
    const { resources, createGeometry, createMaterial, createMesh } = useThree(this.threeResourceManager)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    domGameRoot.replaceChildren(renderer.domElement)
    resources.setRenderer(renderer)

    const scene = new THREE.Scene()
    resources.setScene(scene)

    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight)
    this.camera.position.set(0, 8, -20)
    const controls = new OrbitControls(this.camera, renderer.domElement)
    resources.setControls(controls)

    // Setup level
    const floorGeom = createGeometry(() => new THREE.PlaneGeometry(20, 20))
    const floorMat = createMaterial(() => new THREE.MeshBasicMaterial({ color: 0x11bb11 }))
    const floorMesh = createMesh(floorGeom, floorMat)
    // floorMesh.translateY(.1)
    floorMesh.rotation.x = -Math.PI / 2
    scene.add(floorMesh)

    const floor = world.createRigidBody(
      RAPIER.RigidBodyDesc.fixed()
    )
    floor.setTranslation({ x: 0, y: -0.1, z: 0 }, true)
    world.createCollider(
      RAPIER.ColliderDesc.cuboid(10, 0.1, 10),
      floor
    )

    this.#networkedSelf = new GameObjectNetworkedClient(world, this.threeResourceManager, { id: this.#socket.id, networked: true })
    await this.#networkedSelf.setup()
  }

  /**
   * Shares local state with the server.
   * @param deltaTime time elapsed since last call.
   */
  networkLoopLogic(deltaTime: number) {
    if (!this.#socket.connected) {
      return
    }
    const state = getStateFromNetworkedObject(this.#networkedSelf)
    this.#socket.emit("state:player", state)
  }

  /**
   * Needs to be an arrow function to save 'this' reference to the class in function scope.
   */
  startNetworkLoop = () => {
    const deltaTime = this.#networkClock.getDelta()

    // measure time it took to run the loop and subtract it from delay until next frame
    const tik = performance.now()
    this.networkLoopLogic(deltaTime)
    const tok = performance.now()

    this.#networkLoopTimeoutId = setTimeout(this.startNetworkLoop, NETWORK_UPDATE_INTERVAL - (tok - tik))
  }

  /**
   * Interpolate between current and target network states
   * use lerp for position and slerp for rotation.
   * @param current
   * @param target
   */
  interpolate(current: TNetworkObjectState, target: TNetworkObjectState, dt: number): TNetworkObjectState {
    const currTra = new THREE.Vector3(current.translation.x, current.translation.y, current.translation.z)
    const targetTra = new THREE.Vector3(target.translation.x, target.translation.y, target.translation.z)
    const updatedTra = currTra.lerp(targetTra, dt)

    const currRot = new THREE.Quaternion(current.rotation.x, current.rotation.y, current.rotation.z, current.rotation.w)
    const targetRot = new THREE.Quaternion(target.rotation.x, target.rotation.y, target.rotation.z, target.rotation.w)
    const updatedRot = currRot.slerp(targetRot, dt)

    return {
      userData: { ...current.userData },
      translation: {
        x: updatedTra.x,
        y: updatedTra.y,
        z: updatedTra.z,
      },
      rotation: {
        x: updatedRot.x,
        y: updatedRot.y,
        z: updatedRot.z,
        w: updatedRot.w,
      }
    }
  }

  physicsLoopLogic(deltaTime: number) {
    if (this.#targetState) {
      // interpolate networked object
      const currState = getStateFromNetworkedObject(this.#networkedSelf)

      const interpolationFactor = Math.min(this.physicsLoopTook / (this.#networkReceiveDelta * 1000), 1)
      const { translation, rotation } = this.interpolate(currState, this.#targetState, interpolationFactor)

      this.#networkedSelf.root.setTranslation(translation, true)
      this.#networkedSelf.root.setRotation(rotation, true)
    }

    // physics step
    this.physics.world.step()
  }

  drawLoopLogic(deltaTime: number) {
    this.#networkedSelf.drawLoopLogic(deltaTime)
    this.#networkedObjects.forEach(obj => {
      obj.drawLoopLogic(deltaTime)
    })

    const orbitControls = this.threeResourceManager.controls as OrbitControls
    orbitControls.update()

    this.threeResourceManager.renderer.render(this.threeResourceManager.scene, this.camera)
  }

  derivedCleanup() {
    clearTimeout(this.#networkLoopTimeoutId)
    this.#socket.disconnect()
  }
}