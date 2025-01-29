var P = Object.defineProperty;
var I = (e) => {
  throw TypeError(e);
};
var F = (e, s, t) => s in e ? P(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t;
var h = (e, s, t) => F(e, typeof s != "symbol" ? s + "" : s, t), A = (e, s, t) => s.has(e) || I("Cannot " + t);
var o = (e, s, t) => (A(e, s, "read from private field"), t ? t.call(e) : s.get(e)), i = (e, s, t) => s.has(e) ? I("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(e) : s.set(e, t), r = (e, s, t, c) => (A(e, s, "write to private field"), c ? c.call(e, t) : s.set(e, t), t);
import { ThreeResourceManager as R } from "./index.es8.js";
import { Clock as f } from "./index.es15.js";
const D = 16.67;
var g, a, n, p;
class G {
  constructor() {
    i(this, g);
    i(this, a);
    i(this, n);
    i(this, p);
    h(this, "startPhysicsLoop", () => {
      const s = o(this, a).getDelta(), t = performance.now();
      this.physicsLoopLogic(s);
      const c = performance.now();
      r(this, p, D - (c - t)), r(this, n, setTimeout(this.startPhysicsLoop, o(this, p)));
    });
    r(this, a, new f(!0));
  }
  get physics() {
    return o(this, g);
  }
  set physics(s) {
    r(this, g, s);
  }
  get physicsClock() {
    return o(this, a);
  }
  get physicsLoopTimeoutId() {
    return o(this, n);
  }
  get physicsLoopTook() {
    return o(this, p);
  }
  customCleanup() {
  }
  derivedCleanup() {
  }
  cleanup() {
    clearTimeout(o(this, n)), this.physics.free(), this.customCleanup();
  }
}
g = new WeakMap(), a = new WeakMap(), n = new WeakMap(), p = new WeakMap();
var L, m, l, T, u, d, y;
class v {
  constructor() {
    i(this, L);
    i(this, m);
    i(this, l);
    i(this, T);
    i(this, u);
    i(this, d);
    i(this, y);
    h(this, "startDrawLoop", () => {
      const s = o(this, u).getDelta();
      this.drawLoopLogic(s), r(this, d, requestAnimationFrame(this.startDrawLoop));
    });
    h(this, "startPhysicsLoop", () => {
      const s = o(this, l).getDelta(), t = performance.now();
      this.physicsLoopLogic(s);
      const c = performance.now();
      r(this, m, D - (c - t)), r(this, y, setTimeout(this.startPhysicsLoop, o(this, m)));
    });
    r(this, T, new R()), r(this, u, new f(!0)), r(this, l, new f(!0));
  }
  get physics() {
    return o(this, L);
  }
  set physics(s) {
    r(this, L, s);
  }
  get physicsLoopTook() {
    return o(this, m);
  }
  get threeResourceManager() {
    return o(this, T);
  }
  get drawClock() {
    return o(this, u);
  }
  get physicsClock() {
    return o(this, l);
  }
  get drawLoopAnimationFrameId() {
    return o(this, d);
  }
  get physicsLoopTimeoutId() {
    return o(this, y);
  }
  customCleanup() {
  }
  derivedCleanup() {
  }
  cleanup() {
    clearTimeout(o(this, y)), cancelAnimationFrame(o(this, d)), this.physics.free(), this.threeResourceManager.dispose(), this.derivedCleanup(), this.customCleanup();
  }
}
L = new WeakMap(), m = new WeakMap(), l = new WeakMap(), T = new WeakMap(), u = new WeakMap(), d = new WeakMap(), y = new WeakMap();
var w, k;
class q extends v {
  constructor() {
    super(...arguments);
    i(this, w);
    i(this, k);
    h(this, "drawTimer", [0, 0]);
    h(this, "physicsTimer", [0, 0]);
    h(this, "startDrawLoop", () => {
      const t = this.drawClock.getDelta(), c = performance.now();
      this.drawLoopLogic(t);
      const C = performance.now();
      this.drawTimer[1] += C - c, ++this.drawTimer[0] >= 60 && (console.log("drawLoopLogic:"), console.log(`	deltaTime ${t * 1e3} ms`), console.log(`	took ${this.drawTimer[1] / 60} ms to run on average.`), this.drawTimer = [0, 0]), r(this, k, requestAnimationFrame(this.startDrawLoop));
    });
    h(this, "startPhysicsLoop", () => {
      const t = this.physicsClock.getDelta(), c = performance.now();
      this.physicsLoopLogic(t);
      const C = performance.now();
      this.physicsTimer[1] += C - c, ++this.physicsTimer[0] >= 60 && (console.log("physicsLoopLogic:"), console.log(`	deltaTime ${t * 1e3} ms`), console.log(`	took ${this.physicsTimer[1] / 60} ms to run on average.`), this.physicsTimer = [0, 0]), r(this, w, setTimeout(this.startPhysicsLoop, D - (C - c)));
    });
  }
  cleanup() {
    clearTimeout(o(this, w)), cancelAnimationFrame(o(this, k)), this.physics.free(), this.threeResourceManager.dispose(), this.customCleanup();
  }
}
w = new WeakMap(), k = new WeakMap();
export {
  G as GameBase,
  v as GameBaseClient,
  q as GameBaseClientDebug,
  D as PHYSICS_UPDATE_INTERVAL
};
