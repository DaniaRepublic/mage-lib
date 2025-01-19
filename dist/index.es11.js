var f = Object.defineProperty;
var v = (c, s, e) => s in c ? f(c, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[s] = e;
var t = (c, s, e) => v(c, typeof s != "symbol" ? s + "" : s, e);
import u from "./index.es16.js";
import { useThree as D } from "./index.es7.js";
import { playerLayer as M } from "./index.es8.js";
import { KeyboardSingleton as B } from "./index.es5.js";
import { GameObjectPhysicalDrawableBase as J } from "./index.es4.js";
import { CapsuleGeometry as g, MeshStandardMaterial as P, Quaternion as b, Vector3 as x } from "./index.es14.js";
class I extends J {
  constructor(e, r, i) {
    super(e, r);
    t(this, "camera");
    t(this, "characterBody");
    t(this, "characterMesh");
    t(this, "jumpImpulse", 8);
    t(this, "speedCoefficient", 5);
    t(this, "runMultiplier", 1.5);
    // speed coefficient is going to be multiplied by this
    // control consecutive jumps
    t(this, "maxConsecutiveJumps", 3);
    t(this, "currConsecutiveJumps", 0);
    t(this, "consecutivePenaltyCoolDown", 0.35);
    // time in sec (should be larger than jumpCoolDown)
    t(this, "currConsecutivePenaltyCoolDown", 0);
    t(this, "jumpCoolDown", 0.3);
    // time in sec
    t(this, "currJumpCoolDown", 0);
    this.camera = i;
  }
  async setup() {
    const { resources: e, createGeometry: r, createMaterial: i, createMesh: a } = D(this.threeResourceManager);
    this.characterBody = this.world.createRigidBody(
      u.RigidBodyDesc.dynamic().setGravityScale(2).setTranslation(0, 1, 0).lockRotations()
    ), this.world.createCollider(
      u.ColliderDesc.capsule(0.5, 0.2).setMass(1).setFriction(0.2).setCollisionGroups(M),
      this.characterBody
    );
    const n = r(() => new g(0.4, 1)), l = i(() => new P({ color: 11184691 }));
    this.characterMesh = a(n, l), this.characterMesh.add(this.camera), this.camera.translateY(0.35), e.scene.add(this.characterMesh);
  }
  drawLoopLogic() {
    const e = this.characterBody.translation(), r = this.characterBody.rotation();
    this.characterMesh.position.set(e.x, e.y, e.z), this.characterMesh.rotation.setFromQuaternion(new b(r.x, r.y, r.z, r.w));
  }
  physicsLoopLogic(e) {
    const { space: r, keyw: i, keys: a, keya: n, keyd: l, shiftleft: p, menuOpen: y } = B.getKeyboardState();
    if (!y) {
      let o = new x(Number(l) - Number(n), 0, Number(a) - Number(i));
      o.length() > 0.01 && (o.normalize(), o.multiplyScalar(this.speedCoefficient)), p && o.multiplyScalar(this.runMultiplier), o.applyEuler(this.camera.rotation), o.setY(this.characterBody.linvel().y);
      const d = Math.abs(o.y) > 100 ? Math.sign(o.y) * 100 : o.y;
      o.setY(d), this.characterBody.setLinvel(o, !0);
      e:
        if (r && this.currJumpCoolDown === 0) {
          if (this.currConsecutivePenaltyCoolDown > 0 && (this.currConsecutiveJumps += 1), this.currJumpCoolDown = this.jumpCoolDown, this.currConsecutivePenaltyCoolDown = this.consecutivePenaltyCoolDown, !(this.currConsecutiveJumps < this.maxConsecutiveJumps))
            break e;
          const m = this.characterBody.collider(0), h = this.characterBody.translation(), C = new u.Vector3(
            h.x,
            h.y - 0.03,
            // Small offset downward
            h.z
          ), w = this.characterBody.rotation();
          this.world.intersectionWithShape(
            C,
            w,
            m.shape,
            null,
            null,
            m,
            this.characterBody
          ) != null && this.characterBody.applyImpulse({ x: 0, y: this.jumpImpulse, z: 0 }, !0);
        }
    }
    this.currJumpCoolDown = Math.max(0, this.currJumpCoolDown - e), this.currConsecutivePenaltyCoolDown = Math.max(0, this.currConsecutivePenaltyCoolDown - e), this.currConsecutivePenaltyCoolDown === 0 && (this.currConsecutiveJumps = 0);
  }
}
export {
  I as Player
};
