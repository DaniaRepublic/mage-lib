import RAPIER from "@dimforge/rapier3d-compat";
import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { GameBaseClientDebug } from "../game-base.js";
import { GLTFLoaderWrapper } from "../three-helpers.js";
import { Player } from "../game-objects/player.js";
import { HUD } from "../game-objects/hud.js";
export declare class GameWithGLTFLoading extends GameBaseClientDebug {
    gltfLoaderWrapper: GLTFLoaderWrapper;
    playerCamera: THREE.PerspectiveCamera;
    controls: PointerLockControls;
    domGameRoot: HTMLElement;
    hud: HUD;
    player: Player;
    robots: [RAPIER.RigidBody, THREE.Group][];
    constructor();
    handleClick: (e: MouseEvent) => void;
    onWindowResize: () => void;
    setup(domGameRoot: HTMLElement): Promise<void>;
    customCleanup(): void;
    physicsLoopLogic(deltaTime: number): void;
    drawLoopLogic(deltaTime: number): void;
}
