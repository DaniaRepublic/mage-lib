var g = Object.defineProperty;
var k = (t, e, n) => e in t ? g(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var c = (t, e, n) => k(t, typeof e != "symbol" ? e + "" : e, n);
import { createContext as h, createSignal as b, createComponent as u, useContext as m, onMount as p, onCleanup as v, createMemo as K } from "solid-js";
const y = /* @__PURE__ */ new Set(["menuOpen", "escape", "keyw", "keys", "keya", "keyd", "shiftleft", "space", "digit1", "digit2", "digit3", "digit4", "digit5", "digit6", "digit7", "digit8", "digit9", "digit0"]);
function w() {
  let t = Object();
  return y.forEach((e) => t[e] = !1), t;
}
const f = h(null);
function E(t) {
  const [e, n] = b(t.initialKeyboardState), o = [e, {
    keydown(r) {
      n((i) => ({
        ...i,
        [r]: !0
      }));
    },
    keyup(r) {
      n((i) => ({
        ...i,
        [r]: !1
      }));
    }
  }];
  return u(f.Provider, {
    value: o,
    get children() {
      return t.children;
    }
  });
}
function L() {
  return m(f);
}
function S(t) {
  const [, {
    keydown: e,
    keyup: n
  }] = L();
  function o(i) {
    const a = i.code.toLowerCase();
    if (y.has(a) && (e(a), a === "escape")) {
      const d = document.getElementById("game-menu");
      d && (i.preventDefault(), i.repeat || (d.open ? (d.close(), n("menuOpen")) : (d.showModal(), e("menuOpen"))));
    }
  }
  function r(i) {
    const a = i.code.toLowerCase();
    y.has(a) && n(a);
  }
  return p(() => {
    document.addEventListener("keydown", o), document.addEventListener("keyup", r);
  }), v(() => {
    document.removeEventListener("keydown", o), document.removeEventListener("keyup", r);
  }), K(() => t.children);
}
function x(t) {
  return u(E, {
    get initialKeyboardState() {
      return w();
    },
    get children() {
      return u(S, {
        get children() {
          return t.children;
        }
      });
    }
  });
}
const s = class s {
  constructor() {
    c(this, "keyboard");
  }
  static getInstance() {
    return this.instance || (this.instance = new s()), this.instance;
  }
  static setKeyboard(e) {
    this.getInstance().keyboard = e;
  }
  static getKeyboard() {
    return this.getInstance().keyboard;
  }
  static getKeyboardState() {
    return this.getInstance().keyboard();
  }
};
c(s, "instance");
let l = s;
export {
  S as KeyboardListeners,
  E as KeyboardProvider,
  x as KeyboardProviderWithListenersAndInitialState,
  l as KeyboardSingleton,
  w as createInitialKeyboardState,
  y as keyboardEvents,
  L as useKeyboard
};
