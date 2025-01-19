var x = Object.defineProperty;
var D = (n, t, o) => t in n ? x(n, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[t] = o;
var i = (n, t, o) => D(n, typeof t != "symbol" ? t + "" : t, o);
import c from "./index.es4.js";
import { WebGLRenderer as R } from "./index.es5.js";
import { OrbitControls as G } from "./index.es6.js";
import { GameBaseClientDebug as z } from "./index.es7.js";
import { KeyboardSingleton as S } from "./index.es3.js";
import { useThree as J } from "./index.es8.js";
import { Physics as L } from "./index.es9.js";
import { Scene as P, PerspectiveCamera as j, PlaneGeometry as I, MeshBasicMaterial as b, BoxGeometry as T, Quaternion as W } from "./index.es10.js";
class q extends z {
  constructor() {
    super();
    i(this, "camera");
    i(this, "cubeBody");
    i(this, "cubeMesh");
    i(this, "jumpImpulse", 8);
    i(this, "jumpCoolDown", 0.3);
    // time in sec
    i(this, "currJumpCoolDown", 0);
  }
  async setup(o) {
    const s = { x: 0, y: -10, z: 0 };
    this.physics = await L.setup(s);
    const e = this.physics.world, { resources: r, createGeometry: a, createMaterial: h, createMesh: d } = J(this.threeResourceManager), l = new R();
    l.setSize(window.innerWidth, window.innerHeight), o.replaceChildren(l.domElement), r.setRenderer(l);
    const u = new P();
    r.setScene(u), this.camera = new j(60, window.innerWidth / window.innerHeight), this.camera.position.set(0, 5, -10);
    const g = new G(this.camera, l.domElement);
    r.setControls(g);
    const M = a(() => new I(10, 10)), B = h(() => new b({ color: 1162001 })), p = d(M, B);
    p.rotation.x = -Math.PI / 2, u.add(p);
    const y = e.createRigidBody(
      c.RigidBodyDesc.fixed()
    );
    y.setTranslation(new c.Vector3(0, -0.1, 0), !0), e.createCollider(
      c.ColliderDesc.cuboid(5, 0.1, 5),
      y
    );
    const C = a(() => new T(1, 1, 1)), f = h(() => new b({ color: 1118651 })), w = d(C, f);
    this.cubeMesh = w, u.add(w);
    const m = e.createRigidBody(
      c.RigidBodyDesc.dynamic().lockRotations()
    );
    m.setTranslation({ x: 0, y: 2, z: 0 }, !0), this.cubeBody = m, e.createCollider(
      c.ColliderDesc.cuboid(0.5, 0.5, 0.5).setMass(1),
      m
    );
  }
  physicsLoopLogic(o) {
    const { space: s } = S.getKeyboardState();
    if (s && this.currJumpCoolDown === 0) {
      this.currJumpCoolDown = this.jumpCoolDown;
      const e = this.cubeBody.collider(0), r = this.cubeBody.translation(), a = new c.Vector3(
        r.x,
        r.y - 0.03,
        // Small offset downward
        r.z
      ), h = this.cubeBody.rotation();
      this.physics.world.intersectionWithShape(
        a,
        h,
        e.shape,
        null,
        null,
        e,
        this.cubeBody
      ) != null && this.cubeBody.applyImpulse({ x: 0, y: this.jumpImpulse, z: 0 }, !0);
    }
    this.currJumpCoolDown = Math.max(0, this.currJumpCoolDown - o), this.physics.world.step();
  }
  drawLoopLogic(o) {
    const s = this.cubeBody.translation(), e = this.cubeBody.rotation();
    this.cubeMesh.position.set(s.x, s.y, s.z), this.cubeMesh.rotation.setFromQuaternion(new W(e.x, e.y, e.z, e.w)), this.threeResourceManager.controls.update(), this.threeResourceManager.renderer.render(this.threeResourceManager.scene, this.camera);
  }
}
export {
  q as ShapeCastGame
};
