import RAPIER from "@dimforge/rapier3d-compat";
import * as THREE from "three";
import { ThreeResourceManager } from "../three/resource-managing.js";
import { GameObjectPhysicalDrawableBase } from "../game-object-base.js";
export declare class Player extends GameObjectPhysicalDrawableBase {
    camera: THREE.PerspectiveCamera;
    characterBody: RAPIER.RigidBody;
    characterMesh: THREE.Mesh;
    constructor(world: RAPIER.World, threeResourceManager: ThreeResourceManager, camera: THREE.PerspectiveCamera);
    setup(): Promise<void>;
    drawLoopLogic(): void;
    jumpImpulse: number;
    speedCoefficient: number;
    runMultiplier: number;
    maxConsecutiveJumps: number;
    currConsecutiveJumps: number;
    consecutivePenaltyCoolDown: number;
    currConsecutivePenaltyCoolDown: number;
    jumpCoolDown: number;
    currJumpCoolDown: number;
    physicsLoopLogic(deltaTime: number): void;
}
