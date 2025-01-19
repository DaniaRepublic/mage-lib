import * as THREE from "three";
import { GameObjectDrawableBase } from "../game-object-base.js";
import { ThreeResourceManager } from "../three/resource-managing.js";
export declare class HUD extends GameObjectDrawableBase {
    hudScene: THREE.Scene;
    hudCamera: THREE.OrthographicCamera;
    jumpSprite: THREE.Sprite;
    constructor(threeResourceManager: ThreeResourceManager);
    setup(): Promise<void>;
    createTextTexture(text: string): THREE.CanvasTexture;
    updateJumps(jumps: number): void;
    drawLoopLogic(deltaTime: number): void;
    physicsLoopLogic(deltaTime: number): void;
    resize(): void;
}
