import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/Addons.js";
import { Socket } from "socket.io";
import { Socket as CliSocket } from "socket.io-client";
import { GameBase, GameBaseClient } from "./game-base.js";
import { TNetworkObjectState } from "./game-networked.js";
import { NetworkedPlayerServer } from "./game-objects/player-networked.js";
import { TKeyboardStateObj } from "./keyboard-context.jsx";
export type TNetworkedPlayerState = {
    objectState: TNetworkObjectState;
    keyboardState: TKeyboardStateObj;
};
export declare class GameWithPlayerMultiplayerServer extends GameBase {
    #private;
    constructor(clients: Socket[]);
    /**
     * This function adds a client to the server instance of the game.
     * It should configure socket events and config
     * @param socket client socket.io socket
     */
    addClient(socket: Socket): Promise<void>;
    shareStateWithClient(socket: Socket): void;
    notifyClientsNewClient(cliObject: NetworkedPlayerServer): void;
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
export declare class GameWithPlayerMultiplayerClient extends GameBaseClient {
    #private;
    camera: THREE.PerspectiveCamera;
    controls: PointerLockControls;
    domGameRoot: HTMLElement;
    constructor(socket: CliSocket);
    handleClick: (e: MouseEvent) => void;
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
