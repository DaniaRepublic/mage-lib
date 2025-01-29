import RAPIER from "@dimforge/rapier3d-compat";
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { GameBaseClientDebug } from "../game-base.js";
import { KeyboardSingleton } from "../keyboard-context.jsx";
import { useThree } from "../three/resource-managing.js";
import { Physics } from "../rapier/physics.js";

export class ShapeCastGame extends GameBaseClientDebug {
  camera: THREE.PerspectiveCamera

  cubeBody: RAPIER.RigidBody
  cubeMesh: THREE.Mesh

  constructor() {
    super()
  }

  async setup(domGameRoot: HTMLElement) {
    const gravity = { x: 0, y: -10, z: 0 }
    this.physics = await Physics.setup(gravity)

    // setup rapier-js
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
    this.camera.position.set(0, 5, -10)
    const controls = new OrbitControls(this.camera, renderer.domElement)
    resources.setControls(controls)

    // create a scene
    const floorGeom = createGeometry(() => new THREE.PlaneGeometry(10, 10))
    const floorMat = createMaterial(() => new THREE.MeshBasicMaterial({ color: 0x11bb11 }))
    const floorMesh = createMesh(floorGeom, floorMat)
    // floorMesh.translateY(.1)
    floorMesh.rotation.x = -Math.PI / 2
    scene.add(floorMesh)

    const floorBody = world.createRigidBody(
      RAPIER.RigidBodyDesc.fixed()
    )
    floorBody.setTranslation(new RAPIER.Vector3(0, -0.1, 0), true)
    world.createCollider(
      RAPIER.ColliderDesc.cuboid(5, .1, 5),
      floorBody
    )

    // create dynamic cube to test physics sim
    const cubeGeom = createGeometry(() => new THREE.BoxGeometry(1, 1, 1))
    const cubeMat = createMaterial(() => new THREE.MeshBasicMaterial({ color: 0x1111bb }))
    const cubeMesh = createMesh(cubeGeom, cubeMat)
    this.cubeMesh = cubeMesh
    scene.add(cubeMesh)

    const cubeBody = world.createRigidBody(
      RAPIER.RigidBodyDesc.dynamic().lockRotations()
    )
    cubeBody.setTranslation({ x: 0, y: 2, z: 0 }, true)
    this.cubeBody = cubeBody

    world.createCollider(
      RAPIER.ColliderDesc.cuboid(.5, .5, .5)
        .setMass(1),
      cubeBody
    )
  }

  jumpImpulse: number = 8

  jumpCoolDown: number = 0.3 // time in sec
  currJumpCoolDown: number = 0
  physicsLoopLogic(deltaTime: number): void {
    const { space } = KeyboardSingleton.getKeyboardStateObj()

    if (space && this.currJumpCoolDown === 0) {
      this.currJumpCoolDown = this.jumpCoolDown

      // Get player's collider
      const collider = this.cubeBody.collider(0)
      const position = this.cubeBody.translation()
      // Check for intersections slightly below the player
      const checkPosition = new RAPIER.Vector3(
        position.x,
        position.y - 0.03, // Small offset downward
        position.z
      )
      const rotation = this.cubeBody.rotation()

      // Use player's own collider for intersection test
      const intersecting = this.physics.world.intersectionWithShape(
        checkPosition,
        rotation,
        collider.shape,
        null,
        null,
        collider,
        this.cubeBody
      )

      if (intersecting != null) {
        this.cubeBody.applyImpulse({ x: 0, y: this.jumpImpulse, z: 0 }, true)
      }
    }

    this.currJumpCoolDown = Math.max(0, this.currJumpCoolDown - deltaTime)

    this.physics.world.step()
  }

  drawLoopLogic(deltaTime: number): void {
    const pos = this.cubeBody.translation()
    const rot = this.cubeBody.rotation()

    this.cubeMesh.position.set(pos.x, pos.y, pos.z)
    this.cubeMesh.rotation.setFromQuaternion(new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w));

    (this.threeResourceManager.controls as OrbitControls).update()

    this.threeResourceManager.renderer.render(this.threeResourceManager.scene, this.camera)
  }
}