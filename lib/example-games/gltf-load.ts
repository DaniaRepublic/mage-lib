import RAPIER from "@dimforge/rapier3d-compat"
import * as THREE from "three"
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js"

import { useThree } from "../three/resource-managing.js"
import { groundLayer, objectLayer } from "../rapier/collision-layers.js"
import { GameBaseClientDebug } from "../game-base.js"
import { GLTFLoaderWrapper, pointsFromBBox } from "../three-helpers.js"
import { Physics } from "../rapier/physics.js"
import { Player } from "../game-objects/player.js"
import { HUD } from "../game-objects/hud.js"


export class GameWithGLTFLoading extends GameBaseClientDebug {
  gltfLoaderWrapper: GLTFLoaderWrapper

  playerCamera: THREE.PerspectiveCamera
  controls: PointerLockControls
  domGameRoot: HTMLElement
  hud: HUD

  player: Player
  robots: [RAPIER.RigidBody, THREE.Group][] = []

  constructor() {
    super()
    this.gltfLoaderWrapper = new GLTFLoaderWrapper("http://localhost:8000/public/")
  }

  handleClick = (e: MouseEvent) => {
    this.controls.lock()
  }

  onWindowResize = () => {
    this.playerCamera.aspect = window.innerWidth / window.innerHeight
    this.playerCamera.updateProjectionMatrix()

    this.threeResourceManager.renderer.setSize(window.innerWidth, window.innerHeight)

    this.hud.resize()
  }

  async setup(domGameRoot: HTMLElement) {
    this.domGameRoot = domGameRoot

    const gravity = { x: 0, y: -10, z: 0 }
    this.physics = await Physics.setup(gravity)

    const world = this.physics.world

    const { resources, createGeometry, createMaterial, createMesh, createLight, createGroup } = useThree(this.threeResourceManager)

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x000000, 1, 100)
    resources.setScene(scene)

    const renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.autoClear = false // To allow render overlay on top of sprited sphere
    resources.setRenderer(renderer)
    this.domGameRoot.replaceChildren(renderer.domElement)

    // add controls
    this.playerCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.controls = new PointerLockControls(this.playerCamera, this.domGameRoot)
    resources.setControls(this.controls)
    scene.add(this.controls.object)
    // handle mouse controls
    this.domGameRoot.addEventListener("click", this.handleClick)

    // create HUD
    this.hud = new HUD(this.threeResourceManager)
    await this.hud.setup()

    // handle window resize
    window.addEventListener("resize", this.onWindowResize)

    // Create player
    this.player = new Player(world, this.threeResourceManager, this.playerCamera)
    await this.player.setup()

    // add lights
    const ambientLight = createLight(() => new THREE.AmbientLight(0xffffff, 3))
    ambientLight.castShadow = true
    scene.add(ambientLight)

    const directionalLight = createLight(() => new THREE.DirectionalLight(0xffffff, 2))
    directionalLight.castShadow = true
    scene.add(directionalLight)

    const pointLight = createLight(() => new THREE.SpotLight(0xffffff, 5, 20, Math.PI / 4, 0, 0.5))
    pointLight.castShadow = true
    pointLight.translateY(4)
    pointLight.translateZ(5)
    scene.add(pointLight)

    const pointLight2 = createLight(() => new THREE.SpotLight(0xffffff, 5, 20, Math.PI / 8, 0, 0.5))
    pointLight2.castShadow = true
    pointLight2.translateY(4)
    scene.add(pointLight2)

    // Ground
    const groundGeometry = createGeometry(() => new THREE.PlaneGeometry(20, 20))
    const groundMaterial = createMaterial(() => new THREE.MeshStandardMaterial({ color: 0x303030 }))
    const ground = createMesh(groundGeometry, groundMaterial)
    ground.position.set(0, 0.1, 0)
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    scene.add(ground)

    const groundBodyDesc = RAPIER.RigidBodyDesc.fixed()
    const groundBody = world.createRigidBody(groundBodyDesc)

    const groundDesc = RAPIER.ColliderDesc.cuboid(10, 0.1, 10)
      .setCollisionGroups(groundLayer)
    world.createCollider(groundDesc, groundBody)

    // Wall
    const wallGeometry = createGeometry(() => new THREE.BoxGeometry(0.2, 8, 4))
    const wallMaterial = createMaterial(() => new THREE.MeshStandardMaterial({ color: 0x008888 }))
    const wall = createMesh(wallGeometry, wallMaterial)
    wall.position.set(2, 4, -8)
    wall.rotation.y = -Math.PI / 2
    wall.receiveShadow = true
    scene.add(wall)

    const wallBodyDesc = RAPIER.RigidBodyDesc.fixed()
    const wallBody = world.createRigidBody(wallBodyDesc)
    wallBody.setTranslation(wall.position, true)
    wallBody.setRotation(wall.quaternion, true)

    const wallDesc = RAPIER.ColliderDesc.cuboid(0.1, 4, 2)
      .setCollisionGroups(groundLayer)
    world.createCollider(wallDesc, wallBody)

    // add glft loaded scenes
    function getRandomSquarePosition(boundX: number, boundY: number, boundZ: number) {
      return [Math.random() * boundX * 2 - boundX, Math.random() * boundY + 1, Math.random() * boundZ * 2 - boundZ]
    }

    for (let i = 0; i < 5; i++) {
      const gltf = await this.gltfLoaderWrapper.getGLTF("robot.glb")
      const position = getRandomSquarePosition(9, 2, 9)
      const loadedScene = createGroup(() => gltf.scene)
      loadedScene.traverse(object => {
        if (object instanceof THREE.Mesh) {
          object.rotateY(Math.PI)
        }
      })
      scene.add(loadedScene)

      // Create and add bounding box
      const bbox = new THREE.Box3().setFromObject(loadedScene)
      const points = pointsFromBBox(bbox)

      const bodyDesc = RAPIER.RigidBodyDesc.dynamic()
        .setTranslation(position[0], position[1], position[2])
      const body = world.createRigidBody(bodyDesc)

      const colliderDesc = RAPIER.ColliderDesc.convexHull(new Float32Array(points))
        .setMass(1)
        .setCollisionGroups(objectLayer)
      world.createCollider(colliderDesc, body)

      this.robots.push([body, loadedScene])
    }
  }

  customCleanup() {
    this.domGameRoot.removeEventListener("click", this.handleClick)
    window.removeEventListener("resize", this.onWindowResize)
  }

  physicsLoopLogic(deltaTime: number): void {
    this.player.physicsLoopLogic(deltaTime)
    this.physics.world.step()
  }

  drawLoopLogic(deltaTime: number) {
    this.player.drawLoopLogic()

    this.robots.forEach(([body, loadedScene]) => {
      const bodyPos = body.translation()
      const bodyRot = body.rotation()

      loadedScene.position.set(bodyPos.x, bodyPos.y, bodyPos.z)
      loadedScene.rotation.setFromQuaternion(new THREE.Quaternion(bodyRot.x, bodyRot.y, bodyRot.z, bodyRot.w))
    })

    // update hud
    this.hud.updateJumps(Math.max(0, this.player.maxConsecutiveJumps - this.player.currConsecutiveJumps))

    // Render the main scene first
    this.threeResourceManager.renderer.clear()
    this.threeResourceManager.renderer.render(this.threeResourceManager.scene, this.playerCamera)

    // Then on top of it render the HUD scene
    this.hud.drawLoopLogic(deltaTime)
  }
}
