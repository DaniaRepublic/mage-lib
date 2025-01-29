import { Accessor, JSX } from "solid-js";
export type TAvailableKeys = "menuOpen" | "escape" | "keyw" | "keys" | "keya" | "keyd" | "shiftleft" | "space" | "digit1" | "digit2" | "digit3" | "digit4" | "digit5" | "digit6" | "digit7" | "digit8" | "digit9" | "digit0";
export declare const keyboardEvents: Set<TAvailableKeys>;
/** This maps keys to powers of 2. It's needed for efficient serialization over network. */
export declare const keyboardEventToBit: Map<TAvailableKeys, number>;
export type TKeyboardState = Map<TAvailableKeys, boolean>;
/** This is easier to use by keyboard consumer than the map . */
export type TKeyboardStateObj = {
    menuOpen: false;
    escape: false;
    keyw: false;
    keys: false;
    keya: false;
    keyd: false;
    shiftleft: false;
    space: false;
    digit1: false;
    digit2: false;
    digit3: false;
    digit4: false;
    digit5: false;
    digit6: false;
    digit7: false;
    digit8: false;
    digit9: false;
    digit0: false;
};
export declare function keyboardStateToBitMask(kbState: TKeyboardState): number;
export declare function bitMaskToKeyboardState(bitMask: number): TKeyboardState;
export declare function keyboardStateToKeyboardStateObj(kbState: TKeyboardState): TKeyboardStateObj;
export declare function bitmaskToKeyboardStateObj(bitmask: any): TKeyboardStateObj;
export declare function bitmasksToKeyboardStateObjs(keyboardStateBitmasks: number[]): TKeyboardStateObj[];
export declare function createInitialKeyboardState(): TKeyboardState;
type TKeyboardCtx = [
    Accessor<TKeyboardState>,
    {
        keydown(key: TAvailableKeys): void;
        keyup(key: TAvailableKeys): void;
    }
];
interface IKeyboardProvider {
    children: JSX.Element;
    initialKeyboardState: TKeyboardState;
}
export declare function KeyboardProvider(props: IKeyboardProvider): JSX.Element;
export declare function useKeyboard(): TKeyboardCtx;
/**
 * This component handles input change and basic menu controls.
 * @param props { children: JSX.Element }
 * @returns JSX.Element
 */
export declare function KeyboardListeners(props: {
    children: JSX.Element;
}): JSX.Element;
export declare function KeyboardProviderWithListenersAndInitialState(props: {
    children: JSX.Element;
}): JSX.Element;
/**
 * A singleton for keyboard signal with a bunch of accessor helpers.
 */
export declare class KeyboardSingleton {
    private static instance;
    private keyboard;
    static getInstance(): KeyboardSingleton;
    static setKeyboard(keyboard: Accessor<TKeyboardState>): void;
    static getKeyboard(): Accessor<TKeyboardState>;
    static getKeyboardStateObj(): TKeyboardStateObj;
}
export {};
