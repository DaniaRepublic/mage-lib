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

/** This maps keys to powers of 2. It's needed for efficient serialization over network. */
export const keyboardEventToBit = new Map<TAvailableKeys, number>([
  ["menuOpen", 1],
  ["escape", 2],
  ["keyw", 4],
  ["keys", 8],
  ["keya", 16],
  ["keyd", 32],
  ["shiftleft", 64],
  ["space", 128],
  ["digit1", 256],
  ["digit2", 512],
  ["digit3", 1024],
  ["digit4", 2048],
  ["digit5", 4096],
  ["digit6", 8192],
  ["digit7", 16384],
  ["digit8", 32768],
  ["digit9", 65536],
  ["digit0", 131072]
])

export type TKeyboardState = Map<TAvailableKeys, boolean>

/** This is easier to use by keyboard consumer than the map . */
export type TKeyboardStateObj = {
  menuOpen: false,
  escape: false,
  keyw: false,
  keys: false,
  keya: false,
  keyd: false,
  shiftleft: false,
  space: false,
  digit1: false,
  digit2: false,
  digit3: false,
  digit4: false,
  digit5: false,
  digit6: false,
  digit7: false,
  digit8: false,
  digit9: false,
  digit0: false,
}

export function keyboardStateToBitMask(kbState: TKeyboardState): number {
  let acc = 0
  kbState.forEach((val, key) => {
    if (val) {
      acc += keyboardEventToBit.get(key)
    }
  })
  return acc
}

export function bitMaskToKeyboardState(bitMask: number): TKeyboardState {
  let m = new Map<TAvailableKeys, boolean>()
  keyboardEventToBit.forEach((val, key) => {
    m.set(key, Boolean(val & bitMask))
  })
  return m
}

export function keyboardStateToKeyboardStateObj(kbState: TKeyboardState): TKeyboardStateObj {
  return Object.fromEntries(kbState.entries()) as TKeyboardStateObj
}

export function bitmaskToKeyboardStateObj(bitmask) {
  return keyboardStateToKeyboardStateObj(
    bitMaskToKeyboardState(bitmask)
  )
}

export function bitmasksToKeyboardStateObjs(keyboardStateBitmasks: number[]) {
  let keyboardStateObjs: TKeyboardStateObj[] = []
  keyboardStateBitmasks.forEach(bitmask => {
    keyboardStateObjs.push(bitmaskToKeyboardStateObj(bitmask))
  })
  return keyboardStateObjs
}

export function createInitialKeyboardState(): TKeyboardState {
  let initialState: TKeyboardState = new Map()
  keyboardEvents.forEach(key => {
    initialState.set(key, false)
  })
  return initialState
}

type TKeyboardCtx = [
  Accessor<TKeyboardState>,
  {
    keydown(key: TAvailableKeys): void;
    keyup(key: TAvailableKeys): void;
  }
]

const KeyboardCtx = createContext<TKeyboardCtx>(null)

interface IKeyboardProvider {
  children: JSX.Element,
  initialKeyboardState: TKeyboardState
}

export function KeyboardProvider(props: IKeyboardProvider) {
  const [keyboardState, setKeyboardState] = createSignal(props.initialKeyboardState)
  const keyboard: TKeyboardCtx = [
    keyboardState,
    {
      keydown(key: TAvailableKeys) {
        setKeyboardState(prevKeyboardState => {
          let m = new Map(prevKeyboardState)
          m.set(key, true)
          return m
        })
      },
      keyup(key: TAvailableKeys) {
        setKeyboardState(prevKeyboardState => {
          let m = new Map(prevKeyboardState)
          m.set(key, false)
          return m
        })
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
  private keyboard: Accessor<TKeyboardState>

  static getInstance() {
    if (!this.instance) {
      this.instance = new KeyboardSingleton()
    }
    return this.instance
  }

  static setKeyboard(keyboard: Accessor<TKeyboardState>) {
    this.getInstance().keyboard = keyboard
  }

  static getKeyboard() {
    return this.getInstance().keyboard
  }

  static getKeyboardStateObj() {
    const m = this.getInstance().keyboard()
    return keyboardStateToKeyboardStateObj(m)
  }
}