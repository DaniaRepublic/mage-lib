import RAPIER from "@dimforge/rapier3d-compat";

type TGravity = { x: number, y: number, z: number }

/**
 * Handles physics simulation.
 */
export class Physics {
  gravity: TGravity
  world: RAPIER.World

  /**
   * Use .setup method instead of constructor. Avoid using constructor directly.
   * @param gravity TGravity
   */
  constructor(gravity: TGravity) {
    this.gravity = gravity
    this.world = new RAPIER.World(gravity)
  }

  /**
   * Initializes physics and returns a Game instance.
   * @param gravity TGravity
   * @returns Game
   */
  static async setup(gravity: TGravity) {
    await RAPIER.init()
    return new Physics(gravity)
  }

  free() {
    this.world.free()
  }
}