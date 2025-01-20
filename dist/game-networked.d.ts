import * as THREE from "three";
import { GameBase, GameBaseClient } from "./game-base.js";
import { TUserData } from "./game-object-base.js";
export type TNetworkObjectState = {
    userData: TUserData;
    translation: {
        x: number;
        y: number;
        z: number;
    };
    rotation: {
        x: number;
        y: number;
        z: number;
        w: number;
    };
};
export declare class GameBaseMultiplayerServer extends GameBase {
    #private;
    constructor(clients: WebSocket[]);
    addClient(socket: WebSocket): void;
    setup(): Promise<void>;
    /**
     * Shares network state with all connected clients.
     * @param deltaTime time elapsed since last call.
     */
    networkLoopLogic(deltaTime: number): void;
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     * Runs at 10Hz.
     */
    startNetworkLoop: () => void;
    physicsLoopLogic(deltaTime: number): void;
    derivedCleanup(): void;
}
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
