var y = (n) => {
  throw TypeError(n);
};
var c = (n, t, o) => t.has(n) || y("Cannot " + o);
var i = (n, t, o) => (c(n, t, "read from private field"), o ? o.call(n) : t.get(n)), x = (n, t, o) => t.has(n) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, o), e = (n, t, o, a) => (c(n, t, "write to private field"), a ? a.call(n, o) : t.set(n, o), o);
import { GLTFLoader as z } from "./index.es18.js";
var r, s;
class L {
  constructor(t) {
    x(this, r);
    x(this, s);
    e(this, r, new z()), e(this, s, t);
  }
  async getGLTF(t) {
    return await i(this, r).loadAsync(i(this, s) + t);
  }
}
r = new WeakMap(), s = new WeakMap();
function d(n) {
  const t = n.min, o = n.max;
  return [
    t.x,
    t.y,
    t.z,
    t.x,
    t.y,
    o.z,
    t.x,
    o.y,
    t.z,
    t.x,
    o.y,
    o.z,
    o.x,
    t.y,
    t.z,
    o.x,
    t.y,
    o.z,
    o.x,
    o.y,
    t.z,
    o.x,
    o.y,
    o.z
  ];
}
export {
  L as GLTFLoaderWrapper,
  d as pointsFromBBox
};
