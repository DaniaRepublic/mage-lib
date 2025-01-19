import RAPIER from "@dimforge/rapier3d-compat"
import * as THREE from "three"

import { ThreeResourceManager, useThree } from "../three/resource-managing.js"
import { playerLayer } from "../rapier/collision-layers.js"
import { KeyboardSingleton } from "../keyboard-context.jsx"
import { GameObjectPhysicalDrawableBase } from "../game-object-base.js"

export class Player extends GameObjectPhysicalDrawableBase {
  camera: THREE.PerspectiveCamera

  characterBody: RAPIER.RigidBody
  characterMesh: THREE.Mesh

  constructor(world: RAPIER.World, threeResourceManager: ThreeResourceManager, camera: THREE.PerspectiveCamera) {
    super(world, threeResourceManager)
    this.camera = camera
  }

  async setup() {
    const { resources, createGeometry, createMaterial, createMesh } = useThree(this.threeResourceManager)

    // create character
    this.characterBody = this.world.createRigidBody(
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
      this.characterBody
    )

    const characterGeom = createGeometry(() => new THREE.CapsuleGeometry(.4, 1))
    const characterMat = createMaterial(() => new THREE.MeshStandardMaterial({ color: 0xaaaa33 }))
    this.characterMesh = createMesh(characterGeom, characterMat)
    this.characterMesh.add(this.camera)
    this.camera.translateY(0.35)
    resources.scene.add(this.characterMesh)
  }

  drawLoopLogic() {
    const pos = this.characterBody.translation()
    const rot = this.characterBody.rotation()
    this.characterMesh.position.set(pos.x, pos.y, pos.z)
    this.characterMesh.rotation.setFromQuaternion(new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w))
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
    const { space, keyw, keys, keya, keyd, shiftleft, menuOpen } = KeyboardSingleton.getKeyboardState()

    // ? handle game inputs if the player is not in menu
    if (!menuOpen) {
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
      moveDirection.applyEuler(this.camera.rotation)
      // preserve gravity and jump effects
      moveDirection.setY(this.characterBody.linvel().y)
      // cap vertical velocity to prevent indefinite acceleration
      const cappedY = Math.abs(moveDirection.y) > 100 ? Math.sign(moveDirection.y) * 100 : moveDirection.y
      moveDirection.setY(cappedY)

      // apply linvel to character
      this.characterBody.setLinvel(moveDirection, true)

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
          const collider = this.characterBody.collider(0)
          const position = this.characterBody.translation()
          // Check for intersections slightly below the player
          const checkPosition = new RAPIER.Vector3(
            position.x,
            position.y - 0.03, // Small offset downward
            position.z
          )
          const rotation = this.characterBody.rotation()

          // Use player"s own collider for intersection test
          const intersecting = this.world.intersectionWithShape(
            checkPosition,
            rotation,
            collider.shape,
            null,
            null,
            collider,
            this.characterBody
          )

          if (intersecting != null) {
            this.characterBody.applyImpulse({ x: 0, y: this.jumpImpulse, z: 0 }, true)
          }
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