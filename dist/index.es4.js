var $ = Object.defineProperty;
var P = (r) => {
  throw TypeError(r);
};
var H = (r, n, t) => n in r ? $(r, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[n] = t;
var f = (r, n, t) => H(r, typeof n != "symbol" ? n + "" : n, t), z = (r, n, t) => n.has(r) || P("Cannot " + t);
var i = (r, n, t) => (z(r, n, "read from private field"), t ? t.call(r) : n.get(r)), h = (r, n, t) => n.has(r) ? P("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(r) : n.set(r, t), l = (r, n, t, e) => (z(r, n, "write to private field"), e ? e.call(r, t) : n.set(r, t), t);
import S from "./index.es16.js";
import { WebGLRenderer as V } from "./index.es17.js";
import { Physics as O } from "./index.es10.js";
import { useThree as _ } from "./index.es8.js";
import { GameBase as A, GameBaseClient as K } from "./index.es2.js";
import { getStateFromNetworkedObject as C } from "./index.es3.js";
import { NetworkedPlayerServer as Q, NetworkedPlayerClient as G } from "./index.es19.js";
import { PointerLockControls as U } from "./index.es20.js";
import { Clock as v, Scene as q, PerspectiveCamera as J, PlaneGeometry as X, MeshBasicMaterial as Y, Vector3 as j, Quaternion as B } from "./index.es15.js";
const W = 100;
var d, R, p, T;
class ht extends A {
  constructor(t) {
    super();
    h(this, d);
    h(this, R);
    h(this, p);
    h(this, T);
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     */
    f(this, "startNetworkLoop", () => {
      const t = i(this, R).getDelta(), e = performance.now();
      this.networkLoopLogic(t);
      const o = performance.now();
      l(this, T, setTimeout(this.startNetworkLoop, W - (o - e)));
    });
    l(this, d, new Set(t)), l(this, R, new v(!0)), l(this, p, /* @__PURE__ */ new WeakMap());
  }
  /**
   * This function adds a client to the server instance of the game.
   * It should configure socket events and config 
   * @param socket client socket.io socket
   */
  async addClient(t) {
    const e = t.id;
    console.log(`socket ${e} connected.`);
    const o = new Q(this.physics.world, { id: e, networked: !0 });
    await o.setup(), i(this, p).set(t, o), i(this, d).add(t), t.on("state:player", (s) => {
      o.addNetworkedPlayerStates(s);
    }), t.on("disconnect", (s) => {
      this.physics.world.removeRigidBody(o.root), i(this, p).delete(t), i(this, d).delete(t), this.notifyClientsClientLeft(e), console.log(`socket ${e} disconnected because: ${s}.`);
    }), this.notifyClientsNewClient(o), this.shareStateWithClient(t);
  }
  shareStateWithClient(t) {
    let e = [];
    i(this, d).forEach((o) => {
      if (o.id === t.id) return;
      const s = i(this, p).get(o), c = C(s);
      e.push(c);
    }), t.emit("client:new", { data: e });
  }
  notifyClientsNewClient(t) {
    const e = C(t);
    i(this, d).forEach((o) => {
      o.id !== t.userData.id && o.emit("client:new", { data: [e] });
    });
  }
  notifyClientsClientLeft(t) {
    i(this, d).forEach((e) => {
      e.emit("client:left", t);
    });
  }
  // Setup physical world.
  async setup() {
    const t = { x: 0, y: -10, z: 0 };
    this.physics = await O.setup(t);
    const e = this.physics.world, o = e.createRigidBody(
      S.RigidBodyDesc.fixed()
    );
    o.setTranslation({ x: 0, y: -0.1, z: 0 }, !0), e.createCollider(
      S.ColliderDesc.cuboid(10, 0.1, 10),
      o
    );
  }
  /**
   * Shares network state with all connected clients.
   * @param deltaTime time elapsed since last call.
   */
  networkLoopLogic(t) {
    let e = [];
    i(this, d).forEach((o) => {
      const s = i(this, p).get(o), c = C(s);
      e.push(c);
    }), i(this, d).forEach((o) => {
      o.emit("state:objects", e);
    });
  }
  physicsLoopLogic(t) {
    i(this, d).forEach((e) => {
      i(this, p).get(e).physicsLoopLogic(t);
    }), this.physics.world.step();
  }
  derivedCleanup() {
    clearTimeout(i(this, T)), i(this, d).forEach((t) => t.disconnect(!0));
  }
}
d = new WeakMap(), R = new WeakMap(), p = new WeakMap(), T = new WeakMap();
var m, D, M, g, w, a, x, b;
class lt extends K {
  constructor(t) {
    super();
    h(this, m);
    h(this, D);
    h(this, M);
    /** In sec. */
    h(this, g);
    h(this, w);
    h(this, a);
    h(this, x);
    h(this, b);
    f(this, "camera");
    f(this, "controls");
    f(this, "domGameRoot");
    f(this, "handleClick", (t) => {
      this.controls.lock();
    });
    /**
     * Needs to be an arrow function to save 'this' reference to the class in function scope.
     */
    f(this, "startNetworkLoop", () => {
      const t = i(this, D).getDelta(), e = performance.now();
      this.networkLoopLogic(t);
      const o = performance.now();
      l(this, x, setTimeout(this.startNetworkLoop, W - (o - e)));
    });
    l(this, w, /* @__PURE__ */ new Map()), l(this, D, new v(!0)), l(this, M, new v(!0)), l(this, m, t), t.on("connect", () => {
      clearTimeout(i(this, b));
      const e = (o, s) => {
        if (o > s)
          throw new Error("Too many attempts connecting to server.");
        i(this, a) ? i(this, a)[0].userData.id = t.id : l(this, b, setTimeout(() => {
          e(o + 1, s);
        }, 150));
      };
      e(1, 3);
    }), t.on("state:objects", (e) => {
      l(this, g, i(this, M).getDelta());
      for (const o of e)
        o.userData.id === t.id ? i(this, a)[1] = o : i(this, w).get(o.userData.id)[1] = o;
    }), t.on("client:new", async (e) => {
      console.log("new clients connected, their data:", e);
      const o = e.data;
      for (const s of o) {
        const c = new G(this.physics.world, this.threeResourceManager, { id: s.userData.id, networked: !0 }, null);
        await c.setup(), c.root.setTranslation(s.translation, !0), c.root.setRotation(s.rotation, !0), i(this, w).set(s.userData.id, [c, null]);
      }
    }), t.on("client:left", (e) => {
      console.log("client disconnected.");
      const o = i(this, w).get(e)[0];
      o && (this.physics.world.removeRigidBody(o.root), i(this, w).delete(e), o.rendererRoot.removeFromParent());
    }), t.on("disconnect", (e) => {
      t.active || console.log(`socket disconnected because: ${e}.`);
    });
  }
  async setup(t) {
    this.domGameRoot = t;
    const e = { x: 0, y: -10, z: 0 };
    this.physics = await O.setup(e);
    const o = this.physics.world, { resources: s, createGeometry: c, createMaterial: y, createMesh: L } = _(this.threeResourceManager), k = new V();
    k.setSize(window.innerWidth, window.innerHeight), t.replaceChildren(k.domElement), s.setRenderer(k);
    const u = new q();
    s.setScene(u), this.camera = new J(75, window.innerWidth / window.innerHeight, 0.1, 1e3), this.controls = new U(this.camera, this.domGameRoot), s.setControls(this.controls), u.add(this.controls.object), this.domGameRoot.addEventListener("click", this.handleClick);
    const I = c(() => new X(20, 20)), F = y(() => new Y({ color: 8947899 })), E = L(I, F);
    E.rotation.x = -Math.PI / 2, u.add(E);
    const N = o.createRigidBody(
      S.RigidBodyDesc.fixed()
    );
    N.setTranslation({ x: 0, y: -0.1, z: 0 }, !0), o.createCollider(
      S.ColliderDesc.cuboid(10, 0.1, 10),
      N
    ), l(this, a, [new G(o, this.threeResourceManager, { id: i(this, m).id, networked: !0 }, this.camera), null]), await i(this, a)[0].setup();
  }
  /**
   * Shares local state with the server.
   * @param deltaTime time elapsed since last call.
   */
  networkLoopLogic(t) {
    if (!i(this, m).connected)
      return;
    const e = i(this, a)[0].networkedPlayerStates;
    i(this, a)[0].emptyNetworkedPlayerStates(), i(this, m).emit("state:player", e);
  }
  /**
   * Interpolate between current and target network states
   * use lerp for position and slerp for rotation.
   * @param current
   * @param target
   */
  interpolate(t, e, o) {
    const s = new j(t.translation.x, t.translation.y, t.translation.z), c = new j(e.translation.x, e.translation.y, e.translation.z), y = s.lerp(c, o), L = new B(t.rotation.x, t.rotation.y, t.rotation.z, t.rotation.w), k = new B(e.rotation.x, e.rotation.y, e.rotation.z, e.rotation.w), u = L.slerp(k, o);
    return {
      userData: { ...t.userData },
      translation: {
        x: y.x,
        y: y.y,
        z: y.z
      },
      rotation: {
        x: u.x,
        y: u.y,
        z: u.z,
        w: u.w
      }
    };
  }
  physicsLoopLogic(t) {
    if (i(this, a)[0].physicsLoopLogic(t), i(this, a)[1]) {
      const e = C(i(this, a)[0]), o = Math.min(this.physicsLoopTook / (i(this, g) * 1e3), 1), { translation: s, rotation: c } = this.interpolate(e, i(this, a)[1], o);
      i(this, a)[0].root.setTranslation(s, !0), i(this, a)[0].root.setRotation(c, !0);
    }
    i(this, w).forEach(([e, o]) => {
      if (!o) return;
      const s = C(e), c = Math.min(this.physicsLoopTook / (i(this, g) * 1e3), 1), { translation: y, rotation: L } = this.interpolate(s, o, c);
      e.root.setTranslation(y, !0), e.root.setRotation(L, !0);
    }), this.physics.world.step();
  }
  drawLoopLogic(t) {
    i(this, a)[0].drawLoopLogic(t), i(this, w).forEach(([o]) => {
      o.drawLoopLogic(t);
    }), this.threeResourceManager.controls.update(), this.threeResourceManager.renderer.render(this.threeResourceManager.scene, this.camera);
  }
  derivedCleanup() {
    clearTimeout(i(this, x)), i(this, m).disconnect();
  }
}
m = new WeakMap(), D = new WeakMap(), M = new WeakMap(), g = new WeakMap(), w = new WeakMap(), a = new WeakMap(), x = new WeakMap(), b = new WeakMap();
export {
  lt as GameWithPlayerMultiplayerClient,
  ht as GameWithPlayerMultiplayerServer
};
