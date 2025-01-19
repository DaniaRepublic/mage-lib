import RAPIER from "@dimforge/rapier3d-compat";
type TGravity = {
    x: number;
    y: number;
    z: number;
};
/**
 * Handles physics simulation.
 */
export declare class Physics {
    gravity: TGravity;
    world: RAPIER.World;
    /**
     * Use .setup method instead of constructor. Avoid using constructor directly.
     * @param gravity TGravity
     */
    constructor(gravity: TGravity);
    /**
     * Initializes physics and returns a Game instance.
     * @param gravity TGravity
     * @returns Game
     */
    static setup(gravity: TGravity): Promise<Physics>;
    free(): void;
}
export {};
