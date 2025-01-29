import RAPIER from "@dimforge/rapier3d-compat";
import * as THREE from "three"

import { ThreeResourceManager, useThree } from "../three/resource-managing.js"
import { GameObjectNetworkedBase, GameObjectNetworkedBaseClient, TUserData } from "../game-object-base";
import { playerLayer } from "../rapier/collision-layers";
import { KeyboardSingleton } from "../keyboard-context";
import { TNetworkObjectState } from "../game-networked";
import { TNetworkedPlayerState } from "../game-networked-player.js";


/**
 * It will apply input device actions sent from client to this class's RigidBody root
 */
export class NetworkedPlayerServer extends GameObjectNetworkedBase {
  async setup() {
    // Create physical player
    this.root = this.world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic()
        .setGravityScale(2)
        .setTranslation(0, 1, 0)
        .lockRotations()
    )

    this.world.createCollider(
      RAPIER.ColliderDesc.capsule(.5, .2)
        .setMass(1)
        .setFriction(.2)
        .setCollisionGroups(playerLayer),
      this.root
    )
  }

  #networkedPlayerStates: TNetworkedPlayerState[] = []

  shiftNetworkedPlayerStates() {
    return this.#networkedPlayerStates.shift()
  }

  addNetworkedPlayerStates(networkPlayerStates: TNetworkedPlayerState[]) {
    this.#networkedPlayerStates.push(...networkPlayerStates)
  }

  jumpImpulse: number = 8
  speedCoefficient: number = 5
  runMultiplier: number = 1.5 // speed coefficient is going to be multiplied by this

  // control consecutive jumps
  maxConsecutiveJumps: number = 3
  currConsecutiveJumps: number = 0
  consecutivePenaltyCoolDown: number = 0.35 // time in sec (should be larger than jumpCoolDown)
  currConsecutivePenaltyCoolDown: number = 0

  jumpCoolDown: number = 0.3 // time in sec
  currJumpCoolDown: number = 0
  physicsLoopLogic(deltaTime: number) {
    const networkState = this.shiftNetworkedPlayerStates()
    // if there's no network state, just wait for it
    if (!networkState) return

    const {
      objectState,
      keyboardState: { space, keyw, keys, keya, keyd, shiftleft }
    } = networkState

    // ? handle game inputs if the player is not in menu
    let moveDirection = new THREE.Vector3(Number(keyd) - Number(keya), 0, Number(keys) - Number(keyw))

    // Normalize movement direction
    if (moveDirection.length() > 0.01) {
      moveDirection.normalize()
      moveDirection.multiplyScalar(this.speedCoefficient)
    }
    if (shiftleft) {
      moveDirection.multiplyScalar(this.runMultiplier)
    }

    // rotate vector to where playerCamera points
    moveDirection.applyQuaternion(new THREE.Quaternion(objectState.rotation.x, objectState.rotation.y, objectState.rotation.z, objectState.rotation.w))

    // preserve gravity and jump effects
    moveDirection.setY(this.root.linvel().y)
    // cap vertical velocity to prevent indefinite acceleration
    const cappedY = Math.abs(moveDirection.y) > 100 ? Math.sign(moveDirection.y) * 100 : moveDirection.y
    moveDirection.setY(cappedY)

    // apply linvel to character
    this.root.setLinvel(moveDirection, true)

    jump: {
      // process jump last to not override the jump impulse with linvel
      if (space && this.currJumpCoolDown === 0) {
        // if they make a jump before the cool down runs out, increment consecutive count
        if (this.currConsecutivePenaltyCoolDown > 0) {
          this.currConsecutiveJumps += 1
        }

        this.currJumpCoolDown = this.jumpCoolDown
        this.currConsecutivePenaltyCoolDown = this.consecutivePenaltyCoolDown

        const consecutiveJumpAllowed = this.currConsecutiveJumps < this.maxConsecutiveJumps
        if (!consecutiveJumpAllowed) {
          break jump
        }

        // check if the player is on ground
        // Get player"s collider
        const collider = this.root.collider(0)
        const position = this.root.translation()
        // Check for intersections slightly below the player
        const checkPosition = new RAPIER.Vector3(
          position.x,
          position.y - 0.03, // Small offset downward
          position.z
        )
        const rotation = this.root.rotation()

        // Use player"s own collider for intersection test
        const intersecting = this.world.intersectionWithShape(
          checkPosition,
          rotation,
          collider.shape,
          null,
          null,
          collider,
          this.root
        )

        if (intersecting != null) {
          this.root.applyImpulse({ x: 0, y: this.jumpImpulse, z: 0 }, true)
        }
      }
    }

    this.currJumpCoolDown = Math.max(0, this.currJumpCoolDown - deltaTime)
    this.currConsecutivePenaltyCoolDown = Math.max(0, this.currConsecutivePenaltyCoolDown - deltaTime)

    if (this.currConsecutivePenaltyCoolDown === 0) {
      this.currConsecutiveJumps = 0
    }
  }
}


