import RAPIER from "@dimforge/rapier3d-compat";
import * as THREE from "three";
import { ThreeResourceManager } from "../three/resource-managing.js";
import { GameObjectNetworkedBase, GameObjectNetworkedBaseClient, TUserData } from "../game-object-base";
import { TNetworkedPlayerState } from "../game-networked-player.js";
/**
 * It will apply input device actions sent from client to this class's RigidBody root
 */
export declare class NetworkedPlayerServer extends GameObjectNetworkedBase {
    #private;
    setup(): Promise<void>;
    shiftNetworkedPlayerStates(): TNetworkedPlayerState;
    addNetworkedPlayerStates(networkPlayerStates: TNetworkedPlayerState[]): void;
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
export declare class NetworkedPlayerClient extends GameObjectNetworkedBaseClient {
    #private;
    camera: THREE.PerspectiveCamera;
    constructor(world: RAPIER.World, threeResourceManager: ThreeResourceManager, userData: TUserData, camera: THREE.PerspectiveCamera);
    setup(): Promise<void>;
    get networkedPlayerStates(): TNetworkedPlayerState[];
    /** Empties the array. */
    emptyNetworkedPlayerStates(): void;
    physicsLoopLogic(deltaTime: number): void;
    drawLoopLogic(deltaTime: number): void;
}
