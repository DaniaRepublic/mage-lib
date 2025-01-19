/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ui = "172", er = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, ir = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, sr = 0, nr = 1, rr = 2, ar = 1, or = 2, hr = 3, ii = 0, qi = 1, lr = 2, ns = 0, oi = 1, cr = 2, ur = 3, dr = 4, pr = 5, hi = 100, mr = 101, fr = 102, yr = 103, xr = 104, gr = 200, Mr = 201, br = 202, wr = 203, li = 204, ci = 205, _r = 206, Sr = 207, Ar = 208, zr = 209, Fr = 210, Tr = 211, Cr = 212, Br = 213, Er = 214, Rr = 0, kr = 1, vr = 2, ui = 3, Dr = 4, Ir = 5, Pr = 6, Or = 7, rs = 0, Lr = 1, Nr = 2, Vr = 0, Wr = 1, Ur = 2, qr = 3, Gr = 4, jr = 5, Xr = 6, Hr = 7, Gi = 300, as = 301, Yr = 302, Zr = 303, Jr = 304, $r = 306, di = 1e3, Gt = 1001, pi = 1002, Xt = 1003, Qr = 1004, Kr = 1005, Fe = 1006, ta = 1007, ji = 1008, Xi = 1009, os = 1010, hs = 1011, ls = 1012, cs = 1013, Hi = 1014, Yi = 1015, us = 1016, ds = 1017, ps = 1018, ms = 1020, fs = 35902, ys = 1021, xs = 1022, Zi = 1023, gs = 1024, Ms = 1025, ve = 1026, mi = 1027, bs = 1028, ws = 1029, _s = 1030, Ss = 1031, As = 1033, zs = 33776, Fs = 33777, Ts = 33778, Cs = 33779, Bs = 35840, Es = 35841, Rs = 35842, ks = 35843, vs = 36196, Ds = 37492, Is = 37496, Ps = 37808, Os = 37809, Ls = 37810, Ns = 37811, Vs = 37812, Ws = 37813, Us = 37814, qs = 37815, Gs = 37816, js = 37817, Xs = 37818, Hs = 37819, Ys = 37820, Zs = 37821, Js = 36492, $s = 36494, Qs = 36495, Ks = 36283, tn = 36284, en = 36285, sn = 36286, nn = 3200, ea = 3201, ia = 0, sa = 1, Ji = "", J = "srgb", fi = "srgb-linear", yi = "linear", De = "srgb", Bt = 7680, xi = 519, na = 512, ra = 513, aa = 514, oa = 515, ha = 516, la = 517, ca = 518, ua = 519, gi = 35044, da = "300 es", yt = 2e3, Te = 2001;
class Ht {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[t] === void 0 && (i[t] = []), i[t].indexOf(e) === -1 && i[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0) return !1;
    const i = this._listeners;
    return i[t] !== void 0 && i[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0) return;
    const s = this._listeners[t];
    if (s !== void 0) {
      const n = s.indexOf(e);
      n !== -1 && s.splice(n, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[t.type];
    if (i !== void 0) {
      t.target = this;
      const s = i.slice(0);
      for (let n = 0, r = s.length; n < r; n++)
        s[n].call(this, t);
      t.target = null;
    }
  }
}
const I = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Mi = 1234567;
const ee = Math.PI / 180, Ce = 180 / Math.PI;
function Yt() {
  const d = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (I[d & 255] + I[d >> 8 & 255] + I[d >> 16 & 255] + I[d >> 24 & 255] + "-" + I[t & 255] + I[t >> 8 & 255] + "-" + I[t >> 16 & 15 | 64] + I[t >> 24 & 255] + "-" + I[e & 63 | 128] + I[e >> 8 & 255] + "-" + I[e >> 16 & 255] + I[e >> 24 & 255] + I[i & 255] + I[i >> 8 & 255] + I[i >> 16 & 255] + I[i >> 24 & 255]).toLowerCase();
}
function z(d, t, e) {
  return Math.max(t, Math.min(e, d));
}
function ni(d, t) {
  return (d % t + t) % t;
}
function rn(d, t, e, i, s) {
  return i + (d - t) * (s - i) / (e - t);
}
function an(d, t, e) {
  return d !== t ? (e - d) / (t - d) : 0;
}
function ie(d, t, e) {
  return (1 - e) * d + e * t;
}
function on(d, t, e, i) {
  return ie(d, t, 1 - Math.exp(-e * i));
}
function hn(d, t = 1) {
  return t - Math.abs(ni(d, t * 2) - t);
}
function ln(d, t, e) {
  return d <= t ? 0 : d >= e ? 1 : (d = (d - t) / (e - t), d * d * (3 - 2 * d));
}
function cn(d, t, e) {
  return d <= t ? 0 : d >= e ? 1 : (d = (d - t) / (e - t), d * d * d * (d * (d * 6 - 15) + 10));
}
function un(d, t) {
  return d + Math.floor(Math.random() * (t - d + 1));
}
function dn(d, t) {
  return d + Math.random() * (t - d);
}
function pn(d) {
  return d * (0.5 - Math.random());
}
function mn(d) {
  d !== void 0 && (Mi = d);
  let t = Mi += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function fn(d) {
  return d * ee;
}
function yn(d) {
  return d * Ce;
}
function xn(d) {
  return (d & d - 1) === 0 && d !== 0;
}
function gn(d) {
  return Math.pow(2, Math.ceil(Math.log(d) / Math.LN2));
}
function Mn(d) {
  return Math.pow(2, Math.floor(Math.log(d) / Math.LN2));
}
function bn(d, t, e, i, s) {
  const n = Math.cos, r = Math.sin, o = n(e / 2), a = r(e / 2), h = n((t + i) / 2), l = r((t + i) / 2), c = n((t - i) / 2), u = r((t - i) / 2), p = n((i - t) / 2), m = r((i - t) / 2);
  switch (s) {
    case "XYX":
      d.set(o * l, a * c, a * u, o * h);
      break;
    case "YZY":
      d.set(a * u, o * l, a * c, o * h);
      break;
    case "ZXZ":
      d.set(a * c, a * u, o * l, o * h);
      break;
    case "XZX":
      d.set(o * l, a * m, a * p, o * h);
      break;
    case "YXY":
      d.set(a * p, o * l, a * m, o * h);
      break;
    case "ZYZ":
      d.set(a * m, a * p, o * l, o * h);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s);
  }
}
function qt(d, t) {
  switch (t.constructor) {
    case Float32Array:
      return d;
    case Uint32Array:
      return d / 4294967295;
    case Uint16Array:
      return d / 65535;
    case Uint8Array:
      return d / 255;
    case Int32Array:
      return Math.max(d / 2147483647, -1);
    case Int16Array:
      return Math.max(d / 32767, -1);
    case Int8Array:
      return Math.max(d / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function O(d, t) {
  switch (t.constructor) {
    case Float32Array:
      return d;
    case Uint32Array:
      return Math.round(d * 4294967295);
    case Uint16Array:
      return Math.round(d * 65535);
    case Uint8Array:
      return Math.round(d * 255);
    case Int32Array:
      return Math.round(d * 2147483647);
    case Int16Array:
      return Math.round(d * 32767);
    case Int8Array:
      return Math.round(d * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const pa = {
  DEG2RAD: ee,
  RAD2DEG: Ce,
  generateUUID: Yt,
  clamp: z,
  euclideanModulo: ni,
  mapLinear: rn,
  inverseLerp: an,
  lerp: ie,
  damp: on,
  pingpong: hn,
  smoothstep: ln,
  smootherstep: cn,
  randInt: un,
  randFloat: dn,
  randFloatSpread: pn,
  seededRandom: mn,
  degToRad: fn,
  radToDeg: yn,
  isPowerOfTwo: xn,
  ceilPowerOfTwo: gn,
  floorPowerOfTwo: Mn,
  setQuaternionFromProperEuler: bn,
  normalize: O,
  denormalize: qt
};
class q {
  constructor(t = 0, e = 0) {
    q.prototype.isVector2 = !0, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, i = this.y, s = t.elements;
    return this.x = s[0] * e + s[3] * i + s[6], this.y = s[1] * e + s[4] * i + s[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = z(this.x, t.x, e.x), this.y = z(this.y, t.y, e.y), this;
  }
  clampScalar(t, e) {
    return this.x = z(this.x, t, e), this.y = z(this.y, t, e), this;
  }
  clampLength(t, e) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(z(i, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const i = this.dot(t) / e;
    return Math.acos(z(i, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, i = this.y - t.y;
    return e * e + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, i) {
    return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const i = Math.cos(e), s = Math.sin(e), n = this.x - t.x, r = this.y - t.y;
    return this.x = n * i - r * s + t.x, this.y = n * s + r * i + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class ht {
  constructor(t, e, i, s, n, r, o, a, h) {
    ht.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, i, s, n, r, o, a, h);
  }
  set(t, e, i, s, n, r, o, a, h) {
    const l = this.elements;
    return l[0] = t, l[1] = s, l[2] = o, l[3] = e, l[4] = n, l[5] = a, l[6] = i, l[7] = r, l[8] = h, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(t) {
    const e = this.elements, i = t.elements;
    return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this;
  }
  extractBasis(t, e, i) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[4],
      e[8],
      e[1],
      e[5],
      e[9],
      e[2],
      e[6],
      e[10]
    ), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const i = t.elements, s = e.elements, n = this.elements, r = i[0], o = i[3], a = i[6], h = i[1], l = i[4], c = i[7], u = i[2], p = i[5], m = i[8], f = s[0], x = s[3], g = s[6], b = s[1], w = s[4], M = s[7], S = s[2], F = s[5], _ = s[8];
    return n[0] = r * f + o * b + a * S, n[3] = r * x + o * w + a * F, n[6] = r * g + o * M + a * _, n[1] = h * f + l * b + c * S, n[4] = h * x + l * w + c * F, n[7] = h * g + l * M + c * _, n[2] = u * f + p * b + m * S, n[5] = u * x + p * w + m * F, n[8] = u * g + p * M + m * _, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], i = t[1], s = t[2], n = t[3], r = t[4], o = t[5], a = t[6], h = t[7], l = t[8];
    return e * r * l - e * o * h - i * n * l + i * o * a + s * n * h - s * r * a;
  }
  invert() {
    const t = this.elements, e = t[0], i = t[1], s = t[2], n = t[3], r = t[4], o = t[5], a = t[6], h = t[7], l = t[8], c = l * r - o * h, u = o * a - l * n, p = h * n - r * a, m = e * c + i * u + s * p;
    if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const f = 1 / m;
    return t[0] = c * f, t[1] = (s * h - l * i) * f, t[2] = (o * i - s * r) * f, t[3] = u * f, t[4] = (l * e - s * a) * f, t[5] = (s * n - o * e) * f, t[6] = p * f, t[7] = (i * a - h * e) * f, t[8] = (r * e - i * n) * f, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, i, s, n, r, o) {
    const a = Math.cos(n), h = Math.sin(n);
    return this.set(
      i * a,
      i * h,
      -i * (a * r + h * o) + r + t,
      -s * h,
      s * a,
      -s * (-h * r + a * o) + o + e,
      0,
      0,
      1
    ), this;
  }
  //
  scale(t, e) {
    return this.premultiply(Ie.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(Ie.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(Ie.makeTranslation(t, e)), this;
  }
  // for 2D Transforms
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(
      1,
      0,
      t.x,
      0,
      1,
      t.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      t,
      0,
      1,
      e,
      0,
      0,
      1
    ), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), i = Math.sin(t);
    return this.set(
      e,
      -i,
      0,
      i,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e) {
    return this.set(
      t,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(t) {
    const e = this.elements, i = t.elements;
    for (let s = 0; s < 9; s++)
      if (e[s] !== i[s]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let i = 0; i < 9; i++)
      this.elements[i] = t[i + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const i = this.elements;
    return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Ie = /* @__PURE__ */ new ht();
function wn(d) {
  for (let t = d.length - 1; t >= 0; --t)
    if (d[t] >= 65535) return !0;
  return !1;
}
function si(d) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", d);
}
function ma() {
  const d = si("canvas");
  return d.style.display = "block", d;
}
const bi = {};
function fa(d) {
  d in bi || (bi[d] = !0, console.warn(d));
}
function ya(d, t, e) {
  return new Promise(function(i, s) {
    function n() {
      switch (d.clientWaitSync(t, d.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case d.WAIT_FAILED:
          s();
          break;
        case d.TIMEOUT_EXPIRED:
          setTimeout(n, e);
          break;
        default:
          i();
      }
    }
    setTimeout(n, e);
  });
}
function xa(d) {
  const t = d.elements;
  t[2] = 0.5 * t[2] + 0.5 * t[3], t[6] = 0.5 * t[6] + 0.5 * t[7], t[10] = 0.5 * t[10] + 0.5 * t[11], t[14] = 0.5 * t[14] + 0.5 * t[15];
}
function ga(d) {
  const t = d.elements;
  t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
}
const wi = /* @__PURE__ */ new ht().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), _i = /* @__PURE__ */ new ht().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function _n() {
  const d = {
    enabled: !0,
    workingColorSpace: fi,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(s, n, r) {
      return this.enabled === !1 || n === r || !n || !r || (this.spaces[n].transfer === De && (s.r = ot(s.r), s.g = ot(s.g), s.b = ot(s.b)), this.spaces[n].primaries !== this.spaces[r].primaries && (s.applyMatrix3(this.spaces[n].toXYZ), s.applyMatrix3(this.spaces[r].fromXYZ)), this.spaces[r].transfer === De && (s.r = jt(s.r), s.g = jt(s.g), s.b = jt(s.b))), s;
    },
    fromWorkingColorSpace: function(s, n) {
      return this.convert(s, this.workingColorSpace, n);
    },
    toWorkingColorSpace: function(s, n) {
      return this.convert(s, n, this.workingColorSpace);
    },
    getPrimaries: function(s) {
      return this.spaces[s].primaries;
    },
    getTransfer: function(s) {
      return s === Ji ? yi : this.spaces[s].transfer;
    },
    getLuminanceCoefficients: function(s, n = this.workingColorSpace) {
      return s.fromArray(this.spaces[n].luminanceCoefficients);
    },
    define: function(s) {
      Object.assign(this.spaces, s);
    },
    // Internal APIs
    _getMatrix: function(s, n, r) {
      return s.copy(this.spaces[n].toXYZ).multiply(this.spaces[r].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(s) {
      return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(s = this.workingColorSpace) {
      return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
    }
  }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], i = [0.3127, 0.329];
  return d.define({
    [fi]: {
      primaries: t,
      whitePoint: i,
      transfer: yi,
      toXYZ: wi,
      fromXYZ: _i,
      luminanceCoefficients: e,
      workingColorSpaceConfig: { unpackColorSpace: J },
      outputColorSpaceConfig: { drawingBufferColorSpace: J }
    },
    [J]: {
      primaries: t,
      whitePoint: i,
      transfer: De,
      toXYZ: wi,
      fromXYZ: _i,
      luminanceCoefficients: e,
      outputColorSpaceConfig: { drawingBufferColorSpace: J }
    }
  }), d;
}
const j = /* @__PURE__ */ _n();
function ot(d) {
  return d < 0.04045 ? d * 0.0773993808 : Math.pow(d * 0.9478672986 + 0.0521327014, 2.4);
}
function jt(d) {
  return d < 31308e-7 ? d * 12.92 : 1.055 * Math.pow(d, 0.41666) - 0.055;
}
let Et;
class Sn {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let e;
    if (t instanceof HTMLCanvasElement)
      e = t;
    else {
      Et === void 0 && (Et = si("canvas")), Et.width = t.width, Et.height = t.height;
      const i = Et.getContext("2d");
      t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), e = Et;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = si("canvas");
      e.width = t.width, e.height = t.height;
      const i = e.getContext("2d");
      i.drawImage(t, 0, 0, t.width, t.height);
      const s = i.getImageData(0, 0, t.width, t.height), n = s.data;
      for (let r = 0; r < n.length; r++)
        n[r] = ot(n[r] / 255) * 255;
      return i.putImageData(s, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let i = 0; i < e.length; i++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[i] = Math.floor(ot(e[i] / 255) * 255) : e[i] = ot(e[i]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let An = 0;
class $i {
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: An++ }), this.uuid = Yt(), this.data = t, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    const i = {
      uuid: this.uuid,
      url: ""
    }, s = this.data;
    if (s !== null) {
      let n;
      if (Array.isArray(s)) {
        n = [];
        for (let r = 0, o = s.length; r < o; r++)
          s[r].isDataTexture ? n.push(Pe(s[r].image)) : n.push(Pe(s[r]));
      } else
        n = Pe(s);
      i.url = n;
    }
    return e || (t.images[this.uuid] = i), i;
  }
}
function Pe(d) {
  return typeof HTMLImageElement < "u" && d instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && d instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && d instanceof ImageBitmap ? Sn.getDataURL(d) : d.data ? {
    data: Array.from(d.data),
    width: d.width,
    height: d.height,
    type: d.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let zn = 0;
class X extends Ht {
  constructor(t = X.DEFAULT_IMAGE, e = X.DEFAULT_MAPPING, i = Gt, s = Gt, n = Fe, r = ji, o = Zi, a = Xi, h = X.DEFAULT_ANISOTROPY, l = Ji) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: zn++ }), this.uuid = Yt(), this.name = "", this.source = new $i(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = i, this.wrapT = s, this.magFilter = n, this.minFilter = r, this.anisotropy = h, this.format = o, this.internalFormat = null, this.type = a, this.offset = new q(0, 0), this.repeat = new q(1, 1), this.center = new q(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ht(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = l, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    const i = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), e || (t.textures[this.uuid] = i), i;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== Gi) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case di:
          t.x = t.x - Math.floor(t.x);
          break;
        case Gt:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case pi:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case di:
          t.y = t.y - Math.floor(t.y);
          break;
        case Gt:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case pi:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
}
X.DEFAULT_IMAGE = null;
X.DEFAULT_MAPPING = Gi;
X.DEFAULT_ANISOTROPY = 1;
class At {
  constructor(t = 0, e = 0, i = 0, s = 1) {
    At.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = i, this.w = s;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, i, s) {
    return this.x = t, this.y = e, this.z = i, this.w = s, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, i = this.y, s = this.z, n = this.w, r = t.elements;
    return this.x = r[0] * e + r[4] * i + r[8] * s + r[12] * n, this.y = r[1] * e + r[5] * i + r[9] * s + r[13] * n, this.z = r[2] * e + r[6] * i + r[10] * s + r[14] * n, this.w = r[3] * e + r[7] * i + r[11] * s + r[15] * n, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, i, s, n;
    const a = t.elements, h = a[0], l = a[4], c = a[8], u = a[1], p = a[5], m = a[9], f = a[2], x = a[6], g = a[10];
    if (Math.abs(l - u) < 0.01 && Math.abs(c - f) < 0.01 && Math.abs(m - x) < 0.01) {
      if (Math.abs(l + u) < 0.1 && Math.abs(c + f) < 0.1 && Math.abs(m + x) < 0.1 && Math.abs(h + p + g - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const w = (h + 1) / 2, M = (p + 1) / 2, S = (g + 1) / 2, F = (l + u) / 4, _ = (c + f) / 4, A = (m + x) / 4;
      return w > M && w > S ? w < 0.01 ? (i = 0, s = 0.707106781, n = 0.707106781) : (i = Math.sqrt(w), s = F / i, n = _ / i) : M > S ? M < 0.01 ? (i = 0.707106781, s = 0, n = 0.707106781) : (s = Math.sqrt(M), i = F / s, n = A / s) : S < 0.01 ? (i = 0.707106781, s = 0.707106781, n = 0) : (n = Math.sqrt(S), i = _ / n, s = A / n), this.set(i, s, n, e), this;
    }
    let b = Math.sqrt((x - m) * (x - m) + (c - f) * (c - f) + (u - l) * (u - l));
    return Math.abs(b) < 1e-3 && (b = 1), this.x = (x - m) / b, this.y = (c - f) / b, this.z = (u - l) / b, this.w = Math.acos((h + p + g - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = z(this.x, t.x, e.x), this.y = z(this.y, t.y, e.y), this.z = z(this.z, t.z, e.z), this.w = z(this.w, t.w, e.w), this;
  }
  clampScalar(t, e) {
    return this.x = z(this.x, t, e), this.y = z(this.y, t, e), this.z = z(this.z, t, e), this.w = z(this.w, t, e), this;
  }
  clampLength(t, e) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(z(i, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, i) {
    return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this.w = t.w + (e.w - t.w) * i, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Fn extends Ht {
  constructor(t = 1, e = 1, i = {}) {
    super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new At(0, 0, t, e), this.scissorTest = !1, this.viewport = new At(0, 0, t, e);
    const s = { width: t, height: e, depth: 1 };
    i = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Fe,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, i);
    const n = new X(s, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.colorSpace);
    n.flipY = !1, n.generateMipmaps = i.generateMipmaps, n.internalFormat = i.internalFormat, this.textures = [];
    const r = i.count;
    for (let o = 0; o < r; o++)
      this.textures[o] = n.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
    this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.resolveDepthBuffer = i.resolveDepthBuffer, this.resolveStencilBuffer = i.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = i.depthTexture, this.samples = i.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  set depthTexture(t) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), t !== null && (t.renderTarget = this), this._depthTexture = t;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(t, e, i = 1) {
    if (this.width !== t || this.height !== e || this.depth !== i) {
      this.width = t, this.height = e, this.depth = i;
      for (let s = 0, n = this.textures.length; s < n; s++)
        this.textures[s].image.width = t, this.textures[s].image.height = e, this.textures[s].image.depth = i;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let i = 0, s = t.textures.length; i < s; i++)
      this.textures[i] = t.textures[i].clone(), this.textures[i].isRenderTargetTexture = !0, this.textures[i].renderTarget = this;
    const e = Object.assign({}, t.texture.image);
    return this.texture.source = new $i(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Tn extends Fn {
  constructor(t = 1, e = 1, i = {}) {
    super(t, e, i), this.isWebGLRenderTarget = !0;
  }
}
class Ma extends X {
  constructor(t = null, e = 1, i = 1, s = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: i, depth: s }, this.magFilter = Xt, this.minFilter = Xt, this.wrapR = Gt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class ba extends X {
  constructor(t = null, e = 1, i = 1, s = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: i, depth: s }, this.magFilter = Xt, this.minFilter = Xt, this.wrapR = Gt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class se {
  constructor(t = 0, e = 0, i = 0, s = 1) {
    this.isQuaternion = !0, this._x = t, this._y = e, this._z = i, this._w = s;
  }
  static slerpFlat(t, e, i, s, n, r, o) {
    let a = i[s + 0], h = i[s + 1], l = i[s + 2], c = i[s + 3];
    const u = n[r + 0], p = n[r + 1], m = n[r + 2], f = n[r + 3];
    if (o === 0) {
      t[e + 0] = a, t[e + 1] = h, t[e + 2] = l, t[e + 3] = c;
      return;
    }
    if (o === 1) {
      t[e + 0] = u, t[e + 1] = p, t[e + 2] = m, t[e + 3] = f;
      return;
    }
    if (c !== f || a !== u || h !== p || l !== m) {
      let x = 1 - o;
      const g = a * u + h * p + l * m + c * f, b = g >= 0 ? 1 : -1, w = 1 - g * g;
      if (w > Number.EPSILON) {
        const S = Math.sqrt(w), F = Math.atan2(S, g * b);
        x = Math.sin(x * F) / S, o = Math.sin(o * F) / S;
      }
      const M = o * b;
      if (a = a * x + u * M, h = h * x + p * M, l = l * x + m * M, c = c * x + f * M, x === 1 - o) {
        const S = 1 / Math.sqrt(a * a + h * h + l * l + c * c);
        a *= S, h *= S, l *= S, c *= S;
      }
    }
    t[e] = a, t[e + 1] = h, t[e + 2] = l, t[e + 3] = c;
  }
  static multiplyQuaternionsFlat(t, e, i, s, n, r) {
    const o = i[s], a = i[s + 1], h = i[s + 2], l = i[s + 3], c = n[r], u = n[r + 1], p = n[r + 2], m = n[r + 3];
    return t[e] = o * m + l * c + a * p - h * u, t[e + 1] = a * m + l * u + h * c - o * p, t[e + 2] = h * m + l * p + o * u - a * c, t[e + 3] = l * m - o * c - a * u - h * p, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, i, s) {
    return this._x = t, this._y = e, this._z = i, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = !0) {
    const i = t._x, s = t._y, n = t._z, r = t._order, o = Math.cos, a = Math.sin, h = o(i / 2), l = o(s / 2), c = o(n / 2), u = a(i / 2), p = a(s / 2), m = a(n / 2);
    switch (r) {
      case "XYZ":
        this._x = u * l * c + h * p * m, this._y = h * p * c - u * l * m, this._z = h * l * m + u * p * c, this._w = h * l * c - u * p * m;
        break;
      case "YXZ":
        this._x = u * l * c + h * p * m, this._y = h * p * c - u * l * m, this._z = h * l * m - u * p * c, this._w = h * l * c + u * p * m;
        break;
      case "ZXY":
        this._x = u * l * c - h * p * m, this._y = h * p * c + u * l * m, this._z = h * l * m + u * p * c, this._w = h * l * c - u * p * m;
        break;
      case "ZYX":
        this._x = u * l * c - h * p * m, this._y = h * p * c + u * l * m, this._z = h * l * m - u * p * c, this._w = h * l * c + u * p * m;
        break;
      case "YZX":
        this._x = u * l * c + h * p * m, this._y = h * p * c + u * l * m, this._z = h * l * m - u * p * c, this._w = h * l * c - u * p * m;
        break;
      case "XZY":
        this._x = u * l * c - h * p * m, this._y = h * p * c - u * l * m, this._z = h * l * m + u * p * c, this._w = h * l * c + u * p * m;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + r);
    }
    return e === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const i = e / 2, s = Math.sin(i);
    return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, i = e[0], s = e[4], n = e[8], r = e[1], o = e[5], a = e[9], h = e[2], l = e[6], c = e[10], u = i + o + c;
    if (u > 0) {
      const p = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / p, this._x = (l - a) * p, this._y = (n - h) * p, this._z = (r - s) * p;
    } else if (i > o && i > c) {
      const p = 2 * Math.sqrt(1 + i - o - c);
      this._w = (l - a) / p, this._x = 0.25 * p, this._y = (s + r) / p, this._z = (n + h) / p;
    } else if (o > c) {
      const p = 2 * Math.sqrt(1 + o - i - c);
      this._w = (n - h) / p, this._x = (s + r) / p, this._y = 0.25 * p, this._z = (a + l) / p;
    } else {
      const p = 2 * Math.sqrt(1 + c - i - o);
      this._w = (r - s) / p, this._x = (n + h) / p, this._y = (a + l) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let i = t.dot(e) + 1;
    return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = i), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(z(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const i = this.angleTo(t);
    if (i === 0) return this;
    const s = Math.min(1, e / i);
    return this.slerp(t, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const i = t._x, s = t._y, n = t._z, r = t._w, o = e._x, a = e._y, h = e._z, l = e._w;
    return this._x = i * l + r * o + s * h - n * a, this._y = s * l + r * a + n * o - i * h, this._z = n * l + r * h + i * a - s * o, this._w = r * l - i * o - s * a - n * h, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const i = this._x, s = this._y, n = this._z, r = this._w;
    let o = r * t._w + i * t._x + s * t._y + n * t._z;
    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1)
      return this._w = r, this._x = i, this._y = s, this._z = n, this;
    const a = 1 - o * o;
    if (a <= Number.EPSILON) {
      const p = 1 - e;
      return this._w = p * r + e * this._w, this._x = p * i + e * this._x, this._y = p * s + e * this._y, this._z = p * n + e * this._z, this.normalize(), this;
    }
    const h = Math.sqrt(a), l = Math.atan2(h, o), c = Math.sin((1 - e) * l) / h, u = Math.sin(e * l) / h;
    return this._w = r * c + this._w * u, this._x = i * c + this._x * u, this._y = s * c + this._y * u, this._z = n * c + this._z * u, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, i) {
    return this.copy(t).slerp(e, i);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), i = Math.random(), s = Math.sqrt(1 - i), n = Math.sqrt(i);
    return this.set(
      s * Math.sin(t),
      s * Math.cos(t),
      n * Math.sin(e),
      n * Math.cos(e)
    );
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class y {
  constructor(t = 0, e = 0, i = 0) {
    y.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = i;
  }
  set(t, e, i) {
    return i === void 0 && (i = this.z), this.x = t, this.y = e, this.z = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(Si.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(Si.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, i = this.y, s = this.z, n = t.elements;
    return this.x = n[0] * e + n[3] * i + n[6] * s, this.y = n[1] * e + n[4] * i + n[7] * s, this.z = n[2] * e + n[5] * i + n[8] * s, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, i = this.y, s = this.z, n = t.elements, r = 1 / (n[3] * e + n[7] * i + n[11] * s + n[15]);
    return this.x = (n[0] * e + n[4] * i + n[8] * s + n[12]) * r, this.y = (n[1] * e + n[5] * i + n[9] * s + n[13]) * r, this.z = (n[2] * e + n[6] * i + n[10] * s + n[14]) * r, this;
  }
  applyQuaternion(t) {
    const e = this.x, i = this.y, s = this.z, n = t.x, r = t.y, o = t.z, a = t.w, h = 2 * (r * s - o * i), l = 2 * (o * e - n * s), c = 2 * (n * i - r * e);
    return this.x = e + a * h + r * c - o * l, this.y = i + a * l + o * h - n * c, this.z = s + a * c + n * l - r * h, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, i = this.y, s = this.z, n = t.elements;
    return this.x = n[0] * e + n[4] * i + n[8] * s, this.y = n[1] * e + n[5] * i + n[9] * s, this.z = n[2] * e + n[6] * i + n[10] * s, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = z(this.x, t.x, e.x), this.y = z(this.y, t.y, e.y), this.z = z(this.z, t.z, e.z), this;
  }
  clampScalar(t, e) {
    return this.x = z(this.x, t, e), this.y = z(this.y, t, e), this.z = z(this.z, t, e), this;
  }
  clampLength(t, e) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(z(i, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, i) {
    return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const i = t.x, s = t.y, n = t.z, r = e.x, o = e.y, a = e.z;
    return this.x = s * a - n * o, this.y = n * r - i * a, this.z = i * o - s * r, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const i = t.dot(this) / e;
    return this.copy(t).multiplyScalar(i);
  }
  projectOnPlane(t) {
    return Oe.copy(this).projectOnVector(t), this.sub(Oe);
  }
  reflect(t) {
    return this.sub(Oe.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const i = this.dot(t) / e;
    return Math.acos(z(i, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, i = this.y - t.y, s = this.z - t.z;
    return e * e + i * i + s * s;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, i) {
    const s = Math.sin(e) * t;
    return this.x = s * Math.sin(i), this.y = Math.cos(e) * t, this.z = s * Math.cos(i), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, i) {
    return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), i = this.setFromMatrixColumn(t, 1).length(), s = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = i, this.z = s, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, i = Math.sqrt(1 - e * e);
    return this.x = i * Math.cos(t), this.y = e, this.z = i * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Oe = /* @__PURE__ */ new y(), Si = /* @__PURE__ */ new se();
class ne {
  constructor(t = new y(1 / 0, 1 / 0, 1 / 0), e = new y(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, i = t.length; e < i; e += 3)
      this.expandByPoint(H.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, i = t.count; e < i; e++)
      this.expandByPoint(H.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, i = t.length; e < i; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const i = H.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(i), this.max.copy(t).add(i), this;
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const i = t.geometry;
    if (i !== void 0) {
      const n = i.getAttribute("position");
      if (e === !0 && n !== void 0 && t.isInstancedMesh !== !0)
        for (let r = 0, o = n.count; r < o; r++)
          t.isMesh === !0 ? t.getVertexPosition(r, H) : H.fromBufferAttribute(n, r), H.applyMatrix4(t.matrixWorld), this.expandByPoint(H);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), oe.copy(t.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), oe.copy(i.boundingBox)), oe.applyMatrix4(t.matrixWorld), this.union(oe);
    }
    const s = t.children;
    for (let n = 0, r = s.length; n < r; n++)
      this.expandByObject(s[n], e);
    return this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, H), H.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, i;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Jt), he.subVectors(this.max, Jt), Rt.subVectors(t.a, Jt), kt.subVectors(t.b, Jt), vt.subVectors(t.c, Jt), ct.subVectors(kt, Rt), ut.subVectors(vt, kt), gt.subVectors(Rt, vt);
    let e = [
      0,
      -ct.z,
      ct.y,
      0,
      -ut.z,
      ut.y,
      0,
      -gt.z,
      gt.y,
      ct.z,
      0,
      -ct.x,
      ut.z,
      0,
      -ut.x,
      gt.z,
      0,
      -gt.x,
      -ct.y,
      ct.x,
      0,
      -ut.y,
      ut.x,
      0,
      -gt.y,
      gt.x,
      0
    ];
    return !Le(e, Rt, kt, vt, he) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Le(e, Rt, kt, vt, he)) ? !1 : (le.crossVectors(ct, ut), e = [le.x, le.y, le.z], Le(e, Rt, kt, vt, he));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, H).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(H).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (it[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), it[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), it[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), it[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), it[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), it[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), it[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), it[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(it), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const it = [
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y()
], H = /* @__PURE__ */ new y(), oe = /* @__PURE__ */ new ne(), Rt = /* @__PURE__ */ new y(), kt = /* @__PURE__ */ new y(), vt = /* @__PURE__ */ new y(), ct = /* @__PURE__ */ new y(), ut = /* @__PURE__ */ new y(), gt = /* @__PURE__ */ new y(), Jt = /* @__PURE__ */ new y(), he = /* @__PURE__ */ new y(), le = /* @__PURE__ */ new y(), Mt = /* @__PURE__ */ new y();
function Le(d, t, e, i, s) {
  for (let n = 0, r = d.length - 3; n <= r; n += 3) {
    Mt.fromArray(d, n);
    const o = s.x * Math.abs(Mt.x) + s.y * Math.abs(Mt.y) + s.z * Math.abs(Mt.z), a = t.dot(Mt), h = e.dot(Mt), l = i.dot(Mt);
    if (Math.max(-Math.max(a, h, l), Math.min(a, h, l)) > o)
      return !1;
  }
  return !0;
}
const Cn = /* @__PURE__ */ new ne(), $t = /* @__PURE__ */ new y(), Ne = /* @__PURE__ */ new y();
class Re {
  constructor(t = new y(), e = -1) {
    this.isSphere = !0, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const i = this.center;
    e !== void 0 ? i.copy(e) : Cn.setFromPoints(t).getCenter(i);
    let s = 0;
    for (let n = 0, r = t.length; n < r; n++)
      s = Math.max(s, i.distanceToSquared(t[n]));
    return this.radius = Math.sqrt(s), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const i = this.center.distanceToSquared(t);
    return e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    $t.subVectors(t, this.center);
    const e = $t.lengthSq();
    if (e > this.radius * this.radius) {
      const i = Math.sqrt(e), s = (i - this.radius) * 0.5;
      this.center.addScaledVector($t, s / i), this.radius += s;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Ne.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint($t.copy(t.center).add(Ne)), this.expandByPoint($t.copy(t.center).sub(Ne))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const st = /* @__PURE__ */ new y(), Ve = /* @__PURE__ */ new y(), ce = /* @__PURE__ */ new y(), dt = /* @__PURE__ */ new y(), We = /* @__PURE__ */ new y(), ue = /* @__PURE__ */ new y(), Ue = /* @__PURE__ */ new y();
class Qi {
  constructor(t = new y(), e = new y(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, st)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const i = e.dot(this.direction);
    return i < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = st.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (st.copy(this.origin).addScaledVector(this.direction, e), st.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, i, s) {
    Ve.copy(t).add(e).multiplyScalar(0.5), ce.copy(e).sub(t).normalize(), dt.copy(this.origin).sub(Ve);
    const n = t.distanceTo(e) * 0.5, r = -this.direction.dot(ce), o = dt.dot(this.direction), a = -dt.dot(ce), h = dt.lengthSq(), l = Math.abs(1 - r * r);
    let c, u, p, m;
    if (l > 0)
      if (c = r * a - o, u = r * o - a, m = n * l, c >= 0)
        if (u >= -m)
          if (u <= m) {
            const f = 1 / l;
            c *= f, u *= f, p = c * (c + r * u + 2 * o) + u * (r * c + u + 2 * a) + h;
          } else
            u = n, c = Math.max(0, -(r * u + o)), p = -c * c + u * (u + 2 * a) + h;
        else
          u = -n, c = Math.max(0, -(r * u + o)), p = -c * c + u * (u + 2 * a) + h;
      else
        u <= -m ? (c = Math.max(0, -(-r * n + o)), u = c > 0 ? -n : Math.min(Math.max(-n, -a), n), p = -c * c + u * (u + 2 * a) + h) : u <= m ? (c = 0, u = Math.min(Math.max(-n, -a), n), p = u * (u + 2 * a) + h) : (c = Math.max(0, -(r * n + o)), u = c > 0 ? n : Math.min(Math.max(-n, -a), n), p = -c * c + u * (u + 2 * a) + h);
    else
      u = r > 0 ? -n : n, c = Math.max(0, -(r * u + o)), p = -c * c + u * (u + 2 * a) + h;
    return i && i.copy(this.origin).addScaledVector(this.direction, c), s && s.copy(Ve).addScaledVector(ce, u), p;
  }
  intersectSphere(t, e) {
    st.subVectors(t.center, this.origin);
    const i = st.dot(this.direction), s = st.dot(st) - i * i, n = t.radius * t.radius;
    if (s > n) return null;
    const r = Math.sqrt(n - s), o = i - r, a = i + r;
    return a < 0 ? null : o < 0 ? this.at(a, e) : this.at(o, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(t.normal) + t.constant) / e;
    return i >= 0 ? i : null;
  }
  intersectPlane(t, e) {
    const i = this.distanceToPlane(t);
    return i === null ? null : this.at(i, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let i, s, n, r, o, a;
    const h = 1 / this.direction.x, l = 1 / this.direction.y, c = 1 / this.direction.z, u = this.origin;
    return h >= 0 ? (i = (t.min.x - u.x) * h, s = (t.max.x - u.x) * h) : (i = (t.max.x - u.x) * h, s = (t.min.x - u.x) * h), l >= 0 ? (n = (t.min.y - u.y) * l, r = (t.max.y - u.y) * l) : (n = (t.max.y - u.y) * l, r = (t.min.y - u.y) * l), i > r || n > s || ((n > i || isNaN(i)) && (i = n), (r < s || isNaN(s)) && (s = r), c >= 0 ? (o = (t.min.z - u.z) * c, a = (t.max.z - u.z) * c) : (o = (t.max.z - u.z) * c, a = (t.min.z - u.z) * c), i > a || o > s) || ((o > i || i !== i) && (i = o), (a < s || s !== s) && (s = a), s < 0) ? null : this.at(i >= 0 ? i : s, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, st) !== null;
  }
  intersectTriangle(t, e, i, s, n) {
    We.subVectors(e, t), ue.subVectors(i, t), Ue.crossVectors(We, ue);
    let r = this.direction.dot(Ue), o;
    if (r > 0) {
      if (s) return null;
      o = 1;
    } else if (r < 0)
      o = -1, r = -r;
    else
      return null;
    dt.subVectors(this.origin, t);
    const a = o * this.direction.dot(ue.crossVectors(dt, ue));
    if (a < 0)
      return null;
    const h = o * this.direction.dot(We.cross(dt));
    if (h < 0 || a + h > r)
      return null;
    const l = -o * dt.dot(Ue);
    return l < 0 ? null : this.at(l / r, n);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class L {
  constructor(t, e, i, s, n, r, o, a, h, l, c, u, p, m, f, x) {
    L.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, i, s, n, r, o, a, h, l, c, u, p, m, f, x);
  }
  set(t, e, i, s, n, r, o, a, h, l, c, u, p, m, f, x) {
    const g = this.elements;
    return g[0] = t, g[4] = e, g[8] = i, g[12] = s, g[1] = n, g[5] = r, g[9] = o, g[13] = a, g[2] = h, g[6] = l, g[10] = c, g[14] = u, g[3] = p, g[7] = m, g[11] = f, g[15] = x, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new L().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, i = t.elements;
    return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this;
  }
  copyPosition(t) {
    const e = this.elements, i = t.elements;
    return e[12] = i[12], e[13] = i[13], e[14] = i[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[3],
      e[6],
      0,
      e[1],
      e[4],
      e[7],
      0,
      e[2],
      e[5],
      e[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(t, e, i) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, i) {
    return this.set(
      t.x,
      e.x,
      i.x,
      0,
      t.y,
      e.y,
      i.y,
      0,
      t.z,
      e.z,
      i.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(t) {
    const e = this.elements, i = t.elements, s = 1 / Dt.setFromMatrixColumn(t, 0).length(), n = 1 / Dt.setFromMatrixColumn(t, 1).length(), r = 1 / Dt.setFromMatrixColumn(t, 2).length();
    return e[0] = i[0] * s, e[1] = i[1] * s, e[2] = i[2] * s, e[3] = 0, e[4] = i[4] * n, e[5] = i[5] * n, e[6] = i[6] * n, e[7] = 0, e[8] = i[8] * r, e[9] = i[9] * r, e[10] = i[10] * r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, i = t.x, s = t.y, n = t.z, r = Math.cos(i), o = Math.sin(i), a = Math.cos(s), h = Math.sin(s), l = Math.cos(n), c = Math.sin(n);
    if (t.order === "XYZ") {
      const u = r * l, p = r * c, m = o * l, f = o * c;
      e[0] = a * l, e[4] = -a * c, e[8] = h, e[1] = p + m * h, e[5] = u - f * h, e[9] = -o * a, e[2] = f - u * h, e[6] = m + p * h, e[10] = r * a;
    } else if (t.order === "YXZ") {
      const u = a * l, p = a * c, m = h * l, f = h * c;
      e[0] = u + f * o, e[4] = m * o - p, e[8] = r * h, e[1] = r * c, e[5] = r * l, e[9] = -o, e[2] = p * o - m, e[6] = f + u * o, e[10] = r * a;
    } else if (t.order === "ZXY") {
      const u = a * l, p = a * c, m = h * l, f = h * c;
      e[0] = u - f * o, e[4] = -r * c, e[8] = m + p * o, e[1] = p + m * o, e[5] = r * l, e[9] = f - u * o, e[2] = -r * h, e[6] = o, e[10] = r * a;
    } else if (t.order === "ZYX") {
      const u = r * l, p = r * c, m = o * l, f = o * c;
      e[0] = a * l, e[4] = m * h - p, e[8] = u * h + f, e[1] = a * c, e[5] = f * h + u, e[9] = p * h - m, e[2] = -h, e[6] = o * a, e[10] = r * a;
    } else if (t.order === "YZX") {
      const u = r * a, p = r * h, m = o * a, f = o * h;
      e[0] = a * l, e[4] = f - u * c, e[8] = m * c + p, e[1] = c, e[5] = r * l, e[9] = -o * l, e[2] = -h * l, e[6] = p * c + m, e[10] = u - f * c;
    } else if (t.order === "XZY") {
      const u = r * a, p = r * h, m = o * a, f = o * h;
      e[0] = a * l, e[4] = -c, e[8] = h * l, e[1] = u * c + f, e[5] = r * l, e[9] = p * c - m, e[2] = m * c - p, e[6] = o * l, e[10] = f * c + u;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Bn, t, En);
  }
  lookAt(t, e, i) {
    const s = this.elements;
    return W.subVectors(t, e), W.lengthSq() === 0 && (W.z = 1), W.normalize(), pt.crossVectors(i, W), pt.lengthSq() === 0 && (Math.abs(i.z) === 1 ? W.x += 1e-4 : W.z += 1e-4, W.normalize(), pt.crossVectors(i, W)), pt.normalize(), de.crossVectors(W, pt), s[0] = pt.x, s[4] = de.x, s[8] = W.x, s[1] = pt.y, s[5] = de.y, s[9] = W.y, s[2] = pt.z, s[6] = de.z, s[10] = W.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const i = t.elements, s = e.elements, n = this.elements, r = i[0], o = i[4], a = i[8], h = i[12], l = i[1], c = i[5], u = i[9], p = i[13], m = i[2], f = i[6], x = i[10], g = i[14], b = i[3], w = i[7], M = i[11], S = i[15], F = s[0], _ = s[4], A = s[8], C = s[12], B = s[1], E = s[5], Q = s[9], R = s[13], K = s[2], tt = s[6], Tt = s[10], xt = s[14], lt = s[3], v = s[7], D = s[11], V = s[15];
    return n[0] = r * F + o * B + a * K + h * lt, n[4] = r * _ + o * E + a * tt + h * v, n[8] = r * A + o * Q + a * Tt + h * D, n[12] = r * C + o * R + a * xt + h * V, n[1] = l * F + c * B + u * K + p * lt, n[5] = l * _ + c * E + u * tt + p * v, n[9] = l * A + c * Q + u * Tt + p * D, n[13] = l * C + c * R + u * xt + p * V, n[2] = m * F + f * B + x * K + g * lt, n[6] = m * _ + f * E + x * tt + g * v, n[10] = m * A + f * Q + x * Tt + g * D, n[14] = m * C + f * R + x * xt + g * V, n[3] = b * F + w * B + M * K + S * lt, n[7] = b * _ + w * E + M * tt + S * v, n[11] = b * A + w * Q + M * Tt + S * D, n[15] = b * C + w * R + M * xt + S * V, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], i = t[4], s = t[8], n = t[12], r = t[1], o = t[5], a = t[9], h = t[13], l = t[2], c = t[6], u = t[10], p = t[14], m = t[3], f = t[7], x = t[11], g = t[15];
    return m * (+n * a * c - s * h * c - n * o * u + i * h * u + s * o * p - i * a * p) + f * (+e * a * p - e * h * u + n * r * u - s * r * p + s * h * l - n * a * l) + x * (+e * h * c - e * o * p - n * r * c + i * r * p + n * o * l - i * h * l) + g * (-s * o * l - e * a * c + e * o * u + s * r * c - i * r * u + i * a * l);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, i) {
    const s = this.elements;
    return t.isVector3 ? (s[12] = t.x, s[13] = t.y, s[14] = t.z) : (s[12] = t, s[13] = e, s[14] = i), this;
  }
  invert() {
    const t = this.elements, e = t[0], i = t[1], s = t[2], n = t[3], r = t[4], o = t[5], a = t[6], h = t[7], l = t[8], c = t[9], u = t[10], p = t[11], m = t[12], f = t[13], x = t[14], g = t[15], b = c * x * h - f * u * h + f * a * p - o * x * p - c * a * g + o * u * g, w = m * u * h - l * x * h - m * a * p + r * x * p + l * a * g - r * u * g, M = l * f * h - m * c * h + m * o * p - r * f * p - l * o * g + r * c * g, S = m * c * a - l * f * a - m * o * u + r * f * u + l * o * x - r * c * x, F = e * b + i * w + s * M + n * S;
    if (F === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / F;
    return t[0] = b * _, t[1] = (f * u * n - c * x * n - f * s * p + i * x * p + c * s * g - i * u * g) * _, t[2] = (o * x * n - f * a * n + f * s * h - i * x * h - o * s * g + i * a * g) * _, t[3] = (c * a * n - o * u * n - c * s * h + i * u * h + o * s * p - i * a * p) * _, t[4] = w * _, t[5] = (l * x * n - m * u * n + m * s * p - e * x * p - l * s * g + e * u * g) * _, t[6] = (m * a * n - r * x * n - m * s * h + e * x * h + r * s * g - e * a * g) * _, t[7] = (r * u * n - l * a * n + l * s * h - e * u * h - r * s * p + e * a * p) * _, t[8] = M * _, t[9] = (m * c * n - l * f * n - m * i * p + e * f * p + l * i * g - e * c * g) * _, t[10] = (r * f * n - m * o * n + m * i * h - e * f * h - r * i * g + e * o * g) * _, t[11] = (l * o * n - r * c * n - l * i * h + e * c * h + r * i * p - e * o * p) * _, t[12] = S * _, t[13] = (l * f * s - m * c * s + m * i * u - e * f * u - l * i * x + e * c * x) * _, t[14] = (m * o * s - r * f * s - m * i * a + e * f * a + r * i * x - e * o * x) * _, t[15] = (r * c * s - l * o * s + l * i * a - e * c * a - r * i * u + e * o * u) * _, this;
  }
  scale(t) {
    const e = this.elements, i = t.x, s = t.y, n = t.z;
    return e[0] *= i, e[4] *= s, e[8] *= n, e[1] *= i, e[5] *= s, e[9] *= n, e[2] *= i, e[6] *= s, e[10] *= n, e[3] *= i, e[7] *= s, e[11] *= n, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, i, s));
  }
  makeTranslation(t, e, i) {
    return t.isVector3 ? this.set(
      1,
      0,
      0,
      t.x,
      0,
      1,
      0,
      t.y,
      0,
      0,
      1,
      t.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      t,
      0,
      1,
      0,
      e,
      0,
      0,
      1,
      i,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), i = Math.sin(t);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      e,
      -i,
      0,
      0,
      i,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), i = Math.sin(t);
    return this.set(
      e,
      0,
      i,
      0,
      0,
      1,
      0,
      0,
      -i,
      0,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), i = Math.sin(t);
    return this.set(
      e,
      -i,
      0,
      0,
      i,
      e,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(t, e) {
    const i = Math.cos(e), s = Math.sin(e), n = 1 - i, r = t.x, o = t.y, a = t.z, h = n * r, l = n * o;
    return this.set(
      h * r + i,
      h * o - s * a,
      h * a + s * o,
      0,
      h * o + s * a,
      l * o + i,
      l * a - s * r,
      0,
      h * a - s * o,
      l * a + s * r,
      n * a * a + i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e, i) {
    return this.set(
      t,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(t, e, i, s, n, r) {
    return this.set(
      1,
      i,
      n,
      0,
      t,
      1,
      r,
      0,
      e,
      s,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(t, e, i) {
    const s = this.elements, n = e._x, r = e._y, o = e._z, a = e._w, h = n + n, l = r + r, c = o + o, u = n * h, p = n * l, m = n * c, f = r * l, x = r * c, g = o * c, b = a * h, w = a * l, M = a * c, S = i.x, F = i.y, _ = i.z;
    return s[0] = (1 - (f + g)) * S, s[1] = (p + M) * S, s[2] = (m - w) * S, s[3] = 0, s[4] = (p - M) * F, s[5] = (1 - (u + g)) * F, s[6] = (x + b) * F, s[7] = 0, s[8] = (m + w) * _, s[9] = (x - b) * _, s[10] = (1 - (u + f)) * _, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
  }
  decompose(t, e, i) {
    const s = this.elements;
    let n = Dt.set(s[0], s[1], s[2]).length();
    const r = Dt.set(s[4], s[5], s[6]).length(), o = Dt.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (n = -n), t.x = s[12], t.y = s[13], t.z = s[14], Y.copy(this);
    const h = 1 / n, l = 1 / r, c = 1 / o;
    return Y.elements[0] *= h, Y.elements[1] *= h, Y.elements[2] *= h, Y.elements[4] *= l, Y.elements[5] *= l, Y.elements[6] *= l, Y.elements[8] *= c, Y.elements[9] *= c, Y.elements[10] *= c, e.setFromRotationMatrix(Y), i.x = n, i.y = r, i.z = o, this;
  }
  makePerspective(t, e, i, s, n, r, o = yt) {
    const a = this.elements, h = 2 * n / (e - t), l = 2 * n / (i - s), c = (e + t) / (e - t), u = (i + s) / (i - s);
    let p, m;
    if (o === yt)
      p = -(r + n) / (r - n), m = -2 * r * n / (r - n);
    else if (o === Te)
      p = -r / (r - n), m = -r * n / (r - n);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return a[0] = h, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = l, a[9] = u, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = p, a[14] = m, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
  }
  makeOrthographic(t, e, i, s, n, r, o = yt) {
    const a = this.elements, h = 1 / (e - t), l = 1 / (i - s), c = 1 / (r - n), u = (e + t) * h, p = (i + s) * l;
    let m, f;
    if (o === yt)
      m = (r + n) * c, f = -2 * c;
    else if (o === Te)
      m = n * c, f = -1 * c;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return a[0] = 2 * h, a[4] = 0, a[8] = 0, a[12] = -u, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -p, a[2] = 0, a[6] = 0, a[10] = f, a[14] = -m, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, i = t.elements;
    for (let s = 0; s < 16; s++)
      if (e[s] !== i[s]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let i = 0; i < 16; i++)
      this.elements[i] = t[i + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const i = this.elements;
    return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t;
  }
}
const Dt = /* @__PURE__ */ new y(), Y = /* @__PURE__ */ new L(), Bn = /* @__PURE__ */ new y(0, 0, 0), En = /* @__PURE__ */ new y(1, 1, 1), pt = /* @__PURE__ */ new y(), de = /* @__PURE__ */ new y(), W = /* @__PURE__ */ new y(), Ai = /* @__PURE__ */ new L(), zi = /* @__PURE__ */ new se();
class zt {
  constructor(t = 0, e = 0, i = 0, s = zt.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = e, this._z = i, this._order = s;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, i, s = this._order) {
    return this._x = t, this._y = e, this._z = i, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, i = !0) {
    const s = t.elements, n = s[0], r = s[4], o = s[8], a = s[1], h = s[5], l = s[9], c = s[2], u = s[6], p = s[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(z(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-l, p), this._z = Math.atan2(-r, n)) : (this._x = Math.atan2(u, h), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-z(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(a, h)) : (this._y = Math.atan2(-c, n), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(z(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-c, p), this._z = Math.atan2(-r, h)) : (this._y = 0, this._z = Math.atan2(a, n));
        break;
      case "ZYX":
        this._y = Math.asin(-z(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(u, p), this._z = Math.atan2(a, n)) : (this._x = 0, this._z = Math.atan2(-r, h));
        break;
      case "YZX":
        this._z = Math.asin(z(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-l, h), this._y = Math.atan2(-c, n)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-z(r, -1, 1)), Math.abs(r) < 0.9999999 ? (this._x = Math.atan2(u, h), this._y = Math.atan2(o, n)) : (this._x = Math.atan2(-l, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, i) {
    return Ai.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Ai, e, i);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return zi.setFromEuler(this), this.setFromQuaternion(zi, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
zt.DEFAULT_ORDER = "XYZ";
class Rn {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let kn = 0;
const Fi = /* @__PURE__ */ new y(), It = /* @__PURE__ */ new se(), nt = /* @__PURE__ */ new L(), pe = /* @__PURE__ */ new y(), Qt = /* @__PURE__ */ new y(), vn = /* @__PURE__ */ new y(), Dn = /* @__PURE__ */ new se(), Ti = /* @__PURE__ */ new y(1, 0, 0), Ci = /* @__PURE__ */ new y(0, 1, 0), Bi = /* @__PURE__ */ new y(0, 0, 1), Ei = { type: "added" }, In = { type: "removed" }, Pt = { type: "childadded", child: null }, qe = { type: "childremoved", child: null };
class N extends Ht {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: kn++ }), this.uuid = Yt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = N.DEFAULT_UP.clone();
    const t = new y(), e = new zt(), i = new se(), s = new y(1, 1, 1);
    function n() {
      i.setFromEuler(e, !1);
    }
    function r() {
      e.setFromQuaternion(i, void 0, !1);
    }
    e._onChange(n), i._onChange(r), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: s
      },
      modelViewMatrix: {
        value: new L()
      },
      normalMatrix: {
        value: new ht()
      }
    }), this.matrix = new L(), this.matrixWorld = new L(), this.matrixAutoUpdate = N.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = N.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Rn(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return It.setFromAxisAngle(t, e), this.quaternion.multiply(It), this;
  }
  rotateOnWorldAxis(t, e) {
    return It.setFromAxisAngle(t, e), this.quaternion.premultiply(It), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Ti, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Ci, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Bi, t);
  }
  translateOnAxis(t, e) {
    return Fi.copy(t).applyQuaternion(this.quaternion), this.position.add(Fi.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(Ti, t);
  }
  translateY(t) {
    return this.translateOnAxis(Ci, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Bi, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(nt.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, i) {
    t.isVector3 ? pe.copy(t) : pe.set(t, e, i);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), Qt.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? nt.lookAt(Qt, pe, this.up) : nt.lookAt(pe, Qt, this.up), this.quaternion.setFromRotationMatrix(nt), s && (nt.extractRotation(s.matrixWorld), It.setFromRotationMatrix(nt), this.quaternion.premultiply(It.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Ei), Pt.child = t, this.dispatchEvent(Pt), Pt.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++)
        this.remove(arguments[i]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(In), qe.child = t, this.dispatchEvent(qe), qe.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), nt.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), nt.multiply(t.parent.matrixWorld)), t.applyMatrix4(nt), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Ei), Pt.child = t, this.dispatchEvent(Pt), Pt.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let i = 0, s = this.children.length; i < s; i++) {
      const r = this.children[i].getObjectByProperty(t, e);
      if (r !== void 0)
        return r;
    }
  }
  getObjectsByProperty(t, e, i = []) {
    this[t] === e && i.push(this);
    const s = this.children;
    for (let n = 0, r = s.length; n < r; n++)
      s[n].getObjectsByProperty(t, e, i);
    return i;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Qt, t, vn), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Qt, Dn, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let i = 0, s = e.length; i < s; i++)
      e[i].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const e = this.children;
    for (let i = 0, s = e.length; i < s; i++)
      e[i].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
    const e = this.children;
    for (let i = 0, s = e.length; i < s; i++)
      e[i].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const i = this.parent;
    if (t === !0 && i !== null && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === !0) {
      const s = this.children;
      for (let n = 0, r = s.length; n < r; n++)
        s[n].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", i = {};
    e && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, i.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.visibility = this._visibility, s.active = this._active, s.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.geometryCount = this._geometryCount, s.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (s.boundingSphere = {
      center: s.boundingSphere.center.toArray(),
      radius: s.boundingSphere.radius
    }), this.boundingBox !== null && (s.boundingBox = {
      min: s.boundingBox.min.toArray(),
      max: s.boundingBox.max.toArray()
    }));
    function n(o, a) {
      return o[a.uuid] === void 0 && (o[a.uuid] = a.toJSON(t)), a.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = n(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const a = o.shapes;
        if (Array.isArray(a))
          for (let h = 0, l = a.length; h < l; h++) {
            const c = a[h];
            n(t.shapes, c);
          }
        else
          n(t.shapes, a);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (n(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let a = 0, h = this.material.length; a < h; a++)
          o.push(n(t.materials, this.material[a]));
        s.material = o;
      } else
        s.material = n(t.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let o = 0; o < this.children.length; o++)
        s.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const a = this.animations[o];
        s.animations.push(n(t.animations, a));
      }
    }
    if (e) {
      const o = r(t.geometries), a = r(t.materials), h = r(t.textures), l = r(t.images), c = r(t.shapes), u = r(t.skeletons), p = r(t.animations), m = r(t.nodes);
      o.length > 0 && (i.geometries = o), a.length > 0 && (i.materials = a), h.length > 0 && (i.textures = h), l.length > 0 && (i.images = l), c.length > 0 && (i.shapes = c), u.length > 0 && (i.skeletons = u), p.length > 0 && (i.animations = p), m.length > 0 && (i.nodes = m);
    }
    return i.object = s, i;
    function r(o) {
      const a = [];
      for (const h in o) {
        const l = o[h];
        delete l.metadata, a.push(l);
      }
      return a;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
      for (let i = 0; i < t.children.length; i++) {
        const s = t.children[i];
        this.add(s.clone());
      }
    return this;
  }
}
N.DEFAULT_UP = /* @__PURE__ */ new y(0, 1, 0);
N.DEFAULT_MATRIX_AUTO_UPDATE = !0;
N.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Z = /* @__PURE__ */ new y(), rt = /* @__PURE__ */ new y(), Ge = /* @__PURE__ */ new y(), at = /* @__PURE__ */ new y(), Ot = /* @__PURE__ */ new y(), Lt = /* @__PURE__ */ new y(), Ri = /* @__PURE__ */ new y(), je = /* @__PURE__ */ new y(), Xe = /* @__PURE__ */ new y(), He = /* @__PURE__ */ new y(), Ye = /* @__PURE__ */ new At(), Ze = /* @__PURE__ */ new At(), Je = /* @__PURE__ */ new At();
class $ {
  constructor(t = new y(), e = new y(), i = new y()) {
    this.a = t, this.b = e, this.c = i;
  }
  static getNormal(t, e, i, s) {
    s.subVectors(i, e), Z.subVectors(t, e), s.cross(Z);
    const n = s.lengthSq();
    return n > 0 ? s.multiplyScalar(1 / Math.sqrt(n)) : s.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(t, e, i, s, n) {
    Z.subVectors(s, e), rt.subVectors(i, e), Ge.subVectors(t, e);
    const r = Z.dot(Z), o = Z.dot(rt), a = Z.dot(Ge), h = rt.dot(rt), l = rt.dot(Ge), c = r * h - o * o;
    if (c === 0)
      return n.set(0, 0, 0), null;
    const u = 1 / c, p = (h * a - o * l) * u, m = (r * l - o * a) * u;
    return n.set(1 - p - m, m, p);
  }
  static containsPoint(t, e, i, s) {
    return this.getBarycoord(t, e, i, s, at) === null ? !1 : at.x >= 0 && at.y >= 0 && at.x + at.y <= 1;
  }
  static getInterpolation(t, e, i, s, n, r, o, a) {
    return this.getBarycoord(t, e, i, s, at) === null ? (a.x = 0, a.y = 0, "z" in a && (a.z = 0), "w" in a && (a.w = 0), null) : (a.setScalar(0), a.addScaledVector(n, at.x), a.addScaledVector(r, at.y), a.addScaledVector(o, at.z), a);
  }
  static getInterpolatedAttribute(t, e, i, s, n, r) {
    return Ye.setScalar(0), Ze.setScalar(0), Je.setScalar(0), Ye.fromBufferAttribute(t, e), Ze.fromBufferAttribute(t, i), Je.fromBufferAttribute(t, s), r.setScalar(0), r.addScaledVector(Ye, n.x), r.addScaledVector(Ze, n.y), r.addScaledVector(Je, n.z), r;
  }
  static isFrontFacing(t, e, i, s) {
    return Z.subVectors(i, e), rt.subVectors(t, e), Z.cross(rt).dot(s) < 0;
  }
  set(t, e, i) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(i), this;
  }
  setFromPointsAndIndices(t, e, i, s) {
    return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[s]), this;
  }
  setFromAttributeAndIndices(t, e, i, s) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, i), this.c.fromBufferAttribute(t, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return Z.subVectors(this.c, this.b), rt.subVectors(this.a, this.b), Z.cross(rt).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return $.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return $.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, i, s, n) {
    return $.getInterpolation(t, this.a, this.b, this.c, e, i, s, n);
  }
  containsPoint(t) {
    return $.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return $.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const i = this.a, s = this.b, n = this.c;
    let r, o;
    Ot.subVectors(s, i), Lt.subVectors(n, i), je.subVectors(t, i);
    const a = Ot.dot(je), h = Lt.dot(je);
    if (a <= 0 && h <= 0)
      return e.copy(i);
    Xe.subVectors(t, s);
    const l = Ot.dot(Xe), c = Lt.dot(Xe);
    if (l >= 0 && c <= l)
      return e.copy(s);
    const u = a * c - l * h;
    if (u <= 0 && a >= 0 && l <= 0)
      return r = a / (a - l), e.copy(i).addScaledVector(Ot, r);
    He.subVectors(t, n);
    const p = Ot.dot(He), m = Lt.dot(He);
    if (m >= 0 && p <= m)
      return e.copy(n);
    const f = p * h - a * m;
    if (f <= 0 && h >= 0 && m <= 0)
      return o = h / (h - m), e.copy(i).addScaledVector(Lt, o);
    const x = l * m - p * c;
    if (x <= 0 && c - l >= 0 && p - m >= 0)
      return Ri.subVectors(n, s), o = (c - l) / (c - l + (p - m)), e.copy(s).addScaledVector(Ri, o);
    const g = 1 / (x + f + u);
    return r = f * g, o = u * g, e.copy(i).addScaledVector(Ot, r).addScaledVector(Lt, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Ki = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, mt = { h: 0, s: 0, l: 0 }, me = { h: 0, s: 0, l: 0 };
function $e(d, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? d + (t - d) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? d + (t - d) * 6 * (2 / 3 - e) : d;
}
class Zt {
  constructor(t, e, i) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, i);
  }
  set(t, e, i) {
    if (e === void 0 && i === void 0) {
      const s = t;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else
      this.setRGB(t, e, i);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = J) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, j.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, i, s = j.workingColorSpace) {
    return this.r = t, this.g = e, this.b = i, j.toWorkingColorSpace(this, s), this;
  }
  setHSL(t, e, i, s = j.workingColorSpace) {
    if (t = ni(t, 1), e = z(e, 0, 1), i = z(i, 0, 1), e === 0)
      this.r = this.g = this.b = i;
    else {
      const n = i <= 0.5 ? i * (1 + e) : i + e - i * e, r = 2 * i - n;
      this.r = $e(r, n, t + 1 / 3), this.g = $e(r, n, t), this.b = $e(r, n, t - 1 / 3);
    }
    return j.toWorkingColorSpace(this, s), this;
  }
  setStyle(t, e = J) {
    function i(n) {
      n !== void 0 && parseFloat(n) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let n;
      const r = s[1], o = s[2];
      switch (r) {
        case "rgb":
        case "rgba":
          if (n = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return i(n[4]), this.setRGB(
              Math.min(255, parseInt(n[1], 10)) / 255,
              Math.min(255, parseInt(n[2], 10)) / 255,
              Math.min(255, parseInt(n[3], 10)) / 255,
              e
            );
          if (n = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return i(n[4]), this.setRGB(
              Math.min(100, parseInt(n[1], 10)) / 100,
              Math.min(100, parseInt(n[2], 10)) / 100,
              Math.min(100, parseInt(n[3], 10)) / 100,
              e
            );
          break;
        case "hsl":
        case "hsla":
          if (n = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return i(n[4]), this.setHSL(
              parseFloat(n[1]) / 360,
              parseFloat(n[2]) / 100,
              parseFloat(n[3]) / 100,
              e
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const n = s[1], r = n.length;
      if (r === 3)
        return this.setRGB(
          parseInt(n.charAt(0), 16) / 15,
          parseInt(n.charAt(1), 16) / 15,
          parseInt(n.charAt(2), 16) / 15,
          e
        );
      if (r === 6)
        return this.setHex(parseInt(n, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0)
      return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = J) {
    const i = Ki[t.toLowerCase()];
    return i !== void 0 ? this.setHex(i, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = ot(t.r), this.g = ot(t.g), this.b = ot(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = jt(t.r), this.g = jt(t.g), this.b = jt(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = J) {
    return j.fromWorkingColorSpace(P.copy(this), t), Math.round(z(P.r * 255, 0, 255)) * 65536 + Math.round(z(P.g * 255, 0, 255)) * 256 + Math.round(z(P.b * 255, 0, 255));
  }
  getHexString(t = J) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = j.workingColorSpace) {
    j.fromWorkingColorSpace(P.copy(this), e);
    const i = P.r, s = P.g, n = P.b, r = Math.max(i, s, n), o = Math.min(i, s, n);
    let a, h;
    const l = (o + r) / 2;
    if (o === r)
      a = 0, h = 0;
    else {
      const c = r - o;
      switch (h = l <= 0.5 ? c / (r + o) : c / (2 - r - o), r) {
        case i:
          a = (s - n) / c + (s < n ? 6 : 0);
          break;
        case s:
          a = (n - i) / c + 2;
          break;
        case n:
          a = (i - s) / c + 4;
          break;
      }
      a /= 6;
    }
    return t.h = a, t.s = h, t.l = l, t;
  }
  getRGB(t, e = j.workingColorSpace) {
    return j.fromWorkingColorSpace(P.copy(this), e), t.r = P.r, t.g = P.g, t.b = P.b, t;
  }
  getStyle(t = J) {
    j.fromWorkingColorSpace(P.copy(this), t);
    const e = P.r, i = P.g, s = P.b;
    return t !== J ? `color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(i * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(t, e, i) {
    return this.getHSL(mt), this.setHSL(mt.h + t, mt.s + e, mt.l + i);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, i) {
    return this.r = t.r + (e.r - t.r) * i, this.g = t.g + (e.g - t.g) * i, this.b = t.b + (e.b - t.b) * i, this;
  }
  lerpHSL(t, e) {
    this.getHSL(mt), t.getHSL(me);
    const i = ie(mt.h, me.h, e), s = ie(mt.s, me.s, e), n = ie(mt.l, me.l, e);
    return this.setHSL(i, s, n), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, i = this.g, s = this.b, n = t.elements;
    return this.r = n[0] * e + n[3] * i + n[6] * s, this.g = n[1] * e + n[4] * i + n[7] * s, this.b = n[2] * e + n[5] * i + n[8] * s, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const P = /* @__PURE__ */ new Zt();
Zt.NAMES = Ki;
let Pn = 0;
class re extends Ht {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Pn++ }), this.uuid = Yt(), this.name = "", this.type = "Material", this.blending = oi, this.side = ii, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = li, this.blendDst = ci, this.blendEquation = hi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Zt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ui, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = xi, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Bt, this.stencilZFail = Bt, this.stencilZPass = Bt, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0)
      for (const e in t) {
        const i = t[e];
        if (i === void 0) {
          console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
          continue;
        }
        const s = this[e];
        if (s === void 0) {
          console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
          continue;
        }
        s && s.isColor ? s.set(i) : s && s.isVector3 && i && i.isVector3 ? s.copy(i) : this[e] = i;
      }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = {
      textures: {},
      images: {}
    });
    const i = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== oi && (i.blending = this.blending), this.side !== ii && (i.side = this.side), this.vertexColors === !0 && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = !0), this.blendSrc !== li && (i.blendSrc = this.blendSrc), this.blendDst !== ci && (i.blendDst = this.blendDst), this.blendEquation !== hi && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== ui && (i.depthFunc = this.depthFunc), this.depthTest === !1 && (i.depthTest = this.depthTest), this.depthWrite === !1 && (i.depthWrite = this.depthWrite), this.colorWrite === !1 && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== xi && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Bt && (i.stencilFail = this.stencilFail), this.stencilZFail !== Bt && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== Bt && (i.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === !0 && (i.alphaHash = !0), this.alphaToCoverage === !0 && (i.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0), this.forceSinglePass === !0 && (i.forceSinglePass = !0), this.wireframe === !0 && (i.wireframe = !0), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = !0), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function s(n) {
      const r = [];
      for (const o in n) {
        const a = n[o];
        delete a.metadata, r.push(a);
      }
      return r;
    }
    if (e) {
      const n = s(t.textures), r = s(t.images);
      n.length > 0 && (i.textures = n), r.length > 0 && (i.images = r);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let i = null;
    if (e !== null) {
      const s = e.length;
      i = new Array(s);
      for (let n = 0; n !== s; ++n)
        i[n] = e[n].clone();
    }
    return this.clippingPlanes = i, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class On extends re {
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Zt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new zt(), this.combine = rs, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const T = /* @__PURE__ */ new y(), fe = /* @__PURE__ */ new q();
class St {
  constructor(t, e, i = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = i, this.usage = gi, this.updateRanges = [], this.gpuType = Yi, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, e, i) {
    t *= this.itemSize, i *= e.itemSize;
    for (let s = 0, n = this.itemSize; s < n; s++)
      this.array[t + s] = e.array[i + s];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, i = this.count; e < i; e++)
        fe.fromBufferAttribute(this, e), fe.applyMatrix3(t), this.setXY(e, fe.x, fe.y);
    else if (this.itemSize === 3)
      for (let e = 0, i = this.count; e < i; e++)
        T.fromBufferAttribute(this, e), T.applyMatrix3(t), this.setXYZ(e, T.x, T.y, T.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, i = this.count; e < i; e++)
      T.fromBufferAttribute(this, e), T.applyMatrix4(t), this.setXYZ(e, T.x, T.y, T.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, i = this.count; e < i; e++)
      T.fromBufferAttribute(this, e), T.applyNormalMatrix(t), this.setXYZ(e, T.x, T.y, T.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, i = this.count; e < i; e++)
      T.fromBufferAttribute(this, e), T.transformDirection(t), this.setXYZ(e, T.x, T.y, T.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let i = this.array[t * this.itemSize + e];
    return this.normalized && (i = qt(i, this.array)), i;
  }
  setComponent(t, e, i) {
    return this.normalized && (i = O(i, this.array)), this.array[t * this.itemSize + e] = i, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = qt(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = O(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = qt(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = O(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = qt(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = O(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = qt(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = O(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, i) {
    return t *= this.itemSize, this.normalized && (e = O(e, this.array), i = O(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this;
  }
  setXYZ(t, e, i, s) {
    return t *= this.itemSize, this.normalized && (e = O(e, this.array), i = O(i, this.array), s = O(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = s, this;
  }
  setXYZW(t, e, i, s, n) {
    return t *= this.itemSize, this.normalized && (e = O(e, this.array), i = O(i, this.array), s = O(s, this.array), n = O(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = s, this.array[t + 3] = n, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== gi && (t.usage = this.usage), t;
  }
}
class Ln extends St {
  constructor(t, e, i) {
    super(new Uint16Array(t), e, i);
  }
}
class Nn extends St {
  constructor(t, e, i) {
    super(new Uint32Array(t), e, i);
  }
}
class et extends St {
  constructor(t, e, i) {
    super(new Float32Array(t), e, i);
  }
}
let Vn = 0;
const G = /* @__PURE__ */ new L(), Qe = /* @__PURE__ */ new N(), Nt = /* @__PURE__ */ new y(), U = /* @__PURE__ */ new ne(), Kt = /* @__PURE__ */ new ne(), k = /* @__PURE__ */ new y();
class Ft extends Ht {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Vn++ }), this.uuid = Yt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (wn(t) ? Nn : Ln)(t, 1) : this.index = t, this;
  }
  setIndirect(t) {
    return this.indirect = t, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, i = 0) {
    this.groups.push({
      start: t,
      count: e,
      materialIndex: i
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0);
    const i = this.attributes.normal;
    if (i !== void 0) {
      const n = new ht().getNormalMatrix(t);
      i.applyNormalMatrix(n), i.needsUpdate = !0;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(t), s.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return G.makeRotationFromQuaternion(t), this.applyMatrix4(G), this;
  }
  rotateX(t) {
    return G.makeRotationX(t), this.applyMatrix4(G), this;
  }
  rotateY(t) {
    return G.makeRotationY(t), this.applyMatrix4(G), this;
  }
  rotateZ(t) {
    return G.makeRotationZ(t), this.applyMatrix4(G), this;
  }
  translate(t, e, i) {
    return G.makeTranslation(t, e, i), this.applyMatrix4(G), this;
  }
  scale(t, e, i) {
    return G.makeScale(t, e, i), this.applyMatrix4(G), this;
  }
  lookAt(t) {
    return Qe.lookAt(t), Qe.updateMatrix(), this.applyMatrix4(Qe.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Nt).negate(), this.translate(Nt.x, Nt.y, Nt.z), this;
  }
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (e === void 0) {
      const i = [];
      for (let s = 0, n = t.length; s < n; s++) {
        const r = t[s];
        i.push(r.x, r.y, r.z || 0);
      }
      this.setAttribute("position", new et(i, 3));
    } else {
      const i = Math.min(t.length, e.count);
      for (let s = 0; s < i; s++) {
        const n = t[s];
        e.setXYZ(s, n.x, n.y, n.z || 0);
      }
      t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = !0;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ne());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new y(-1 / 0, -1 / 0, -1 / 0),
        new y(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let i = 0, s = e.length; i < s; i++) {
          const n = e[i];
          U.setFromBufferAttribute(n), this.morphTargetsRelative ? (k.addVectors(this.boundingBox.min, U.min), this.boundingBox.expandByPoint(k), k.addVectors(this.boundingBox.max, U.max), this.boundingBox.expandByPoint(k)) : (this.boundingBox.expandByPoint(U.min), this.boundingBox.expandByPoint(U.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Re());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new y(), 1 / 0);
      return;
    }
    if (t) {
      const i = this.boundingSphere.center;
      if (U.setFromBufferAttribute(t), e)
        for (let n = 0, r = e.length; n < r; n++) {
          const o = e[n];
          Kt.setFromBufferAttribute(o), this.morphTargetsRelative ? (k.addVectors(U.min, Kt.min), U.expandByPoint(k), k.addVectors(U.max, Kt.max), U.expandByPoint(k)) : (U.expandByPoint(Kt.min), U.expandByPoint(Kt.max));
        }
      U.getCenter(i);
      let s = 0;
      for (let n = 0, r = t.count; n < r; n++)
        k.fromBufferAttribute(t, n), s = Math.max(s, i.distanceToSquared(k));
      if (e)
        for (let n = 0, r = e.length; n < r; n++) {
          const o = e[n], a = this.morphTargetsRelative;
          for (let h = 0, l = o.count; h < l; h++)
            k.fromBufferAttribute(o, h), a && (Nt.fromBufferAttribute(t, h), k.add(Nt)), s = Math.max(s, i.distanceToSquared(k));
        }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = e.position, s = e.normal, n = e.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new St(new Float32Array(4 * i.count), 4));
    const r = this.getAttribute("tangent"), o = [], a = [];
    for (let A = 0; A < i.count; A++)
      o[A] = new y(), a[A] = new y();
    const h = new y(), l = new y(), c = new y(), u = new q(), p = new q(), m = new q(), f = new y(), x = new y();
    function g(A, C, B) {
      h.fromBufferAttribute(i, A), l.fromBufferAttribute(i, C), c.fromBufferAttribute(i, B), u.fromBufferAttribute(n, A), p.fromBufferAttribute(n, C), m.fromBufferAttribute(n, B), l.sub(h), c.sub(h), p.sub(u), m.sub(u);
      const E = 1 / (p.x * m.y - m.x * p.y);
      isFinite(E) && (f.copy(l).multiplyScalar(m.y).addScaledVector(c, -p.y).multiplyScalar(E), x.copy(c).multiplyScalar(p.x).addScaledVector(l, -m.x).multiplyScalar(E), o[A].add(f), o[C].add(f), o[B].add(f), a[A].add(x), a[C].add(x), a[B].add(x));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: t.count
    }]);
    for (let A = 0, C = b.length; A < C; ++A) {
      const B = b[A], E = B.start, Q = B.count;
      for (let R = E, K = E + Q; R < K; R += 3)
        g(
          t.getX(R + 0),
          t.getX(R + 1),
          t.getX(R + 2)
        );
    }
    const w = new y(), M = new y(), S = new y(), F = new y();
    function _(A) {
      S.fromBufferAttribute(s, A), F.copy(S);
      const C = o[A];
      w.copy(C), w.sub(S.multiplyScalar(S.dot(C))).normalize(), M.crossVectors(F, C);
      const E = M.dot(a[A]) < 0 ? -1 : 1;
      r.setXYZW(A, w.x, w.y, w.z, E);
    }
    for (let A = 0, C = b.length; A < C; ++A) {
      const B = b[A], E = B.start, Q = B.count;
      for (let R = E, K = E + Q; R < K; R += 3)
        _(t.getX(R + 0)), _(t.getX(R + 1)), _(t.getX(R + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0)
        i = new St(new Float32Array(e.count * 3), 3), this.setAttribute("normal", i);
      else
        for (let u = 0, p = i.count; u < p; u++)
          i.setXYZ(u, 0, 0, 0);
      const s = new y(), n = new y(), r = new y(), o = new y(), a = new y(), h = new y(), l = new y(), c = new y();
      if (t)
        for (let u = 0, p = t.count; u < p; u += 3) {
          const m = t.getX(u + 0), f = t.getX(u + 1), x = t.getX(u + 2);
          s.fromBufferAttribute(e, m), n.fromBufferAttribute(e, f), r.fromBufferAttribute(e, x), l.subVectors(r, n), c.subVectors(s, n), l.cross(c), o.fromBufferAttribute(i, m), a.fromBufferAttribute(i, f), h.fromBufferAttribute(i, x), o.add(l), a.add(l), h.add(l), i.setXYZ(m, o.x, o.y, o.z), i.setXYZ(f, a.x, a.y, a.z), i.setXYZ(x, h.x, h.y, h.z);
        }
      else
        for (let u = 0, p = e.count; u < p; u += 3)
          s.fromBufferAttribute(e, u + 0), n.fromBufferAttribute(e, u + 1), r.fromBufferAttribute(e, u + 2), l.subVectors(r, n), c.subVectors(s, n), l.cross(c), i.setXYZ(u + 0, l.x, l.y, l.z), i.setXYZ(u + 1, l.x, l.y, l.z), i.setXYZ(u + 2, l.x, l.y, l.z);
      this.normalizeNormals(), i.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, i = t.count; e < i; e++)
      k.fromBufferAttribute(t, e), k.normalize(), t.setXYZ(e, k.x, k.y, k.z);
  }
  toNonIndexed() {
    function t(o, a) {
      const h = o.array, l = o.itemSize, c = o.normalized, u = new h.constructor(a.length * l);
      let p = 0, m = 0;
      for (let f = 0, x = a.length; f < x; f++) {
        o.isInterleavedBufferAttribute ? p = a[f] * o.data.stride + o.offset : p = a[f] * l;
        for (let g = 0; g < l; g++)
          u[m++] = h[p++];
      }
      return new St(u, l, c);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new Ft(), i = this.index.array, s = this.attributes;
    for (const o in s) {
      const a = s[o], h = t(a, i);
      e.setAttribute(o, h);
    }
    const n = this.morphAttributes;
    for (const o in n) {
      const a = [], h = n[o];
      for (let l = 0, c = h.length; l < c; l++) {
        const u = h[l], p = t(u, i);
        a.push(p);
      }
      e.morphAttributes[o] = a;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const r = this.groups;
    for (let o = 0, a = r.length; o < a; o++) {
      const h = r[o];
      e.addGroup(h.start, h.count, h.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const a = this.parameters;
      for (const h in a)
        a[h] !== void 0 && (t[h] = a[h]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = {
      type: e.array.constructor.name,
      array: Array.prototype.slice.call(e.array)
    });
    const i = this.attributes;
    for (const a in i) {
      const h = i[a];
      t.data.attributes[a] = h.toJSON(t.data);
    }
    const s = {};
    let n = !1;
    for (const a in this.morphAttributes) {
      const h = this.morphAttributes[a], l = [];
      for (let c = 0, u = h.length; c < u; c++) {
        const p = h[c];
        l.push(p.toJSON(t.data));
      }
      l.length > 0 && (s[a] = l, n = !0);
    }
    n && (t.data.morphAttributes = s, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const r = this.groups;
    r.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(r)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const i = t.index;
    i !== null && this.setIndex(i.clone(e));
    const s = t.attributes;
    for (const h in s) {
      const l = s[h];
      this.setAttribute(h, l.clone(e));
    }
    const n = t.morphAttributes;
    for (const h in n) {
      const l = [], c = n[h];
      for (let u = 0, p = c.length; u < p; u++)
        l.push(c[u].clone(e));
      this.morphAttributes[h] = l;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const r = t.groups;
    for (let h = 0, l = r.length; h < l; h++) {
      const c = r[h];
      this.addGroup(c.start, c.count, c.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const a = t.boundingSphere;
    return a !== null && (this.boundingSphere = a.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const ki = /* @__PURE__ */ new L(), bt = /* @__PURE__ */ new Qi(), ye = /* @__PURE__ */ new Re(), vi = /* @__PURE__ */ new y(), xe = /* @__PURE__ */ new y(), ge = /* @__PURE__ */ new y(), Me = /* @__PURE__ */ new y(), Ke = /* @__PURE__ */ new y(), be = /* @__PURE__ */ new y(), Di = /* @__PURE__ */ new y(), we = /* @__PURE__ */ new y();
class Wn extends N {
  constructor(t = new Ft(), e = new On()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, i = Object.keys(e);
    if (i.length > 0) {
      const s = e[i[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let n = 0, r = s.length; n < r; n++) {
          const o = s[n].name || String(n);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = n;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const i = this.geometry, s = i.attributes.position, n = i.morphAttributes.position, r = i.morphTargetsRelative;
    e.fromBufferAttribute(s, t);
    const o = this.morphTargetInfluences;
    if (n && o) {
      be.set(0, 0, 0);
      for (let a = 0, h = n.length; a < h; a++) {
        const l = o[a], c = n[a];
        l !== 0 && (Ke.fromBufferAttribute(c, t), r ? be.addScaledVector(Ke, l) : be.addScaledVector(Ke.sub(e), l));
      }
      e.add(be);
    }
    return e;
  }
  raycast(t, e) {
    const i = this.geometry, s = this.material, n = this.matrixWorld;
    s !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), ye.copy(i.boundingSphere), ye.applyMatrix4(n), bt.copy(t.ray).recast(t.near), !(ye.containsPoint(bt.origin) === !1 && (bt.intersectSphere(ye, vi) === null || bt.origin.distanceToSquared(vi) > (t.far - t.near) ** 2)) && (ki.copy(n).invert(), bt.copy(t.ray).applyMatrix4(ki), !(i.boundingBox !== null && bt.intersectsBox(i.boundingBox) === !1) && this._computeIntersections(t, e, bt)));
  }
  _computeIntersections(t, e, i) {
    let s;
    const n = this.geometry, r = this.material, o = n.index, a = n.attributes.position, h = n.attributes.uv, l = n.attributes.uv1, c = n.attributes.normal, u = n.groups, p = n.drawRange;
    if (o !== null)
      if (Array.isArray(r))
        for (let m = 0, f = u.length; m < f; m++) {
          const x = u[m], g = r[x.materialIndex], b = Math.max(x.start, p.start), w = Math.min(o.count, Math.min(x.start + x.count, p.start + p.count));
          for (let M = b, S = w; M < S; M += 3) {
            const F = o.getX(M), _ = o.getX(M + 1), A = o.getX(M + 2);
            s = _e(this, g, t, i, h, l, c, F, _, A), s && (s.faceIndex = Math.floor(M / 3), s.face.materialIndex = x.materialIndex, e.push(s));
          }
        }
      else {
        const m = Math.max(0, p.start), f = Math.min(o.count, p.start + p.count);
        for (let x = m, g = f; x < g; x += 3) {
          const b = o.getX(x), w = o.getX(x + 1), M = o.getX(x + 2);
          s = _e(this, r, t, i, h, l, c, b, w, M), s && (s.faceIndex = Math.floor(x / 3), e.push(s));
        }
      }
    else if (a !== void 0)
      if (Array.isArray(r))
        for (let m = 0, f = u.length; m < f; m++) {
          const x = u[m], g = r[x.materialIndex], b = Math.max(x.start, p.start), w = Math.min(a.count, Math.min(x.start + x.count, p.start + p.count));
          for (let M = b, S = w; M < S; M += 3) {
            const F = M, _ = M + 1, A = M + 2;
            s = _e(this, g, t, i, h, l, c, F, _, A), s && (s.faceIndex = Math.floor(M / 3), s.face.materialIndex = x.materialIndex, e.push(s));
          }
        }
      else {
        const m = Math.max(0, p.start), f = Math.min(a.count, p.start + p.count);
        for (let x = m, g = f; x < g; x += 3) {
          const b = x, w = x + 1, M = x + 2;
          s = _e(this, r, t, i, h, l, c, b, w, M), s && (s.faceIndex = Math.floor(x / 3), e.push(s));
        }
      }
  }
}
function Un(d, t, e, i, s, n, r, o) {
  let a;
  if (t.side === qi ? a = i.intersectTriangle(r, n, s, !0, o) : a = i.intersectTriangle(s, n, r, t.side === ii, o), a === null) return null;
  we.copy(o), we.applyMatrix4(d.matrixWorld);
  const h = e.ray.origin.distanceTo(we);
  return h < e.near || h > e.far ? null : {
    distance: h,
    point: we.clone(),
    object: d
  };
}
function _e(d, t, e, i, s, n, r, o, a, h) {
  d.getVertexPosition(o, xe), d.getVertexPosition(a, ge), d.getVertexPosition(h, Me);
  const l = Un(d, t, e, i, xe, ge, Me, Di);
  if (l) {
    const c = new y();
    $.getBarycoord(Di, xe, ge, Me, c), s && (l.uv = $.getInterpolatedAttribute(s, o, a, h, c, new q())), n && (l.uv1 = $.getInterpolatedAttribute(n, o, a, h, c, new q())), r && (l.normal = $.getInterpolatedAttribute(r, o, a, h, c, new y()), l.normal.dot(i.direction) > 0 && l.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: a,
      c: h,
      normal: new y(),
      materialIndex: 0
    };
    $.getNormal(xe, ge, Me, u.normal), l.face = u, l.barycoord = c;
  }
  return l;
}
class ri extends Ft {
  constructor(t = 1, e = 1, i = 1, s = 1, n = 1, r = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: i,
      widthSegments: s,
      heightSegments: n,
      depthSegments: r
    };
    const o = this;
    s = Math.floor(s), n = Math.floor(n), r = Math.floor(r);
    const a = [], h = [], l = [], c = [];
    let u = 0, p = 0;
    m("z", "y", "x", -1, -1, i, e, t, r, n, 0), m("z", "y", "x", 1, -1, i, e, -t, r, n, 1), m("x", "z", "y", 1, 1, t, i, e, s, r, 2), m("x", "z", "y", 1, -1, t, i, -e, s, r, 3), m("x", "y", "z", 1, -1, t, e, i, s, n, 4), m("x", "y", "z", -1, -1, t, e, -i, s, n, 5), this.setIndex(a), this.setAttribute("position", new et(h, 3)), this.setAttribute("normal", new et(l, 3)), this.setAttribute("uv", new et(c, 2));
    function m(f, x, g, b, w, M, S, F, _, A, C) {
      const B = M / _, E = S / A, Q = M / 2, R = S / 2, K = F / 2, tt = _ + 1, Tt = A + 1;
      let xt = 0, lt = 0;
      const v = new y();
      for (let D = 0; D < Tt; D++) {
        const V = D * E - R;
        for (let Ct = 0; Ct < tt; Ct++) {
          const ae = Ct * B - Q;
          v[f] = ae * b, v[x] = V * w, v[g] = K, h.push(v.x, v.y, v.z), v[f] = 0, v[x] = 0, v[g] = F > 0 ? 1 : -1, l.push(v.x, v.y, v.z), c.push(Ct / _), c.push(1 - D / A), xt += 1;
        }
      }
      for (let D = 0; D < A; D++)
        for (let V = 0; V < _; V++) {
          const Ct = u + V + tt * D, ae = u + V + tt * (D + 1), ss = u + (V + 1) + tt * (D + 1), ai = u + (V + 1) + tt * D;
          a.push(Ct, ae, ai), a.push(ae, ss, ai), lt += 6;
        }
      o.addGroup(p, lt, C), p += lt, u += xt;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new ri(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function ke(d) {
  const t = {};
  for (const e in d) {
    t[e] = {};
    for (const i in d[e]) {
      const s = d[e][i];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][i] = null) : t[e][i] = s.clone() : Array.isArray(s) ? t[e][i] = s.slice() : t[e][i] = s;
    }
  }
  return t;
}
function qn(d) {
  const t = {};
  for (let e = 0; e < d.length; e++) {
    const i = ke(d[e]);
    for (const s in i)
      t[s] = i[s];
  }
  return t;
}
function Gn(d) {
  const t = [];
  for (let e = 0; e < d.length; e++)
    t.push(d[e].clone());
  return t;
}
function wa(d) {
  const t = d.getRenderTarget();
  return t === null ? d.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : j.workingColorSpace;
}
const _a = { clone: ke, merge: qn };
var jn = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Xn = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Hn extends re {
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = jn, this.fragmentShader = Xn, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = ke(t.uniforms), this.uniformsGroups = Gn(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const s in this.uniforms) {
      const r = this.uniforms[s].value;
      r && r.isTexture ? e.uniforms[s] = {
        type: "t",
        value: r.toJSON(t).uuid
      } : r && r.isColor ? e.uniforms[s] = {
        type: "c",
        value: r.getHex()
      } : r && r.isVector2 ? e.uniforms[s] = {
        type: "v2",
        value: r.toArray()
      } : r && r.isVector3 ? e.uniforms[s] = {
        type: "v3",
        value: r.toArray()
      } : r && r.isVector4 ? e.uniforms[s] = {
        type: "v4",
        value: r.toArray()
      } : r && r.isMatrix3 ? e.uniforms[s] = {
        type: "m3",
        value: r.toArray()
      } : r && r.isMatrix4 ? e.uniforms[s] = {
        type: "m4",
        value: r.toArray()
      } : e.uniforms[s] = {
        value: r
      };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const i = {};
    for (const s in this.extensions)
      this.extensions[s] === !0 && (i[s] = !0);
    return Object.keys(i).length > 0 && (e.extensions = i), e;
  }
}
class ts extends N {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new L(), this.projectionMatrix = new L(), this.projectionMatrixInverse = new L(), this.coordinateSystem = yt;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ft = /* @__PURE__ */ new y(), Ii = /* @__PURE__ */ new q(), Pi = /* @__PURE__ */ new q();
class _t extends ts {
  constructor(t = 50, e = 1, i = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = i, this.far = s, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * @param {number} focalLength - Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = Ce * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   *
   * @returns {number}
   */
  getFocalLength() {
    const t = Math.tan(ee * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return Ce * 2 * Math.atan(
      Math.tan(ee * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   *
   * @param {number} distance
   * @param {Vector2} minTarget
   * @param {Vector2} maxTarget
   */
  getViewBounds(t, e, i) {
    ft.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(ft.x, ft.y).multiplyScalar(-t / ft.z), ft.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(ft.x, ft.y).multiplyScalar(-t / ft.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance
   * @param {Vector2} target - Vector2 target used to store result where x is width and y is height.
   * @returns {Vector2}
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, Ii, Pi), e.subVectors(Pi, Ii);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   *
   * @param {number} fullWidth
   * @param {number} fullHeight
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   */
  setViewOffset(t, e, i, s, n, r) {
    this.aspect = t / e, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = s, this.view.width = n, this.view.height = r, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(ee * 0.5 * this.fov) / this.zoom, i = 2 * e, s = this.aspect * i, n = -0.5 * s;
    const r = this.view;
    if (this.view !== null && this.view.enabled) {
      const a = r.fullWidth, h = r.fullHeight;
      n += r.offsetX * s / a, e -= r.offsetY * i / h, s *= r.width / a, i *= r.height / h;
    }
    const o = this.filmOffset;
    o !== 0 && (n += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(n, n + s, e, e - i, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const Vt = -90, Wt = 1;
class Yn extends N {
  constructor(t, e, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new _t(Vt, Wt, t, e);
    s.layers = this.layers, this.add(s);
    const n = new _t(Vt, Wt, t, e);
    n.layers = this.layers, this.add(n);
    const r = new _t(Vt, Wt, t, e);
    r.layers = this.layers, this.add(r);
    const o = new _t(Vt, Wt, t, e);
    o.layers = this.layers, this.add(o);
    const a = new _t(Vt, Wt, t, e);
    a.layers = this.layers, this.add(a);
    const h = new _t(Vt, Wt, t, e);
    h.layers = this.layers, this.add(h);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [i, s, n, r, o, a] = e;
    for (const h of e) this.remove(h);
    if (t === yt)
      i.up.set(0, 1, 0), i.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), n.up.set(0, 0, -1), n.lookAt(0, 1, 0), r.up.set(0, 0, 1), r.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), a.up.set(0, 1, 0), a.lookAt(0, 0, -1);
    else if (t === Te)
      i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), n.up.set(0, 0, 1), n.lookAt(0, 1, 0), r.up.set(0, 0, -1), r.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), a.up.set(0, -1, 0), a.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const h of e)
      this.add(h), h.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: s } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [n, r, o, a, h, l] = this.children, c = t.getRenderTarget(), u = t.getActiveCubeFace(), p = t.getActiveMipmapLevel(), m = t.xr.enabled;
    t.xr.enabled = !1;
    const f = i.texture.generateMipmaps;
    i.texture.generateMipmaps = !1, t.setRenderTarget(i, 0, s), t.render(e, n), t.setRenderTarget(i, 1, s), t.render(e, r), t.setRenderTarget(i, 2, s), t.render(e, o), t.setRenderTarget(i, 3, s), t.render(e, a), t.setRenderTarget(i, 4, s), t.render(e, h), i.texture.generateMipmaps = f, t.setRenderTarget(i, 5, s), t.render(e, l), t.setRenderTarget(c, u, p), t.xr.enabled = m, i.texture.needsPMREMUpdate = !0;
  }
}
class Zn extends X {
  constructor(t, e, i, s, n, r, o, a, h, l) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : as, super(t, e, i, s, n, r, o, a, h, l), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class Sa extends Tn {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const i = { width: t, height: t, depth: 1 }, s = [i, i, i, i, i, i];
    this.texture = new Zn(s, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : Fe;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const i = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, s = new ri(5, 5, 5), n = new Hn({
      name: "CubemapFromEquirect",
      uniforms: ke(i.uniforms),
      vertexShader: i.vertexShader,
      fragmentShader: i.fragmentShader,
      side: qi,
      blending: ns
    });
    n.uniforms.tEquirect.value = e;
    const r = new Wn(s, n), o = e.minFilter;
    return e.minFilter === ji && (e.minFilter = Fe), new Yn(1, 10, this).update(t, r), e.minFilter = o, r.geometry.dispose(), r.material.dispose(), this;
  }
  clear(t, e, i, s) {
    const n = t.getRenderTarget();
    for (let r = 0; r < 6; r++)
      t.setRenderTarget(this, r), t.clear(e, i, s);
    t.setRenderTarget(n);
  }
}
class Aa extends N {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new zt(), this.environmentIntensity = 1, this.environmentRotation = new zt(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
const ti = /* @__PURE__ */ new y(), Jn = /* @__PURE__ */ new y(), $n = /* @__PURE__ */ new ht();
class Ut {
  constructor(t = new y(1, 0, 0), e = 0) {
    this.isPlane = !0, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, i, s) {
    return this.normal.set(t, e, i), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, i) {
    const s = ti.subVectors(i, e).cross(Jn.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const i = t.delta(ti), s = this.normal.dot(i);
    if (s === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const n = -(t.start.dot(this.normal) + this.constant) / s;
    return n < 0 || n > 1 ? null : e.copy(t.start).addScaledVector(i, n);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), i = this.distanceToPoint(t.end);
    return e < 0 && i > 0 || i < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const i = e || $n.getNormalMatrix(t), s = this.coplanarPoint(ti).applyMatrix4(t), n = this.normal.applyMatrix3(i).normalize();
    return this.constant = -s.dot(n), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const wt = /* @__PURE__ */ new Re(), Se = /* @__PURE__ */ new y();
class za {
  constructor(t = new Ut(), e = new Ut(), i = new Ut(), s = new Ut(), n = new Ut(), r = new Ut()) {
    this.planes = [t, e, i, s, n, r];
  }
  set(t, e, i, s, n, r) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(i), o[3].copy(s), o[4].copy(n), o[5].copy(r), this;
  }
  copy(t) {
    const e = this.planes;
    for (let i = 0; i < 6; i++)
      e[i].copy(t.planes[i]);
    return this;
  }
  setFromProjectionMatrix(t, e = yt) {
    const i = this.planes, s = t.elements, n = s[0], r = s[1], o = s[2], a = s[3], h = s[4], l = s[5], c = s[6], u = s[7], p = s[8], m = s[9], f = s[10], x = s[11], g = s[12], b = s[13], w = s[14], M = s[15];
    if (i[0].setComponents(a - n, u - h, x - p, M - g).normalize(), i[1].setComponents(a + n, u + h, x + p, M + g).normalize(), i[2].setComponents(a + r, u + l, x + m, M + b).normalize(), i[3].setComponents(a - r, u - l, x - m, M - b).normalize(), i[4].setComponents(a - o, u - c, x - f, M - w).normalize(), e === yt)
      i[5].setComponents(a + o, u + c, x + f, M + w).normalize();
    else if (e === Te)
      i[5].setComponents(o, c, f, w).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      t.boundingSphere === null && t.computeBoundingSphere(), wt.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), wt.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(wt);
  }
  intersectsSprite(t) {
    return wt.center.set(0, 0, 0), wt.radius = 0.7071067811865476, wt.applyMatrix4(t.matrixWorld), this.intersectsSphere(wt);
  }
  intersectsSphere(t) {
    const e = this.planes, i = t.center, s = -t.radius;
    for (let n = 0; n < 6; n++)
      if (e[n].distanceToPoint(i) < s)
        return !1;
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let i = 0; i < 6; i++) {
      const s = e[i];
      if (Se.x = s.normal.x > 0 ? t.max.x : t.min.x, Se.y = s.normal.y > 0 ? t.max.y : t.min.y, Se.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(Se) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let i = 0; i < 6; i++)
      if (e[i].distanceToPoint(t) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class es extends re {
  constructor(t) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Zt(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const Be = /* @__PURE__ */ new y(), Ee = /* @__PURE__ */ new y(), Oi = /* @__PURE__ */ new L(), te = /* @__PURE__ */ new Qi(), Ae = /* @__PURE__ */ new Re(), ei = /* @__PURE__ */ new y(), Li = /* @__PURE__ */ new y();
class Qn extends N {
  constructor(t = new Ft(), e = new es()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, i = [0];
      for (let s = 1, n = e.count; s < n; s++)
        Be.fromBufferAttribute(e, s - 1), Ee.fromBufferAttribute(e, s), i[s] = i[s - 1], i[s] += Be.distanceTo(Ee);
      t.setAttribute("lineDistance", new et(i, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, e) {
    const i = this.geometry, s = this.matrixWorld, n = t.params.Line.threshold, r = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Ae.copy(i.boundingSphere), Ae.applyMatrix4(s), Ae.radius += n, t.ray.intersectsSphere(Ae) === !1) return;
    Oi.copy(s).invert(), te.copy(t.ray).applyMatrix4(Oi);
    const o = n / ((this.scale.x + this.scale.y + this.scale.z) / 3), a = o * o, h = this.isLineSegments ? 2 : 1, l = i.index, u = i.attributes.position;
    if (l !== null) {
      const p = Math.max(0, r.start), m = Math.min(l.count, r.start + r.count);
      for (let f = p, x = m - 1; f < x; f += h) {
        const g = l.getX(f), b = l.getX(f + 1), w = ze(this, t, te, a, g, b);
        w && e.push(w);
      }
      if (this.isLineLoop) {
        const f = l.getX(m - 1), x = l.getX(p), g = ze(this, t, te, a, f, x);
        g && e.push(g);
      }
    } else {
      const p = Math.max(0, r.start), m = Math.min(u.count, r.start + r.count);
      for (let f = p, x = m - 1; f < x; f += h) {
        const g = ze(this, t, te, a, f, f + 1);
        g && e.push(g);
      }
      if (this.isLineLoop) {
        const f = ze(this, t, te, a, m - 1, p);
        f && e.push(f);
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, i = Object.keys(e);
    if (i.length > 0) {
      const s = e[i[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let n = 0, r = s.length; n < r; n++) {
          const o = s[n].name || String(n);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = n;
        }
      }
    }
  }
}
function ze(d, t, e, i, s, n) {
  const r = d.geometry.attributes.position;
  if (Be.fromBufferAttribute(r, s), Ee.fromBufferAttribute(r, n), e.distanceSqToSegment(Be, Ee, ei, Li) > i) return;
  ei.applyMatrix4(d.matrixWorld);
  const a = t.ray.origin.distanceTo(ei);
  if (!(a < t.near || a > t.far))
    return {
      distance: a,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Li.clone().applyMatrix4(d.matrixWorld),
      index: s,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: d
    };
}
const Ni = /* @__PURE__ */ new y(), Vi = /* @__PURE__ */ new y();
class Kn extends Qn {
  constructor(t, e) {
    super(t, e), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, i = [];
      for (let s = 0, n = e.count; s < n; s += 2)
        Ni.fromBufferAttribute(e, s), Vi.fromBufferAttribute(e, s + 1), i[s] = s === 0 ? 0 : i[s - 1], i[s + 1] = i[s] + Ni.distanceTo(Vi);
      t.setAttribute("lineDistance", new et(i, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Fa extends N {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
class Ta extends X {
  constructor(t, e, i, s, n, r, o, a, h, l = ve) {
    if (l !== ve && l !== mi)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    i === void 0 && l === ve && (i = Hi), i === void 0 && l === mi && (i = ms), super(null, s, n, r, o, a, l, i, h), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.magFilter = o !== void 0 ? o : Xt, this.minFilter = a !== void 0 ? a : Xt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class is extends Ft {
  constructor(t = 1, e = 1, i = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: i,
      heightSegments: s
    };
    const n = t / 2, r = e / 2, o = Math.floor(i), a = Math.floor(s), h = o + 1, l = a + 1, c = t / o, u = e / a, p = [], m = [], f = [], x = [];
    for (let g = 0; g < l; g++) {
      const b = g * u - r;
      for (let w = 0; w < h; w++) {
        const M = w * c - n;
        m.push(M, -b, 0), f.push(0, 0, 1), x.push(w / o), x.push(1 - g / a);
      }
    }
    for (let g = 0; g < a; g++)
      for (let b = 0; b < o; b++) {
        const w = b + h * g, M = b + h * (g + 1), S = b + 1 + h * (g + 1), F = b + 1 + h * g;
        p.push(w, M, F), p.push(M, S, F);
      }
    this.setIndex(p), this.setAttribute("position", new et(m, 3)), this.setAttribute("normal", new et(f, 3)), this.setAttribute("uv", new et(x, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new is(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class Ca extends re {
  constructor(t) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = nn, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class Ba extends re {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
class Ea extends N {
  constructor(t, e = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Zt(t), this.intensity = e;
  }
  dispose() {
  }
  copy(t, e) {
    return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (e.object.target = this.target.uuid), e;
  }
}
class Ra extends ts {
  constructor(t = -1, e = 1, i = 1, s = -1, n = 0.1, r = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = s, this.near = n, this.far = r, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, i, s, n, r) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = s, this.view.width = n, this.view.height = r, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let n = i - t, r = i + t, o = s + e, a = s - e;
    if (this.view !== null && this.view.enabled) {
      const h = (this.right - this.left) / this.view.fullWidth / this.zoom, l = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      n += h * this.view.offsetX, r = n + h * this.view.width, o -= l * this.view.offsetY, a = o - l * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(n, r, o, a, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
class ka extends _t {
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.cameras = t;
  }
}
class va {
  constructor(t = !0) {
    this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = Wi(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let t = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const e = Wi();
      t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
    }
    return t;
  }
}
function Wi() {
  return performance.now();
}
class Da {
  constructor(t = 1, e = 0, i = 0) {
    return this.radius = t, this.phi = e, this.theta = i, this;
  }
  set(t, e, i) {
    return this.radius = t, this.phi = e, this.theta = i, this;
  }
  copy(t) {
    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = z(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, i) {
    return this.radius = Math.sqrt(t * t + e * e + i * i), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, i), this.phi = Math.acos(z(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ia extends Kn {
  constructor(t, e = 16776960) {
    const i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), s = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], n = new Ft();
    n.setIndex(new St(i, 1)), n.setAttribute("position", new et(s, 3)), super(n, new es({ color: e, toneMapped: !1 })), this.box = t, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
  }
  updateMatrixWorld(t) {
    const e = this.box;
    e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(0.5), super.updateMatrixWorld(t));
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Pa extends Ht {
  constructor(t, e = null) {
    super(), this.object = t, this.domElement = e, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function Oa(d, t, e, i) {
  const s = tr(i);
  switch (e) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case ys:
      return d * t;
    case gs:
      return d * t;
    case Ms:
      return d * t * 2;
    case bs:
      return d * t / s.components * s.byteLength;
    case ws:
      return d * t / s.components * s.byteLength;
    case _s:
      return d * t * 2 / s.components * s.byteLength;
    case Ss:
      return d * t * 2 / s.components * s.byteLength;
    case xs:
      return d * t * 3 / s.components * s.byteLength;
    case Zi:
      return d * t * 4 / s.components * s.byteLength;
    case As:
      return d * t * 4 / s.components * s.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case zs:
    case Fs:
      return Math.floor((d + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Ts:
    case Cs:
      return Math.floor((d + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case Es:
    case ks:
      return Math.max(d, 16) * Math.max(t, 8) / 4;
    case Bs:
    case Rs:
      return Math.max(d, 8) * Math.max(t, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case vs:
    case Ds:
      return Math.floor((d + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Is:
      return Math.floor((d + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case Ps:
      return Math.floor((d + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Os:
      return Math.floor((d + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Ls:
      return Math.floor((d + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Ns:
      return Math.floor((d + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Vs:
      return Math.floor((d + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Ws:
      return Math.floor((d + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Us:
      return Math.floor((d + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case qs:
      return Math.floor((d + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Gs:
      return Math.floor((d + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case js:
      return Math.floor((d + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Xs:
      return Math.floor((d + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case Hs:
      return Math.floor((d + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Ys:
      return Math.floor((d + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case Zs:
      return Math.floor((d + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case Js:
    case $s:
    case Qs:
      return Math.ceil(d / 4) * Math.ceil(t / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case Ks:
    case tn:
      return Math.ceil(d / 4) * Math.ceil(t / 4) * 8;
    case en:
    case sn:
      return Math.ceil(d / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${e} format.`
  );
}
function tr(d) {
  switch (d) {
    case Xi:
    case os:
      return { byteLength: 1, components: 1 };
    case ls:
    case hs:
    case us:
      return { byteLength: 2, components: 1 };
    case ds:
    case ps:
      return { byteLength: 2, components: 4 };
    case Hi:
    case cs:
    case Yi:
      return { byteLength: 4, components: 1 };
    case fs:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${d}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Ui
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ui);
export {
  Gr as ACESFilmicToneMapping,
  hi as AddEquation,
  Nr as AddOperation,
  cr as AdditiveBlending,
  Xr as AgXToneMapping,
  ys as AlphaFormat,
  ua as AlwaysCompare,
  kr as AlwaysDepth,
  xi as AlwaysStencilFunc,
  ka as ArrayCamera,
  qi as BackSide,
  nn as BasicDepthPacking,
  ne as Box3,
  Ia as Box3Helper,
  ri as BoxGeometry,
  St as BufferAttribute,
  Ft as BufferGeometry,
  os as ByteType,
  ts as Camera,
  qr as CineonToneMapping,
  Gt as ClampToEdgeWrapping,
  va as Clock,
  Zt as Color,
  j as ColorManagement,
  Br as ConstantAlphaFactor,
  Tr as ConstantColorFactor,
  Pa as Controls,
  Yn as CubeCamera,
  as as CubeReflectionMapping,
  Yr as CubeRefractionMapping,
  Zn as CubeTexture,
  $r as CubeUVReflectionMapping,
  nr as CullFaceBack,
  rr as CullFaceFront,
  sr as CullFaceNone,
  pr as CustomBlending,
  jr as CustomToneMapping,
  ba as Data3DTexture,
  Ma as DataArrayTexture,
  ve as DepthFormat,
  mi as DepthStencilFormat,
  Ta as DepthTexture,
  lr as DoubleSide,
  _r as DstAlphaFactor,
  Ar as DstColorFactor,
  aa as EqualCompare,
  Dr as EqualDepth,
  Zr as EquirectangularReflectionMapping,
  Jr as EquirectangularRefractionMapping,
  zt as Euler,
  Ht as EventDispatcher,
  et as Float32BufferAttribute,
  Yi as FloatType,
  ii as FrontSide,
  za as Frustum,
  da as GLSL3,
  ha as GreaterCompare,
  Pr as GreaterDepth,
  ca as GreaterEqualCompare,
  Ir as GreaterEqualDepth,
  Fa as Group,
  us as HalfFloatType,
  Sn as ImageUtils,
  cs as IntType,
  Bt as KeepStencilOp,
  Rn as Layers,
  ra as LessCompare,
  vr as LessDepth,
  oa as LessEqualCompare,
  ui as LessEqualDepth,
  Ea as Light,
  Qn as Line,
  es as LineBasicMaterial,
  Kn as LineSegments,
  Fe as LinearFilter,
  ji as LinearMipmapLinearFilter,
  ta as LinearMipmapNearestFilter,
  fi as LinearSRGBColorSpace,
  Wr as LinearToneMapping,
  yi as LinearTransfer,
  Ms as LuminanceAlphaFormat,
  gs as LuminanceFormat,
  er as MOUSE,
  re as Material,
  pa as MathUtils,
  ht as Matrix3,
  L as Matrix4,
  xr as MaxEquation,
  Wn as Mesh,
  On as MeshBasicMaterial,
  Ca as MeshDepthMaterial,
  Ba as MeshDistanceMaterial,
  yr as MinEquation,
  pi as MirroredRepeatWrapping,
  Lr as MixOperation,
  dr as MultiplyBlending,
  rs as MultiplyOperation,
  Xt as NearestFilter,
  Kr as NearestMipmapLinearFilter,
  Qr as NearestMipmapNearestFilter,
  Hr as NeutralToneMapping,
  na as NeverCompare,
  Rr as NeverDepth,
  ns as NoBlending,
  Ji as NoColorSpace,
  Vr as NoToneMapping,
  oi as NormalBlending,
  la as NotEqualCompare,
  Or as NotEqualDepth,
  N as Object3D,
  sa as ObjectSpaceNormalMap,
  Mr as OneFactor,
  Er as OneMinusConstantAlphaFactor,
  Cr as OneMinusConstantColorFactor,
  Sr as OneMinusDstAlphaFactor,
  zr as OneMinusDstColorFactor,
  ci as OneMinusSrcAlphaFactor,
  wr as OneMinusSrcColorFactor,
  Ra as OrthographicCamera,
  ar as PCFShadowMap,
  or as PCFSoftShadowMap,
  _t as PerspectiveCamera,
  Ut as Plane,
  is as PlaneGeometry,
  se as Quaternion,
  Ce as RAD2DEG,
  en as RED_GREEN_RGTC2_Format,
  Ks as RED_RGTC1_Format,
  Ui as REVISION,
  ea as RGBADepthPacking,
  Zi as RGBAFormat,
  As as RGBAIntegerFormat,
  Hs as RGBA_ASTC_10x10_Format,
  Gs as RGBA_ASTC_10x5_Format,
  js as RGBA_ASTC_10x6_Format,
  Xs as RGBA_ASTC_10x8_Format,
  Ys as RGBA_ASTC_12x10_Format,
  Zs as RGBA_ASTC_12x12_Format,
  Ps as RGBA_ASTC_4x4_Format,
  Os as RGBA_ASTC_5x4_Format,
  Ls as RGBA_ASTC_5x5_Format,
  Ns as RGBA_ASTC_6x5_Format,
  Vs as RGBA_ASTC_6x6_Format,
  Ws as RGBA_ASTC_8x5_Format,
  Us as RGBA_ASTC_8x6_Format,
  qs as RGBA_ASTC_8x8_Format,
  Js as RGBA_BPTC_Format,
  Is as RGBA_ETC2_EAC_Format,
  ks as RGBA_PVRTC_2BPPV1_Format,
  Rs as RGBA_PVRTC_4BPPV1_Format,
  Fs as RGBA_S3TC_DXT1_Format,
  Ts as RGBA_S3TC_DXT3_Format,
  Cs as RGBA_S3TC_DXT5_Format,
  xs as RGBFormat,
  $s as RGB_BPTC_SIGNED_Format,
  Qs as RGB_BPTC_UNSIGNED_Format,
  vs as RGB_ETC1_Format,
  Ds as RGB_ETC2_Format,
  Es as RGB_PVRTC_2BPPV1_Format,
  Bs as RGB_PVRTC_4BPPV1_Format,
  zs as RGB_S3TC_DXT1_Format,
  _s as RGFormat,
  Ss as RGIntegerFormat,
  Qi as Ray,
  bs as RedFormat,
  ws as RedIntegerFormat,
  Ur as ReinhardToneMapping,
  Fn as RenderTarget,
  di as RepeatWrapping,
  fr as ReverseSubtractEquation,
  sn as SIGNED_RED_GREEN_RGTC2_Format,
  tn as SIGNED_RED_RGTC1_Format,
  J as SRGBColorSpace,
  De as SRGBTransfer,
  Aa as Scene,
  Hn as ShaderMaterial,
  hs as ShortType,
  $i as Source,
  Re as Sphere,
  Da as Spherical,
  li as SrcAlphaFactor,
  Fr as SrcAlphaSaturateFactor,
  br as SrcColorFactor,
  gi as StaticDrawUsage,
  mr as SubtractEquation,
  ur as SubtractiveBlending,
  ir as TOUCH,
  ia as TangentSpaceNormalMap,
  X as Texture,
  $ as Triangle,
  Gi as UVMapping,
  Ln as Uint16BufferAttribute,
  Nn as Uint32BufferAttribute,
  _a as UniformsUtils,
  Xi as UnsignedByteType,
  ms as UnsignedInt248Type,
  fs as UnsignedInt5999Type,
  Hi as UnsignedIntType,
  ds as UnsignedShort4444Type,
  ps as UnsignedShort5551Type,
  ls as UnsignedShortType,
  hr as VSMShadowMap,
  q as Vector2,
  y as Vector3,
  At as Vector4,
  yt as WebGLCoordinateSystem,
  Sa as WebGLCubeRenderTarget,
  Tn as WebGLRenderTarget,
  Te as WebGPUCoordinateSystem,
  gr as ZeroFactor,
  wn as arrayNeedsUint32,
  ke as cloneUniforms,
  ma as createCanvasElement,
  si as createElementNS,
  Oa as getByteLength,
  wa as getUnlitUniformColorSpace,
  qn as mergeUniforms,
  ya as probeAsync,
  xa as toNormalizedProjectionMatrix,
  ga as toReversedProjectionMatrix,
  fa as warnOnce
};
