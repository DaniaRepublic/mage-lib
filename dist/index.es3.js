var B = Object.defineProperty;
var x = (t) => {
  throw TypeError(t);
};
var D = (t, o, e) => o in t ? B(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var p = (t, o, e) => D(t, typeof o != "symbol" ? o + "" : o, e), C = (t, o, e) => o.has(t) || x("Cannot " + e);
var i = (t, o, e) => (C(t, o, "read from private field"), e ? e.call(t) : o.get(t)), d = (t, o, e) => o.has(t) ? x("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(t) : o.set(t, e), w = (t, o, e, s) => (C(t, o, "write to private field"), s ? s.call(t, e) : o.set(t, e), e);
import { WebGLRenderer as O } from "./index.es15.js";
import y from "./index.es16.js";
import { GameBaseClient as N } from "./index.es2.js";
import { Physics as P } from "./index.es9.js";
import { useThree as R } from "./index.es7.js";
import { GameObjectNetworkedBaseClient as j } from "./index.es4.js";
import { OrbitControls as W } from "./index.es17.js";
import { Clock as v, Scene as E, PerspectiveCamera as H, PlaneGeometry as I, MeshBasicMaterial as G, BoxGeometry as J, Quaternion as Q } from "./index.es14.js";
class F extends j {
  constructor() {
    super(...arguments);
    p(this, "cubeMesh");
    p(this, "cubeUserData");
  }
  async setup() {
    const { resources: e, createGeometry: s, createMaterial: r, createMesh: c } = R(this.threeResourceManager), m = e.scene, M = s(() => new J(1, 1, 1)), f = r(() => new G({ color: 1118651 })), h = c(M, f);
    this.cubeMesh = h, m.add(h);
    const l = this.world.createRigidBody(
      y.RigidBodyDesc.dynamic().setCanSleep(!1)
    );
    l.setTranslation({ x: 0, y: 3, z: 0 }, !0), this.root = l, this.world.createCollider(
      y.ColliderDesc.cuboid(0.5, 0.5, 0.5).setRestitution(2),
      l
    );
  }
  physicsLoopLogic(e) {
  }
  drawLoopLogic(e) {
    const s = this.translation(), r = this.rotation();
    this.cubeMesh.position.set(s.x, s.y, s.z), this.cubeMesh.rotation.setFromQuaternion(new Q(r.x, r.y, r.z, r.w));
  }
}
var n, u, k, a, g;
class $ extends N {
  constructor(e) {
    super();
    d(this, n);
    d(this, u);
    d(this, k);
    d(this, a);
    d(this, g);
    p(this, "camera");
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     * Runs at 10Hz.
     */
    p(this, "startNetworkLoop", () => {
      const e = i(this, u).getDelta(), s = performance.now();
      this.networkLoopLogic(e);
      const r = performance.now();
      w(this, g, setTimeout(this.startNetworkLoop, 1e3 - (r - s)));
    });
    w(this, n, e), i(this, n).onerror = (s) => {
      console.log("socket error");
    }, i(this, n).onopen = (s) => {
      console.log("socket open");
    }, i(this, n).onmessage = (s) => {
      const r = JSON.parse(s.data);
      console.log(r);
    }, w(this, u, new v(!0));
  }
  async setup(e) {
    const s = { x: 0, y: -10, z: 0 };
    this.physics = await P.setup(s);
    const r = this.physics.world, { resources: c, createGeometry: m, createMaterial: M, createMesh: f } = R(this.threeResourceManager), h = new O();
    h.setSize(window.innerWidth, window.innerHeight), e.replaceChildren(h.domElement), c.setRenderer(h);
    const l = new E();
    c.setScene(l), this.camera = new H(60, window.innerWidth / window.innerHeight), this.camera.position.set(0, 8, -20);
    const S = new W(this.camera, h.domElement);
    c.setControls(S);
    const T = m(() => new I(20, 20)), z = M(() => new G({ color: 1162001 })), L = f(T, z);
    L.rotation.x = -Math.PI / 2, l.add(L);
    const b = r.createRigidBody(
      y.RigidBodyDesc.fixed()
    );
    b.setTranslation({ x: 0, y: -0.1, z: 0 }, !0), r.createCollider(
      y.ColliderDesc.cuboid(10, 0.1, 10),
      b
    ), w(this, a, new F(r, this.threeResourceManager, { id: "", networked: !0 })), await i(this, a).setup();
  }
  /**
   * Shares local state with the server.
   * @param deltaTime time elapsed since last call.
   */
  networkLoopLogic(e) {
    if (i(this, n).readyState !== WebSocket.OPEN)
      return;
    const s = i(this, a).translation(), r = i(this, a).rotation(), c = {
      userData: i(this, a).userData,
      translation: {
        x: s.x,
        y: s.y,
        z: s.z
      },
      rotation: {
        x: r.x,
        y: r.y,
        z: r.z,
        w: r.w
      }
    }, m = JSON.stringify(c);
    i(this, n).send(m);
  }
  physicsLoopLogic(e) {
    this.physics.world.step();
  }
  drawLoopLogic(e) {
    i(this, a).drawLoopLogic(e), this.threeResourceManager.controls.update(), this.threeResourceManager.renderer.render(this.threeResourceManager.scene, this.camera);
  }
  derivedCleanup() {
    clearTimeout(i(this, g)), i(this, n).close(3001, "exiting game");
  }
}
n = new WeakMap(), u = new WeakMap(), k = new WeakMap(), a = new WeakMap(), g = new WeakMap();
export {
  $ as GameBaseMultiplayerClient
};