export class NetworkedPlayerClient extends GameObjectNetworkedBaseClient {
  camera: THREE.PerspectiveCamera

  constructor(world: RAPIER.World, threeResourceManager: ThreeResourceManager, userData: TUserData, camera: THREE.PerspectiveCamera) {
    super(world, threeResourceManager, userData)
    this.camera = camera
  }

  async setup() {
    const { resources, createGeometry, createMaterial, createMesh } = useThree(this.threeResourceManager)

    // Create physical player
    this.root = this.world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic()
        .setGravityScale(2)
        .setTranslation(0, 1, 0)
        .lockRotations()
    )
    this.world.createCollider(
      RAPIER.ColliderDesc.capsule(.5, .2)
        .setMass(1)
        .setFriction(.2)
        .setCollisionGroups(playerLayer),
      this.root
    )

    // Create rendered player
    const characterGeom = createGeometry(() => new THREE.CapsuleGeometry(.4, 1))
    const characterMat = createMaterial(() => new THREE.MeshBasicMaterial({ color: 0xaaaa33 }))
    this.rendererRoot = createMesh(characterGeom, characterMat)
    // Make it so only the self player has camera, the other players will have null passed instead of camera object
    if (this.camera) {
      this.rendererRoot.add(this.camera)
      this.camera.translateY(0.35)
    }
    resources.scene.add(this.rendererRoot)
  }

  #networkedPlayerStates: TNetworkedPlayerState[] = []

  get networkedPlayerStates() {
    return this.#networkedPlayerStates
  }

  /** Empties the array. */
  emptyNetworkedPlayerStates() {
    this.#networkedPlayerStates = []
  }

  // We will collect player states in physics loop as it is where it will be used on the server
  physicsLoopLogic(deltaTime: number) {
    // Rotation is camera rotation
    const tra = this.rendererRoot.position
    const rot = (new THREE.Quaternion()).setFromEuler(this.camera.rotation)
    const objectState: TNetworkObjectState = {
      userData: { ...this.userData },
      translation: {
        x: tra.x,
        y: tra.y,
        z: tra.z
      },
      rotation: {
        x: rot.x,
        y: rot.y,
        z: rot.z,
        w: rot.w
      }
    }

    // Collect keyboard state
    const keyboardState = KeyboardSingleton.getKeyboardStateObj()

    const networkedPlayerState: TNetworkedPlayerState = {
      objectState,
      keyboardState
    }

    this.#networkedPlayerStates.push(networkedPlayerState)
  }

  drawLoopLogic(deltaTime: number) {
    const pos = this.root.translation()
    const rot = this.root.rotation()
    this.rendererRoot.position.set(pos.x, pos.y, pos.z)
    this.rendererRoot.rotation.setFromQuaternion(new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w))
  }
}