import * as THREE from "three";
import { GameBaseClient } from "./game-base.js";
export declare class GameBaseMultiplayerClient extends GameBaseClient {
    #private;
    camera: THREE.PerspectiveCamera;
    constructor(socket: WebSocket);
    setup(domGameRoot: HTMLElement): Promise<void>;
    /**
     * Shares local state with the server.
     * @param deltaTime time elapsed since last call.
     */
    networkLoopLogic(deltaTime: number): void;
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     * Runs at 10Hz.
     */
    startNetworkLoop: () => void;
    physicsLoopLogic(deltaTime: number): void;
    drawLoopLogic(deltaTime: number): void;
    derivedCleanup(): void;
}
