import * as THREE from "three";
import { ThreeResourceManager } from "./three/resource-managing.js";
export class GameBase {
    #physics;
    #physicsClock;
    #physicsLoopTimeoutId;
    get physics() {
        return this.#physics;
    }
    set physics(physics) {
        this.#physics = physics;
    }
    get physicsClock() {
        return this.#physicsClock;
    }
    get physicsLoopTimeoutId() {
        return this.#physicsLoopTimeoutId;
    }
    constructor() {
        this.#physicsClock = new THREE.Clock(true);
    }
    startPhysicsLoop = () => {
        const deltaTime = this.#physicsClock.getDelta();
        // measure time it took to run the loop and subtract it from delay until next frame
        const tik = performance.now();
        this.physicsLoopLogic(deltaTime);
        const tok = performance.now();
        this.#physicsLoopTimeoutId = setTimeout(this.startPhysicsLoop, 16.67 - (tok - tik));
    };
    customCleanup() { }
    derivedCleanup() { }
    cleanup() {
        clearTimeout(this.#physicsLoopTimeoutId);
        this.physics.free();
        this.customCleanup();
    }
}
/**
 * All game related.
 * Physics and drawing loops are separated.
 * Physics loop uses setTimeout to attempt 60fps stable.
 * Draw loop uses requestAnimationFrame to have the best possible rendering given client conditions.
 */
export class GameBaseClient {
    #physics;
    #physicsClock;
    #threeResourceManager;
    #drawClock;
    #drawLoopAnimationFrameId;
    #physicsLoopTimeoutId;
    get physics() {
        return this.#physics;
    }
    set physics(physics) {
        this.#physics = physics;
    }
    get threeResourceManager() {
        return this.#threeResourceManager;
    }
    get drawClock() {
        return this.#drawClock;
    }
    get physicsClock() {
        return this.#physicsClock;
    }
    get drawLoopAnimationFrameId() {
        return this.#drawLoopAnimationFrameId;
    }
    get physicsLoopTimeoutId() {
        return this.#physicsLoopTimeoutId;
    }
    constructor() {
        this.#threeResourceManager = new ThreeResourceManager();
        this.#drawClock = new THREE.Clock(true);
        this.#physicsClock = new THREE.Clock(true);
    }
    startDrawLoop = () => {
        const deltaTime = this.#drawClock.getDelta();
        this.drawLoopLogic(deltaTime);
        this.#drawLoopAnimationFrameId = requestAnimationFrame(this.startDrawLoop);
    };
    startPhysicsLoop = () => {
        const deltaTime = this.#physicsClock.getDelta();
        // measure time it took to run the loop and subtract it from delay until next frame
        const tik = performance.now();
        this.physicsLoopLogic(deltaTime);
        const tok = performance.now();
        this.#physicsLoopTimeoutId = setTimeout(this.startPhysicsLoop, 16.67 - (tok - tik));
    };
    customCleanup() { }
    derivedCleanup() { }
    cleanup() {
        clearTimeout(this.#physicsLoopTimeoutId);
        cancelAnimationFrame(this.#drawLoopAnimationFrameId);
        this.physics.free();
        this.threeResourceManager.dispose();
        this.derivedCleanup();
        this.customCleanup();
    }
}
/**
 * Version of GameBaseClient with debugs.
 */
export class GameBaseClientDebug extends GameBaseClient {
    #physicsLoopTimeoutId;
    #drawLoopAnimationFrameId;
    drawTimer = [0, 0];
    physicsTimer = [0, 0];
    startDrawLoop = () => {
        const deltaTime = this.drawClock.getDelta();
        const tik = performance.now();
        this.drawLoopLogic(deltaTime);
        const tok = performance.now();
        this.drawTimer[1] += tok - tik;
        if (++this.drawTimer[0] >= 60) {
            console.log("drawLoopLogic:");
            console.log(`\tdeltaTime ${deltaTime * 1000} ms`);
            console.log(`\ttook ${this.drawTimer[1] / 60.0} ms to run on average.`);
            this.drawTimer = [0, 0];
        }
        this.#drawLoopAnimationFrameId = requestAnimationFrame(this.startDrawLoop);
    };
    startPhysicsLoop = () => {
        const deltaTime = this.physicsClock.getDelta();
        // measure time it took to run the loop and subtract it from delay until next frame
        const tik = performance.now();
        this.physicsLoopLogic(deltaTime);
        const tok = performance.now();
        this.physicsTimer[1] += tok - tik;
        if (++this.physicsTimer[0] >= 60) {
            console.log("physicsLoopLogic:");
            console.log(`\tdeltaTime ${deltaTime * 1000} ms`);
            console.log(`\ttook ${this.physicsTimer[1] / 60.0} ms to run on average.`);
            this.physicsTimer = [0, 0];
        }
        this.#physicsLoopTimeoutId = setTimeout(this.startPhysicsLoop, 16.67 - (tok - tik));
    };
    cleanup() {
        clearTimeout(this.#physicsLoopTimeoutId);
        cancelAnimationFrame(this.#drawLoopAnimationFrameId);
        this.physics.free();
        this.threeResourceManager.dispose();
        this.customCleanup();
    }
}
