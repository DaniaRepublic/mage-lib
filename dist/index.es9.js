var a = Object.defineProperty;
var n = (t, r, e) => r in t ? a(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var i = (t, r, e) => n(t, typeof r != "symbol" ? r + "" : r, e);
import o from "./index.es4.js";
class s {
  /**
   * Use .setup method instead of constructor. Avoid using constructor directly.
   * @param gravity TGravity
   */
  constructor(r) {
    i(this, "gravity");
    i(this, "world");
    this.gravity = r, this.world = new o.World(r);
  }
  /**
   * Initializes physics and returns a Game instance.
   * @param gravity TGravity
   * @returns Game
   */
  static async setup(r) {
    return await o.init(), new s(r);
  }
  free() {
    this.world.free();
  }
}
export {
  s as Physics
};
