var c = Object.defineProperty;
var p = (t, e, a) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var n = (t, e, a) => p(t, typeof e != "symbol" ? e + "" : e, a);
import { BufferGeometry as m, Material as u, Texture as g, Mesh as o, Light as x, Box3Helper as w, Group as S } from "./index.es10.js";
class k {
  constructor() {
    n(this, "geometries", /* @__PURE__ */ new Set());
    n(this, "materials", /* @__PURE__ */ new Set());
    n(this, "textures", /* @__PURE__ */ new Set());
    n(this, "meshes", /* @__PURE__ */ new Set());
    n(this, "lights", /* @__PURE__ */ new Set());
    n(this, "box3Helpers", /* @__PURE__ */ new Set());
    n(this, "groups", /* @__PURE__ */ new Set());
    n(this, "scene", null);
    n(this, "renderer", null);
    n(this, "controls", null);
  }
  track(e) {
    return e instanceof m && this.geometries.add(e), e instanceof u && this.materials.add(e), e instanceof g && this.textures.add(e), e instanceof o && this.meshes.add(e), e instanceof x && this.lights.add(e), e instanceof w && this.box3Helpers.add(e), e instanceof S && this.groups.add(e), e;
  }
  setScene(e) {
    this.scene = e;
  }
  setRenderer(e) {
    this.renderer = e;
  }
  setControls(e) {
    this.controls = e;
  }
  /**
   * Release all memory used by this manager.
   */
  dispose() {
    var e, a, h;
    this.geometries.forEach((i) => i.dispose()), this.materials.forEach((i) => i.dispose()), this.textures.forEach((i) => i.dispose()), this.lights.forEach((i) => i.dispose()), this.box3Helpers.forEach((i) => i.dispose()), this.groups.forEach((i) => {
      i.traverse((r) => {
        "dispose" in r && typeof r.dispose == "function" && r.dispose();
      });
    }), (e = this.renderer) == null || e.dispose(), (a = this.controls) == null || a.dispose(), (h = this.scene) == null || h.clear(), this.geometries.clear(), this.materials.clear(), this.textures.clear(), this.meshes.clear();
  }
}
function G(t = new k()) {
  function e() {
    t.dispose();
  }
  function a(s) {
    return t.track(s());
  }
  function h(s) {
    return t.track(s());
  }
  function i(s) {
    return t.track(s());
  }
  function r(s, l) {
    return t.track(new o(s, l));
  }
  function f(s) {
    return t.track(s());
  }
  function d(s) {
    return t.track(s());
  }
  return {
    resources: t,
    cleanup: e,
    createGeometry: a,
    createMaterial: h,
    createTexture: i,
    createMesh: r,
    createLight: f,
    createGroup: d
  };
}
export {
  k as ThreeResourceManager,
  G as useThree
};
