var J = Object.defineProperty;
var f = (e) => {
  throw TypeError(e);
};
var R = (e, o, t) => o in e ? J(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var n = (e, o, t) => R(e, typeof o != "symbol" ? o + "" : o, t), k = (e, o, t) => o.has(e) || f("Cannot " + t);
var h = (e, o, t) => (k(e, o, "read from private field"), t ? t.call(e) : o.get(e)), d = (e, o, t) => o.has(e) ? f("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(e) : o.set(e, t), v = (e, o, t, s) => (k(e, o, "write to private field"), s ? s.call(e, t) : o.set(e, t), t);
import p from "./index.es16.js";
import { useThree as N } from "./index.es8.js";
import { GameObjectNetworkedBase as z, GameObjectNetworkedBaseClient as j } from "./index.es5.js";
import { playerLayer as D } from "./index.es9.js";
import { KeyboardSingleton as G } from "./index.es6.js";
import { Vector3 as L, Quaternion as w, CapsuleGeometry as B, MeshBasicMaterial as F } from "./index.es15.js";
var m;
class W extends z {
  constructor() {
    super(...arguments);
    d(this, m, []);
    n(this, "jumpImpulse", 8);
    n(this, "speedCoefficient", 5);
    n(this, "runMultiplier", 1.5);
    // speed coefficient is going to be multiplied by this
    // control consecutive jumps
    n(this, "maxConsecutiveJumps", 3);
    n(this, "currConsecutiveJumps", 0);
    n(this, "consecutivePenaltyCoolDown", 0.35);
    // time in sec (should be larger than jumpCoolDown)
    n(this, "currConsecutivePenaltyCoolDown", 0);
    n(this, "jumpCoolDown", 0.3);
    // time in sec
    n(this, "currJumpCoolDown", 0);
  }
  async setup() {
    this.root = this.world.createRigidBody(
      p.RigidBodyDesc.dynamic().setGravityScale(2).setTranslation(0, 1, 0).lockRotations()
    ), this.world.createCollider(
      p.ColliderDesc.capsule(0.5, 0.2).setMass(1).setFriction(0.2).setCollisionGroups(D),
      this.root
    );
  }
  shiftNetworkedPlayerStates() {
    return h(this, m).shift();
  }
  addNetworkedPlayerStates(t) {
    h(this, m).push(...t);
  }
  physicsLoopLogic(t) {
    const s = this.shiftNetworkedPlayerStates();
    if (!s) return;
    const {
      objectState: r,
      keyboardState: { space: a, keyw: l, keys: u, keya: S, keyd: P, shiftleft: g }
    } = s;
    let i = new L(Number(P) - Number(S), 0, Number(u) - Number(l));
    i.length() > 0.01 && (i.normalize(), i.multiplyScalar(this.speedCoefficient)), g && i.multiplyScalar(this.runMultiplier), i.applyQuaternion(new w(r.rotation.x, r.rotation.y, r.rotation.z, r.rotation.w)), i.setY(this.root.linvel().y);
    const x = Math.abs(i.y) > 100 ? Math.sign(i.y) * 100 : i.y;
    i.setY(x), this.root.setLinvel(i, !0);
    t:
      if (a && this.currJumpCoolDown === 0) {
        if (this.currConsecutivePenaltyCoolDown > 0 && (this.currConsecutiveJumps += 1), this.currJumpCoolDown = this.jumpCoolDown, this.currConsecutivePenaltyCoolDown = this.consecutivePenaltyCoolDown, !(this.currConsecutiveJumps < this.maxConsecutiveJumps))
          break t;
        const C = this.root.collider(0), y = this.root.translation(), b = new p.Vector3(
          y.x,
          y.y - 0.03,
          // Small offset downward
          y.z
        ), M = this.root.rotation();
        this.world.intersectionWithShape(
          b,
          M,
          C.shape,
          null,
          null,
          C,
          this.root
        ) != null && this.root.applyImpulse({ x: 0, y: this.jumpImpulse, z: 0 }, !0);
      }
    this.currJumpCoolDown = Math.max(0, this.currJumpCoolDown - t), this.currConsecutivePenaltyCoolDown = Math.max(0, this.currConsecutivePenaltyCoolDown - t), this.currConsecutivePenaltyCoolDown === 0 && (this.currConsecutiveJumps = 0);
  }
}
m = new WeakMap();
var c;
class q extends j {
  constructor(t, s, r, a) {
    super(t, s, r);
    n(this, "camera");
    d(this, c, []);
    this.camera = a;
  }
  async setup() {
    const { resources: t, createGeometry: s, createMaterial: r, createMesh: a } = N(this.threeResourceManager);
    this.root = this.world.createRigidBody(
      p.RigidBodyDesc.dynamic().setGravityScale(2).setTranslation(0, 1, 0).lockRotations()
    ), this.world.createCollider(
      p.ColliderDesc.capsule(0.5, 0.2).setMass(1).setFriction(0.2).setCollisionGroups(D),
      this.root
    );
    const l = s(() => new B(0.4, 1)), u = r(() => new F({ color: 11184691 }));
    this.rendererRoot = a(l, u), this.camera && (this.rendererRoot.add(this.camera), this.camera.translateY(0.35)), t.scene.add(this.rendererRoot);
  }
  get networkedPlayerStates() {
    return h(this, c);
  }
  /** Empties the array. */
  emptyNetworkedPlayerStates() {
    v(this, c, []);
  }
  // We will collect player states in physics loop as it is where it will be used on the server
  physicsLoopLogic(t) {
    const s = this.rendererRoot.position, r = new w().setFromEuler(this.camera.rotation), a = {
      userData: { ...this.userData },
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
    }, l = G.getKeyboardStateObj(), u = {
      objectState: a,
      keyboardState: l
    };
    h(this, c).push(u);
  }
  drawLoopLogic(t) {
    const s = this.root.translation(), r = this.root.rotation();
    this.rendererRoot.position.set(s.x, s.y, s.z), this.rendererRoot.rotation.setFromQuaternion(new w(r.x, r.y, r.z, r.w));
  }
}
c = new WeakMap();
export {
  q as NetworkedPlayerClient,
  W as NetworkedPlayerServer
};
