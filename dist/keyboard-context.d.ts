import { Accessor, JSX } from "solid-js";
export type TAvailableKeys = "menuOpen" | "escape" | "keyw" | "keys" | "keya" | "keyd" | "shiftleft" | "space" | "digit1" | "digit2" | "digit3" | "digit4" | "digit5" | "digit6" | "digit7" | "digit8" | "digit9" | "digit0";
export declare const keyboardEvents: Set<TAvailableKeys>;
export type KeyboardState = {
    menuOpen: boolean;
    escape: boolean;
    keyw: boolean;
    keys: boolean;
    keya: boolean;
    keyd: boolean;
    shiftleft: boolean;
    space: boolean;
    digit1: boolean;
    digit2: boolean;
    digit3: boolean;
    digit4: boolean;
    digit5: boolean;
    digit6: boolean;
    digit7: boolean;
    digit8: boolean;
    digit9: boolean;
    digit0: boolean;
};
export declare function createInitialKeyboardState(): KeyboardState;
type TKeyboardCtx = [
    Accessor<KeyboardState>,
    {
        keydown(key: TAvailableKeys): void;
        keyup(key: TAvailableKeys): void;
    }
];
interface IKeyboardProvider {
    children: JSX.Element;
    initialKeyboardState: KeyboardState;
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
    static setKeyboard(keyboard: Accessor<KeyboardState>): void;
    static getKeyboard(): Accessor<KeyboardState>;
    static getKeyboardState(): KeyboardState;
}
export {};
