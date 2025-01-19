import * as THREE from "three";
import RAPIER from "@dimforge/rapier3d-compat";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { GameBaseClient } from "./game-base.js";
import { Physics } from "./rapier/physics.js";
import { useThree } from "./three/resource-managing.js";
import { GameObjectNetworkedBaseClient } from "./game-object-base.js";
// export class GameBaseMultiplayerServer extends GameBase {
//   #clients: Set<WebSocket>
//   #networkClock: THREE.Clock;
//   #networkedObjects: Set<GameObjectNetworkedBase>;
//   #networkLoopTimeoutId: number | NodeJS.Timeout
//   constructor(clients: WebSocket[]) {
//     super()
//     this.#clients = new Set(clients)
//     this.#networkClock = new THREE.Clock(true)
//   }
//   addClient(socket: WebSocket) {
//     socket.onerror = (e) => {
//       console.log("socket error")
//     }
//     socket.onopen = (e) => {
//       console.log("socket open")
//     }
//     socket.onmessage = (e) => {
//       // We will agree to use json encoding
//       const msg = JSON.parse(e.data)
//       console.log(msg)
//     }
//   }
//   // Setup physical world.
//   async setup() {
//     const gravity = { x: 0, y: -10, z: 0 }
//     this.physics = await Physics.setup(gravity)
//     const world = this.physics.world
//     const floor = world.createRigidBody(
//       RAPIER.RigidBodyDesc.fixed()
//     )
//     floor.setTranslation({ x: 0, y: -0.1, z: 0 }, true)
//     world.createCollider(
//       RAPIER.ColliderDesc.cuboid(10, 0.1, 10),
//       floor
//     )
//     const cube = world.createRigidBody(
//       RAPIER.RigidBodyDesc.dynamic()
//     )
//     cube.setTranslation({ x: 0, y: 1, z: 0 }, true)
//     world.createCollider(
//       RAPIER.ColliderDesc.cuboid(1, 1, 1),
//       cube
//     )
//   }
//   /**
//    * Shares network state with all connected clients.
//    * @param deltaTime time elapsed since last call.
//    */
//   networkLoopLogic(deltaTime: number): void {
//     let states = []
//     this.#networkedObjects.forEach((obj) => {
//       // Prepare data to be sent
//       const pos = obj.translation()
//       const rot = obj.rotation()
//       const state: TNetworkObjectState = {
//         userData: obj.userData,
//         translation: {
//           x: pos.x,
//           y: pos.y,
//           z: pos.z
//         },
//         rotation: {
//           x: rot.x,
//           y: rot.y,
//           z: rot.z,
//           w: rot.w
//         }
//       }
//       states.push(state)
//     })
//     const statesJson = JSON.stringify(states)
//     // Share network state with all connected clients
//     this.#clients.forEach((cli) => {
//       cli.send(statesJson)
//     })
//   }
//   /**
//    * Needs to be an arrow function to save 'this' reference to the class in function scope.
//    * Runs at 10Hz.
//    */
//   startNetworkLoop = () => {
//     const deltaTime = this.#networkClock.getDelta()
//     // measure time it took to run the loop and subtract it from delay until next frame
//     const tik = performance.now()
//     this.networkLoopLogic(deltaTime)
//     const tok = performance.now()
//     this.#networkLoopTimeoutId = setTimeout(this.startPhysicsLoop, 100 - (tok - tik))
//   }
//   derivedCleanup(): void {
//     clearTimeout(this.#networkLoopTimeoutId)
//     this.#clients.forEach((cli) => cli.close(3001, "game ended"))
//   }
//   physicsLoopLogic(deltaTime: number): void {
//   }
// }
class GameObjectNetworked extends GameObjectNetworkedBaseClient {
    cubeMesh;
    cubeUserData;
    async setup() {
        const { resources, createGeometry, createMaterial, createMesh } = useThree(this.threeResourceManager);
        const scene = resources.scene;
        const cubeGeom = createGeometry(() => new THREE.BoxGeometry(1, 1, 1));
        const cubeMat = createMaterial(() => new THREE.MeshBasicMaterial({ color: 0x1111bb }));
        const cubeMesh = createMesh(cubeGeom, cubeMat);
        this.cubeMesh = cubeMesh;
        scene.add(cubeMesh);
        const cube = this.world.createRigidBody(RAPIER.RigidBodyDesc.dynamic()
            .setCanSleep(false));
        cube.setTranslation({ x: 0, y: 3, z: 0 }, true);
        this.root = cube;
        this.world.createCollider(RAPIER.ColliderDesc.cuboid(.5, .5, .5)
            .setRestitution(2), cube);
    }
    physicsLoopLogic(deltaTime) { }
    drawLoopLogic(deltaTime) {
        const pos = this.translation();
        const rot = this.rotation();
        this.cubeMesh.position.set(pos.x, pos.y, pos.z);
        this.cubeMesh.rotation.setFromQuaternion(new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w));
    }
}
export class GameBaseMultiplayerClient extends GameBaseClient {
    #socket;
    #networkClock;
    #networkedObjects;
    #networkedSelf;
    #networkLoopTimeoutId;
    camera;
    constructor(socket) {
        super();
        this.#socket = socket;
        // Setup socket.
        this.#socket.onerror = (e) => {
            console.log("socket error");
        };
        this.#socket.onopen = (e) => {
            console.log("socket open");
        };
        this.#socket.onmessage = (e) => {
            // We will agree to use json encoding
            const msg = JSON.parse(e.data);
            console.log(msg);
        };
        this.#networkClock = new THREE.Clock(true);
    }
    async setup(domGameRoot) {
        const gravity = { x: 0, y: -10, z: 0 };
        this.physics = await Physics.setup(gravity);
        const world = this.physics.world;
        // setup three.js
        const { resources, createGeometry, createMaterial, createMesh } = useThree(this.threeResourceManager);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        domGameRoot.replaceChildren(renderer.domElement);
        resources.setRenderer(renderer);
        const scene = new THREE.Scene();
        resources.setScene(scene);
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight);
        this.camera.position.set(0, 8, -20);
        const controls = new OrbitControls(this.camera, renderer.domElement);
        resources.setControls(controls);
        // Setup level
        const floorGeom = createGeometry(() => new THREE.PlaneGeometry(20, 20));
        const floorMat = createMaterial(() => new THREE.MeshBasicMaterial({ color: 0x11bb11 }));
        const floorMesh = createMesh(floorGeom, floorMat);
        // floorMesh.translateY(.1)
        floorMesh.rotation.x = -Math.PI / 2;
        scene.add(floorMesh);
        const floor = world.createRigidBody(RAPIER.RigidBodyDesc.fixed());
        floor.setTranslation({ x: 0, y: -0.1, z: 0 }, true);
        world.createCollider(RAPIER.ColliderDesc.cuboid(10, 0.1, 10), floor);
        this.#networkedSelf = new GameObjectNetworked(world, this.threeResourceManager, { id: "", networked: true });
        await this.#networkedSelf.setup();
    }
    /**
     * Shares local state with the server.
     * @param deltaTime time elapsed since last call.
     */
    networkLoopLogic(deltaTime) {
        if (this.#socket.readyState !== WebSocket.OPEN) {
            return;
        }
        const pos = this.#networkedSelf.translation();
        const rot = this.#networkedSelf.rotation();
        const state = {
            userData: this.#networkedSelf.userData,
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
        };
        const jsonStrState = JSON.stringify(state);
        this.#socket.send(jsonStrState);
    }
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     * Runs at 10Hz.
     */
    startNetworkLoop = () => {
        const deltaTime = this.#networkClock.getDelta();
        // measure time it took to run the loop and subtract it from delay until next frame
        const tik = performance.now();
        this.networkLoopLogic(deltaTime);
        const tok = performance.now();
        this.#networkLoopTimeoutId = setTimeout(this.startNetworkLoop, 1000 - (tok - tik));
    };
    physicsLoopLogic(deltaTime) {
        this.physics.world.step();
    }
    drawLoopLogic(deltaTime) {
        this.#networkedSelf.drawLoopLogic(deltaTime);
        this.threeResourceManager.controls.update();
        this.threeResourceManager.renderer.render(this.threeResourceManager.scene, this.camera);
    }
    derivedCleanup() {
        clearTimeout(this.#networkLoopTimeoutId);
        this.#socket.close(3001, "exiting game");
    }
}
