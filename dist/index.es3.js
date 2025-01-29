var _ = Object.defineProperty;
var S = (r) => {
  throw TypeError(r);
};
var A = (r, i, t) => i in r ? _(r, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[i] = t;
var B = (r, i, t) => A(r, typeof i != "symbol" ? i + "" : i, t), O = (r, i, t) => i.has(r) || S("Cannot " + t);
var s = (r, i, t) => (O(r, i, "read from private field"), t ? t.call(r) : i.get(r)), c = (r, i, t) => i.has(r) ? S("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(r) : i.set(r, t), d = (r, i, t, e) => (O(r, i, "write to private field"), e ? e.call(r, t) : i.set(r, t), t);
import y from "./index.es16.js";
import { WebGLRenderer as K } from "./index.es17.js";
import { Physics as P } from "./index.es10.js";
import { useThree as W } from "./index.es8.js";
import { GameBase as U, GameBaseClient as q } from "./index.es2.js";
import { GameObjectNetworkedBase as J, GameObjectNetworkedBaseClient as X } from "./index.es5.js";
import { OrbitControls as Y } from "./index.es18.js";
import { Clock as G, Scene as Z, PerspectiveCamera as tt, PlaneGeometry as et, MeshBasicMaterial as $, Vector3 as j, Quaternion as N, BoxGeometry as ot } from "./index.es15.js";
const F = 1e3;
function R(r) {
  const i = r.translation(), t = r.rotation();
  return {
    userData: r.userData,
    translation: {
      x: i.x,
      y: i.y,
      z: i.z
    },
    rotation: {
      x: t.x,
      y: t.y,
      z: t.z,
      w: t.w
    }
  };
}
class st extends J {
  async setup() {
    const i = this.world.createRigidBody(
      y.RigidBodyDesc.dynamic()
    );
    i.setTranslation({ x: 0, y: 3, z: 0 }, !0), this.root = i, this.world.createCollider(
      y.ColliderDesc.cuboid(0.5, 0.5, 0.5).setRestitution(2),
      i
    );
  }
  physicsLoopLogic(i) {
  }
}
var l, T, p, x;
class ut extends U {
  constructor(t) {
    super();
    c(this, l);
    c(this, T);
    c(this, p);
    c(this, x);
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     */
    B(this, "startNetworkLoop", () => {
      const t = s(this, T).getDelta(), e = performance.now();
      this.networkLoopLogic(t);
      const o = performance.now();
      d(this, x, setTimeout(this.startNetworkLoop, F - (o - e)));
    });
    d(this, l, new Set(t)), d(this, T, new G(!0)), d(this, p, /* @__PURE__ */ new WeakMap());
  }
  /**
   * This function adds a client to the server instance of the game.
   * It should configure socket events and config 
   * @param socket client socket.io socket
   */
  async addClient(t) {
    const e = t.id;
    console.log(`socket ${e} connected.`);
    const o = new st(this.physics.world, { id: e, networked: !0 });
    await o.setup(), t.on("state:player", (n) => {
      console.log(`msg from ${e}:`, n), n.userData.id;
    }), t.on("disconnect", (n) => {
      this.physics.world.removeRigidBody(s(this, p).get(t).root), s(this, p).delete(t), s(this, l).delete(t), this.notifyClientsClientLeft(e), console.log(`socket ${e} disconnected because: ${n}.`);
    }), s(this, p).set(t, o), s(this, l).add(t), this.notifyClientsNewClient(o), this.shareStateWithClient(t);
  }
  shareStateWithClient(t) {
    let e = [];
    s(this, l).forEach((o) => {
      if (o.id === t.id) return;
      const n = s(this, p).get(o), a = R(n);
      e.push(a);
    }), t.emit("client:new", { data: e });
  }
  notifyClientsNewClient(t) {
    const e = R(t);
    s(this, l).forEach((o) => {
      o.id !== t.userData.id && o.emit("client:new", { data: [e] });
    });
  }
  notifyClientsClientLeft(t) {
    s(this, l).forEach((e) => {
      e.emit("client:left", t);
    });
  }
  // Setup physical world.
  async setup() {
    const t = { x: 0, y: -10, z: 0 };
    this.physics = await P.setup(t);
    const e = this.physics.world, o = e.createRigidBody(
      y.RigidBodyDesc.fixed()
    );
    o.setTranslation({ x: 0, y: -0.1, z: 0 }, !0), e.createCollider(
      y.ColliderDesc.cuboid(10, 0.1, 10),
      o
    );
  }
  /**
   * Shares network state with all connected clients.
   * @param deltaTime time elapsed since last call.
   */
  networkLoopLogic(t) {
    let e = [];
    s(this, l).forEach((o) => {
      const n = s(this, p).get(o), a = R(n);
      e.push(a);
    }), s(this, l).forEach((o) => {
      o.emit("state:objects", e);
    });
  }
  physicsLoopLogic(t) {
    this.physics.world.step();
  }
  derivedCleanup() {
    clearTimeout(s(this, x)), s(this, l).forEach((t) => t.disconnect(!0));
  }
}
l = new WeakMap(), T = new WeakMap(), p = new WeakMap(), x = new WeakMap();
class I extends X {
  async setup() {
    const { resources: i, createGeometry: t, createMaterial: e, createMesh: o } = W(this.threeResourceManager), n = i.scene, a = t(() => new ot(1, 1, 1)), f = e(() => new $({ color: 1118651 })), C = o(a, f);
    this.rendererRoot = C, n.add(C);
    const w = this.world.createRigidBody(
      y.RigidBodyDesc.kinematicPositionBased()
    );
    w.setTranslation({ x: 0, y: 3, z: 0 }, !0), this.root = w, this.world.createCollider(
      y.ColliderDesc.cuboid(0.5, 0.5, 0.5).setRestitution(2),
      w
    );
  }
  physicsLoopLogic(i) {
  }
  drawLoopLogic(i) {
    const t = this.translation(), e = this.rotation();
    this.rendererRoot.position.set(t.x, t.y, t.z), this.rendererRoot.rotation.setFromQuaternion(new N(e.x, e.y, e.z, e.w));
  }
}
var m, D, b, k, u, h, M, L, z;
class pt extends q {
  constructor(t) {
    super();
    c(this, m);
    c(this, D);
    c(this, b);
    /** In sec. */
    c(this, k);
    c(this, u);
    c(this, h);
    c(this, M);
    c(this, L, null);
    c(this, z);
    B(this, "camera");
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     */
    B(this, "startNetworkLoop", () => {
      const t = s(this, D).getDelta(), e = performance.now();
      this.networkLoopLogic(t);
      const o = performance.now();
      d(this, M, setTimeout(this.startNetworkLoop, F - (o - e)));
    });
    d(this, u, /* @__PURE__ */ new Map()), d(this, D, new G(!0)), d(this, b, new G(!0)), d(this, m, t), t.on("connect", () => {
      clearTimeout(s(this, z));
      const e = (o, n) => {
        if (o > n)
          throw new Error("Too many attempts connecting to server.");
        s(this, h) ? s(this, h).userData.id = t.id : d(this, z, setTimeout(() => {
          e(o + 1, n);
        }, 150));
      };
      e(1, 3);
    }), t.on("state:objects", (e) => {
      var o, n;
      d(this, k, s(this, b).getDelta());
      for (const a of e)
        a.userData.id === t.id ? d(this, L, a) : ((o = s(this, u).get(a.userData.id)) == null || o.root.setTranslation(a.translation, !0), (n = s(this, u).get(a.userData.id)) == null || n.root.setRotation(a.rotation, !0));
    }), t.on("client:new", async (e) => {
      console.log("new clients connected, their data:", e);
      const o = e.data;
      for (const n of o) {
        const a = new I(this.physics.world, this.threeResourceManager, { id: n.userData.id, networked: !0 });
        await a.setup(), a.root.setTranslation(n.translation, !0), a.root.setRotation(n.rotation, !0), s(this, u).set(n.userData.id, a);
      }
    }), t.on("client:left", (e) => {
      console.log("client disconnected.");
      const o = s(this, u).get(e);
      o && (this.physics.world.removeRigidBody(o.root), s(this, u).delete(e), o.rendererRoot.removeFromParent());
    }), t.on("disconnect", (e) => {
      t.active || console.log(`socket disconnected because: ${e}.`);
    });
  }
  async setup(t) {
    const e = { x: 0, y: -10, z: 0 };
    this.physics = await P.setup(e);
    const o = this.physics.world, { resources: n, createGeometry: a, createMaterial: f, createMesh: C } = W(this.threeResourceManager), w = new K();
    w.setSize(window.innerWidth, window.innerHeight), t.replaceChildren(w.domElement), n.setRenderer(w);
    const g = new Z();
    n.setScene(g), this.camera = new tt(60, window.innerWidth / window.innerHeight), this.camera.position.set(0, 8, -20);
    const H = new Y(this.camera, w.domElement);
    n.setControls(H);
    const Q = a(() => new et(20, 20)), V = f(() => new $({ color: 1162001 })), v = C(Q, V);
    v.rotation.x = -Math.PI / 2, g.add(v);
    const E = o.createRigidBody(
      y.RigidBodyDesc.fixed()
    );
    E.setTranslation({ x: 0, y: -0.1, z: 0 }, !0), o.createCollider(
      y.ColliderDesc.cuboid(10, 0.1, 10),
      E
    ), d(this, h, new I(o, this.threeResourceManager, { id: s(this, m).id, networked: !0 })), await s(this, h).setup();
  }
  /**
   * Shares local state with the server.
   * @param deltaTime time elapsed since last call.
   */
  networkLoopLogic(t) {
    if (!s(this, m).connected)
      return;
    const e = R(s(this, h));
    s(this, m).emit("state:player", e);
  }
  /**
   * Interpolate between current and target network states
   * use lerp for position and slerp for rotation.
   * @param current
   * @param target
   */
  interpolate(t, e, o) {
    const n = new j(t.translation.x, t.translation.y, t.translation.z), a = new j(e.translation.x, e.translation.y, e.translation.z), f = n.lerp(a, o), C = new N(t.rotation.x, t.rotation.y, t.rotation.z, t.rotation.w), w = new N(e.rotation.x, e.rotation.y, e.rotation.z, e.rotation.w), g = C.slerp(w, o);
    return {
      userData: { ...t.userData },
      translation: {
        x: f.x,
        y: f.y,
        z: f.z
      },
      rotation: {
        x: g.x,
        y: g.y,
        z: g.z,
        w: g.w
      }
    };
  }
  physicsLoopLogic(t) {
    if (s(this, L)) {
      const e = R(s(this, h)), o = Math.min(this.physicsLoopTook / (s(this, k) * 1e3), 1), { translation: n, rotation: a } = this.interpolate(e, s(this, L), o);
      s(this, h).root.setTranslation(n, !0), s(this, h).root.setRotation(a, !0);
    }
    this.physics.world.step();
  }
  drawLoopLogic(t) {
    s(this, h).drawLoopLogic(t), s(this, u).forEach((o) => {
      o.drawLoopLogic(t);
    }), this.threeResourceManager.controls.update(), this.threeResourceManager.renderer.render(this.threeResourceManager.scene, this.camera);
  }
  derivedCleanup() {
    clearTimeout(s(this, M)), s(this, m).disconnect();
  }
}
m = new WeakMap(), D = new WeakMap(), b = new WeakMap(), k = new WeakMap(), u = new WeakMap(), h = new WeakMap(), M = new WeakMap(), L = new WeakMap(), z = new WeakMap();
export {
  pt as GameBaseMultiplayerClient,
  ut as GameBaseMultiplayerServer,
  R as getStateFromNetworkedObject
};
