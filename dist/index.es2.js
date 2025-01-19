var D = Object.defineProperty;
var C = (e) => {
  throw TypeError(e);
};
var I = (e, s, t) => s in e ? D(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t;
var a = (e, s, t) => I(e, typeof s != "symbol" ? s + "" : s, t), f = (e, s, t) => s.has(e) || C("Cannot " + t);
var o = (e, s, t) => (f(e, s, "read from private field"), t ? t.call(e) : s.get(e)), i = (e, s, t) => s.has(e) ? C("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(e) : s.set(e, t), r = (e, s, t, c) => (f(e, s, "write to private field"), c ? c.call(e, t) : s.set(e, t), t);
import { ThreeResourceManager as A } from "./index.es7.js";
import { Clock as k } from "./index.es14.js";
var d, h, n;
class R {
  constructor() {
    i(this, d);
    i(this, h);
    i(this, n);
    a(this, "startPhysicsLoop", () => {
      const s = o(this, h).getDelta(), t = performance.now();
      this.physicsLoopLogic(s);
      const c = performance.now();
      r(this, n, setTimeout(this.startPhysicsLoop, 16.67 - (c - t)));
    });
    r(this, h, new k(!0));
  }
  get physics() {
    return o(this, d);
  }
  set physics(s) {
    r(this, d, s);
  }
  get physicsClock() {
    return o(this, h);
  }
  get physicsLoopTimeoutId() {
    return o(this, n);
  }
  customCleanup() {
  }
  derivedCleanup() {
  }
  cleanup() {
    clearTimeout(o(this, n)), this.physics.free(), this.customCleanup();
  }
}
d = new WeakMap(), h = new WeakMap(), n = new WeakMap();
var g, p, y, m, l, u;
class F {
  constructor() {
    i(this, g);
    i(this, p);
    i(this, y);
    i(this, m);
    i(this, l);
    i(this, u);
    a(this, "startDrawLoop", () => {
      const s = o(this, m).getDelta();
      this.drawLoopLogic(s), r(this, l, requestAnimationFrame(this.startDrawLoop));
    });
    a(this, "startPhysicsLoop", () => {
      const s = o(this, p).getDelta(), t = performance.now();
      this.physicsLoopLogic(s);
      const c = performance.now();
      r(this, u, setTimeout(this.startPhysicsLoop, 16.67 - (c - t)));
    });
    r(this, y, new A()), r(this, m, new k(!0)), r(this, p, new k(!0));
  }
  get physics() {
    return o(this, g);
  }
  set physics(s) {
    r(this, g, s);
  }
  get threeResourceManager() {
    return o(this, y);
  }
  get drawClock() {
    return o(this, m);
  }
  get physicsClock() {
    return o(this, p);
  }
  get drawLoopAnimationFrameId() {
    return o(this, l);
  }
  get physicsLoopTimeoutId() {
    return o(this, u);
  }
  customCleanup() {
  }
  derivedCleanup() {
  }
  cleanup() {
    clearTimeout(o(this, u)), cancelAnimationFrame(o(this, l)), this.physics.free(), this.threeResourceManager.dispose(), this.derivedCleanup(), this.customCleanup();
  }
}
g = new WeakMap(), p = new WeakMap(), y = new WeakMap(), m = new WeakMap(), l = new WeakMap(), u = new WeakMap();
var L, w;
class $ extends F {
  constructor() {
    super(...arguments);
    i(this, L);
    i(this, w);
    a(this, "drawTimer", [0, 0]);
    a(this, "physicsTimer", [0, 0]);
    a(this, "startDrawLoop", () => {
      const t = this.drawClock.getDelta(), c = performance.now();
      this.drawLoopLogic(t);
      const T = performance.now();
      this.drawTimer[1] += T - c, ++this.drawTimer[0] >= 60 && (console.log("drawLoopLogic:"), console.log(`	deltaTime ${t * 1e3} ms`), console.log(`	took ${this.drawTimer[1] / 60} ms to run on average.`), this.drawTimer = [0, 0]), r(this, w, requestAnimationFrame(this.startDrawLoop));
    });
    a(this, "startPhysicsLoop", () => {
      const t = this.physicsClock.getDelta(), c = performance.now();
      this.physicsLoopLogic(t);
      const T = performance.now();
      this.physicsTimer[1] += T - c, ++this.physicsTimer[0] >= 60 && (console.log("physicsLoopLogic:"), console.log(`	deltaTime ${t * 1e3} ms`), console.log(`	took ${this.physicsTimer[1] / 60} ms to run on average.`), this.physicsTimer = [0, 0]), r(this, L, setTimeout(this.startPhysicsLoop, 16.67 - (T - c)));
    });
  }
  cleanup() {
    clearTimeout(o(this, L)), cancelAnimationFrame(o(this, w)), this.physics.free(), this.threeResourceManager.dispose(), this.customCleanup();
  }
}
L = new WeakMap(), w = new WeakMap();
export {
  R as GameBase,
  F as GameBaseClient,
  $ as GameBaseClientDebug
};
