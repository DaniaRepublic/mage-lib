import * as THREE from "three"
import { GameObjectDrawableBase } from "../game-object-base.js"
import { ThreeResourceManager } from "../three/resource-managing.js"

export class HUD extends GameObjectDrawableBase {
  hudScene: THREE.Scene
  hudCamera: THREE.OrthographicCamera
  jumpSprite: THREE.Sprite

  constructor(threeResourceManager: ThreeResourceManager) {
    super(threeResourceManager)
  }

  async setup(): Promise<void> {
    // Create a separate scene for HUD
    this.hudScene = new THREE.Scene()

    // Create an orthographic camera for HUD
    this.hudCamera = new THREE.OrthographicCamera(
      -window.innerWidth / 2, window.innerWidth / 2, window.innerHeight / 2, -window.innerHeight / 2, 1, 10
    )
    this.hudCamera.position.z = 10

    // Create HUD elements
    // Create a sprite for jump icon
    const jumpIconTexture = this.createTextTexture("🦘".repeat(3))
    const jumpMaterial = new THREE.SpriteMaterial({ map: jumpIconTexture })
    this.jumpSprite = new THREE.Sprite(jumpMaterial)
    this.jumpSprite.scale.set(150, 50, 1)
    this.jumpSprite.position.set(-window.innerWidth / 2 + 140, window.innerHeight / 2 - 40, 1)
    this.hudScene.add(this.jumpSprite)
  }

  createTextTexture(text: string) {
    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d")
    canvas.width = 384
    canvas.height = 128

    // Set text properties
    context.font = "Bold 72px Arial"
    context.fillStyle = "white"
    context.textAlign = "center"
    context.textBaseline = 'middle'
    context.fillText(text, canvas.width / 2, canvas.height / 2)

    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }

  updateJumps(jumps: number) {
    const newTexture = this.createTextTexture("🦘".repeat(jumps))
    this.jumpSprite.material.map = newTexture
    this.jumpSprite.material.needsUpdate = true
  }

  drawLoopLogic(deltaTime: number): void {
    this.threeResourceManager.renderer.clearDepth()
    this.threeResourceManager.renderer.render(this.hudScene, this.hudCamera)
  }

  physicsLoopLogic(deltaTime: number): void { }

  // Call this when window is resized
  resize() {
    this.hudCamera.left = -window.innerWidth / 2
    this.hudCamera.right = window.innerWidth / 2
    this.hudCamera.top = window.innerHeight / 2
    this.hudCamera.bottom = -window.innerHeight / 2
    this.hudCamera.updateProjectionMatrix()

    // Update HUD element positions
    this.jumpSprite.position.set(-window.innerWidth / 2 + 140, window.innerHeight / 2 - 40, 1)
  }
}