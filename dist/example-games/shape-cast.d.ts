import RAPIER from "@dimforge/rapier3d-compat";
import * as THREE from "three";
import { GameBaseClientDebug } from "../game-base.js";
export declare class ShapeCastGame extends GameBaseClientDebug {
    camera: THREE.PerspectiveCamera;
    cubeBody: RAPIER.RigidBody;
    cubeMesh: THREE.Mesh;
    constructor();
    setup(domGameRoot: HTMLElement): Promise<void>;
    jumpImpulse: number;
    jumpCoolDown: number;
    currJumpCoolDown: number;
    physicsLoopLogic(deltaTime: number): void;
    drawLoopLogic(deltaTime: number): void;
}
