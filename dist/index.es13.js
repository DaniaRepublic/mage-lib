var Q = Object.defineProperty;
var U = (n, i, e) => i in n ? Q(n, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[i] = e;
var r = (n, i, e) => U(n, typeof i != "symbol" ? i + "" : i, e);
import h from "./index.es16.js";
import { WebGLRenderer as K } from "./index.es17.js";
import { PointerLockControls as N } from "./index.es20.js";
import { useThree as V } from "./index.es8.js";
import { groundLayer as B, objectLayer as Z } from "./index.es9.js";
import { GameBaseClientDebug as _ } from "./index.es2.js";
import { GLTFLoaderWrapper as $, pointsFromBBox as X } from "./index.es7.js";
import { Physics as ee } from "./index.es10.js";
import { Player as te } from "./index.es12.js";
import { HUD as oe } from "./index.es11.js";
import { Scene as re, Fog as ie, PerspectiveCamera as se, AmbientLight as ae, DirectionalLight as ne, SpotLight as D, PlaneGeometry as ce, MeshStandardMaterial as P, BoxGeometry as de, Mesh as he, Box3 as le, Quaternion as pe } from "./index.es15.js";
class be extends _ {
  constructor() {
    super();
    r(this, "gltfLoaderWrapper");
    r(this, "playerCamera");
    r(this, "controls");
    r(this, "domGameRoot");
    r(this, "hud");
    r(this, "player");
    r(this, "robots", []);
    r(this, "handleClick", (e) => {
      this.controls.lock();
    });
    r(this, "onWindowResize", () => {
      this.playerCamera.aspect = window.innerWidth / window.innerHeight, this.playerCamera.updateProjectionMatrix(), this.threeResourceManager.renderer.setSize(window.innerWidth, window.innerHeight), this.hud.resize();
    });
    this.gltfLoaderWrapper = new $("http://localhost:8000/public/");
  }
  async setup(e) {
    this.domGameRoot = e;
    const m = { x: 0, y: -10, z: 0 };
    this.physics = await ee.setup(m);
    const t = this.physics.world, { resources: s, createGeometry: a, createMaterial: M, createMesh: f, createLight: w, createGroup: S } = V(this.threeResourceManager), o = new re();
    o.fog = new ie(0, 1, 100), s.setScene(o);
    const l = new K();
    l.setPixelRatio(window.devicePixelRatio), l.setSize(window.innerWidth, window.innerHeight), l.autoClear = !1, s.setRenderer(l), this.domGameRoot.replaceChildren(l.domElement), this.playerCamera = new se(75, window.innerWidth / window.innerHeight, 0.1, 1e3), this.controls = new N(this.playerCamera, this.domGameRoot), s.setControls(this.controls), o.add(this.controls.object), this.domGameRoot.addEventListener("click", this.handleClick), this.hud = new oe(this.threeResourceManager), await this.hud.setup(), window.addEventListener("resize", this.onWindowResize), this.player = new te(t, this.threeResourceManager, this.playerCamera), await this.player.setup();
    const G = w(() => new ae(16777215, 3));
    G.castShadow = !0, o.add(G);
    const x = w(() => new ne(16777215, 2));
    x.castShadow = !0, o.add(x);
    const u = w(() => new D(16777215, 5, 20, Math.PI / 4, 0, 0.5));
    u.castShadow = !0, u.translateY(4), u.translateZ(5), o.add(u);
    const L = w(() => new D(16777215, 5, 20, Math.PI / 8, 0, 0.5));
    L.castShadow = !0, L.translateY(4), o.add(L);
    const W = a(() => new ce(20, 20)), z = M(() => new P({ color: 3158064 })), g = f(W, z);
    g.position.set(0, 0.1, 0), g.rotation.x = -Math.PI / 2, g.receiveShadow = !0, o.add(g);
    const F = h.RigidBodyDesc.fixed(), k = t.createRigidBody(F), E = h.ColliderDesc.cuboid(10, 0.1, 10).setCollisionGroups(B);
    t.createCollider(E, k);
    const H = a(() => new de(0.2, 8, 4)), T = M(() => new P({ color: 34952 })), c = f(H, T);
    c.position.set(2, 4, -8), c.rotation.y = -Math.PI / 2, c.receiveShadow = !0, o.add(c);
    const I = h.RigidBodyDesc.fixed(), R = t.createRigidBody(I);
    R.setTranslation(c.position, !0), R.setRotation(c.quaternion, !0);
    const j = h.ColliderDesc.cuboid(0.1, 4, 2).setCollisionGroups(B);
    t.createCollider(j, R);
    function J(p, C, d) {
      return [Math.random() * p * 2 - p, Math.random() * C + 1, Math.random() * d * 2 - d];
    }
    for (let p = 0; p < 5; p++) {
      const C = await this.gltfLoaderWrapper.getGLTF("robot.glb"), d = J(9, 2, 9), y = S(() => C.scene);
      y.traverse((v) => {
        v instanceof he && v.rotateY(Math.PI);
      }), o.add(y);
      const Y = new le().setFromObject(y), q = X(Y), A = h.RigidBodyDesc.dynamic().setTranslation(d[0], d[1], d[2]), b = t.createRigidBody(A), O = h.ColliderDesc.convexHull(new Float32Array(q)).setMass(1).setCollisionGroups(Z);
      t.createCollider(O, b), this.robots.push([b, y]);
    }
  }
  customCleanup() {
    this.domGameRoot.removeEventListener("click", this.handleClick), window.removeEventListener("resize", this.onWindowResize);
  }
  physicsLoopLogic(e) {
    this.player.physicsLoopLogic(e), this.physics.world.step();
  }
  drawLoopLogic(e) {
    this.player.drawLoopLogic(), this.robots.forEach(([m, t]) => {
      const s = m.translation(), a = m.rotation();
      t.position.set(s.x, s.y, s.z), t.rotation.setFromQuaternion(new pe(a.x, a.y, a.z, a.w));
    }), this.hud.updateJumps(Math.max(0, this.player.maxConsecutiveJumps - this.player.currConsecutiveJumps)), this.threeResourceManager.renderer.clear(), this.threeResourceManager.renderer.render(this.threeResourceManager.scene, this.playerCamera), this.hud.drawLoopLogic(e);
  }
}
export {
  be as GameWithGLTFLoading
};
