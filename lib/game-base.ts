import * as THREE from "three"

import { Physics } from "./rapier/physics.js";
import { ThreeResourceManager } from "./three/resource-managing.js";

export interface IServerSetup {
  setup(): Promise<void>
}

export interface IGameBase {
  physics: Physics
  physicsClock: THREE.Clock
  physicsLoopTimeoutId: number | NodeJS.Timeout

  /**
   * This function for physics loop needs to be implemented for every game.
   * @param deltaTime time delta since last startLoop
   */
  physicsLoopLogic(deltaTime: number): void

  /**
   * Needs to be an arrow function to save 'this' reference to the class in function scope.
   */
  startPhysicsLoop: () => void

  /**
   * Can be defined to run cleanup logic as a last function in the cleanup method.
   */
  customCleanup(): void

  /**
   * Can be defined to run cleanup logic as a second to last function in the cleanup method.
   */
  derivedCleanup(): void

  /**
   * ### Purpose:
   * - Stop draw and physics loops.
   * - Release all memory used by rendering and physics libs.
   * - Maybe something else.
   */
  cleanup(): void
}

export abstract class GameBase implements IGameBase, IServerSetup {
  #physics: Physics
  #physicsClock: THREE.Clock
  #physicsLoopTimeoutId: number | NodeJS.Timeout

  get physics() {
    return this.#physics
  }

  set physics(physics: Physics) {
    this.#physics = physics
  }

  get physicsClock() {
    return this.#physicsClock
  }

  get physicsLoopTimeoutId() {
    return this.#physicsLoopTimeoutId
  }

  constructor() {
    this.#physicsClock = new THREE.Clock(true)
  }

  abstract setup(): Promise<void>

  abstract physicsLoopLogic(deltaTime: number): void

  startPhysicsLoop = () => {
    const deltaTime = this.#physicsClock.getDelta()

    // measure time it took to run the loop and subtract it from delay until next frame
    const tik = performance.now()
    this.physicsLoopLogic(deltaTime)
    const tok = performance.now()

    this.#physicsLoopTimeoutId = setTimeout(this.startPhysicsLoop, 16.67 - (tok - tik))
  }

  customCleanup() { }

  derivedCleanup() { }

  cleanup() {
    clearTimeout(this.#physicsLoopTimeoutId)
    this.physics.free()
    this.customCleanup()
  }
}

export interface IClientSetup {
  /**
   * 
   * @param domGameRoot 
   * An html element that the game is going to be mounted on.
   * Example for reference to: \<div id="game-root"\>\</div\>. 
   * const domGameRoot = document.getElementById("game-root")
   */
  setup(domGameRoot: HTMLElement): Promise<void>
}

/**
 * Adds draw functionality to IGameBase
 */
export interface IGameBaseClient extends IGameBase {
  threeResourceManager: ThreeResourceManager
  drawClock: THREE.Clock
  drawLoopAnimationFrameId: number

  drawLoopLogic(deltaTime: number): void

  /**
   * Needs to be an arrow function to save 'this' reference to the class in function scope.
   */
  startDrawLoop: () => void
}

/**
 * All game related.
 * Physics and drawing loops are separated.
 * Physics loop uses setTimeout to attempt 60fps stable.
 * Draw loop uses requestAnimationFrame to have the best possible rendering given client conditions.
 */
export abstract class GameBaseClient implements IGameBaseClient, IClientSetup {
  #physics: Physics
  #physicsClock: THREE.Clock
  #threeResourceManager: ThreeResourceManager
  #drawClock: THREE.Clock
  #drawLoopAnimationFrameId: number
  #physicsLoopTimeoutId: number | NodeJS.Timeout

  get physics() {
    return this.#physics
  }

  set physics(physics: Physics) {
    this.#physics = physics
  }

  get threeResourceManager() {
    return this.#threeResourceManager
  }

  get drawClock() {
    return this.#drawClock
  }

  get physicsClock() {
    return this.#physicsClock
  }

  get drawLoopAnimationFrameId() {
    return this.#drawLoopAnimationFrameId
  }

  get physicsLoopTimeoutId() {
    return this.#physicsLoopTimeoutId
  }

  constructor() {
    this.#threeResourceManager = new ThreeResourceManager()
    this.#drawClock = new THREE.Clock(true)
    this.#physicsClock = new THREE.Clock(true)
  }

  abstract setup(domGameRoot: HTMLElement): Promise<void>

  abstract physicsLoopLogic(deltaTime: number): void

  abstract drawLoopLogic(deltaTime: number): void

  startDrawLoop = () => {
    const deltaTime = this.#drawClock.getDelta()
    this.drawLoopLogic(deltaTime)
    this.#drawLoopAnimationFrameId = requestAnimationFrame(this.startDrawLoop)
  }

  startPhysicsLoop = () => {
    const deltaTime = this.#physicsClock.getDelta()

    // measure time it took to run the loop and subtract it from delay until next frame
    const tik = performance.now()
    this.physicsLoopLogic(deltaTime)
    const tok = performance.now()

    this.#physicsLoopTimeoutId = setTimeout(this.startPhysicsLoop, 16.67 - (tok - tik))
  }

  customCleanup() { }

  derivedCleanup() { }

  cleanup() {
    clearTimeout(this.#physicsLoopTimeoutId)
    cancelAnimationFrame(this.#drawLoopAnimationFrameId)
    this.physics.free()
    this.threeResourceManager.dispose()
    this.derivedCleanup()
    this.customCleanup()
  }
}

/**
 * Version of GameBaseClient with debugs.
 */
export abstract class GameBaseClientDebug extends GameBaseClient {
  #physicsLoopTimeoutId: number | NodeJS.Timeout
  #drawLoopAnimationFrameId: number

  drawTimer: [number, number] = [0, 0]
  physicsTimer: [number, number] = [0, 0]

  startDrawLoop = () => {
    const deltaTime = this.drawClock.getDelta()

    const tik = performance.now()
    this.drawLoopLogic(deltaTime)
    const tok = performance.now()

    this.drawTimer[1] += tok - tik
    if (++this.drawTimer[0] >= 60) {
      console.log("drawLoopLogic:")
      console.log(`\tdeltaTime ${deltaTime * 1000} ms`)
      console.log(`\ttook ${this.drawTimer[1] / 60.0} ms to run on average.`);
      this.drawTimer = [0, 0]
    }

    this.#drawLoopAnimationFrameId = requestAnimationFrame(this.startDrawLoop)
  }

  startPhysicsLoop = () => {
    const deltaTime = this.physicsClock.getDelta()

    // measure time it took to run the loop and subtract it from delay until next frame
    const tik = performance.now()
    this.physicsLoopLogic(deltaTime)
    const tok = performance.now()

    this.physicsTimer[1] += tok - tik
    if (++this.physicsTimer[0] >= 60) {
      console.log("physicsLoopLogic:")
      console.log(`\tdeltaTime ${deltaTime * 1000} ms`)
      console.log(`\ttook ${this.physicsTimer[1] / 60.0} ms to run on average.`);
      this.physicsTimer = [0, 0]
    }

    this.#physicsLoopTimeoutId = setTimeout(this.startPhysicsLoop, 16.67 - (tok - tik))
  }

  cleanup() {
    clearTimeout(this.#physicsLoopTimeoutId)
    cancelAnimationFrame(this.#drawLoopAnimationFrameId)
    this.physics.free()
    this.threeResourceManager.dispose()
    this.customCleanup()
  }
}
