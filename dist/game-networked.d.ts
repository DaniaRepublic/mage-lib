import * as THREE from "three";
import { Socket } from "socket.io";
import { Socket as CliSocket } from "socket.io-client";
import { GameBase, GameBaseClient } from "./game-base.js";
import { GameObjectNetworkedBase, TUserData } from "./game-object-base.js";
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
export declare function getStateFromNetworkedObject(obj: GameObjectNetworkedBase): TNetworkObjectState;
declare class GameObjectNetworked extends GameObjectNetworkedBase {
    setup(): Promise<void>;
    physicsLoopLogic(deltaTime: number): void;
}
export declare class GameBaseMultiplayerServer extends GameBase {
    #private;
    constructor(clients: Socket[]);
    /**
     * This function adds a client to the server instance of the game.
     * It should configure socket events and config
     * @param socket client socket.io socket
     */
    addClient(socket: Socket): Promise<void>;
    shareStateWithClient(socket: Socket): void;
    notifyClientsNewClient(cliObject: GameObjectNetworked): void;
    notifyClientsClientLeft(cliId: string): void;
    setup(): Promise<void>;
    /**
     * Shares network state with all connected clients.
     * @param deltaTime time elapsed since last call.
     */
    networkLoopLogic(deltaTime: number): void;
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     */
    startNetworkLoop: () => void;
    physicsLoopLogic(deltaTime: number): void;
    derivedCleanup(): void;
}
export declare class GameBaseMultiplayerClient extends GameBaseClient {
    #private;
    camera: THREE.PerspectiveCamera;
    constructor(socket: CliSocket);
    setup(domGameRoot: HTMLElement): Promise<void>;
    /**
     * Shares local state with the server.
     * @param deltaTime time elapsed since last call.
     */
    networkLoopLogic(deltaTime: number): void;
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     */
    startNetworkLoop: () => void;
    /**
     * Interpolate between current and target network states
     * use lerp for position and slerp for rotation.
     * @param current
     * @param target
     */
    interpolate(current: TNetworkObjectState, target: TNetworkObjectState, dt: number): TNetworkObjectState;
    physicsLoopLogic(deltaTime: number): void;
    drawLoopLogic(deltaTime: number): void;
    derivedCleanup(): void;
}
export {};
