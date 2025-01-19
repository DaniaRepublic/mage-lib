import "./index.es15.js";
import { Ray as S, Plane as w, Vector3 as p, Controls as O, MOUSE as u, TOUCH as _, Quaternion as E, Spherical as P, Vector2 as c, MathUtils as R } from "./index.es14.js";
const D = { type: "change" }, b = { type: "start" }, M = { type: "end" }, f = new S(), T = new w(), j = Math.cos(70 * R.DEG2RAD), n = new p(), r = 2 * Math.PI, o = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, y = 1e-6;
class v extends O {
  constructor(t, e = null) {
    super(t, e), this.state = o.NONE, this.enabled = !0, this.target = new p(), this.cursor = new p(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: u.ROTATE, MIDDLE: u.DOLLY, RIGHT: u.PAN }, this.touches = { ONE: _.ROTATE, TWO: _.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new p(), this._lastQuaternion = new E(), this._lastTargetPosition = new p(), this._quat = new E().setFromUnitVectors(t.up, new p(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new P(), this._sphericalDelta = new P(), this._scale = 1, this._panOffset = new p(), this._rotateStart = new c(), this._rotateEnd = new c(), this._rotateDelta = new c(), this._panStart = new c(), this._panEnd = new c(), this._panDelta = new c(), this._dollyStart = new c(), this._dollyEnd = new c(), this._dollyDelta = new c(), this._dollyDirection = new p(), this._mouse = new c(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = L.bind(this), this._onPointerDown = A.bind(this), this._onPointerUp = k.bind(this), this._onContextMenu = Z.bind(this), this._onMouseWheel = N.bind(this), this._onKeyDown = Y.bind(this), this._onTouchStart = I.bind(this), this._onTouchMove = U.bind(this), this._onMouseDown = x.bind(this), this._onMouseMove = C.bind(this), this._interceptControlDown = z.bind(this), this._interceptControlUp = K.bind(this), this.domElement !== null && this.connect(), this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(D), this.update(), this.state = o.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    n.copy(e).sub(this.target), n.applyQuaternion(this._quat), this._spherical.setFromVector3(n), this.autoRotate && this.state === o.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let s = this.minAzimuthAngle, a = this.maxAzimuthAngle;
    isFinite(s) && isFinite(a) && (s < -Math.PI ? s += r : s > Math.PI && (s -= r), a < -Math.PI ? a += r : a > Math.PI && (a -= r), s <= a ? this._spherical.theta = Math.max(s, Math.min(a, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s + a) / 2 ? Math.max(s, this._spherical.theta) : Math.min(a, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let h = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const l = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), h = l != this._spherical.radius;
    }
    if (n.setFromSpherical(this._spherical), n.applyQuaternion(this._quatInverse), e.copy(this.target).add(n), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let l = null;
      if (this.object.isPerspectiveCamera) {
        const d = n.length();
        l = this._clampDistance(d * this._scale);
        const m = d - l;
        this.object.position.addScaledVector(this._dollyDirection, m), this.object.updateMatrixWorld(), h = !!m;
      } else if (this.object.isOrthographicCamera) {
        const d = new p(this._mouse.x, this._mouse.y, 0);
        d.unproject(this.object);
        const m = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), h = m !== this.object.zoom;
        const g = new p(this._mouse.x, this._mouse.y, 0);
        g.unproject(this.object), this.object.position.sub(g).add(d), this.object.updateMatrixWorld(), l = n.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      l !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position) : (f.origin.copy(this.object.position), f.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(f.direction)) < j ? this.object.lookAt(this.target) : (T.setFromNormalAndCoplanarPoint(this.object.up, this.target), f.intersectPlane(T, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const l = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), l !== this.object.zoom && (this.object.updateProjectionMatrix(), h = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, h || this._lastPosition.distanceToSquared(this.object.position) > y || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > y || this._lastTargetPosition.distanceToSquared(this.target) > y ? (this.dispatchEvent(D), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? r / 60 * this.autoRotateSpeed * t : r / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const e = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * e);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, e) {
    n.setFromMatrixColumn(e, 0), n.multiplyScalar(-t), this._panOffset.add(n);
  }
  _panUp(t, e) {
    this.screenSpacePanning === !0 ? n.setFromMatrixColumn(e, 1) : (n.setFromMatrixColumn(e, 0), n.crossVectors(this.object.up, n)), n.multiplyScalar(t), this._panOffset.add(n);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(t, e) {
    const s = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const a = this.object.position;
      n.copy(a).sub(this.target);
      let h = n.length();
      h *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * h / s.clientHeight, this.object.matrix), this._panUp(2 * e * h / s.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / s.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / s.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _updateZoomParameters(t, e) {
    if (!this.zoomToCursor)
      return;
    this._performCursorZoom = !0;
    const s = this.domElement.getBoundingClientRect(), a = t - s.left, h = e - s.top, l = s.width, d = s.height;
    this._mouse.x = a / l * 2 - 1, this._mouse.y = -(h / d) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  //
  // event callbacks - update the object state
  //
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(r * this._rotateDelta.x / e.clientHeight), this._rotateUp(r * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
  }
  _handleKeyDown(t) {
    let e = !1;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(r * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = !0;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-r * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = !0;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(r * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = !0;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-r * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = !0;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1)
      this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + e.x), a = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(s, a);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1)
      this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + e.x), a = 0.5 * (t.pageY + e.y);
      this._panStart.set(s, a);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), s = t.pageX - e.x, a = t.pageY - e.y, h = Math.sqrt(s * s + a * a);
    this._dollyStart.set(0, h);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1)
      this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const s = this._getSecondPointerPosition(t), a = 0.5 * (t.pageX + s.x), h = 0.5 * (t.pageY + s.y);
      this._rotateEnd.set(a, h);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(r * this._rotateDelta.x / e.clientHeight), this._rotateUp(r * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1)
      this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + e.x), a = 0.5 * (t.pageY + e.y);
      this._panEnd.set(s, a);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), s = t.pageX - e.x, a = t.pageY - e.y, h = Math.sqrt(s * s + a * a);
    this._dollyEnd.set(0, h), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const l = (t.pageX + e.x) * 0.5, d = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(l, d);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
  }
  // pointers
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let e = 0; e < this._pointers.length; e++)
      if (this._pointers[e] == t.pointerId) {
        this._pointers.splice(e, 1);
        return;
      }
  }
  _isTrackingPointer(t) {
    for (let e = 0; e < this._pointers.length; e++)
      if (this._pointers[e] == t.pointerId) return !0;
    return !1;
  }
  _trackPointer(t) {
    let e = this._pointerPositions[t.pointerId];
    e === void 0 && (e = new c(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  //
  _customWheelEvent(t) {
    const e = t.deltaMode, s = {
      clientX: t.clientX,
      clientY: t.clientY,
      deltaY: t.deltaY
    };
    switch (e) {
      case 1:
        s.deltaY *= 16;
        break;
      case 2:
        s.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (s.deltaY *= 10), s;
  }
}
function A(i) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function L(i) {
  this.enabled !== !1 && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function k(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(M), this.state = o.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function x(i) {
  let t;
  switch (i.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case u.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(i), this.state = o.DOLLY;
      break;
    case u.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = o.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = o.ROTATE;
      }
      break;
    case u.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = o.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = o.PAN;
      }
      break;
    default:
      this.state = o.NONE;
  }
  this.state !== o.NONE && this.dispatchEvent(b);
}
function C(i) {
  switch (this.state) {
    case o.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(i);
      break;
    case o.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(i);
      break;
    case o.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function N(i) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== o.NONE || (i.preventDefault(), this.dispatchEvent(b), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(M));
}
function Y(i) {
  this.enabled !== !1 && this._handleKeyDown(i);
}
function I(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case _.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(i), this.state = o.TOUCH_ROTATE;
          break;
        case _.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(i), this.state = o.TOUCH_PAN;
          break;
        default:
          this.state = o.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case _.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(i), this.state = o.TOUCH_DOLLY_PAN;
          break;
        case _.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(i), this.state = o.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = o.NONE;
      }
      break;
    default:
      this.state = o.NONE;
  }
  this.state !== o.NONE && this.dispatchEvent(b);
}
function U(i) {
  switch (this._trackPointer(i), this.state) {
    case o.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case o.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case o.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case o.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = o.NONE;
  }
}
function Z(i) {
  this.enabled !== !1 && i.preventDefault();
}
function z(i) {
  i.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function K(i) {
  i.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
export {
  v as OrbitControls
};
