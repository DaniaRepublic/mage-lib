import * as THREE from "three";
import { Physics } from "./rapier/physics.js";
import { ThreeResourceManager } from "./three/resource-managing.js";
export declare const PHYSICS_UPDATE_INTERVAL = 16.67;
export interface IServerSetup {
    setup(): Promise<void>;
}
export interface IGameBase {
    physics: Physics;
    physicsClock: THREE.Clock;
    physicsLoopTimeoutId: number | NodeJS.Timeout;
    physicsLoopTook: number;
    /**
     * This function for physics loop needs to be implemented for every game.
     * @param deltaTime seconds passed since last startLoop
     */
    physicsLoopLogic(deltaTime: number): void;
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     */
    startPhysicsLoop: () => void;
    /**
     * Can be defined to run cleanup logic as a last function in the cleanup method.
     */
    customCleanup(): void;
    /**
     * Can be defined to run cleanup logic as a second to last function in the cleanup method.
     */
    derivedCleanup(): void;
    /**
     * ### Purpose:
     * - Stop draw and physics loops.
     * - Release all memory used by rendering and physics libs.
     * - Maybe something else.
     */
    cleanup(): void;
}
export declare abstract class GameBase implements IGameBase, IServerSetup {
    #private;
    get physics(): Physics;
    set physics(physics: Physics);
    get physicsClock(): THREE.Clock;
    get physicsLoopTimeoutId(): number | NodeJS.Timeout;
    get physicsLoopTook(): number;
    constructor();
    abstract setup(): Promise<void>;
    abstract physicsLoopLogic(deltaTime: number): void;
    startPhysicsLoop: () => void;
    customCleanup(): void;
    derivedCleanup(): void;
    cleanup(): void;
}
export interface IClientSetup {
    /**
     *
     * @param domGameRoot
     * An html element that the game is going to be mounted on.
     * Example for reference to: \<div id="game-root"\>\</div\>.
     * const domGameRoot = document.getElementById("game-root")
     */
    setup(domGameRoot: HTMLElement): Promise<void>;
}
/**
 * Adds draw functionality to IGameBase
 */
export interface IGameBaseClient extends IGameBase {
    threeResourceManager: ThreeResourceManager;
    drawClock: THREE.Clock;
    drawLoopAnimationFrameId: number;
    /**
     * This function for draw loop needs to be implemented for every game.
     * @param deltaTime seconds passed since last startLoop
     */
    drawLoopLogic(deltaTime: number): void;
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     */
    startDrawLoop: () => void;
}
/**
 * All game related.
 * Physics and drawing loops are separated.
 * Physics loop uses setTimeout to attempt 60fps stable.
 * Draw loop uses requestAnimationFrame to have the best possible rendering given client conditions.
 */
export declare abstract class GameBaseClient implements IGameBaseClient, IClientSetup {
    #private;
    get physics(): Physics;
    set physics(physics: Physics);
    get physicsLoopTook(): number;
    get threeResourceManager(): ThreeResourceManager;
    get drawClock(): THREE.Clock;
    get physicsClock(): THREE.Clock;
    get drawLoopAnimationFrameId(): number;
    get physicsLoopTimeoutId(): number | NodeJS.Timeout;
    constructor();
    abstract setup(domGameRoot: HTMLElement): Promise<void>;
    abstract physicsLoopLogic(deltaTime: number): void;
    abstract drawLoopLogic(deltaTime: number): void;
    startDrawLoop: () => void;
    startPhysicsLoop: () => void;
    customCleanup(): void;
    derivedCleanup(): void;
    cleanup(): void;
}
/**
 * Version of GameBaseClient with debugs.
 */
export declare abstract class GameBaseClientDebug extends GameBaseClient {
    #private;
    drawTimer: [number, number];
    physicsTimer: [number, number];
    startDrawLoop: () => void;
    startPhysicsLoop: () => void;
    cleanup(): void;
}
