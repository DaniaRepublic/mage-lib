import { createContext, createSignal, onCleanup, onMount, useContext } from "solid-js";
export const keyboardEvents = new Set([
    "menuOpen", "escape", "keyw", "keys", "keya", "keyd", "shiftleft", "space",
    "digit1", "digit2", "digit3", "digit4", "digit5", "digit6", "digit7", "digit8", "digit9", "digit0"
]);
export function createInitialKeyboardState() {
    let initialState = Object();
    keyboardEvents.forEach(key => initialState[key] = false);
    return initialState;
}
const KeyboardCtx = createContext(null);
export function KeyboardProvider(props) {
    const [keyboardState, setKeyboardState] = createSignal(props.initialKeyboardState);
    const keyboard = [
        keyboardState,
        {
            keydown(key) {
                setKeyboardState(prevKeyboardState => ({
                    ...prevKeyboardState,
                    [key]: true
                }));
            },
            keyup(key) {
                setKeyboardState(prevKeyboardState => ({
                    ...prevKeyboardState,
                    [key]: false
                }));
            },
        }
    ];
    return (<KeyboardCtx.Provider value={keyboard}>
      {props.children}
    </KeyboardCtx.Provider>);
}
export function useKeyboard() {
    return useContext(KeyboardCtx);
}
/**
 * This component handles input change and basic menu controls.
 * @param props { children: JSX.Element }
 * @returns JSX.Element
 */
export function KeyboardListeners(props) {
    const [, { keydown, keyup }] = useKeyboard();
    function handleKeydownEvent(e) {
        const key = e.code.toLowerCase();
        if (keyboardEvents.has(key)) {
            keydown(key);
            // Handle menu toggle
            if (key === "escape") {
                const menu = document.getElementById("game-menu");
                if (menu) {
                    e.preventDefault();
                    if (!e.repeat) {
                        if (menu.open) {
                            menu.close();
                            keyup("menuOpen");
                        }
                        else {
                            menu.showModal();
                            keydown("menuOpen");
                        }
                    }
                }
            }
        }
    }
    function handleKeyupEvent(e) {
        const key = e.code.toLowerCase();
        if (keyboardEvents.has(key)) {
            keyup(key);
        }
    }
    onMount(() => {
        document.addEventListener("keydown", handleKeydownEvent);
        document.addEventListener("keyup", handleKeyupEvent);
    });
    onCleanup(() => {
        document.removeEventListener("keydown", handleKeydownEvent);
        document.removeEventListener("keyup", handleKeyupEvent);
    });
    return <>{props.children}</>;
}
export function KeyboardProviderWithListenersAndInitialState(props) {
    return (<KeyboardProvider initialKeyboardState={createInitialKeyboardState()}>
      <KeyboardListeners>
        {props.children}
      </KeyboardListeners>
    </KeyboardProvider>);
}
/**
 * A singleton for keyboard signal with a bunch of accessor helpers.
 */
export class KeyboardSingleton {
    static instance;
    keyboard;
    static getInstance() {
        if (!this.instance) {
            this.instance = new KeyboardSingleton();
        }
        return this.instance;
    }
    static setKeyboard(keyboard) {
        this.getInstance().keyboard = keyboard;
    }
    static getKeyboard() {
        return this.getInstance().keyboard;
    }
    static getKeyboardState() {
        return this.getInstance().keyboard();
    }
}
