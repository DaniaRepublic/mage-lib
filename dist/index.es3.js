var v = Object.defineProperty;
var z = (s) => {
  throw TypeError(s);
};
var E = (s, r, e) => r in s ? v(s, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[r] = e;
var y = (s, r, e) => E(s, typeof r != "symbol" ? r + "" : r, e), B = (s, r, e) => r.has(s) || z("Cannot " + e);
var i = (s, r, e) => (B(s, r, "read from private field"), e ? e.call(s) : r.get(s)), c = (s, r, e) => r.has(s) ? z("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(s) : r.set(s, e), h = (s, r, e, t) => (B(s, r, "write to private field"), t ? t.call(s, e) : r.set(s, e), e);
import { WebGLRenderer as J } from "./index.es15.js";
import m from "./index.es16.js";
import { GameBase as W, GameBaseClient as I } from "./index.es2.js";
import { Physics as D } from "./index.es9.js";
import { useThree as S } from "./index.es7.js";
import { GameObjectNetworkedBase as H, GameObjectNetworkedBaseClient as Q } from "./index.es4.js";
import { OrbitControls as U } from "./index.es17.js";
import { Clock as G, Scene as F, PerspectiveCamera as q, PlaneGeometry as A, MeshBasicMaterial as O, BoxGeometry as K, Quaternion as V } from "./index.es14.js";
class X extends H {
  constructor() {
    super(...arguments);
    y(this, "cubeUserData");
  }
  async setup() {
    const e = this.world.createRigidBody(
      m.RigidBodyDesc.dynamic().setCanSleep(!1)
    );
    e.setTranslation({ x: 0, y: 3, z: 0 }, !0), this.root = e, this.world.createCollider(
      m.ColliderDesc.cuboid(0.5, 0.5, 0.5).setRestitution(2),
      e
    );
  }
  physicsLoopLogic(e) {
  }
}
var g, L, k, x;
class ne extends W {
  constructor(e) {
    super();
    c(this, g);
    c(this, L);
    c(this, k);
    c(this, x);
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     * Runs at 10Hz.
     */
    y(this, "startNetworkLoop", () => {
      const e = i(this, L).getDelta(), t = performance.now();
      this.networkLoopLogic(e);
      const o = performance.now();
      h(this, x, setTimeout(this.startPhysicsLoop, 1e3 - (o - t)));
    });
    h(this, g, new Set(e)), h(this, L, new G(!0)), h(this, k, /* @__PURE__ */ new WeakMap());
  }
  addClient(e) {
    e.onerror = (t) => {
      console.log("socket error");
    }, e.onopen = async (t) => {
      console.log("socket open");
      const o = new X(this.physics.world, { id: "1", networked: !0 });
      await o.setup(), i(this, k).set(e, o);
    }, e.onmessage = (t) => {
      const o = JSON.parse(t.data);
      console.log(o);
    }, e.onclose = (t) => {
      i(this, k).delete(e);
    };
  }
  // Setup physical world.
  async setup() {
    const e = { x: 0, y: -10, z: 0 };
    this.physics = await D.setup(e);
    const t = this.physics.world, o = t.createRigidBody(
      m.RigidBodyDesc.fixed()
    );
    o.setTranslation({ x: 0, y: -0.1, z: 0 }, !0), t.createCollider(
      m.ColliderDesc.cuboid(10, 0.1, 10),
      o
    );
  }
  /**
   * Shares network state with all connected clients.
   * @param deltaTime time elapsed since last call.
   */
  networkLoopLogic(e) {
    let t = [];
    i(this, g).forEach((n) => {
      const a = i(this, k).get(n);
      if (!a) return;
      const u = a.translation(), w = a.rotation(), d = {
        userData: a.userData,
        translation: {
          x: u.x,
          y: u.y,
          z: u.z
        },
        rotation: {
          x: w.x,
          y: w.y,
          z: w.z,
          w: w.w
        }
      };
      t.push(d);
    });
    const o = JSON.stringify(t);
    i(this, g).forEach((n) => {
      n.send(o);
    });
  }
  physicsLoopLogic(e) {
    this.physics.world.step();
  }
  derivedCleanup() {
    clearTimeout(i(this, x)), i(this, g).forEach((e) => e.close(3001, "game ended"));
  }
}
g = new WeakMap(), L = new WeakMap(), k = new WeakMap(), x = new WeakMap();
class Y extends Q {
  constructor() {
    super(...arguments);
    y(this, "cubeMesh");
    y(this, "cubeUserData");
  }
  async setup() {
    const { resources: e, createGeometry: t, createMaterial: o, createMesh: n } = S(this.threeResourceManager), a = e.scene, u = t(() => new K(1, 1, 1)), w = o(() => new O({ color: 1118651 })), d = n(u, w);
    this.cubeMesh = d, a.add(d);
    const f = this.world.createRigidBody(
      m.RigidBodyDesc.kinematicPositionBased().setCanSleep(!1)
    );
    f.setTranslation({ x: 0, y: 3, z: 0 }, !0), this.root = f, this.world.createCollider(
      m.ColliderDesc.cuboid(0.5, 0.5, 0.5).setRestitution(2),
      f
    );
  }
  physicsLoopLogic(e) {
  }
  drawLoopLogic(e) {
    const t = this.translation(), o = this.rotation();
    this.cubeMesh.position.set(t.x, t.y, t.z), this.cubeMesh.rotation.setFromQuaternion(new V(o.x, o.y, o.z, o.w));
  }
}
var l, b, M, p, C;
class ae extends I {
  constructor(e) {
    super();
    c(this, l);
    c(this, b);
    c(this, M);
    c(this, p);
    c(this, C);
    y(this, "camera");
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     * Runs at 10Hz.
     */
    y(this, "startNetworkLoop", () => {
      const e = i(this, b).getDelta(), t = performance.now();
      this.networkLoopLogic(e);
      const o = performance.now();
      h(this, C, setTimeout(this.startNetworkLoop, 1e3 - (o - t)));
    });
    h(this, l, e), i(this, l).onerror = (t) => {
      console.log("socket error");
    }, i(this, l).onopen = (t) => {
      console.log("socket open");
    }, i(this, l).onmessage = (t) => {
      const o = JSON.parse(t.data);
      console.log(o);
    }, h(this, b, new G(!0));
  }
  async setup(e) {
    const t = { x: 0, y: -10, z: 0 };
    this.physics = await D.setup(t);
    const o = this.physics.world, { resources: n, createGeometry: a, createMaterial: u, createMesh: w } = S(this.threeResourceManager), d = new J();
    d.setSize(window.innerWidth, window.innerHeight), e.replaceChildren(d.domElement), n.setRenderer(d);
    const f = new F();
    n.setScene(f), this.camera = new q(60, window.innerWidth / window.innerHeight), this.camera.position.set(0, 8, -20);
    const N = new U(this.camera, d.domElement);
    n.setControls(N);
    const j = a(() => new A(20, 20)), P = u(() => new O({ color: 1162001 })), T = w(j, P);
    T.rotation.x = -Math.PI / 2, f.add(T);
    const R = o.createRigidBody(
      m.RigidBodyDesc.fixed()
    );
    R.setTranslation({ x: 0, y: -0.1, z: 0 }, !0), o.createCollider(
      m.ColliderDesc.cuboid(10, 0.1, 10),
      R
    ), h(this, p, new Y(o, this.threeResourceManager, { id: "", networked: !0 })), await i(this, p).setup();
  }
  /**
   * Shares local state with the server.
   * @param deltaTime time elapsed since last call.
   */
  networkLoopLogic(e) {
    if (i(this, l).readyState !== WebSocket.OPEN)
      return;
    const t = i(this, p).translation(), o = i(this, p).rotation(), n = {
      userData: i(this, p).userData,
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
    }, a = JSON.stringify(n);
    i(this, l).send(a);
  }
  physicsLoopLogic(e) {
    this.physics.world.step();
  }
  drawLoopLogic(e) {
    i(this, p).drawLoopLogic(e), this.threeResourceManager.controls.update(), this.threeResourceManager.renderer.render(this.threeResourceManager.scene, this.camera);
  }
  derivedCleanup() {
    clearTimeout(i(this, C)), i(this, l).close(3001, "exiting game");
  }
}
l = new WeakMap(), b = new WeakMap(), M = new WeakMap(), p = new WeakMap(), C = new WeakMap();
export {
  ae as GameBaseMultiplayerClient,
  ne as GameBaseMultiplayerServer
};
