import RAPIER from "@dimforge/rapier3d-compat";
/**
 * Handles physics simulation.
 */
export class Physics {
    gravity;
    world;
    /**
     * Use .setup method instead of constructor. Avoid using constructor directly.
     * @param gravity TGravity
     */
    constructor(gravity) {
        this.gravity = gravity;
        this.world = new RAPIER.World(gravity);
    }
    /**
     * Initializes physics and returns a Game instance.
     * @param gravity TGravity
     * @returns Game
     */
    static async setup(gravity) {
        await RAPIER.init();
        return new Physics(gravity);
    }
    free() {
        this.world.free();
    }
}
