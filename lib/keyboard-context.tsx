/** @jsxImportSource solid-js */
import { Accessor, createContext, createSignal, JSX, onCleanup, onMount, useContext } from "solid-js";

export type TAvailableKeys =
  "menuOpen" | "escape" | "keyw" | "keys" | "keya" | "keyd" | "shiftleft" | "space" |
  "digit1" | "digit2" | "digit3" | "digit4" | "digit5" | "digit6" | "digit7" | "digit8" | "digit9" | "digit0"

export const keyboardEvents = new Set<TAvailableKeys>(
  [
    "menuOpen", "escape", "keyw", "keys", "keya", "keyd", "shiftleft", "space",
    "digit1", "digit2", "digit3", "digit4", "digit5", "digit6", "digit7", "digit8", "digit9", "digit0"
  ]
)

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
}

export function createInitialKeyboardState(): KeyboardState {
  let initialState: KeyboardState = Object()
  keyboardEvents.forEach(key => initialState[key] = false)
  return initialState
}

type TKeyboardCtx = [
  Accessor<KeyboardState>,
  {
    keydown(key: TAvailableKeys): void;
    keyup(key: TAvailableKeys): void;
  }
]

const KeyboardCtx = createContext<TKeyboardCtx>(null)

interface IKeyboardProvider {
  children: JSX.Element,
  initialKeyboardState: KeyboardState
}

export function KeyboardProvider(props: IKeyboardProvider) {
  const [keyboardState, setKeyboardState] = createSignal(props.initialKeyboardState)
  const keyboard: TKeyboardCtx = [
    keyboardState,
    {
      keydown(key: TAvailableKeys) {
        setKeyboardState(prevKeyboardState => ({
          ...prevKeyboardState,
          [key]: true
        }))
      },
      keyup(key: TAvailableKeys) {
        setKeyboardState(prevKeyboardState => ({
          ...prevKeyboardState,
          [key]: false
        }))
      },
    }
  ]

  return (
    <KeyboardCtx.Provider value={keyboard}>
      {props.children}
    </KeyboardCtx.Provider>
  )
}

export function useKeyboard() {
  return useContext(KeyboardCtx)
}

/**
 * This component handles input change and basic menu controls.
 * @param props { children: JSX.Element }
 * @returns JSX.Element
 */
export function KeyboardListeners(props: { children: JSX.Element }) {
  const [, { keydown, keyup }] = useKeyboard()

  function handleKeydownEvent(e: KeyboardEvent) {
    const key: any = e.code.toLowerCase()
    if (keyboardEvents.has(key)) {
      keydown(key)

      // Handle menu toggle
      if (key === "escape") {
        const menu = document.getElementById("game-menu") as HTMLDialogElement
        if (menu) {
          e.preventDefault()
          if (!e.repeat) {
            if (menu.open) {
              menu.close()
              keyup("menuOpen")
            } else {
              menu.showModal()
              keydown("menuOpen")
            }
          }
        }
      }
    }
  }

  function handleKeyupEvent(e: KeyboardEvent) {
    const key: any = e.code.toLowerCase()
    if (keyboardEvents.has(key)) {
      keyup(key)
    }
  }

  onMount(() => {
    document.addEventListener("keydown", handleKeydownEvent)
    document.addEventListener("keyup", handleKeyupEvent)
  })

  onCleanup(() => {
    document.removeEventListener("keydown", handleKeydownEvent)
    document.removeEventListener("keyup", handleKeyupEvent)
  })

  return <>{props.children}</>
}

export function KeyboardProviderWithListenersAndInitialState(props: { children: JSX.Element }) {
  return (
    <KeyboardProvider initialKeyboardState={createInitialKeyboardState()}>
      <KeyboardListeners>
        {props.children}
      </KeyboardListeners>
    </KeyboardProvider>
  )
}

/**
 * A singleton for keyboard signal with a bunch of accessor helpers.
 */
export class KeyboardSingleton {
  private static instance: KeyboardSingleton
  private keyboard: Accessor<KeyboardState>

  static getInstance() {
    if (!this.instance) {
      this.instance = new KeyboardSingleton()
    }
    return this.instance
  }

  static setKeyboard(keyboard: Accessor<KeyboardState>) {
    this.getInstance().keyboard = keyboard
  }

  static getKeyboard() {
    return this.getInstance().keyboard
  }

  static getKeyboardState() {
    return this.getInstance().keyboard()
  }
}