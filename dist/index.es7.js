var k = Object.defineProperty;
var L = (s) => {
  throw TypeError(s);
};
var C = (s, e, t) => e in s ? k(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var c = (s, e, t) => C(s, typeof e != "symbol" ? e + "" : e, t), T = (s, e, t) => e.has(s) || L("Cannot " + t);
var o = (s, e, t) => (T(s, e, "read from private field"), t ? t.call(s) : e.get(s)), r = (s, e, t) => e.has(s) ? L("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t), a = (s, e, t, i) => (T(s, e, "write to private field"), i ? i.call(s, t) : e.set(s, t), t);
import { ThreeResourceManager as f } from "./index.es8.js";
import { Clock as y } from "./index.es10.js";
var l, h, u, n, p, m;
class D {
  constructor() {
    r(this, l);
    r(this, h);
    r(this, u);
    r(this, n);
    r(this, p);
    r(this, m);
    c(this, "startDrawLoop", () => {
      const e = o(this, n).getDelta();
      this.drawLoopLogic(e), a(this, p, requestAnimationFrame(this.startDrawLoop));
    });
    c(this, "startPhysicsLoop", () => {
      const e = o(this, h).getDelta(), t = performance.now();
      this.physicsLoopLogic(e);
      const i = performance.now();
      a(this, m, setTimeout(this.startPhysicsLoop, 16.67 - (i - t)));
    });
    a(this, u, new f()), a(this, n, new y(!0)), a(this, h, new y(!0));
  }
  get physics() {
    return o(this, l);
  }
  set physics(e) {
    a(this, l, e);
  }
  get threeResourceManager() {
    return o(this, u);
  }
  get drawClock() {
    return o(this, n);
  }
  get physicsClock() {
    return o(this, h);
  }
  get drawLoopAnimationFrameId() {
    return o(this, p);
  }
  get physicsLoopTimeoutId() {
    return o(this, m);
  }
  customCleanup() {
  }
  derivedCleanup() {
  }
  cleanup() {
    clearTimeout(o(this, m)), cancelAnimationFrame(o(this, p)), this.physics.free(), this.threeResourceManager.dispose(), this.derivedCleanup(), this.customCleanup();
  }
}
l = new WeakMap(), h = new WeakMap(), u = new WeakMap(), n = new WeakMap(), p = new WeakMap(), m = new WeakMap();
var d, g;
class M extends D {
  constructor() {
    super(...arguments);
    r(this, d);
    r(this, g);
    c(this, "drawTimer", [0, 0]);
    c(this, "physicsTimer", [0, 0]);
    c(this, "startDrawLoop", () => {
      const t = this.drawClock.getDelta(), i = performance.now();
      this.drawLoopLogic(t);
      const w = performance.now();
      this.drawTimer[1] += w - i, ++this.drawTimer[0] >= 60 && (console.log("drawLoopLogic:"), console.log(`	deltaTime ${t * 1e3} ms`), console.log(`	took ${this.drawTimer[1] / 60} ms to run on average.`), this.drawTimer = [0, 0]), a(this, g, requestAnimationFrame(this.startDrawLoop));
    });
    c(this, "startPhysicsLoop", () => {
      const t = this.physicsClock.getDelta(), i = performance.now();
      this.physicsLoopLogic(t);
      const w = performance.now();
      this.physicsTimer[1] += w - i, ++this.physicsTimer[0] >= 60 && (console.log("physicsLoopLogic:"), console.log(`	deltaTime ${t * 1e3} ms`), console.log(`	took ${this.physicsTimer[1] / 60} ms to run on average.`), this.physicsTimer = [0, 0]), a(this, d, setTimeout(this.startPhysicsLoop, 16.67 - (w - i)));
    });
  }
  cleanup() {
    clearTimeout(o(this, d)), cancelAnimationFrame(o(this, g)), this.physics.free(), this.threeResourceManager.dispose(), this.customCleanup();
  }
}
d = new WeakMap(), g = new WeakMap();
export {
  D as GameBaseClient,
  M as GameBaseClientDebug
};
