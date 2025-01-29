var g = Object.defineProperty;
var m = (t, e, n) => e in t ? g(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var c = (t, e, n) => m(t, typeof e != "symbol" ? e + "" : e, n);
import { createContext as h, createSignal as p, createComponent as u, useContext as w, onMount as K, onCleanup as v, createMemo as S } from "solid-js";
const y = /* @__PURE__ */ new Set(["menuOpen", "escape", "keyw", "keys", "keya", "keyd", "shiftleft", "space", "digit1", "digit2", "digit3", "digit4", "digit5", "digit6", "digit7", "digit8", "digit9", "digit0"]), f = /* @__PURE__ */ new Map([["menuOpen", 1], ["escape", 2], ["keyw", 4], ["keys", 8], ["keya", 16], ["keyd", 32], ["shiftleft", 64], ["space", 128], ["digit1", 256], ["digit2", 512], ["digit3", 1024], ["digit4", 2048], ["digit5", 4096], ["digit6", 8192], ["digit7", 16384], ["digit8", 32768], ["digit9", 65536], ["digit0", 131072]]);
function x(t) {
  let e = 0;
  return t.forEach((n, r) => {
    n && (e += f.get(r));
  }), e;
}
function E(t) {
  let e = /* @__PURE__ */ new Map();
  return f.forEach((n, r) => {
    e.set(r, !!(n & t));
  }), e;
}
function k(t) {
  return Object.fromEntries(t.entries());
}
function M(t) {
  return k(E(t));
}
function B(t) {
  let e = [];
  return t.forEach((n) => {
    e.push(M(n));
  }), e;
}
function O() {
  let t = /* @__PURE__ */ new Map();
  return y.forEach((e) => {
    t.set(e, !1);
  }), t;
}
const l = h(null);
function L(t) {
  const [e, n] = p(t.initialKeyboardState), r = [e, {
    keydown(o) {
      n((a) => {
        let i = new Map(a);
        return i.set(o, !0), i;
      });
    },
    keyup(o) {
      n((a) => {
        let i = new Map(a);
        return i.set(o, !1), i;
      });
    }
  }];
  return u(l.Provider, {
    value: r,
    get children() {
      return t.children;
    }
  });
}
function C() {
  return w(l);
}
function I(t) {
  const [, {
    keydown: e,
    keyup: n
  }] = C();
  function r(a) {
    const i = a.code.toLowerCase();
    if (y.has(i) && (e(i), i === "escape")) {
      const d = document.getElementById("game-menu");
      d && (a.preventDefault(), a.repeat || (d.open ? (d.close(), n("menuOpen")) : (d.showModal(), e("menuOpen"))));
    }
  }
  function o(a) {
    const i = a.code.toLowerCase();
    y.has(i) && n(i);
  }
  return K(() => {
    document.addEventListener("keydown", r), document.addEventListener("keyup", o);
  }), v(() => {
    document.removeEventListener("keydown", r), document.removeEventListener("keyup", o);
  }), S(() => t.children);
}
function P(t) {
  return u(L, {
    get initialKeyboardState() {
      return O();
    },
    get children() {
      return u(I, {
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
  static getKeyboardStateObj() {
    const e = this.getInstance().keyboard();
    return k(e);
  }
};
c(s, "instance");
let b = s;
export {
  I as KeyboardListeners,
  L as KeyboardProvider,
  P as KeyboardProviderWithListenersAndInitialState,
  b as KeyboardSingleton,
  E as bitMaskToKeyboardState,
  M as bitmaskToKeyboardStateObj,
  B as bitmasksToKeyboardStateObjs,
  O as createInitialKeyboardState,
  f as keyboardEventToBit,
  y as keyboardEvents,
  x as keyboardStateToBitMask,
  k as keyboardStateToKeyboardStateObj,
  C as useKeyboard
};
