import "./index.es15.js";
import { Vector3 as s, Controls as c, Euler as l } from "./index.es14.js";
const o = new l(0, 0, 0, "YXZ"), n = new s(), h = { type: "change" }, m = { type: "lock" }, a = { type: "unlock" }, r = Math.PI / 2;
class v extends c {
  constructor(e, t = null) {
    super(e, t), this.isLocked = !1, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.pointerSpeed = 1, this._onMouseMove = d.bind(this), this._onPointerlockChange = u.bind(this), this._onPointerlockError = E.bind(this), this.domElement !== null && this.connect();
  }
  connect() {
    this.domElement.ownerDocument.addEventListener("mousemove", this._onMouseMove), this.domElement.ownerDocument.addEventListener("pointerlockchange", this._onPointerlockChange), this.domElement.ownerDocument.addEventListener("pointerlockerror", this._onPointerlockError);
  }
  disconnect() {
    this.domElement.ownerDocument.removeEventListener("mousemove", this._onMouseMove), this.domElement.ownerDocument.removeEventListener("pointerlockchange", this._onPointerlockChange), this.domElement.ownerDocument.removeEventListener("pointerlockerror", this._onPointerlockError);
  }
  dispose() {
    this.disconnect();
  }
  getObject() {
    return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."), this.object;
  }
  getDirection(e) {
    return e.set(0, 0, -1).applyQuaternion(this.object.quaternion);
  }
  moveForward(e) {
    if (this.enabled === !1) return;
    const t = this.object;
    n.setFromMatrixColumn(t.matrix, 0), n.crossVectors(t.up, n), t.position.addScaledVector(n, e);
  }
  moveRight(e) {
    if (this.enabled === !1) return;
    const t = this.object;
    n.setFromMatrixColumn(t.matrix, 0), t.position.addScaledVector(n, e);
  }
  lock() {
    this.domElement.requestPointerLock();
  }
  unlock() {
    this.domElement.ownerDocument.exitPointerLock();
  }
}
function d(i) {
  if (this.enabled === !1 || this.isLocked === !1) return;
  const e = this.object;
  o.setFromQuaternion(e.quaternion), o.y -= i.movementX * 2e-3 * this.pointerSpeed, o.x -= i.movementY * 2e-3 * this.pointerSpeed, o.x = Math.max(r - this.maxPolarAngle, Math.min(r - this.minPolarAngle, o.x)), e.quaternion.setFromEuler(o), this.dispatchEvent(h);
}
function u() {
  this.domElement.ownerDocument.pointerLockElement === this.domElement ? (this.dispatchEvent(m), this.isLocked = !0) : (this.dispatchEvent(a), this.isLocked = !1);
}
function E() {
  console.error("THREE.PointerLockControls: Unable to use Pointer Lock API");
}
export {
  v as PointerLockControls
};
