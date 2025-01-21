var E = Object.defineProperty;
var z = (s) => {
  throw TypeError(s);
};
var P = (s, i, e) => i in s ? E(s, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[i] = e;
var y = (s, i, e) => P(s, typeof i != "symbol" ? i + "" : i, e), B = (s, i, e) => i.has(s) || z("Cannot " + e);
var r = (s, i, e) => (B(s, i, "read from private field"), e ? e.call(s) : i.get(s)), c = (s, i, e) => i.has(s) ? z("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(s) : i.set(s, e), h = (s, i, e, t) => (B(s, i, "write to private field"), t ? t.call(s, e) : i.set(s, e), e);
import { WebGLRenderer as J } from "./index.es15.js";
import u from "./index.es16.js";
import { GameBase as W, GameBaseClient as I } from "./index.es2.js";
import { Physics as D } from "./index.es9.js";
import { useThree as S } from "./index.es7.js";
import { GameObjectNetworkedBase as H, GameObjectNetworkedBaseClient as Q } from "./index.es4.js";
import { OrbitControls as U } from "./index.es17.js";
import { Clock as G, Scene as $, PerspectiveCamera as F, PlaneGeometry as q, MeshBasicMaterial as N, BoxGeometry as A, Quaternion as K } from "./index.es14.js";
class V extends H {
  constructor() {
    super(...arguments);
    y(this, "cubeUserData");
  }
  async setup() {
    const e = this.world.createRigidBody(
      u.RigidBodyDesc.dynamic().setCanSleep(!1)
    );
    e.setTranslation({ x: 0, y: 3, z: 0 }, !0), this.root = e, this.world.createCollider(
      u.ColliderDesc.cuboid(0.5, 0.5, 0.5).setRestitution(2),
      e
    );
  }
  physicsLoopLogic(e) {
  }
}
var p, L, f, x;
class ne extends W {
  constructor(e) {
    super();
    c(this, p);
    c(this, L);
    c(this, f);
    c(this, x);
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     * Runs at 10Hz.
     */
    y(this, "startNetworkLoop", () => {
      console.log("running network loop");
      const e = r(this, L).getDelta(), t = performance.now();
      this.networkLoopLogic(e);
      const o = performance.now();
      h(this, x, setTimeout(this.startNetworkLoop, 1e3 - (o - t)));
    });
    h(this, p, new Set(e)), h(this, L, new G(!0)), h(this, f, /* @__PURE__ */ new WeakMap()), console.log("hi");
  }
  addClient(e) {
    e.onerror = (t) => {
      console.log("socket error");
    }, e.onopen = async (t) => {
      console.log("socket open");
      const o = new V(this.physics.world, { id: "1", networked: !0 });
      await o.setup(), r(this, f).set(e, o), r(this, p).add(e);
    }, e.onmessage = (t) => {
      const o = JSON.parse(t.data);
      console.log(`msg from ${e.url}:`, o);
    }, e.onclose = (t) => {
      r(this, f).delete(e), r(this, p).delete(e);
    };
  }
  // Setup physical world.
  async setup() {
    const e = { x: 0, y: -10, z: 0 };
    this.physics = await D.setup(e);
    const t = this.physics.world, o = t.createRigidBody(
      u.RigidBodyDesc.fixed()
    );
    o.setTranslation({ x: 0, y: -0.1, z: 0 }, !0), t.createCollider(
      u.ColliderDesc.cuboid(10, 0.1, 10),
      o
    );
  }
  /**
   * Shares network state with all connected clients.
   * @param deltaTime time elapsed since last call.
   */
  networkLoopLogic(e) {
    let t = [];
    r(this, p).forEach((n) => {
      const l = r(this, f).get(n), g = l.translation(), m = l.rotation(), d = {
        userData: l.userData,
        translation: {
          x: g.x,
          y: g.y,
          z: g.z
        },
        rotation: {
          x: m.x,
          y: m.y,
          z: m.z,
          w: m.w
        }
      };
      t.push(d);
    });
    const o = JSON.stringify(t);
    console.log("Networked state:", o), r(this, p).forEach((n) => {
      n.send(o);
    });
  }
  physicsLoopLogic(e) {
    this.physics.world.step();
  }
  derivedCleanup() {
    clearTimeout(r(this, x)), r(this, p).forEach((e) => e.close(3001, "game ended"));
  }
}
p = new WeakMap(), L = new WeakMap(), f = new WeakMap(), x = new WeakMap();
class X extends Q {
  constructor() {
    super(...arguments);
    y(this, "cubeMesh");
    y(this, "cubeUserData");
  }
  async setup() {
    const { resources: e, createGeometry: t, createMaterial: o, createMesh: n } = S(this.threeResourceManager), l = e.scene, g = t(() => new A(1, 1, 1)), m = o(() => new N({ color: 1118651 })), d = n(g, m);
    this.cubeMesh = d, l.add(d);
    const k = this.world.createRigidBody(
      u.RigidBodyDesc.kinematicPositionBased().setCanSleep(!1)
    );
    k.setTranslation({ x: 0, y: 3, z: 0 }, !0), this.root = k, this.world.createCollider(
      u.ColliderDesc.cuboid(0.5, 0.5, 0.5).setRestitution(2),
      k
    );
  }
  physicsLoopLogic(e) {
  }
  drawLoopLogic(e) {
    const t = this.translation(), o = this.rotation();
    this.cubeMesh.position.set(t.x, t.y, t.z), this.cubeMesh.rotation.setFromQuaternion(new K(o.x, o.y, o.z, o.w));
  }
}
var a, b, M, w, C;
class ae extends I {
  constructor(e) {
    super();
    c(this, a);
    c(this, b);
    c(this, M);
    c(this, w);
    c(this, C);
    y(this, "camera");
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     * Runs at 10Hz.
     */
    y(this, "startNetworkLoop", () => {
      const e = r(this, b).getDelta(), t = performance.now();
      this.networkLoopLogic(e);
      const o = performance.now();
      h(this, C, setTimeout(this.startNetworkLoop, 1e3 - (o - t)));
    });
    h(this, a, e), r(this, a).onerror = (t) => {
      console.log("socket error");
    }, r(this, a).onopen = (t) => {
      console.log("socket open");
    }, r(this, a).onmessage = (t) => {
      const o = JSON.parse(t.data);
      console.log(`msg from ${e.url}:`, o);
    }, r(this, a).onclose = (t) => {
      console.log("socket closed");
    }, h(this, b, new G(!0));
  }
  async setup(e) {
    const t = { x: 0, y: -10, z: 0 };
    this.physics = await D.setup(t);
    const o = this.physics.world, { resources: n, createGeometry: l, createMaterial: g, createMesh: m } = S(this.threeResourceManager), d = new J();
    d.setSize(window.innerWidth, window.innerHeight), e.replaceChildren(d.domElement), n.setRenderer(d);
    const k = new $();
    n.setScene(k), this.camera = new F(60, window.innerWidth / window.innerHeight), this.camera.position.set(0, 8, -20);
    const O = new U(this.camera, d.domElement);
    n.setControls(O);
    const j = l(() => new q(20, 20)), v = g(() => new N({ color: 1162001 })), T = m(j, v);
    T.rotation.x = -Math.PI / 2, k.add(T);
    const R = o.createRigidBody(
      u.RigidBodyDesc.fixed()
    );
    R.setTranslation({ x: 0, y: -0.1, z: 0 }, !0), o.createCollider(
      u.ColliderDesc.cuboid(10, 0.1, 10),
      R
    ), h(this, w, new X(o, this.threeResourceManager, { id: "", networked: !0 })), await r(this, w).setup();
  }
  /**
   * Shares local state with the server.
   * @param deltaTime time elapsed since last call.
   */
  networkLoopLogic(e) {
    if (r(this, a).readyState !== WebSocket.OPEN)
      return;
    const t = r(this, w).translation(), o = r(this, w).rotation(), n = {
      userData: r(this, w).userData,
      translation: {
        x: t.x,
        y: t.y,
        z: t.z
      },
      rotation: {
        x: o.x,
        y: o.y,
        z: o.z,
        w: o.w
      }
    }, l = JSON.stringify(n);
    r(this, a).send(l);
  }
  physicsLoopLogic(e) {
    this.physics.world.step();
  }
  drawLoopLogic(e) {
    r(this, w).drawLoopLogic(e), this.threeResourceManager.controls.update(), this.threeResourceManager.renderer.render(this.threeResourceManager.scene, this.camera);
  }
  derivedCleanup() {
    clearTimeout(r(this, C)), r(this, a).close(3001, "exiting game");
  }
}
a = new WeakMap(), b = new WeakMap(), M = new WeakMap(), w = new WeakMap(), C = new WeakMap();
export {
  ae as GameBaseMultiplayerClient,
  ne as GameBaseMultiplayerServer
};
