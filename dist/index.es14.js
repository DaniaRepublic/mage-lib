/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const gn = "172", Po = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, Io = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, No = 0, Oo = 1, Do = 2, Lo = 1, Vo = 2, Uo = 3, Ki = 0, xn = 1, Wo = 2, qn = 0, ps = 1, qo = 2, Ho = 3, Jo = 4, Go = 5, fs = 100, Xo = 101, jo = 102, Yo = 103, Zo = 104, $o = 200, Qo = 201, Ko = 202, th = 203, ms = 204, ys = 205, eh = 206, ih = 207, sh = 208, nh = 209, rh = 210, ah = 211, oh = 212, hh = 213, lh = 214, ch = 0, uh = 1, dh = 2, gs = 3, ph = 4, fh = 5, mh = 6, yh = 7, Hn = 0, gh = 1, xh = 2, bh = 0, Mh = 1, wh = 2, _h = 3, Sh = 4, vh = 5, Ah = 6, Th = 7, xs = "attached", Jn = "detached", bn = 300, Gn = 301, zh = 302, Ch = 303, Fh = 304, Bh = 306, bs = 1e3, oe = 1001, Ms = 1002, Et = 1003, Eh = 1004, kh = 1005, ri = 1006, Rh = 1007, Mn = 1008, wn = 1009, Xn = 1010, jn = 1011, Yn = 1012, Zn = 1013, _n = 1014, fi = 1015, $n = 1016, Qn = 1017, Kn = 1018, tr = 1020, er = 35902, ir = 1021, sr = 1022, ss = 1023, nr = 1024, rr = 1025, wi = 1026, ws = 1027, Sn = 1028, ar = 1029, or = 1030, hr = 1031, lr = 1033, cr = 33776, ur = 33777, dr = 33778, pr = 33779, fr = 35840, mr = 35841, yr = 35842, gr = 35843, xr = 36196, br = 37492, Mr = 37496, wr = 37808, _r = 37809, Sr = 37810, vr = 37811, Ar = 37812, Tr = 37813, zr = 37814, Cr = 37815, Fr = 37816, Br = 37817, Er = 37818, kr = 37819, Rr = 37820, Pr = 37821, Ir = 36492, Nr = 36494, Or = 36495, Dr = 36283, Lr = 36284, Vr = 36285, Ur = 36286, ai = 2300, ts = 2301, _i = 2302, _s = 2400, Ss = 2401, vs = 2402, Wr = 2500, Ph = 0, Ih = 1, Nh = 2, qr = 3200, Oh = 3201, Hr = 0, Dh = 1, vn = "", it = "srgb", As = "srgb-linear", Ts = "linear", Si = "srgb", Wt = 7680, zs = 519, Lh = 512, Vh = 513, Uh = 514, Wh = 515, qh = 516, Hh = 517, Jh = 518, Gh = 519, es = 35044, Xh = "300 es", Ft = 2e3, oi = 2001;
class le {
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
const U = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Cs = 1234567;
const ve = Math.PI / 180, Ce = 180 / Math.PI;
function nt() {
  const c = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (U[c & 255] + U[c >> 8 & 255] + U[c >> 16 & 255] + U[c >> 24 & 255] + "-" + U[t & 255] + U[t >> 8 & 255] + "-" + U[t >> 16 & 15 | 64] + U[t >> 24 & 255] + "-" + U[e & 63 | 128] + U[e >> 8 & 255] + "-" + U[e >> 16 & 255] + U[e >> 24 & 255] + U[i & 255] + U[i >> 8 & 255] + U[i >> 16 & 255] + U[i >> 24 & 255]).toLowerCase();
}
function z(c, t, e) {
  return Math.max(t, Math.min(e, c));
}
function ns(c, t) {
  return (c % t + t) % t;
}
function Jr(c, t, e, i, s) {
  return i + (c - t) * (s - i) / (e - t);
}
function Gr(c, t, e) {
  return c !== t ? (e - c) / (t - c) : 0;
}
function Ae(c, t, e) {
  return (1 - e) * c + e * t;
}
function Xr(c, t, e, i) {
  return Ae(c, t, 1 - Math.exp(-e * i));
}
function jr(c, t = 1) {
  return t - Math.abs(ns(c, t * 2) - t);
}
function Yr(c, t, e) {
  return c <= t ? 0 : c >= e ? 1 : (c = (c - t) / (e - t), c * c * (3 - 2 * c));
}
function Zr(c, t, e) {
  return c <= t ? 0 : c >= e ? 1 : (c = (c - t) / (e - t), c * c * c * (c * (c * 6 - 15) + 10));
}
function $r(c, t) {
  return c + Math.floor(Math.random() * (t - c + 1));
}
function Qr(c, t) {
  return c + Math.random() * (t - c);
}
function Kr(c) {
  return c * (0.5 - Math.random());
}
function ta(c) {
  c !== void 0 && (Cs = c);
  let t = Cs += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function ea(c) {
  return c * ve;
}
function ia(c) {
  return c * Ce;
}
function sa(c) {
  return (c & c - 1) === 0 && c !== 0;
}
function na(c) {
  return Math.pow(2, Math.ceil(Math.log(c) / Math.LN2));
}
function ra(c) {
  return Math.pow(2, Math.floor(Math.log(c) / Math.LN2));
}
function aa(c, t, e, i, s) {
  const n = Math.cos, r = Math.sin, a = n(e / 2), o = r(e / 2), h = n((t + i) / 2), l = r((t + i) / 2), u = n((t - i) / 2), d = r((t - i) / 2), p = n((i - t) / 2), f = r((i - t) / 2);
  switch (s) {
    case "XYX":
      c.set(a * l, o * u, o * d, a * h);
      break;
    case "YZY":
      c.set(o * d, a * l, o * u, a * h);
      break;
    case "ZXZ":
      c.set(o * u, o * d, a * l, a * h);
      break;
    case "XZX":
      c.set(a * l, o * f, o * p, a * h);
      break;
    case "YXY":
      c.set(o * p, a * l, o * f, a * h);
      break;
    case "ZYZ":
      c.set(o * f, o * p, a * l, a * h);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s);
  }
}
function st(c, t) {
  switch (t.constructor) {
    case Float32Array:
      return c;
    case Uint32Array:
      return c / 4294967295;
    case Uint16Array:
      return c / 65535;
    case Uint8Array:
      return c / 255;
    case Int32Array:
      return Math.max(c / 2147483647, -1);
    case Int16Array:
      return Math.max(c / 32767, -1);
    case Int8Array:
      return Math.max(c / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function F(c, t) {
  switch (t.constructor) {
    case Float32Array:
      return c;
    case Uint32Array:
      return Math.round(c * 4294967295);
    case Uint16Array:
      return Math.round(c * 65535);
    case Uint8Array:
      return Math.round(c * 255);
    case Int32Array:
      return Math.round(c * 2147483647);
    case Int16Array:
      return Math.round(c * 32767);
    case Int8Array:
      return Math.round(c * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const jh = {
  DEG2RAD: ve,
  RAD2DEG: Ce,
  generateUUID: nt,
  clamp: z,
  euclideanModulo: ns,
  mapLinear: Jr,
  inverseLerp: Gr,
  lerp: Ae,
  damp: Xr,
  pingpong: jr,
  smoothstep: Yr,
  smootherstep: Zr,
  randInt: $r,
  randFloat: Qr,
  randFloatSpread: Kr,
  seededRandom: ta,
  degToRad: ea,
  radToDeg: ia,
  isPowerOfTwo: sa,
  ceilPowerOfTwo: na,
  floorPowerOfTwo: ra,
  setQuaternionFromProperEuler: aa,
  normalize: F,
  denormalize: st
};
class S {
  constructor(t = 0, e = 0) {
    S.prototype.isVector2 = !0, this.x = t, this.y = e;
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
class Mt {
  constructor(t, e, i, s, n, r, a, o, h) {
    Mt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, i, s, n, r, a, o, h);
  }
  set(t, e, i, s, n, r, a, o, h) {
    const l = this.elements;
    return l[0] = t, l[1] = s, l[2] = a, l[3] = e, l[4] = n, l[5] = o, l[6] = i, l[7] = r, l[8] = h, this;
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
    const i = t.elements, s = e.elements, n = this.elements, r = i[0], a = i[3], o = i[6], h = i[1], l = i[4], u = i[7], d = i[2], p = i[5], f = i[8], m = s[0], g = s[3], x = s[6], b = s[1], w = s[4], M = s[7], _ = s[2], v = s[5], A = s[8];
    return n[0] = r * m + a * b + o * _, n[3] = r * g + a * w + o * v, n[6] = r * x + a * M + o * A, n[1] = h * m + l * b + u * _, n[4] = h * g + l * w + u * v, n[7] = h * x + l * M + u * A, n[2] = d * m + p * b + f * _, n[5] = d * g + p * w + f * v, n[8] = d * x + p * M + f * A, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], i = t[1], s = t[2], n = t[3], r = t[4], a = t[5], o = t[6], h = t[7], l = t[8];
    return e * r * l - e * a * h - i * n * l + i * a * o + s * n * h - s * r * o;
  }
  invert() {
    const t = this.elements, e = t[0], i = t[1], s = t[2], n = t[3], r = t[4], a = t[5], o = t[6], h = t[7], l = t[8], u = l * r - a * h, d = a * o - l * n, p = h * n - r * o, f = e * u + i * d + s * p;
    if (f === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const m = 1 / f;
    return t[0] = u * m, t[1] = (s * h - l * i) * m, t[2] = (a * i - s * r) * m, t[3] = d * m, t[4] = (l * e - s * o) * m, t[5] = (s * n - a * e) * m, t[6] = p * m, t[7] = (i * o - h * e) * m, t[8] = (r * e - i * n) * m, this;
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
  setUvTransform(t, e, i, s, n, r, a) {
    const o = Math.cos(n), h = Math.sin(n);
    return this.set(
      i * o,
      i * h,
      -i * (o * r + h * a) + r + t,
      -s * h,
      s * o,
      -s * (-h * r + o * a) + a + e,
      0,
      0,
      1
    ), this;
  }
  //
  scale(t, e) {
    return this.premultiply(vi.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(vi.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(vi.makeTranslation(t, e)), this;
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
const vi = /* @__PURE__ */ new Mt();
function oa(c) {
  for (let t = c.length - 1; t >= 0; --t)
    if (c[t] >= 65535) return !0;
  return !1;
}
function hi(c) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", c);
}
function Yh() {
  const c = hi("canvas");
  return c.style.display = "block", c;
}
const Fs = {};
function Zh(c) {
  c in Fs || (Fs[c] = !0, console.warn(c));
}
function $h(c, t, e) {
  return new Promise(function(i, s) {
    function n() {
      switch (c.clientWaitSync(t, c.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case c.WAIT_FAILED:
          s();
          break;
        case c.TIMEOUT_EXPIRED:
          setTimeout(n, e);
          break;
        default:
          i();
      }
    }
    setTimeout(n, e);
  });
}
function Qh(c) {
  const t = c.elements;
  t[2] = 0.5 * t[2] + 0.5 * t[3], t[6] = 0.5 * t[6] + 0.5 * t[7], t[10] = 0.5 * t[10] + 0.5 * t[11], t[14] = 0.5 * t[14] + 0.5 * t[15];
}
function Kh(c) {
  const t = c.elements;
  t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
}
const Bs = /* @__PURE__ */ new Mt().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Es = /* @__PURE__ */ new Mt().set(
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
function ha() {
  const c = {
    enabled: !0,
    workingColorSpace: As,
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
      return this.enabled === !1 || n === r || !n || !r || (this.spaces[n].transfer === Si && (s.r = xt(s.r), s.g = xt(s.g), s.b = xt(s.b)), this.spaces[n].primaries !== this.spaces[r].primaries && (s.applyMatrix3(this.spaces[n].toXYZ), s.applyMatrix3(this.spaces[r].fromXYZ)), this.spaces[r].transfer === Si && (s.r = he(s.r), s.g = he(s.g), s.b = he(s.b))), s;
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
      return s === vn ? Ts : this.spaces[s].transfer;
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
  return c.define({
    [As]: {
      primaries: t,
      whitePoint: i,
      transfer: Ts,
      toXYZ: Bs,
      fromXYZ: Es,
      luminanceCoefficients: e,
      workingColorSpaceConfig: { unpackColorSpace: it },
      outputColorSpaceConfig: { drawingBufferColorSpace: it }
    },
    [it]: {
      primaries: t,
      whitePoint: i,
      transfer: Si,
      toXYZ: Bs,
      fromXYZ: Es,
      luminanceCoefficients: e,
      outputColorSpaceConfig: { drawingBufferColorSpace: it }
    }
  }), c;
}
const $ = /* @__PURE__ */ ha();
function xt(c) {
  return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
}
function he(c) {
  return c < 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
}
let qt;
class la {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let e;
    if (t instanceof HTMLCanvasElement)
      e = t;
    else {
      qt === void 0 && (qt = hi("canvas")), qt.width = t.width, qt.height = t.height;
      const i = qt.getContext("2d");
      t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), e = qt;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = hi("canvas");
      e.width = t.width, e.height = t.height;
      const i = e.getContext("2d");
      i.drawImage(t, 0, 0, t.width, t.height);
      const s = i.getImageData(0, 0, t.width, t.height), n = s.data;
      for (let r = 0; r < n.length; r++)
        n[r] = xt(n[r] / 255) * 255;
      return i.putImageData(s, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let i = 0; i < e.length; i++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[i] = Math.floor(xt(e[i] / 255) * 255) : e[i] = xt(e[i]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let ca = 0;
class An {
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: ca++ }), this.uuid = nt(), this.data = t, this.dataReady = !0, this.version = 0;
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
        for (let r = 0, a = s.length; r < a; r++)
          s[r].isDataTexture ? n.push(Ai(s[r].image)) : n.push(Ai(s[r]));
      } else
        n = Ai(s);
      i.url = n;
    }
    return e || (t.images[this.uuid] = i), i;
  }
}
function Ai(c) {
  return typeof HTMLImageElement < "u" && c instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && c instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && c instanceof ImageBitmap ? la.getDataURL(c) : c.data ? {
    data: Array.from(c.data),
    width: c.width,
    height: c.height,
    type: c.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let ua = 0;
class H extends le {
  constructor(t = H.DEFAULT_IMAGE, e = H.DEFAULT_MAPPING, i = oe, s = oe, n = ri, r = Mn, a = ss, o = wn, h = H.DEFAULT_ANISOTROPY, l = vn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: ua++ }), this.uuid = nt(), this.name = "", this.source = new An(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = i, this.wrapT = s, this.magFilter = n, this.minFilter = r, this.anisotropy = h, this.format = a, this.internalFormat = null, this.type = o, this.offset = new S(0, 0), this.repeat = new S(1, 1), this.center = new S(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Mt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = l, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
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
    if (this.mapping !== bn) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case bs:
          t.x = t.x - Math.floor(t.x);
          break;
        case oe:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case Ms:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case bs:
          t.y = t.y - Math.floor(t.y);
          break;
        case oe:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case Ms:
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
H.DEFAULT_IMAGE = null;
H.DEFAULT_MAPPING = bn;
H.DEFAULT_ANISOTROPY = 1;
class L {
  constructor(t = 0, e = 0, i = 0, s = 1) {
    L.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = i, this.w = s;
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
    const o = t.elements, h = o[0], l = o[4], u = o[8], d = o[1], p = o[5], f = o[9], m = o[2], g = o[6], x = o[10];
    if (Math.abs(l - d) < 0.01 && Math.abs(u - m) < 0.01 && Math.abs(f - g) < 0.01) {
      if (Math.abs(l + d) < 0.1 && Math.abs(u + m) < 0.1 && Math.abs(f + g) < 0.1 && Math.abs(h + p + x - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const w = (h + 1) / 2, M = (p + 1) / 2, _ = (x + 1) / 2, v = (l + d) / 4, A = (u + m) / 4, T = (f + g) / 4;
      return w > M && w > _ ? w < 0.01 ? (i = 0, s = 0.707106781, n = 0.707106781) : (i = Math.sqrt(w), s = v / i, n = A / i) : M > _ ? M < 0.01 ? (i = 0.707106781, s = 0, n = 0.707106781) : (s = Math.sqrt(M), i = v / s, n = T / s) : _ < 0.01 ? (i = 0.707106781, s = 0.707106781, n = 0) : (n = Math.sqrt(_), i = A / n, s = T / n), this.set(i, s, n, e), this;
    }
    let b = Math.sqrt((g - f) * (g - f) + (u - m) * (u - m) + (d - l) * (d - l));
    return Math.abs(b) < 1e-3 && (b = 1), this.x = (g - f) / b, this.y = (u - m) / b, this.z = (d - l) / b, this.w = Math.acos((h + p + x - 1) / 2), this;
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
class da extends le {
  constructor(t = 1, e = 1, i = {}) {
    super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new L(0, 0, t, e), this.scissorTest = !1, this.viewport = new L(0, 0, t, e);
    const s = { width: t, height: e, depth: 1 };
    i = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: ri,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, i);
    const n = new H(s, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.colorSpace);
    n.flipY = !1, n.generateMipmaps = i.generateMipmaps, n.internalFormat = i.internalFormat, this.textures = [];
    const r = i.count;
    for (let a = 0; a < r; a++)
      this.textures[a] = n.clone(), this.textures[a].isRenderTargetTexture = !0, this.textures[a].renderTarget = this;
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
    return this.texture.source = new An(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class pa extends da {
  constructor(t = 1, e = 1, i = {}) {
    super(t, e, i), this.isWebGLRenderTarget = !0;
  }
}
class tl extends H {
  constructor(t = null, e = 1, i = 1, s = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: i, depth: s }, this.magFilter = Et, this.minFilter = Et, this.wrapR = oe, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class el extends H {
  constructor(t = null, e = 1, i = 1, s = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: i, depth: s }, this.magFilter = Et, this.minFilter = Et, this.wrapR = oe, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class ce {
  constructor(t = 0, e = 0, i = 0, s = 1) {
    this.isQuaternion = !0, this._x = t, this._y = e, this._z = i, this._w = s;
  }
  static slerpFlat(t, e, i, s, n, r, a) {
    let o = i[s + 0], h = i[s + 1], l = i[s + 2], u = i[s + 3];
    const d = n[r + 0], p = n[r + 1], f = n[r + 2], m = n[r + 3];
    if (a === 0) {
      t[e + 0] = o, t[e + 1] = h, t[e + 2] = l, t[e + 3] = u;
      return;
    }
    if (a === 1) {
      t[e + 0] = d, t[e + 1] = p, t[e + 2] = f, t[e + 3] = m;
      return;
    }
    if (u !== m || o !== d || h !== p || l !== f) {
      let g = 1 - a;
      const x = o * d + h * p + l * f + u * m, b = x >= 0 ? 1 : -1, w = 1 - x * x;
      if (w > Number.EPSILON) {
        const _ = Math.sqrt(w), v = Math.atan2(_, x * b);
        g = Math.sin(g * v) / _, a = Math.sin(a * v) / _;
      }
      const M = a * b;
      if (o = o * g + d * M, h = h * g + p * M, l = l * g + f * M, u = u * g + m * M, g === 1 - a) {
        const _ = 1 / Math.sqrt(o * o + h * h + l * l + u * u);
        o *= _, h *= _, l *= _, u *= _;
      }
    }
    t[e] = o, t[e + 1] = h, t[e + 2] = l, t[e + 3] = u;
  }
  static multiplyQuaternionsFlat(t, e, i, s, n, r) {
    const a = i[s], o = i[s + 1], h = i[s + 2], l = i[s + 3], u = n[r], d = n[r + 1], p = n[r + 2], f = n[r + 3];
    return t[e] = a * f + l * u + o * p - h * d, t[e + 1] = o * f + l * d + h * u - a * p, t[e + 2] = h * f + l * p + a * d - o * u, t[e + 3] = l * f - a * u - o * d - h * p, t;
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
    const i = t._x, s = t._y, n = t._z, r = t._order, a = Math.cos, o = Math.sin, h = a(i / 2), l = a(s / 2), u = a(n / 2), d = o(i / 2), p = o(s / 2), f = o(n / 2);
    switch (r) {
      case "XYZ":
        this._x = d * l * u + h * p * f, this._y = h * p * u - d * l * f, this._z = h * l * f + d * p * u, this._w = h * l * u - d * p * f;
        break;
      case "YXZ":
        this._x = d * l * u + h * p * f, this._y = h * p * u - d * l * f, this._z = h * l * f - d * p * u, this._w = h * l * u + d * p * f;
        break;
      case "ZXY":
        this._x = d * l * u - h * p * f, this._y = h * p * u + d * l * f, this._z = h * l * f + d * p * u, this._w = h * l * u - d * p * f;
        break;
      case "ZYX":
        this._x = d * l * u - h * p * f, this._y = h * p * u + d * l * f, this._z = h * l * f - d * p * u, this._w = h * l * u + d * p * f;
        break;
      case "YZX":
        this._x = d * l * u + h * p * f, this._y = h * p * u + d * l * f, this._z = h * l * f - d * p * u, this._w = h * l * u - d * p * f;
        break;
      case "XZY":
        this._x = d * l * u - h * p * f, this._y = h * p * u - d * l * f, this._z = h * l * f + d * p * u, this._w = h * l * u + d * p * f;
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
    const e = t.elements, i = e[0], s = e[4], n = e[8], r = e[1], a = e[5], o = e[9], h = e[2], l = e[6], u = e[10], d = i + a + u;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (l - o) * p, this._y = (n - h) * p, this._z = (r - s) * p;
    } else if (i > a && i > u) {
      const p = 2 * Math.sqrt(1 + i - a - u);
      this._w = (l - o) / p, this._x = 0.25 * p, this._y = (s + r) / p, this._z = (n + h) / p;
    } else if (a > u) {
      const p = 2 * Math.sqrt(1 + a - i - u);
      this._w = (n - h) / p, this._x = (s + r) / p, this._y = 0.25 * p, this._z = (o + l) / p;
    } else {
      const p = 2 * Math.sqrt(1 + u - i - a);
      this._w = (r - s) / p, this._x = (n + h) / p, this._y = (o + l) / p, this._z = 0.25 * p;
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
    const i = t._x, s = t._y, n = t._z, r = t._w, a = e._x, o = e._y, h = e._z, l = e._w;
    return this._x = i * l + r * a + s * h - n * o, this._y = s * l + r * o + n * a - i * h, this._z = n * l + r * h + i * o - s * a, this._w = r * l - i * a - s * o - n * h, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const i = this._x, s = this._y, n = this._z, r = this._w;
    let a = r * t._w + i * t._x + s * t._y + n * t._z;
    if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1)
      return this._w = r, this._x = i, this._y = s, this._z = n, this;
    const o = 1 - a * a;
    if (o <= Number.EPSILON) {
      const p = 1 - e;
      return this._w = p * r + e * this._w, this._x = p * i + e * this._x, this._y = p * s + e * this._y, this._z = p * n + e * this._z, this.normalize(), this;
    }
    const h = Math.sqrt(o), l = Math.atan2(h, a), u = Math.sin((1 - e) * l) / h, d = Math.sin(e * l) / h;
    return this._w = r * u + this._w * d, this._x = i * u + this._x * d, this._y = s * u + this._y * d, this._z = n * u + this._z * d, this._onChangeCallback(), this;
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
    return this.applyQuaternion(ks.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(ks.setFromAxisAngle(t, e));
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
    const e = this.x, i = this.y, s = this.z, n = t.x, r = t.y, a = t.z, o = t.w, h = 2 * (r * s - a * i), l = 2 * (a * e - n * s), u = 2 * (n * i - r * e);
    return this.x = e + o * h + r * u - a * l, this.y = i + o * l + a * h - n * u, this.z = s + o * u + n * l - r * h, this;
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
    const i = t.x, s = t.y, n = t.z, r = e.x, a = e.y, o = e.z;
    return this.x = s * o - n * a, this.y = n * r - i * o, this.z = i * a - s * r, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const i = t.dot(this) / e;
    return this.copy(t).multiplyScalar(i);
  }
  projectOnPlane(t) {
    return Ti.copy(this).projectOnVector(t), this.sub(Ti);
  }
  reflect(t) {
    return this.sub(Ti.copy(t).multiplyScalar(2 * this.dot(t)));
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
const Ti = /* @__PURE__ */ new y(), ks = /* @__PURE__ */ new ce();
class Rt {
  constructor(t = new y(1 / 0, 1 / 0, 1 / 0), e = new y(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, i = t.length; e < i; e += 3)
      this.expandByPoint(K.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, i = t.count; e < i; e++)
      this.expandByPoint(K.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, i = t.length; e < i; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const i = K.copy(e).multiplyScalar(0.5);
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
        for (let r = 0, a = n.count; r < a; r++)
          t.isMesh === !0 ? t.getVertexPosition(r, K) : K.fromBufferAttribute(n, r), K.applyMatrix4(t.matrixWorld), this.expandByPoint(K);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Ee.copy(t.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), Ee.copy(i.boundingBox)), Ee.applyMatrix4(t.matrixWorld), this.union(Ee);
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
    return this.clampPoint(t.center, K), K.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, i;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(pe), ke.subVectors(this.max, pe), Ht.subVectors(t.a, pe), Jt.subVectors(t.b, pe), Gt.subVectors(t.c, pe), St.subVectors(Jt, Ht), vt.subVectors(Gt, Jt), Nt.subVectors(Ht, Gt);
    let e = [
      0,
      -St.z,
      St.y,
      0,
      -vt.z,
      vt.y,
      0,
      -Nt.z,
      Nt.y,
      St.z,
      0,
      -St.x,
      vt.z,
      0,
      -vt.x,
      Nt.z,
      0,
      -Nt.x,
      -St.y,
      St.x,
      0,
      -vt.y,
      vt.x,
      0,
      -Nt.y,
      Nt.x,
      0
    ];
    return !zi(e, Ht, Jt, Gt, ke) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !zi(e, Ht, Jt, Gt, ke)) ? !1 : (Re.crossVectors(St, vt), e = [Re.x, Re.y, Re.z], zi(e, Ht, Jt, Gt, ke));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, K).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(K).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (ut[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), ut[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), ut[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), ut[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), ut[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), ut[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), ut[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), ut[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(ut), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const ut = [
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y(),
  /* @__PURE__ */ new y()
], K = /* @__PURE__ */ new y(), Ee = /* @__PURE__ */ new Rt(), Ht = /* @__PURE__ */ new y(), Jt = /* @__PURE__ */ new y(), Gt = /* @__PURE__ */ new y(), St = /* @__PURE__ */ new y(), vt = /* @__PURE__ */ new y(), Nt = /* @__PURE__ */ new y(), pe = /* @__PURE__ */ new y(), ke = /* @__PURE__ */ new y(), Re = /* @__PURE__ */ new y(), Ot = /* @__PURE__ */ new y();
function zi(c, t, e, i, s) {
  for (let n = 0, r = c.length - 3; n <= r; n += 3) {
    Ot.fromArray(c, n);
    const a = s.x * Math.abs(Ot.x) + s.y * Math.abs(Ot.y) + s.z * Math.abs(Ot.z), o = t.dot(Ot), h = e.dot(Ot), l = i.dot(Ot);
    if (Math.max(-Math.max(o, h, l), Math.min(o, h, l)) > a)
      return !1;
  }
  return !0;
}
const fa = /* @__PURE__ */ new Rt(), fe = /* @__PURE__ */ new y(), Ci = /* @__PURE__ */ new y();
class wt {
  constructor(t = new y(), e = -1) {
    this.isSphere = !0, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const i = this.center;
    e !== void 0 ? i.copy(e) : fa.setFromPoints(t).getCenter(i);
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
    fe.subVectors(t, this.center);
    const e = fe.lengthSq();
    if (e > this.radius * this.radius) {
      const i = Math.sqrt(e), s = (i - this.radius) * 0.5;
      this.center.addScaledVector(fe, s / i), this.radius += s;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Ci.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(fe.copy(t.center).add(Ci)), this.expandByPoint(fe.copy(t.center).sub(Ci))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const dt = /* @__PURE__ */ new y(), Fi = /* @__PURE__ */ new y(), Pe = /* @__PURE__ */ new y(), At = /* @__PURE__ */ new y(), Bi = /* @__PURE__ */ new y(), Ie = /* @__PURE__ */ new y(), Ei = /* @__PURE__ */ new y();
class mi {
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
    return this.origin.copy(this.at(t, dt)), this;
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
    const e = dt.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (dt.copy(this.origin).addScaledVector(this.direction, e), dt.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, i, s) {
    Fi.copy(t).add(e).multiplyScalar(0.5), Pe.copy(e).sub(t).normalize(), At.copy(this.origin).sub(Fi);
    const n = t.distanceTo(e) * 0.5, r = -this.direction.dot(Pe), a = At.dot(this.direction), o = -At.dot(Pe), h = At.lengthSq(), l = Math.abs(1 - r * r);
    let u, d, p, f;
    if (l > 0)
      if (u = r * o - a, d = r * a - o, f = n * l, u >= 0)
        if (d >= -f)
          if (d <= f) {
            const m = 1 / l;
            u *= m, d *= m, p = u * (u + r * d + 2 * a) + d * (r * u + d + 2 * o) + h;
          } else
            d = n, u = Math.max(0, -(r * d + a)), p = -u * u + d * (d + 2 * o) + h;
        else
          d = -n, u = Math.max(0, -(r * d + a)), p = -u * u + d * (d + 2 * o) + h;
      else
        d <= -f ? (u = Math.max(0, -(-r * n + a)), d = u > 0 ? -n : Math.min(Math.max(-n, -o), n), p = -u * u + d * (d + 2 * o) + h) : d <= f ? (u = 0, d = Math.min(Math.max(-n, -o), n), p = d * (d + 2 * o) + h) : (u = Math.max(0, -(r * n + a)), d = u > 0 ? n : Math.min(Math.max(-n, -o), n), p = -u * u + d * (d + 2 * o) + h);
    else
      d = r > 0 ? -n : n, u = Math.max(0, -(r * d + a)), p = -u * u + d * (d + 2 * o) + h;
    return i && i.copy(this.origin).addScaledVector(this.direction, u), s && s.copy(Fi).addScaledVector(Pe, d), p;
  }
  intersectSphere(t, e) {
    dt.subVectors(t.center, this.origin);
    const i = dt.dot(this.direction), s = dt.dot(dt) - i * i, n = t.radius * t.radius;
    if (s > n) return null;
    const r = Math.sqrt(n - s), a = i - r, o = i + r;
    return o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
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
    let i, s, n, r, a, o;
    const h = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return h >= 0 ? (i = (t.min.x - d.x) * h, s = (t.max.x - d.x) * h) : (i = (t.max.x - d.x) * h, s = (t.min.x - d.x) * h), l >= 0 ? (n = (t.min.y - d.y) * l, r = (t.max.y - d.y) * l) : (n = (t.max.y - d.y) * l, r = (t.min.y - d.y) * l), i > r || n > s || ((n > i || isNaN(i)) && (i = n), (r < s || isNaN(s)) && (s = r), u >= 0 ? (a = (t.min.z - d.z) * u, o = (t.max.z - d.z) * u) : (a = (t.max.z - d.z) * u, o = (t.min.z - d.z) * u), i > o || a > s) || ((a > i || i !== i) && (i = a), (o < s || s !== s) && (s = o), s < 0) ? null : this.at(i >= 0 ? i : s, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, dt) !== null;
  }
  intersectTriangle(t, e, i, s, n) {
    Bi.subVectors(e, t), Ie.subVectors(i, t), Ei.crossVectors(Bi, Ie);
    let r = this.direction.dot(Ei), a;
    if (r > 0) {
      if (s) return null;
      a = 1;
    } else if (r < 0)
      a = -1, r = -r;
    else
      return null;
    At.subVectors(this.origin, t);
    const o = a * this.direction.dot(Ie.crossVectors(At, Ie));
    if (o < 0)
      return null;
    const h = a * this.direction.dot(Bi.cross(At));
    if (h < 0 || o + h > r)
      return null;
    const l = -a * At.dot(Ei);
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
class C {
  constructor(t, e, i, s, n, r, a, o, h, l, u, d, p, f, m, g) {
    C.prototype.isMatrix4 = !0, this.elements = [
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
    ], t !== void 0 && this.set(t, e, i, s, n, r, a, o, h, l, u, d, p, f, m, g);
  }
  set(t, e, i, s, n, r, a, o, h, l, u, d, p, f, m, g) {
    const x = this.elements;
    return x[0] = t, x[4] = e, x[8] = i, x[12] = s, x[1] = n, x[5] = r, x[9] = a, x[13] = o, x[2] = h, x[6] = l, x[10] = u, x[14] = d, x[3] = p, x[7] = f, x[11] = m, x[15] = g, this;
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
    return new C().fromArray(this.elements);
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
    const e = this.elements, i = t.elements, s = 1 / Xt.setFromMatrixColumn(t, 0).length(), n = 1 / Xt.setFromMatrixColumn(t, 1).length(), r = 1 / Xt.setFromMatrixColumn(t, 2).length();
    return e[0] = i[0] * s, e[1] = i[1] * s, e[2] = i[2] * s, e[3] = 0, e[4] = i[4] * n, e[5] = i[5] * n, e[6] = i[6] * n, e[7] = 0, e[8] = i[8] * r, e[9] = i[9] * r, e[10] = i[10] * r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, i = t.x, s = t.y, n = t.z, r = Math.cos(i), a = Math.sin(i), o = Math.cos(s), h = Math.sin(s), l = Math.cos(n), u = Math.sin(n);
    if (t.order === "XYZ") {
      const d = r * l, p = r * u, f = a * l, m = a * u;
      e[0] = o * l, e[4] = -o * u, e[8] = h, e[1] = p + f * h, e[5] = d - m * h, e[9] = -a * o, e[2] = m - d * h, e[6] = f + p * h, e[10] = r * o;
    } else if (t.order === "YXZ") {
      const d = o * l, p = o * u, f = h * l, m = h * u;
      e[0] = d + m * a, e[4] = f * a - p, e[8] = r * h, e[1] = r * u, e[5] = r * l, e[9] = -a, e[2] = p * a - f, e[6] = m + d * a, e[10] = r * o;
    } else if (t.order === "ZXY") {
      const d = o * l, p = o * u, f = h * l, m = h * u;
      e[0] = d - m * a, e[4] = -r * u, e[8] = f + p * a, e[1] = p + f * a, e[5] = r * l, e[9] = m - d * a, e[2] = -r * h, e[6] = a, e[10] = r * o;
    } else if (t.order === "ZYX") {
      const d = r * l, p = r * u, f = a * l, m = a * u;
      e[0] = o * l, e[4] = f * h - p, e[8] = d * h + m, e[1] = o * u, e[5] = m * h + d, e[9] = p * h - f, e[2] = -h, e[6] = a * o, e[10] = r * o;
    } else if (t.order === "YZX") {
      const d = r * o, p = r * h, f = a * o, m = a * h;
      e[0] = o * l, e[4] = m - d * u, e[8] = f * u + p, e[1] = u, e[5] = r * l, e[9] = -a * l, e[2] = -h * l, e[6] = p * u + f, e[10] = d - m * u;
    } else if (t.order === "XZY") {
      const d = r * o, p = r * h, f = a * o, m = a * h;
      e[0] = o * l, e[4] = -u, e[8] = h * l, e[1] = d * u + m, e[5] = r * l, e[9] = p * u - f, e[2] = f * u - p, e[6] = a * l, e[10] = m * u + d;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(ma, t, ya);
  }
  lookAt(t, e, i) {
    const s = this.elements;
    return X.subVectors(t, e), X.lengthSq() === 0 && (X.z = 1), X.normalize(), Tt.crossVectors(i, X), Tt.lengthSq() === 0 && (Math.abs(i.z) === 1 ? X.x += 1e-4 : X.z += 1e-4, X.normalize(), Tt.crossVectors(i, X)), Tt.normalize(), Ne.crossVectors(X, Tt), s[0] = Tt.x, s[4] = Ne.x, s[8] = X.x, s[1] = Tt.y, s[5] = Ne.y, s[9] = X.y, s[2] = Tt.z, s[6] = Ne.z, s[10] = X.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const i = t.elements, s = e.elements, n = this.elements, r = i[0], a = i[4], o = i[8], h = i[12], l = i[1], u = i[5], d = i[9], p = i[13], f = i[2], m = i[6], g = i[10], x = i[14], b = i[3], w = i[7], M = i[11], _ = i[15], v = s[0], A = s[4], T = s[8], k = s[12], P = s[1], I = s[5], rt = s[9], N = s[13], at = s[2], ot = s[6], Vt = s[10], It = s[14], _t = s[3], D = s[7], V = s[11], G = s[15];
    return n[0] = r * v + a * P + o * at + h * _t, n[4] = r * A + a * I + o * ot + h * D, n[8] = r * T + a * rt + o * Vt + h * V, n[12] = r * k + a * N + o * It + h * G, n[1] = l * v + u * P + d * at + p * _t, n[5] = l * A + u * I + d * ot + p * D, n[9] = l * T + u * rt + d * Vt + p * V, n[13] = l * k + u * N + d * It + p * G, n[2] = f * v + m * P + g * at + x * _t, n[6] = f * A + m * I + g * ot + x * D, n[10] = f * T + m * rt + g * Vt + x * V, n[14] = f * k + m * N + g * It + x * G, n[3] = b * v + w * P + M * at + _ * _t, n[7] = b * A + w * I + M * ot + _ * D, n[11] = b * T + w * rt + M * Vt + _ * V, n[15] = b * k + w * N + M * It + _ * G, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], i = t[4], s = t[8], n = t[12], r = t[1], a = t[5], o = t[9], h = t[13], l = t[2], u = t[6], d = t[10], p = t[14], f = t[3], m = t[7], g = t[11], x = t[15];
    return f * (+n * o * u - s * h * u - n * a * d + i * h * d + s * a * p - i * o * p) + m * (+e * o * p - e * h * d + n * r * d - s * r * p + s * h * l - n * o * l) + g * (+e * h * u - e * a * p - n * r * u + i * r * p + n * a * l - i * h * l) + x * (-s * a * l - e * o * u + e * a * d + s * r * u - i * r * d + i * o * l);
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
    const t = this.elements, e = t[0], i = t[1], s = t[2], n = t[3], r = t[4], a = t[5], o = t[6], h = t[7], l = t[8], u = t[9], d = t[10], p = t[11], f = t[12], m = t[13], g = t[14], x = t[15], b = u * g * h - m * d * h + m * o * p - a * g * p - u * o * x + a * d * x, w = f * d * h - l * g * h - f * o * p + r * g * p + l * o * x - r * d * x, M = l * m * h - f * u * h + f * a * p - r * m * p - l * a * x + r * u * x, _ = f * u * o - l * m * o - f * a * d + r * m * d + l * a * g - r * u * g, v = e * b + i * w + s * M + n * _;
    if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / v;
    return t[0] = b * A, t[1] = (m * d * n - u * g * n - m * s * p + i * g * p + u * s * x - i * d * x) * A, t[2] = (a * g * n - m * o * n + m * s * h - i * g * h - a * s * x + i * o * x) * A, t[3] = (u * o * n - a * d * n - u * s * h + i * d * h + a * s * p - i * o * p) * A, t[4] = w * A, t[5] = (l * g * n - f * d * n + f * s * p - e * g * p - l * s * x + e * d * x) * A, t[6] = (f * o * n - r * g * n - f * s * h + e * g * h + r * s * x - e * o * x) * A, t[7] = (r * d * n - l * o * n + l * s * h - e * d * h - r * s * p + e * o * p) * A, t[8] = M * A, t[9] = (f * u * n - l * m * n - f * i * p + e * m * p + l * i * x - e * u * x) * A, t[10] = (r * m * n - f * a * n + f * i * h - e * m * h - r * i * x + e * a * x) * A, t[11] = (l * a * n - r * u * n - l * i * h + e * u * h + r * i * p - e * a * p) * A, t[12] = _ * A, t[13] = (l * m * s - f * u * s + f * i * d - e * m * d - l * i * g + e * u * g) * A, t[14] = (f * a * s - r * m * s - f * i * o + e * m * o + r * i * g - e * a * g) * A, t[15] = (r * u * s - l * a * s + l * i * o - e * u * o - r * i * d + e * a * d) * A, this;
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
    const i = Math.cos(e), s = Math.sin(e), n = 1 - i, r = t.x, a = t.y, o = t.z, h = n * r, l = n * a;
    return this.set(
      h * r + i,
      h * a - s * o,
      h * o + s * a,
      0,
      h * a + s * o,
      l * a + i,
      l * o - s * r,
      0,
      h * o - s * a,
      l * o + s * r,
      n * o * o + i,
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
    const s = this.elements, n = e._x, r = e._y, a = e._z, o = e._w, h = n + n, l = r + r, u = a + a, d = n * h, p = n * l, f = n * u, m = r * l, g = r * u, x = a * u, b = o * h, w = o * l, M = o * u, _ = i.x, v = i.y, A = i.z;
    return s[0] = (1 - (m + x)) * _, s[1] = (p + M) * _, s[2] = (f - w) * _, s[3] = 0, s[4] = (p - M) * v, s[5] = (1 - (d + x)) * v, s[6] = (g + b) * v, s[7] = 0, s[8] = (f + w) * A, s[9] = (g - b) * A, s[10] = (1 - (d + m)) * A, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
  }
  decompose(t, e, i) {
    const s = this.elements;
    let n = Xt.set(s[0], s[1], s[2]).length();
    const r = Xt.set(s[4], s[5], s[6]).length(), a = Xt.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (n = -n), t.x = s[12], t.y = s[13], t.z = s[14], tt.copy(this);
    const h = 1 / n, l = 1 / r, u = 1 / a;
    return tt.elements[0] *= h, tt.elements[1] *= h, tt.elements[2] *= h, tt.elements[4] *= l, tt.elements[5] *= l, tt.elements[6] *= l, tt.elements[8] *= u, tt.elements[9] *= u, tt.elements[10] *= u, e.setFromRotationMatrix(tt), i.x = n, i.y = r, i.z = a, this;
  }
  makePerspective(t, e, i, s, n, r, a = Ft) {
    const o = this.elements, h = 2 * n / (e - t), l = 2 * n / (i - s), u = (e + t) / (e - t), d = (i + s) / (i - s);
    let p, f;
    if (a === Ft)
      p = -(r + n) / (r - n), f = -2 * r * n / (r - n);
    else if (a === oi)
      p = -r / (r - n), f = -r * n / (r - n);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return o[0] = h, o[4] = 0, o[8] = u, o[12] = 0, o[1] = 0, o[5] = l, o[9] = d, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = p, o[14] = f, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
  }
  makeOrthographic(t, e, i, s, n, r, a = Ft) {
    const o = this.elements, h = 1 / (e - t), l = 1 / (i - s), u = 1 / (r - n), d = (e + t) * h, p = (i + s) * l;
    let f, m;
    if (a === Ft)
      f = (r + n) * u, m = -2 * u;
    else if (a === oi)
      f = n * u, m = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return o[0] = 2 * h, o[4] = 0, o[8] = 0, o[12] = -d, o[1] = 0, o[5] = 2 * l, o[9] = 0, o[13] = -p, o[2] = 0, o[6] = 0, o[10] = m, o[14] = -f, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
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
const Xt = /* @__PURE__ */ new y(), tt = /* @__PURE__ */ new C(), ma = /* @__PURE__ */ new y(0, 0, 0), ya = /* @__PURE__ */ new y(1, 1, 1), Tt = /* @__PURE__ */ new y(), Ne = /* @__PURE__ */ new y(), X = /* @__PURE__ */ new y(), Rs = /* @__PURE__ */ new C(), Ps = /* @__PURE__ */ new ce();
class kt {
  constructor(t = 0, e = 0, i = 0, s = kt.DEFAULT_ORDER) {
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
    const s = t.elements, n = s[0], r = s[4], a = s[8], o = s[1], h = s[5], l = s[9], u = s[2], d = s[6], p = s[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(z(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-l, p), this._z = Math.atan2(-r, n)) : (this._x = Math.atan2(d, h), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-z(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(o, h)) : (this._y = Math.atan2(-u, n), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(z(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-r, h)) : (this._y = 0, this._z = Math.atan2(o, n));
        break;
      case "ZYX":
        this._y = Math.asin(-z(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(o, n)) : (this._x = 0, this._z = Math.atan2(-r, h));
        break;
      case "YZX":
        this._z = Math.asin(z(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-l, h), this._y = Math.atan2(-u, n)) : (this._x = 0, this._y = Math.atan2(a, p));
        break;
      case "XZY":
        this._z = Math.asin(-z(r, -1, 1)), Math.abs(r) < 0.9999999 ? (this._x = Math.atan2(d, h), this._y = Math.atan2(a, n)) : (this._x = Math.atan2(-l, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, i) {
    return Rs.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Rs, e, i);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return Ps.setFromEuler(this), this.setFromQuaternion(Ps, t);
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
kt.DEFAULT_ORDER = "XYZ";
class ga {
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
let xa = 0;
const Is = /* @__PURE__ */ new y(), jt = /* @__PURE__ */ new ce(), pt = /* @__PURE__ */ new C(), Oe = /* @__PURE__ */ new y(), me = /* @__PURE__ */ new y(), ba = /* @__PURE__ */ new y(), Ma = /* @__PURE__ */ new ce(), Ns = /* @__PURE__ */ new y(1, 0, 0), Os = /* @__PURE__ */ new y(0, 1, 0), Ds = /* @__PURE__ */ new y(0, 0, 1), Ls = { type: "added" }, wa = { type: "removed" }, Yt = { type: "childadded", child: null }, ki = { type: "childremoved", child: null };
class E extends le {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: xa++ }), this.uuid = nt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = E.DEFAULT_UP.clone();
    const t = new y(), e = new kt(), i = new ce(), s = new y(1, 1, 1);
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
        value: new C()
      },
      normalMatrix: {
        value: new Mt()
      }
    }), this.matrix = new C(), this.matrixWorld = new C(), this.matrixAutoUpdate = E.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = E.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new ga(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return jt.setFromAxisAngle(t, e), this.quaternion.multiply(jt), this;
  }
  rotateOnWorldAxis(t, e) {
    return jt.setFromAxisAngle(t, e), this.quaternion.premultiply(jt), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Ns, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Os, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Ds, t);
  }
  translateOnAxis(t, e) {
    return Is.copy(t).applyQuaternion(this.quaternion), this.position.add(Is.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(Ns, t);
  }
  translateY(t) {
    return this.translateOnAxis(Os, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Ds, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(pt.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, i) {
    t.isVector3 ? Oe.copy(t) : Oe.set(t, e, i);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), me.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? pt.lookAt(me, Oe, this.up) : pt.lookAt(Oe, me, this.up), this.quaternion.setFromRotationMatrix(pt), s && (pt.extractRotation(s.matrixWorld), jt.setFromRotationMatrix(pt), this.quaternion.premultiply(jt.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Ls), Yt.child = t, this.dispatchEvent(Yt), Yt.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++)
        this.remove(arguments[i]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(wa), ki.child = t, this.dispatchEvent(ki), ki.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), pt.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), pt.multiply(t.parent.matrixWorld)), t.applyMatrix4(pt), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Ls), Yt.child = t, this.dispatchEvent(Yt), Yt.child = null, this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(me, t, ba), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(me, Ma, t), t;
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
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.visibility = this._visibility, s.active = this._active, s.bounds = this._bounds.map((a) => ({
      boxInitialized: a.boxInitialized,
      boxMin: a.box.min.toArray(),
      boxMax: a.box.max.toArray(),
      sphereInitialized: a.sphereInitialized,
      sphereRadius: a.sphere.radius,
      sphereCenter: a.sphere.center.toArray()
    })), s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.geometryCount = this._geometryCount, s.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (s.boundingSphere = {
      center: s.boundingSphere.center.toArray(),
      radius: s.boundingSphere.radius
    }), this.boundingBox !== null && (s.boundingBox = {
      min: s.boundingBox.min.toArray(),
      max: s.boundingBox.max.toArray()
    }));
    function n(a, o) {
      return a[o.uuid] === void 0 && (a[o.uuid] = o.toJSON(t)), o.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = n(t.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const o = a.shapes;
        if (Array.isArray(o))
          for (let h = 0, l = o.length; h < l; h++) {
            const u = o[h];
            n(t.shapes, u);
          }
        else
          n(t.shapes, o);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (n(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let o = 0, h = this.material.length; o < h; o++)
          a.push(n(t.materials, this.material[o]));
        s.material = a;
      } else
        s.material = n(t.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let a = 0; a < this.children.length; a++)
        s.children.push(this.children[a].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const o = this.animations[a];
        s.animations.push(n(t.animations, o));
      }
    }
    if (e) {
      const a = r(t.geometries), o = r(t.materials), h = r(t.textures), l = r(t.images), u = r(t.shapes), d = r(t.skeletons), p = r(t.animations), f = r(t.nodes);
      a.length > 0 && (i.geometries = a), o.length > 0 && (i.materials = o), h.length > 0 && (i.textures = h), l.length > 0 && (i.images = l), u.length > 0 && (i.shapes = u), d.length > 0 && (i.skeletons = d), p.length > 0 && (i.animations = p), f.length > 0 && (i.nodes = f);
    }
    return i.object = s, i;
    function r(a) {
      const o = [];
      for (const h in a) {
        const l = a[h];
        delete l.metadata, o.push(l);
      }
      return o;
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
E.DEFAULT_UP = /* @__PURE__ */ new y(0, 1, 0);
E.DEFAULT_MATRIX_AUTO_UPDATE = !0;
E.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const et = /* @__PURE__ */ new y(), ft = /* @__PURE__ */ new y(), Ri = /* @__PURE__ */ new y(), mt = /* @__PURE__ */ new y(), Zt = /* @__PURE__ */ new y(), $t = /* @__PURE__ */ new y(), Vs = /* @__PURE__ */ new y(), Pi = /* @__PURE__ */ new y(), Ii = /* @__PURE__ */ new y(), Ni = /* @__PURE__ */ new y(), Oi = /* @__PURE__ */ new L(), Di = /* @__PURE__ */ new L(), Li = /* @__PURE__ */ new L();
class Q {
  constructor(t = new y(), e = new y(), i = new y()) {
    this.a = t, this.b = e, this.c = i;
  }
  static getNormal(t, e, i, s) {
    s.subVectors(i, e), et.subVectors(t, e), s.cross(et);
    const n = s.lengthSq();
    return n > 0 ? s.multiplyScalar(1 / Math.sqrt(n)) : s.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(t, e, i, s, n) {
    et.subVectors(s, e), ft.subVectors(i, e), Ri.subVectors(t, e);
    const r = et.dot(et), a = et.dot(ft), o = et.dot(Ri), h = ft.dot(ft), l = ft.dot(Ri), u = r * h - a * a;
    if (u === 0)
      return n.set(0, 0, 0), null;
    const d = 1 / u, p = (h * o - a * l) * d, f = (r * l - a * o) * d;
    return n.set(1 - p - f, f, p);
  }
  static containsPoint(t, e, i, s) {
    return this.getBarycoord(t, e, i, s, mt) === null ? !1 : mt.x >= 0 && mt.y >= 0 && mt.x + mt.y <= 1;
  }
  static getInterpolation(t, e, i, s, n, r, a, o) {
    return this.getBarycoord(t, e, i, s, mt) === null ? (o.x = 0, o.y = 0, "z" in o && (o.z = 0), "w" in o && (o.w = 0), null) : (o.setScalar(0), o.addScaledVector(n, mt.x), o.addScaledVector(r, mt.y), o.addScaledVector(a, mt.z), o);
  }
  static getInterpolatedAttribute(t, e, i, s, n, r) {
    return Oi.setScalar(0), Di.setScalar(0), Li.setScalar(0), Oi.fromBufferAttribute(t, e), Di.fromBufferAttribute(t, i), Li.fromBufferAttribute(t, s), r.setScalar(0), r.addScaledVector(Oi, n.x), r.addScaledVector(Di, n.y), r.addScaledVector(Li, n.z), r;
  }
  static isFrontFacing(t, e, i, s) {
    return et.subVectors(i, e), ft.subVectors(t, e), et.cross(ft).dot(s) < 0;
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
    return et.subVectors(this.c, this.b), ft.subVectors(this.a, this.b), et.cross(ft).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Q.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Q.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, i, s, n) {
    return Q.getInterpolation(t, this.a, this.b, this.c, e, i, s, n);
  }
  containsPoint(t) {
    return Q.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Q.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const i = this.a, s = this.b, n = this.c;
    let r, a;
    Zt.subVectors(s, i), $t.subVectors(n, i), Pi.subVectors(t, i);
    const o = Zt.dot(Pi), h = $t.dot(Pi);
    if (o <= 0 && h <= 0)
      return e.copy(i);
    Ii.subVectors(t, s);
    const l = Zt.dot(Ii), u = $t.dot(Ii);
    if (l >= 0 && u <= l)
      return e.copy(s);
    const d = o * u - l * h;
    if (d <= 0 && o >= 0 && l <= 0)
      return r = o / (o - l), e.copy(i).addScaledVector(Zt, r);
    Ni.subVectors(t, n);
    const p = Zt.dot(Ni), f = $t.dot(Ni);
    if (f >= 0 && p <= f)
      return e.copy(n);
    const m = p * h - o * f;
    if (m <= 0 && h >= 0 && f <= 0)
      return a = h / (h - f), e.copy(i).addScaledVector($t, a);
    const g = l * f - p * u;
    if (g <= 0 && u - l >= 0 && p - f >= 0)
      return Vs.subVectors(n, s), a = (u - l) / (u - l + (p - f)), e.copy(s).addScaledVector(Vs, a);
    const x = 1 / (g + m + d);
    return r = m * x, a = d * x, e.copy(i).addScaledVector(Zt, r).addScaledVector($t, a);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Tn = {
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
}, zt = { h: 0, s: 0, l: 0 }, De = { h: 0, s: 0, l: 0 };
function Vi(c, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? c + (t - c) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? c + (t - c) * 6 * (2 / 3 - e) : c;
}
class J {
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
  setHex(t, e = it) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, $.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, i, s = $.workingColorSpace) {
    return this.r = t, this.g = e, this.b = i, $.toWorkingColorSpace(this, s), this;
  }
  setHSL(t, e, i, s = $.workingColorSpace) {
    if (t = ns(t, 1), e = z(e, 0, 1), i = z(i, 0, 1), e === 0)
      this.r = this.g = this.b = i;
    else {
      const n = i <= 0.5 ? i * (1 + e) : i + e - i * e, r = 2 * i - n;
      this.r = Vi(r, n, t + 1 / 3), this.g = Vi(r, n, t), this.b = Vi(r, n, t - 1 / 3);
    }
    return $.toWorkingColorSpace(this, s), this;
  }
  setStyle(t, e = it) {
    function i(n) {
      n !== void 0 && parseFloat(n) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let n;
      const r = s[1], a = s[2];
      switch (r) {
        case "rgb":
        case "rgba":
          if (n = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return i(n[4]), this.setRGB(
              Math.min(255, parseInt(n[1], 10)) / 255,
              Math.min(255, parseInt(n[2], 10)) / 255,
              Math.min(255, parseInt(n[3], 10)) / 255,
              e
            );
          if (n = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return i(n[4]), this.setRGB(
              Math.min(100, parseInt(n[1], 10)) / 100,
              Math.min(100, parseInt(n[2], 10)) / 100,
              Math.min(100, parseInt(n[3], 10)) / 100,
              e
            );
          break;
        case "hsl":
        case "hsla":
          if (n = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
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
  setColorName(t, e = it) {
    const i = Tn[t.toLowerCase()];
    return i !== void 0 ? this.setHex(i, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = xt(t.r), this.g = xt(t.g), this.b = xt(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = he(t.r), this.g = he(t.g), this.b = he(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = it) {
    return $.fromWorkingColorSpace(W.copy(this), t), Math.round(z(W.r * 255, 0, 255)) * 65536 + Math.round(z(W.g * 255, 0, 255)) * 256 + Math.round(z(W.b * 255, 0, 255));
  }
  getHexString(t = it) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = $.workingColorSpace) {
    $.fromWorkingColorSpace(W.copy(this), e);
    const i = W.r, s = W.g, n = W.b, r = Math.max(i, s, n), a = Math.min(i, s, n);
    let o, h;
    const l = (a + r) / 2;
    if (a === r)
      o = 0, h = 0;
    else {
      const u = r - a;
      switch (h = l <= 0.5 ? u / (r + a) : u / (2 - r - a), r) {
        case i:
          o = (s - n) / u + (s < n ? 6 : 0);
          break;
        case s:
          o = (n - i) / u + 2;
          break;
        case n:
          o = (i - s) / u + 4;
          break;
      }
      o /= 6;
    }
    return t.h = o, t.s = h, t.l = l, t;
  }
  getRGB(t, e = $.workingColorSpace) {
    return $.fromWorkingColorSpace(W.copy(this), e), t.r = W.r, t.g = W.g, t.b = W.b, t;
  }
  getStyle(t = it) {
    $.fromWorkingColorSpace(W.copy(this), t);
    const e = W.r, i = W.g, s = W.b;
    return t !== it ? `color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(i * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(t, e, i) {
    return this.getHSL(zt), this.setHSL(zt.h + t, zt.s + e, zt.l + i);
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
    this.getHSL(zt), t.getHSL(De);
    const i = Ae(zt.h, De.h, e), s = Ae(zt.s, De.s, e), n = Ae(zt.l, De.l, e);
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
const W = /* @__PURE__ */ new J();
J.NAMES = Tn;
let _a = 0;
class Pt extends le {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: _a++ }), this.uuid = nt(), this.name = "", this.type = "Material", this.blending = ps, this.side = Ki, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = ms, this.blendDst = ys, this.blendEquation = fs, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new J(0, 0, 0), this.blendAlpha = 0, this.depthFunc = gs, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = zs, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Wt, this.stencilZFail = Wt, this.stencilZPass = Wt, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== ps && (i.blending = this.blending), this.side !== Ki && (i.side = this.side), this.vertexColors === !0 && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = !0), this.blendSrc !== ms && (i.blendSrc = this.blendSrc), this.blendDst !== ys && (i.blendDst = this.blendDst), this.blendEquation !== fs && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== gs && (i.depthFunc = this.depthFunc), this.depthTest === !1 && (i.depthTest = this.depthTest), this.depthWrite === !1 && (i.depthWrite = this.depthWrite), this.colorWrite === !1 && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== zs && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Wt && (i.stencilFail = this.stencilFail), this.stencilZFail !== Wt && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== Wt && (i.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === !0 && (i.alphaHash = !0), this.alphaToCoverage === !0 && (i.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0), this.forceSinglePass === !0 && (i.forceSinglePass = !0), this.wireframe === !0 && (i.wireframe = !0), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = !0), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function s(n) {
      const r = [];
      for (const a in n) {
        const o = n[a];
        delete o.metadata, r.push(o);
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
class Sa extends Pt {
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new J(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new kt(), this.combine = Hn, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const R = /* @__PURE__ */ new y(), Le = /* @__PURE__ */ new S();
class bt {
  constructor(t, e, i = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = i, this.usage = es, this.updateRanges = [], this.gpuType = fi, this.version = 0;
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
        Le.fromBufferAttribute(this, e), Le.applyMatrix3(t), this.setXY(e, Le.x, Le.y);
    else if (this.itemSize === 3)
      for (let e = 0, i = this.count; e < i; e++)
        R.fromBufferAttribute(this, e), R.applyMatrix3(t), this.setXYZ(e, R.x, R.y, R.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, i = this.count; e < i; e++)
      R.fromBufferAttribute(this, e), R.applyMatrix4(t), this.setXYZ(e, R.x, R.y, R.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, i = this.count; e < i; e++)
      R.fromBufferAttribute(this, e), R.applyNormalMatrix(t), this.setXYZ(e, R.x, R.y, R.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, i = this.count; e < i; e++)
      R.fromBufferAttribute(this, e), R.transformDirection(t), this.setXYZ(e, R.x, R.y, R.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let i = this.array[t * this.itemSize + e];
    return this.normalized && (i = st(i, this.array)), i;
  }
  setComponent(t, e, i) {
    return this.normalized && (i = F(i, this.array)), this.array[t * this.itemSize + e] = i, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = st(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = F(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = st(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = F(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = st(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = F(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = st(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = F(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, i) {
    return t *= this.itemSize, this.normalized && (e = F(e, this.array), i = F(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this;
  }
  setXYZ(t, e, i, s) {
    return t *= this.itemSize, this.normalized && (e = F(e, this.array), i = F(i, this.array), s = F(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = s, this;
  }
  setXYZW(t, e, i, s, n) {
    return t *= this.itemSize, this.normalized && (e = F(e, this.array), i = F(i, this.array), s = F(s, this.array), n = F(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = s, this.array[t + 3] = n, this;
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
    return this.name !== "" && (t.name = this.name), this.usage !== es && (t.usage = this.usage), t;
  }
}
class va extends bt {
  constructor(t, e, i) {
    super(new Uint16Array(t), e, i);
  }
}
class Aa extends bt {
  constructor(t, e, i) {
    super(new Uint32Array(t), e, i);
  }
}
class Y extends bt {
  constructor(t, e, i) {
    super(new Float32Array(t), e, i);
  }
}
let Ta = 0;
const Z = /* @__PURE__ */ new C(), Ui = /* @__PURE__ */ new E(), Qt = /* @__PURE__ */ new y(), j = /* @__PURE__ */ new Rt(), ye = /* @__PURE__ */ new Rt(), O = /* @__PURE__ */ new y();
class ht extends le {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ta++ }), this.uuid = nt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (oa(t) ? Aa : va)(t, 1) : this.index = t, this;
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
      const n = new Mt().getNormalMatrix(t);
      i.applyNormalMatrix(n), i.needsUpdate = !0;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(t), s.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return Z.makeRotationFromQuaternion(t), this.applyMatrix4(Z), this;
  }
  rotateX(t) {
    return Z.makeRotationX(t), this.applyMatrix4(Z), this;
  }
  rotateY(t) {
    return Z.makeRotationY(t), this.applyMatrix4(Z), this;
  }
  rotateZ(t) {
    return Z.makeRotationZ(t), this.applyMatrix4(Z), this;
  }
  translate(t, e, i) {
    return Z.makeTranslation(t, e, i), this.applyMatrix4(Z), this;
  }
  scale(t, e, i) {
    return Z.makeScale(t, e, i), this.applyMatrix4(Z), this;
  }
  lookAt(t) {
    return Ui.lookAt(t), Ui.updateMatrix(), this.applyMatrix4(Ui.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Qt).negate(), this.translate(Qt.x, Qt.y, Qt.z), this;
  }
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (e === void 0) {
      const i = [];
      for (let s = 0, n = t.length; s < n; s++) {
        const r = t[s];
        i.push(r.x, r.y, r.z || 0);
      }
      this.setAttribute("position", new Y(i, 3));
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
    this.boundingBox === null && (this.boundingBox = new Rt());
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
          j.setFromBufferAttribute(n), this.morphTargetsRelative ? (O.addVectors(this.boundingBox.min, j.min), this.boundingBox.expandByPoint(O), O.addVectors(this.boundingBox.max, j.max), this.boundingBox.expandByPoint(O)) : (this.boundingBox.expandByPoint(j.min), this.boundingBox.expandByPoint(j.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new wt());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new y(), 1 / 0);
      return;
    }
    if (t) {
      const i = this.boundingSphere.center;
      if (j.setFromBufferAttribute(t), e)
        for (let n = 0, r = e.length; n < r; n++) {
          const a = e[n];
          ye.setFromBufferAttribute(a), this.morphTargetsRelative ? (O.addVectors(j.min, ye.min), j.expandByPoint(O), O.addVectors(j.max, ye.max), j.expandByPoint(O)) : (j.expandByPoint(ye.min), j.expandByPoint(ye.max));
        }
      j.getCenter(i);
      let s = 0;
      for (let n = 0, r = t.count; n < r; n++)
        O.fromBufferAttribute(t, n), s = Math.max(s, i.distanceToSquared(O));
      if (e)
        for (let n = 0, r = e.length; n < r; n++) {
          const a = e[n], o = this.morphTargetsRelative;
          for (let h = 0, l = a.count; h < l; h++)
            O.fromBufferAttribute(a, h), o && (Qt.fromBufferAttribute(t, h), O.add(Qt)), s = Math.max(s, i.distanceToSquared(O));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new bt(new Float32Array(4 * i.count), 4));
    const r = this.getAttribute("tangent"), a = [], o = [];
    for (let T = 0; T < i.count; T++)
      a[T] = new y(), o[T] = new y();
    const h = new y(), l = new y(), u = new y(), d = new S(), p = new S(), f = new S(), m = new y(), g = new y();
    function x(T, k, P) {
      h.fromBufferAttribute(i, T), l.fromBufferAttribute(i, k), u.fromBufferAttribute(i, P), d.fromBufferAttribute(n, T), p.fromBufferAttribute(n, k), f.fromBufferAttribute(n, P), l.sub(h), u.sub(h), p.sub(d), f.sub(d);
      const I = 1 / (p.x * f.y - f.x * p.y);
      isFinite(I) && (m.copy(l).multiplyScalar(f.y).addScaledVector(u, -p.y).multiplyScalar(I), g.copy(u).multiplyScalar(p.x).addScaledVector(l, -f.x).multiplyScalar(I), a[T].add(m), a[k].add(m), a[P].add(m), o[T].add(g), o[k].add(g), o[P].add(g));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: t.count
    }]);
    for (let T = 0, k = b.length; T < k; ++T) {
      const P = b[T], I = P.start, rt = P.count;
      for (let N = I, at = I + rt; N < at; N += 3)
        x(
          t.getX(N + 0),
          t.getX(N + 1),
          t.getX(N + 2)
        );
    }
    const w = new y(), M = new y(), _ = new y(), v = new y();
    function A(T) {
      _.fromBufferAttribute(s, T), v.copy(_);
      const k = a[T];
      w.copy(k), w.sub(_.multiplyScalar(_.dot(k))).normalize(), M.crossVectors(v, k);
      const I = M.dot(o[T]) < 0 ? -1 : 1;
      r.setXYZW(T, w.x, w.y, w.z, I);
    }
    for (let T = 0, k = b.length; T < k; ++T) {
      const P = b[T], I = P.start, rt = P.count;
      for (let N = I, at = I + rt; N < at; N += 3)
        A(t.getX(N + 0)), A(t.getX(N + 1)), A(t.getX(N + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0)
        i = new bt(new Float32Array(e.count * 3), 3), this.setAttribute("normal", i);
      else
        for (let d = 0, p = i.count; d < p; d++)
          i.setXYZ(d, 0, 0, 0);
      const s = new y(), n = new y(), r = new y(), a = new y(), o = new y(), h = new y(), l = new y(), u = new y();
      if (t)
        for (let d = 0, p = t.count; d < p; d += 3) {
          const f = t.getX(d + 0), m = t.getX(d + 1), g = t.getX(d + 2);
          s.fromBufferAttribute(e, f), n.fromBufferAttribute(e, m), r.fromBufferAttribute(e, g), l.subVectors(r, n), u.subVectors(s, n), l.cross(u), a.fromBufferAttribute(i, f), o.fromBufferAttribute(i, m), h.fromBufferAttribute(i, g), a.add(l), o.add(l), h.add(l), i.setXYZ(f, a.x, a.y, a.z), i.setXYZ(m, o.x, o.y, o.z), i.setXYZ(g, h.x, h.y, h.z);
        }
      else
        for (let d = 0, p = e.count; d < p; d += 3)
          s.fromBufferAttribute(e, d + 0), n.fromBufferAttribute(e, d + 1), r.fromBufferAttribute(e, d + 2), l.subVectors(r, n), u.subVectors(s, n), l.cross(u), i.setXYZ(d + 0, l.x, l.y, l.z), i.setXYZ(d + 1, l.x, l.y, l.z), i.setXYZ(d + 2, l.x, l.y, l.z);
      this.normalizeNormals(), i.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, i = t.count; e < i; e++)
      O.fromBufferAttribute(t, e), O.normalize(), t.setXYZ(e, O.x, O.y, O.z);
  }
  toNonIndexed() {
    function t(a, o) {
      const h = a.array, l = a.itemSize, u = a.normalized, d = new h.constructor(o.length * l);
      let p = 0, f = 0;
      for (let m = 0, g = o.length; m < g; m++) {
        a.isInterleavedBufferAttribute ? p = o[m] * a.data.stride + a.offset : p = o[m] * l;
        for (let x = 0; x < l; x++)
          d[f++] = h[p++];
      }
      return new bt(d, l, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new ht(), i = this.index.array, s = this.attributes;
    for (const a in s) {
      const o = s[a], h = t(o, i);
      e.setAttribute(a, h);
    }
    const n = this.morphAttributes;
    for (const a in n) {
      const o = [], h = n[a];
      for (let l = 0, u = h.length; l < u; l++) {
        const d = h[l], p = t(d, i);
        o.push(p);
      }
      e.morphAttributes[a] = o;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const r = this.groups;
    for (let a = 0, o = r.length; a < o; a++) {
      const h = r[a];
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
      const o = this.parameters;
      for (const h in o)
        o[h] !== void 0 && (t[h] = o[h]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = {
      type: e.array.constructor.name,
      array: Array.prototype.slice.call(e.array)
    });
    const i = this.attributes;
    for (const o in i) {
      const h = i[o];
      t.data.attributes[o] = h.toJSON(t.data);
    }
    const s = {};
    let n = !1;
    for (const o in this.morphAttributes) {
      const h = this.morphAttributes[o], l = [];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        l.push(p.toJSON(t.data));
      }
      l.length > 0 && (s[o] = l, n = !0);
    }
    n && (t.data.morphAttributes = s, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const r = this.groups;
    r.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(r)));
    const a = this.boundingSphere;
    return a !== null && (t.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
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
      const l = [], u = n[h];
      for (let d = 0, p = u.length; d < p; d++)
        l.push(u[d].clone(e));
      this.morphAttributes[h] = l;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const r = t.groups;
    for (let h = 0, l = r.length; h < l; h++) {
      const u = r[h];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = t.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const o = t.boundingSphere;
    return o !== null && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Us = /* @__PURE__ */ new C(), Dt = /* @__PURE__ */ new mi(), Ve = /* @__PURE__ */ new wt(), Ws = /* @__PURE__ */ new y(), Ue = /* @__PURE__ */ new y(), We = /* @__PURE__ */ new y(), qe = /* @__PURE__ */ new y(), Wi = /* @__PURE__ */ new y(), He = /* @__PURE__ */ new y(), qs = /* @__PURE__ */ new y(), Je = /* @__PURE__ */ new y();
class yi extends E {
  constructor(t = new ht(), e = new Sa()) {
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
          const a = s[n].name || String(n);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = n;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const i = this.geometry, s = i.attributes.position, n = i.morphAttributes.position, r = i.morphTargetsRelative;
    e.fromBufferAttribute(s, t);
    const a = this.morphTargetInfluences;
    if (n && a) {
      He.set(0, 0, 0);
      for (let o = 0, h = n.length; o < h; o++) {
        const l = a[o], u = n[o];
        l !== 0 && (Wi.fromBufferAttribute(u, t), r ? He.addScaledVector(Wi, l) : He.addScaledVector(Wi.sub(e), l));
      }
      e.add(He);
    }
    return e;
  }
  raycast(t, e) {
    const i = this.geometry, s = this.material, n = this.matrixWorld;
    s !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), Ve.copy(i.boundingSphere), Ve.applyMatrix4(n), Dt.copy(t.ray).recast(t.near), !(Ve.containsPoint(Dt.origin) === !1 && (Dt.intersectSphere(Ve, Ws) === null || Dt.origin.distanceToSquared(Ws) > (t.far - t.near) ** 2)) && (Us.copy(n).invert(), Dt.copy(t.ray).applyMatrix4(Us), !(i.boundingBox !== null && Dt.intersectsBox(i.boundingBox) === !1) && this._computeIntersections(t, e, Dt)));
  }
  _computeIntersections(t, e, i) {
    let s;
    const n = this.geometry, r = this.material, a = n.index, o = n.attributes.position, h = n.attributes.uv, l = n.attributes.uv1, u = n.attributes.normal, d = n.groups, p = n.drawRange;
    if (a !== null)
      if (Array.isArray(r))
        for (let f = 0, m = d.length; f < m; f++) {
          const g = d[f], x = r[g.materialIndex], b = Math.max(g.start, p.start), w = Math.min(a.count, Math.min(g.start + g.count, p.start + p.count));
          for (let M = b, _ = w; M < _; M += 3) {
            const v = a.getX(M), A = a.getX(M + 1), T = a.getX(M + 2);
            s = Ge(this, x, t, i, h, l, u, v, A, T), s && (s.faceIndex = Math.floor(M / 3), s.face.materialIndex = g.materialIndex, e.push(s));
          }
        }
      else {
        const f = Math.max(0, p.start), m = Math.min(a.count, p.start + p.count);
        for (let g = f, x = m; g < x; g += 3) {
          const b = a.getX(g), w = a.getX(g + 1), M = a.getX(g + 2);
          s = Ge(this, r, t, i, h, l, u, b, w, M), s && (s.faceIndex = Math.floor(g / 3), e.push(s));
        }
      }
    else if (o !== void 0)
      if (Array.isArray(r))
        for (let f = 0, m = d.length; f < m; f++) {
          const g = d[f], x = r[g.materialIndex], b = Math.max(g.start, p.start), w = Math.min(o.count, Math.min(g.start + g.count, p.start + p.count));
          for (let M = b, _ = w; M < _; M += 3) {
            const v = M, A = M + 1, T = M + 2;
            s = Ge(this, x, t, i, h, l, u, v, A, T), s && (s.faceIndex = Math.floor(M / 3), s.face.materialIndex = g.materialIndex, e.push(s));
          }
        }
      else {
        const f = Math.max(0, p.start), m = Math.min(o.count, p.start + p.count);
        for (let g = f, x = m; g < x; g += 3) {
          const b = g, w = g + 1, M = g + 2;
          s = Ge(this, r, t, i, h, l, u, b, w, M), s && (s.faceIndex = Math.floor(g / 3), e.push(s));
        }
      }
  }
}
function za(c, t, e, i, s, n, r, a) {
  let o;
  if (t.side === xn ? o = i.intersectTriangle(r, n, s, !0, a) : o = i.intersectTriangle(s, n, r, t.side === Ki, a), o === null) return null;
  Je.copy(a), Je.applyMatrix4(c.matrixWorld);
  const h = e.ray.origin.distanceTo(Je);
  return h < e.near || h > e.far ? null : {
    distance: h,
    point: Je.clone(),
    object: c
  };
}
function Ge(c, t, e, i, s, n, r, a, o, h) {
  c.getVertexPosition(a, Ue), c.getVertexPosition(o, We), c.getVertexPosition(h, qe);
  const l = za(c, t, e, i, Ue, We, qe, qs);
  if (l) {
    const u = new y();
    Q.getBarycoord(qs, Ue, We, qe, u), s && (l.uv = Q.getInterpolatedAttribute(s, a, o, h, u, new S())), n && (l.uv1 = Q.getInterpolatedAttribute(n, a, o, h, u, new S())), r && (l.normal = Q.getInterpolatedAttribute(r, a, o, h, u, new y()), l.normal.dot(i.direction) > 0 && l.normal.multiplyScalar(-1));
    const d = {
      a,
      b: o,
      c: h,
      normal: new y(),
      materialIndex: 0
    };
    Q.getNormal(Ue, We, qe, d.normal), l.face = d, l.barycoord = u;
  }
  return l;
}
class rs extends ht {
  constructor(t = 1, e = 1, i = 1, s = 1, n = 1, r = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: i,
      widthSegments: s,
      heightSegments: n,
      depthSegments: r
    };
    const a = this;
    s = Math.floor(s), n = Math.floor(n), r = Math.floor(r);
    const o = [], h = [], l = [], u = [];
    let d = 0, p = 0;
    f("z", "y", "x", -1, -1, i, e, t, r, n, 0), f("z", "y", "x", 1, -1, i, e, -t, r, n, 1), f("x", "z", "y", 1, 1, t, i, e, s, r, 2), f("x", "z", "y", 1, -1, t, i, -e, s, r, 3), f("x", "y", "z", 1, -1, t, e, i, s, n, 4), f("x", "y", "z", -1, -1, t, e, -i, s, n, 5), this.setIndex(o), this.setAttribute("position", new Y(h, 3)), this.setAttribute("normal", new Y(l, 3)), this.setAttribute("uv", new Y(u, 2));
    function f(m, g, x, b, w, M, _, v, A, T, k) {
      const P = M / A, I = _ / T, rt = M / 2, N = _ / 2, at = v / 2, ot = A + 1, Vt = T + 1;
      let It = 0, _t = 0;
      const D = new y();
      for (let V = 0; V < Vt; V++) {
        const G = V * I - N;
        for (let Ut = 0; Ut < ot; Ut++) {
          const Be = Ut * P - rt;
          D[m] = Be * b, D[g] = G * w, D[x] = at, h.push(D.x, D.y, D.z), D[m] = 0, D[g] = 0, D[x] = v > 0 ? 1 : -1, l.push(D.x, D.y, D.z), u.push(Ut / A), u.push(1 - V / T), It += 1;
        }
      }
      for (let V = 0; V < T; V++)
        for (let G = 0; G < A; G++) {
          const Ut = d + G + ot * V, Be = d + G + ot * (V + 1), Wn = d + (G + 1) + ot * (V + 1), ds = d + (G + 1) + ot * V;
          o.push(Ut, Be, ds), o.push(Be, Wn, ds), _t += 6;
        }
      a.addGroup(p, _t, k), p += _t, d += It;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new rs(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function gi(c) {
  const t = {};
  for (const e in c) {
    t[e] = {};
    for (const i in c[e]) {
      const s = c[e][i];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][i] = null) : t[e][i] = s.clone() : Array.isArray(s) ? t[e][i] = s.slice() : t[e][i] = s;
    }
  }
  return t;
}
function Ca(c) {
  const t = {};
  for (let e = 0; e < c.length; e++) {
    const i = gi(c[e]);
    for (const s in i)
      t[s] = i[s];
  }
  return t;
}
function Fa(c) {
  const t = [];
  for (let e = 0; e < c.length; e++)
    t.push(c[e].clone());
  return t;
}
function il(c) {
  const t = c.getRenderTarget();
  return t === null ? c.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : $.workingColorSpace;
}
const sl = { clone: gi, merge: Ca };
var Ba = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Ea = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class ka extends Pt {
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ba, this.fragmentShader = Ea, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = gi(t.uniforms), this.uniformsGroups = Fa(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
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
class zn extends E {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new C(), this.projectionMatrix = new C(), this.projectionMatrixInverse = new C(), this.coordinateSystem = Ft;
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
const Ct = /* @__PURE__ */ new y(), Hs = /* @__PURE__ */ new S(), Js = /* @__PURE__ */ new S();
class gt extends zn {
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
    const t = Math.tan(ve * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return Ce * 2 * Math.atan(
      Math.tan(ve * 0.5 * this.fov) / this.zoom
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
    Ct.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(Ct.x, Ct.y).multiplyScalar(-t / Ct.z), Ct.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(Ct.x, Ct.y).multiplyScalar(-t / Ct.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance
   * @param {Vector2} target - Vector2 target used to store result where x is width and y is height.
   * @returns {Vector2}
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, Hs, Js), e.subVectors(Js, Hs);
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
    let e = t * Math.tan(ve * 0.5 * this.fov) / this.zoom, i = 2 * e, s = this.aspect * i, n = -0.5 * s;
    const r = this.view;
    if (this.view !== null && this.view.enabled) {
      const o = r.fullWidth, h = r.fullHeight;
      n += r.offsetX * s / o, e -= r.offsetY * i / h, s *= r.width / o, i *= r.height / h;
    }
    const a = this.filmOffset;
    a !== 0 && (n += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(n, n + s, e, e - i, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const Kt = -90, te = 1;
class Ra extends E {
  constructor(t, e, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new gt(Kt, te, t, e);
    s.layers = this.layers, this.add(s);
    const n = new gt(Kt, te, t, e);
    n.layers = this.layers, this.add(n);
    const r = new gt(Kt, te, t, e);
    r.layers = this.layers, this.add(r);
    const a = new gt(Kt, te, t, e);
    a.layers = this.layers, this.add(a);
    const o = new gt(Kt, te, t, e);
    o.layers = this.layers, this.add(o);
    const h = new gt(Kt, te, t, e);
    h.layers = this.layers, this.add(h);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [i, s, n, r, a, o] = e;
    for (const h of e) this.remove(h);
    if (t === Ft)
      i.up.set(0, 1, 0), i.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), n.up.set(0, 0, -1), n.lookAt(0, 1, 0), r.up.set(0, 0, 1), r.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), o.up.set(0, 1, 0), o.lookAt(0, 0, -1);
    else if (t === oi)
      i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), n.up.set(0, 0, 1), n.lookAt(0, 1, 0), r.up.set(0, 0, -1), r.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), o.up.set(0, -1, 0), o.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const h of e)
      this.add(h), h.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: s } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [n, r, a, o, h, l] = this.children, u = t.getRenderTarget(), d = t.getActiveCubeFace(), p = t.getActiveMipmapLevel(), f = t.xr.enabled;
    t.xr.enabled = !1;
    const m = i.texture.generateMipmaps;
    i.texture.generateMipmaps = !1, t.setRenderTarget(i, 0, s), t.render(e, n), t.setRenderTarget(i, 1, s), t.render(e, r), t.setRenderTarget(i, 2, s), t.render(e, a), t.setRenderTarget(i, 3, s), t.render(e, o), t.setRenderTarget(i, 4, s), t.render(e, h), i.texture.generateMipmaps = m, t.setRenderTarget(i, 5, s), t.render(e, l), t.setRenderTarget(u, d, p), t.xr.enabled = f, i.texture.needsPMREMUpdate = !0;
  }
}
class Pa extends H {
  constructor(t, e, i, s, n, r, a, o, h, l) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : Gn, super(t, e, i, s, n, r, a, o, h, l), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class nl extends pa {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const i = { width: t, height: t, depth: 1 }, s = [i, i, i, i, i, i];
    this.texture = new Pa(s, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : ri;
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
    }, s = new rs(5, 5, 5), n = new ka({
      name: "CubemapFromEquirect",
      uniforms: gi(i.uniforms),
      vertexShader: i.vertexShader,
      fragmentShader: i.fragmentShader,
      side: xn,
      blending: qn
    });
    n.uniforms.tEquirect.value = e;
    const r = new yi(s, n), a = e.minFilter;
    return e.minFilter === Mn && (e.minFilter = ri), new Ra(1, 10, this).update(t, r), e.minFilter = a, r.geometry.dispose(), r.material.dispose(), this;
  }
  clear(t, e, i, s) {
    const n = t.getRenderTarget();
    for (let r = 0; r < 6; r++)
      t.setRenderTarget(this, r), t.clear(e, i, s);
    t.setRenderTarget(n);
  }
}
class Cn {
  constructor(t, e = 1, i = 1e3) {
    this.isFog = !0, this.name = "", this.color = new J(t), this.near = e, this.far = i;
  }
  clone() {
    return new Cn(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      name: this.name,
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
}
class rl extends E {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new kt(), this.environmentIntensity = 1, this.environmentRotation = new kt(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class Ia {
  constructor(t, e) {
    this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = t !== void 0 ? t.length / e : 0, this.usage = es, this.updateRanges = [], this.version = 0, this.uuid = nt();
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
    return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
  }
  copyAt(t, e, i) {
    t *= this.stride, i *= e.stride;
    for (let s = 0, n = this.stride; s < n; s++)
      this.array[t + s] = e.array[i + s];
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  clone(t) {
    t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = nt()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), i = new this.constructor(e, this.stride);
    return i.setUsage(this.usage), i;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  toJSON(t) {
    return t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = nt()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const q = /* @__PURE__ */ new y();
class li {
  constructor(t, e, i, s = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = i, this.normalized = s;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  applyMatrix4(t) {
    for (let e = 0, i = this.data.count; e < i; e++)
      q.fromBufferAttribute(this, e), q.applyMatrix4(t), this.setXYZ(e, q.x, q.y, q.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, i = this.count; e < i; e++)
      q.fromBufferAttribute(this, e), q.applyNormalMatrix(t), this.setXYZ(e, q.x, q.y, q.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, i = this.count; e < i; e++)
      q.fromBufferAttribute(this, e), q.transformDirection(t), this.setXYZ(e, q.x, q.y, q.z);
    return this;
  }
  getComponent(t, e) {
    let i = this.array[t * this.data.stride + this.offset + e];
    return this.normalized && (i = st(i, this.array)), i;
  }
  setComponent(t, e, i) {
    return this.normalized && (i = F(i, this.array)), this.data.array[t * this.data.stride + this.offset + e] = i, this;
  }
  setX(t, e) {
    return this.normalized && (e = F(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this;
  }
  setY(t, e) {
    return this.normalized && (e = F(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this;
  }
  setZ(t, e) {
    return this.normalized && (e = F(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this;
  }
  setW(t, e) {
    return this.normalized && (e = F(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this;
  }
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (e = st(e, this.array)), e;
  }
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (e = st(e, this.array)), e;
  }
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (e = st(e, this.array)), e;
  }
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (e = st(e, this.array)), e;
  }
  setXY(t, e, i) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = F(e, this.array), i = F(i, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = i, this;
  }
  setXYZ(t, e, i, s) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = F(e, this.array), i = F(i, this.array), s = F(s, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = s, this;
  }
  setXYZW(t, e, i, s, n) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = F(e, this.array), i = F(i, this.array), s = F(s, this.array), n = F(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = s, this.data.array[t + 3] = n, this;
  }
  clone(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let i = 0; i < this.count; i++) {
        const s = i * this.data.stride + this.offset;
        for (let n = 0; n < this.itemSize; n++)
          e.push(this.data.array[s + n]);
      }
      return new bt(new this.array.constructor(e), this.itemSize, this.normalized);
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new li(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let i = 0; i < this.count; i++) {
        const s = i * this.data.stride + this.offset;
        for (let n = 0; n < this.itemSize; n++)
          e.push(this.data.array[s + n]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized
      };
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
class Na extends Pt {
  constructor(t) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new J(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
let ee;
const ge = /* @__PURE__ */ new y(), ie = /* @__PURE__ */ new y(), se = /* @__PURE__ */ new y(), ne = /* @__PURE__ */ new S(), xe = /* @__PURE__ */ new S(), Fn = /* @__PURE__ */ new C(), Xe = /* @__PURE__ */ new y(), be = /* @__PURE__ */ new y(), je = /* @__PURE__ */ new y(), Gs = /* @__PURE__ */ new S(), qi = /* @__PURE__ */ new S(), Xs = /* @__PURE__ */ new S();
class al extends E {
  constructor(t = new Na()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", ee === void 0) {
      ee = new ht();
      const e = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), i = new Ia(e, 5);
      ee.setIndex([0, 1, 2, 0, 2, 3]), ee.setAttribute("position", new li(i, 3, 0, !1)), ee.setAttribute("uv", new li(i, 2, 3, !1));
    }
    this.geometry = ee, this.material = t, this.center = new S(0.5, 0.5);
  }
  raycast(t, e) {
    t.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), ie.setFromMatrixScale(this.matrixWorld), Fn.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), se.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && ie.multiplyScalar(-se.z);
    const i = this.material.rotation;
    let s, n;
    i !== 0 && (n = Math.cos(i), s = Math.sin(i));
    const r = this.center;
    Ye(Xe.set(-0.5, -0.5, 0), se, r, ie, s, n), Ye(be.set(0.5, -0.5, 0), se, r, ie, s, n), Ye(je.set(0.5, 0.5, 0), se, r, ie, s, n), Gs.set(0, 0), qi.set(1, 0), Xs.set(1, 1);
    let a = t.ray.intersectTriangle(Xe, be, je, !1, ge);
    if (a === null && (Ye(be.set(-0.5, 0.5, 0), se, r, ie, s, n), qi.set(0, 1), a = t.ray.intersectTriangle(Xe, je, be, !1, ge), a === null))
      return;
    const o = t.ray.origin.distanceTo(ge);
    o < t.near || o > t.far || e.push({
      distance: o,
      point: ge.clone(),
      uv: Q.getInterpolation(ge, Xe, be, je, Gs, qi, Xs, new S()),
      face: null,
      object: this
    });
  }
  copy(t, e) {
    return super.copy(t, e), t.center !== void 0 && this.center.copy(t.center), this.material = t.material, this;
  }
}
function Ye(c, t, e, i, s, n) {
  ne.subVectors(c, e).addScalar(0.5).multiply(i), s !== void 0 ? (xe.x = n * ne.x - s * ne.y, xe.y = s * ne.x + n * ne.y) : xe.copy(ne), c.copy(t), c.x += xe.x, c.y += xe.y, c.applyMatrix4(Fn);
}
const js = /* @__PURE__ */ new y(), Ys = /* @__PURE__ */ new L(), Zs = /* @__PURE__ */ new L(), Oa = /* @__PURE__ */ new y(), $s = /* @__PURE__ */ new C(), Ze = /* @__PURE__ */ new y(), Hi = /* @__PURE__ */ new wt(), Qs = /* @__PURE__ */ new C(), Ji = /* @__PURE__ */ new mi();
class ol extends yi {
  constructor(t, e) {
    super(t, e), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = xs, this.bindMatrix = new C(), this.bindMatrixInverse = new C(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const t = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Rt()), this.boundingBox.makeEmpty();
    const e = t.getAttribute("position");
    for (let i = 0; i < e.count; i++)
      this.getVertexPosition(i, Ze), this.boundingBox.expandByPoint(Ze);
  }
  computeBoundingSphere() {
    const t = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new wt()), this.boundingSphere.makeEmpty();
    const e = t.getAttribute("position");
    for (let i = 0; i < e.count; i++)
      this.getVertexPosition(i, Ze), this.boundingSphere.expandByPoint(Ze);
  }
  copy(t, e) {
    return super.copy(t, e), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
  }
  raycast(t, e) {
    const i = this.material, s = this.matrixWorld;
    i !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Hi.copy(this.boundingSphere), Hi.applyMatrix4(s), t.ray.intersectsSphere(Hi) !== !1 && (Qs.copy(s).invert(), Ji.copy(t.ray).applyMatrix4(Qs), !(this.boundingBox !== null && Ji.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(t, e, Ji)));
  }
  getVertexPosition(t, e) {
    return super.getVertexPosition(t, e), this.applyBoneTransform(t, e), e;
  }
  bind(t, e) {
    this.skeleton = t, e === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const t = new L(), e = this.geometry.attributes.skinWeight;
    for (let i = 0, s = e.count; i < s; i++) {
      t.fromBufferAttribute(e, i);
      const n = 1 / t.manhattanLength();
      n !== 1 / 0 ? t.multiplyScalar(n) : t.set(1, 0, 0, 0), e.setXYZW(i, t.x, t.y, t.z, t.w);
    }
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.bindMode === xs ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Jn ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(t, e) {
    const i = this.skeleton, s = this.geometry;
    Ys.fromBufferAttribute(s.attributes.skinIndex, t), Zs.fromBufferAttribute(s.attributes.skinWeight, t), js.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
    for (let n = 0; n < 4; n++) {
      const r = Zs.getComponent(n);
      if (r !== 0) {
        const a = Ys.getComponent(n);
        $s.multiplyMatrices(i.bones[a].matrixWorld, i.boneInverses[a]), e.addScaledVector(Oa.copy(js).applyMatrix4($s), r);
      }
    }
    return e.applyMatrix4(this.bindMatrixInverse);
  }
}
class Da extends E {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Bn extends H {
  constructor(t = null, e = 1, i = 1, s, n, r, a, o, h = Et, l = Et, u, d) {
    super(null, r, a, o, h, l, s, n, u, d), this.isDataTexture = !0, this.image = { data: t, width: e, height: i }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Ks = /* @__PURE__ */ new C(), La = /* @__PURE__ */ new C();
class En {
  constructor(t = [], e = []) {
    this.uuid = nt(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const t = this.bones, e = this.boneInverses;
    if (this.boneMatrices = new Float32Array(t.length * 16), e.length === 0)
      this.calculateInverses();
    else if (t.length !== e.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let i = 0, s = this.bones.length; i < s; i++)
        this.boneInverses.push(new C());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const i = new C();
      this.bones[t] && i.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(i);
    }
  }
  pose() {
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const i = this.bones[t];
      i && i.matrixWorld.copy(this.boneInverses[t]).invert();
    }
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const i = this.bones[t];
      i && (i.parent && i.parent.isBone ? (i.matrix.copy(i.parent.matrixWorld).invert(), i.matrix.multiply(i.matrixWorld)) : i.matrix.copy(i.matrixWorld), i.matrix.decompose(i.position, i.quaternion, i.scale));
    }
  }
  update() {
    const t = this.bones, e = this.boneInverses, i = this.boneMatrices, s = this.boneTexture;
    for (let n = 0, r = t.length; n < r; n++) {
      const a = t[n] ? t[n].matrixWorld : La;
      Ks.multiplyMatrices(a, e[n]), Ks.toArray(i, n * 16);
    }
    s !== null && (s.needsUpdate = !0);
  }
  clone() {
    return new En(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let t = Math.sqrt(this.bones.length * 4);
    t = Math.ceil(t / 4) * 4, t = Math.max(t, 4);
    const e = new Float32Array(t * t * 4);
    e.set(this.boneMatrices);
    const i = new Bn(e, t, t, ss, fi);
    return i.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = i, this;
  }
  getBoneByName(t) {
    for (let e = 0, i = this.bones.length; e < i; e++) {
      const s = this.bones[e];
      if (s.name === t)
        return s;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(t, e) {
    this.uuid = t.uuid;
    for (let i = 0, s = t.bones.length; i < s; i++) {
      const n = t.bones[i];
      let r = e[n];
      r === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", n), r = new Da()), this.bones.push(r), this.boneInverses.push(new C().fromArray(t.boneInverses[i]));
    }
    return this.init(), this;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    t.uuid = this.uuid;
    const e = this.bones, i = this.boneInverses;
    for (let s = 0, n = e.length; s < n; s++) {
      const r = e[s];
      t.bones.push(r.uuid);
      const a = i[s];
      t.boneInverses.push(a.toArray());
    }
    return t;
  }
}
class tn extends bt {
  constructor(t, e, i, s = 1) {
    super(t, e, i), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = s;
  }
  copy(t) {
    return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t;
  }
}
const re = /* @__PURE__ */ new C(), en = /* @__PURE__ */ new C(), $e = [], sn = /* @__PURE__ */ new Rt(), Va = /* @__PURE__ */ new C(), Me = /* @__PURE__ */ new yi(), we = /* @__PURE__ */ new wt();
class hl extends yi {
  constructor(t, e, i) {
    super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new tn(new Float32Array(i * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = i, this.boundingBox = null, this.boundingSphere = null;
    for (let s = 0; s < i; s++)
      this.setMatrixAt(s, Va);
  }
  computeBoundingBox() {
    const t = this.geometry, e = this.count;
    this.boundingBox === null && (this.boundingBox = new Rt()), t.boundingBox === null && t.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let i = 0; i < e; i++)
      this.getMatrixAt(i, re), sn.copy(t.boundingBox).applyMatrix4(re), this.boundingBox.union(sn);
  }
  computeBoundingSphere() {
    const t = this.geometry, e = this.count;
    this.boundingSphere === null && (this.boundingSphere = new wt()), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let i = 0; i < e; i++)
      this.getMatrixAt(i, re), we.copy(t.boundingSphere).applyMatrix4(re), this.boundingSphere.union(we);
  }
  copy(t, e) {
    return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), t.morphTexture !== null && (this.morphTexture = t.morphTexture.clone()), t.instanceColor !== null && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
  }
  getColorAt(t, e) {
    e.fromArray(this.instanceColor.array, t * 3);
  }
  getMatrixAt(t, e) {
    e.fromArray(this.instanceMatrix.array, t * 16);
  }
  getMorphAt(t, e) {
    const i = e.morphTargetInfluences, s = this.morphTexture.source.data.data, n = i.length + 1, r = t * n + 1;
    for (let a = 0; a < i.length; a++)
      i[a] = s[r + a];
  }
  raycast(t, e) {
    const i = this.matrixWorld, s = this.count;
    if (Me.geometry = this.geometry, Me.material = this.material, Me.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), we.copy(this.boundingSphere), we.applyMatrix4(i), t.ray.intersectsSphere(we) !== !1))
      for (let n = 0; n < s; n++) {
        this.getMatrixAt(n, re), en.multiplyMatrices(i, re), Me.matrixWorld = en, Me.raycast(t, $e);
        for (let r = 0, a = $e.length; r < a; r++) {
          const o = $e[r];
          o.instanceId = n, o.object = this, e.push(o);
        }
        $e.length = 0;
      }
  }
  setColorAt(t, e) {
    this.instanceColor === null && (this.instanceColor = new tn(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), e.toArray(this.instanceColor.array, t * 3);
  }
  setMatrixAt(t, e) {
    e.toArray(this.instanceMatrix.array, t * 16);
  }
  setMorphAt(t, e) {
    const i = e.morphTargetInfluences, s = i.length + 1;
    this.morphTexture === null && (this.morphTexture = new Bn(new Float32Array(s * this.count), s, this.count, Sn, fi));
    const n = this.morphTexture.source.data.data;
    let r = 0;
    for (let h = 0; h < i.length; h++)
      r += i[h];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - r, o = s * t;
    n[o] = a, n.set(i, o + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
const Gi = /* @__PURE__ */ new y(), Ua = /* @__PURE__ */ new y(), Wa = /* @__PURE__ */ new Mt();
class ae {
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
    const s = Gi.subVectors(i, e).cross(Ua.subVectors(t, e)).normalize();
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
    const i = t.delta(Gi), s = this.normal.dot(i);
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
    const i = e || Wa.getNormalMatrix(t), s = this.coplanarPoint(Gi).applyMatrix4(t), n = this.normal.applyMatrix3(i).normalize();
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
const Lt = /* @__PURE__ */ new wt(), Qe = /* @__PURE__ */ new y();
class qa {
  constructor(t = new ae(), e = new ae(), i = new ae(), s = new ae(), n = new ae(), r = new ae()) {
    this.planes = [t, e, i, s, n, r];
  }
  set(t, e, i, s, n, r) {
    const a = this.planes;
    return a[0].copy(t), a[1].copy(e), a[2].copy(i), a[3].copy(s), a[4].copy(n), a[5].copy(r), this;
  }
  copy(t) {
    const e = this.planes;
    for (let i = 0; i < 6; i++)
      e[i].copy(t.planes[i]);
    return this;
  }
  setFromProjectionMatrix(t, e = Ft) {
    const i = this.planes, s = t.elements, n = s[0], r = s[1], a = s[2], o = s[3], h = s[4], l = s[5], u = s[6], d = s[7], p = s[8], f = s[9], m = s[10], g = s[11], x = s[12], b = s[13], w = s[14], M = s[15];
    if (i[0].setComponents(o - n, d - h, g - p, M - x).normalize(), i[1].setComponents(o + n, d + h, g + p, M + x).normalize(), i[2].setComponents(o + r, d + l, g + f, M + b).normalize(), i[3].setComponents(o - r, d - l, g - f, M - b).normalize(), i[4].setComponents(o - a, d - u, g - m, M - w).normalize(), e === Ft)
      i[5].setComponents(o + a, d + u, g + m, M + w).normalize();
    else if (e === oi)
      i[5].setComponents(a, u, m, w).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      t.boundingSphere === null && t.computeBoundingSphere(), Lt.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), Lt.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(Lt);
  }
  intersectsSprite(t) {
    return Lt.center.set(0, 0, 0), Lt.radius = 0.7071067811865476, Lt.applyMatrix4(t.matrixWorld), this.intersectsSphere(Lt);
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
      if (Qe.x = s.normal.x > 0 ? t.max.x : t.min.x, Qe.y = s.normal.y > 0 ? t.max.y : t.min.y, Qe.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(Qe) < 0)
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
class kn extends Pt {
  constructor(t) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new J(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const ci = /* @__PURE__ */ new y(), ui = /* @__PURE__ */ new y(), nn = /* @__PURE__ */ new C(), _e = /* @__PURE__ */ new mi(), Ke = /* @__PURE__ */ new wt(), Xi = /* @__PURE__ */ new y(), rn = /* @__PURE__ */ new y();
class Rn extends E {
  constructor(t = new ht(), e = new kn()) {
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
        ci.fromBufferAttribute(e, s - 1), ui.fromBufferAttribute(e, s), i[s] = i[s - 1], i[s] += ci.distanceTo(ui);
      t.setAttribute("lineDistance", new Y(i, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, e) {
    const i = this.geometry, s = this.matrixWorld, n = t.params.Line.threshold, r = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Ke.copy(i.boundingSphere), Ke.applyMatrix4(s), Ke.radius += n, t.ray.intersectsSphere(Ke) === !1) return;
    nn.copy(s).invert(), _e.copy(t.ray).applyMatrix4(nn);
    const a = n / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, h = this.isLineSegments ? 2 : 1, l = i.index, d = i.attributes.position;
    if (l !== null) {
      const p = Math.max(0, r.start), f = Math.min(l.count, r.start + r.count);
      for (let m = p, g = f - 1; m < g; m += h) {
        const x = l.getX(m), b = l.getX(m + 1), w = ti(this, t, _e, o, x, b);
        w && e.push(w);
      }
      if (this.isLineLoop) {
        const m = l.getX(f - 1), g = l.getX(p), x = ti(this, t, _e, o, m, g);
        x && e.push(x);
      }
    } else {
      const p = Math.max(0, r.start), f = Math.min(d.count, r.start + r.count);
      for (let m = p, g = f - 1; m < g; m += h) {
        const x = ti(this, t, _e, o, m, m + 1);
        x && e.push(x);
      }
      if (this.isLineLoop) {
        const m = ti(this, t, _e, o, f - 1, p);
        m && e.push(m);
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
          const a = s[n].name || String(n);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = n;
        }
      }
    }
  }
}
function ti(c, t, e, i, s, n) {
  const r = c.geometry.attributes.position;
  if (ci.fromBufferAttribute(r, s), ui.fromBufferAttribute(r, n), e.distanceSqToSegment(ci, ui, Xi, rn) > i) return;
  Xi.applyMatrix4(c.matrixWorld);
  const o = t.ray.origin.distanceTo(Xi);
  if (!(o < t.near || o > t.far))
    return {
      distance: o,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: rn.clone().applyMatrix4(c.matrixWorld),
      index: s,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: c
    };
}
const an = /* @__PURE__ */ new y(), on = /* @__PURE__ */ new y();
class Ha extends Rn {
  constructor(t, e) {
    super(t, e), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, i = [];
      for (let s = 0, n = e.count; s < n; s += 2)
        an.fromBufferAttribute(e, s), on.fromBufferAttribute(e, s + 1), i[s] = s === 0 ? 0 : i[s - 1], i[s + 1] = i[s] + an.distanceTo(on);
      t.setAttribute("lineDistance", new Y(i, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class ll extends Rn {
  constructor(t, e) {
    super(t, e), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class Ja extends Pt {
  constructor(t) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new J(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
const hn = /* @__PURE__ */ new C(), is = /* @__PURE__ */ new mi(), ei = /* @__PURE__ */ new wt(), ii = /* @__PURE__ */ new y();
class cl extends E {
  constructor(t = new ht(), e = new Ja()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  raycast(t, e) {
    const i = this.geometry, s = this.matrixWorld, n = t.params.Points.threshold, r = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), ei.copy(i.boundingSphere), ei.applyMatrix4(s), ei.radius += n, t.ray.intersectsSphere(ei) === !1) return;
    hn.copy(s).invert(), is.copy(t.ray).applyMatrix4(hn);
    const a = n / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, h = i.index, u = i.attributes.position;
    if (h !== null) {
      const d = Math.max(0, r.start), p = Math.min(h.count, r.start + r.count);
      for (let f = d, m = p; f < m; f++) {
        const g = h.getX(f);
        ii.fromBufferAttribute(u, g), ln(ii, g, o, s, t, e, this);
      }
    } else {
      const d = Math.max(0, r.start), p = Math.min(u.count, r.start + r.count);
      for (let f = d, m = p; f < m; f++)
        ii.fromBufferAttribute(u, f), ln(ii, f, o, s, t, e, this);
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, i = Object.keys(e);
    if (i.length > 0) {
      const s = e[i[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let n = 0, r = s.length; n < r; n++) {
          const a = s[n].name || String(n);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = n;
        }
      }
    }
  }
}
function ln(c, t, e, i, s, n, r) {
  const a = is.distanceSqToPoint(c);
  if (a < e) {
    const o = new y();
    is.closestPointToPoint(c, o), o.applyMatrix4(i);
    const h = s.ray.origin.distanceTo(o);
    if (h < s.near || h > s.far) return;
    n.push({
      distance: h,
      distanceToRay: Math.sqrt(a),
      point: o,
      index: t,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: r
    });
  }
}
class ul extends E {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
class dl extends H {
  constructor(t, e, i, s, n, r, a, o, h) {
    super(t, e, i, s, n, r, a, o, h), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class pl extends H {
  constructor(t, e, i, s, n, r, a, o, h, l = wi) {
    if (l !== wi && l !== ws)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    i === void 0 && l === wi && (i = _n), i === void 0 && l === ws && (i = tr), super(null, s, n, r, a, o, l, i, h), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.magFilter = a !== void 0 ? a : Et, this.minFilter = o !== void 0 ? o : Et, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class lt {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(t, e) {
    const i = this.getUtoTmapping(t);
    return this.getPoint(i, e);
  }
  // Get sequence of points using getPoint( t )
  getPoints(t = 5) {
    const e = [];
    for (let i = 0; i <= t; i++)
      e.push(this.getPoint(i / t));
    return e;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(t = 5) {
    const e = [];
    for (let i = 0; i <= t; i++)
      e.push(this.getPointAt(i / t));
    return e;
  }
  // Get total curve arc length
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(t = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const e = [];
    let i, s = this.getPoint(0), n = 0;
    e.push(0);
    for (let r = 1; r <= t; r++)
      i = this.getPoint(r / t), n += i.distanceTo(s), e.push(n), s = i;
    return this.cacheArcLengths = e, e;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(t, e) {
    const i = this.getLengths();
    let s = 0;
    const n = i.length;
    let r;
    e ? r = e : r = t * i[n - 1];
    let a = 0, o = n - 1, h;
    for (; a <= o; )
      if (s = Math.floor(a + (o - a) / 2), h = i[s] - r, h < 0)
        a = s + 1;
      else if (h > 0)
        o = s - 1;
      else {
        o = s;
        break;
      }
    if (s = o, i[s] === r)
      return s / (n - 1);
    const l = i[s], d = i[s + 1] - l, p = (r - l) / d;
    return (s + p) / (n - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(t, e) {
    let s = t - 1e-4, n = t + 1e-4;
    s < 0 && (s = 0), n > 1 && (n = 1);
    const r = this.getPoint(s), a = this.getPoint(n), o = e || (r.isVector2 ? new S() : new y());
    return o.copy(a).sub(r).normalize(), o;
  }
  getTangentAt(t, e) {
    const i = this.getUtoTmapping(t);
    return this.getTangent(i, e);
  }
  computeFrenetFrames(t, e) {
    const i = new y(), s = [], n = [], r = [], a = new y(), o = new C();
    for (let p = 0; p <= t; p++) {
      const f = p / t;
      s[p] = this.getTangentAt(f, new y());
    }
    n[0] = new y(), r[0] = new y();
    let h = Number.MAX_VALUE;
    const l = Math.abs(s[0].x), u = Math.abs(s[0].y), d = Math.abs(s[0].z);
    l <= h && (h = l, i.set(1, 0, 0)), u <= h && (h = u, i.set(0, 1, 0)), d <= h && i.set(0, 0, 1), a.crossVectors(s[0], i).normalize(), n[0].crossVectors(s[0], a), r[0].crossVectors(s[0], n[0]);
    for (let p = 1; p <= t; p++) {
      if (n[p] = n[p - 1].clone(), r[p] = r[p - 1].clone(), a.crossVectors(s[p - 1], s[p]), a.length() > Number.EPSILON) {
        a.normalize();
        const f = Math.acos(z(s[p - 1].dot(s[p]), -1, 1));
        n[p].applyMatrix4(o.makeRotationAxis(a, f));
      }
      r[p].crossVectors(s[p], n[p]);
    }
    if (e === !0) {
      let p = Math.acos(z(n[0].dot(n[t]), -1, 1));
      p /= t, s[0].dot(a.crossVectors(n[0], n[t])) > 0 && (p = -p);
      for (let f = 1; f <= t; f++)
        n[f].applyMatrix4(o.makeRotationAxis(s[f], p * f)), r[f].crossVectors(s[f], n[f]);
    }
    return {
      tangents: s,
      normals: n,
      binormals: r
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
  }
  fromJSON(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
}
class as extends lt {
  constructor(t = 0, e = 0, i = 1, s = 1, n = 0, r = Math.PI * 2, a = !1, o = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = i, this.yRadius = s, this.aStartAngle = n, this.aEndAngle = r, this.aClockwise = a, this.aRotation = o;
  }
  getPoint(t, e = new S()) {
    const i = e, s = Math.PI * 2;
    let n = this.aEndAngle - this.aStartAngle;
    const r = Math.abs(n) < Number.EPSILON;
    for (; n < 0; ) n += s;
    for (; n > s; ) n -= s;
    n < Number.EPSILON && (r ? n = 0 : n = s), this.aClockwise === !0 && !r && (n === s ? n = -s : n = n - s);
    const a = this.aStartAngle + t * n;
    let o = this.aX + this.xRadius * Math.cos(a), h = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const l = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = o - this.aX, p = h - this.aY;
      o = d * l - p * u + this.aX, h = d * u + p * l + this.aY;
    }
    return i.set(o, h);
  }
  copy(t) {
    return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
}
class Ga extends as {
  constructor(t, e, i, s, n, r) {
    super(t, e, i, i, s, n, r), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function os() {
  let c = 0, t = 0, e = 0, i = 0;
  function s(n, r, a, o) {
    c = n, t = a, e = -3 * n + 3 * r - 2 * a - o, i = 2 * n - 2 * r + a + o;
  }
  return {
    initCatmullRom: function(n, r, a, o, h) {
      s(r, a, h * (a - n), h * (o - r));
    },
    initNonuniformCatmullRom: function(n, r, a, o, h, l, u) {
      let d = (r - n) / h - (a - n) / (h + l) + (a - r) / l, p = (a - r) / l - (o - r) / (l + u) + (o - a) / u;
      d *= l, p *= l, s(r, a, d, p);
    },
    calc: function(n) {
      const r = n * n, a = r * n;
      return c + t * n + e * r + i * a;
    }
  };
}
const si = /* @__PURE__ */ new y(), ji = /* @__PURE__ */ new os(), Yi = /* @__PURE__ */ new os(), Zi = /* @__PURE__ */ new os();
class Xa extends lt {
  constructor(t = [], e = !1, i = "centripetal", s = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = i, this.tension = s;
  }
  getPoint(t, e = new y()) {
    const i = e, s = this.points, n = s.length, r = (n - (this.closed ? 0 : 1)) * t;
    let a = Math.floor(r), o = r - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / n) + 1) * n : o === 0 && a === n - 1 && (a = n - 2, o = 1);
    let h, l;
    this.closed || a > 0 ? h = s[(a - 1) % n] : (si.subVectors(s[0], s[1]).add(s[0]), h = si);
    const u = s[a % n], d = s[(a + 1) % n];
    if (this.closed || a + 2 < n ? l = s[(a + 2) % n] : (si.subVectors(s[n - 1], s[n - 2]).add(s[n - 1]), l = si), this.curveType === "centripetal" || this.curveType === "chordal") {
      const p = this.curveType === "chordal" ? 0.5 : 0.25;
      let f = Math.pow(h.distanceToSquared(u), p), m = Math.pow(u.distanceToSquared(d), p), g = Math.pow(d.distanceToSquared(l), p);
      m < 1e-4 && (m = 1), f < 1e-4 && (f = m), g < 1e-4 && (g = m), ji.initNonuniformCatmullRom(h.x, u.x, d.x, l.x, f, m, g), Yi.initNonuniformCatmullRom(h.y, u.y, d.y, l.y, f, m, g), Zi.initNonuniformCatmullRom(h.z, u.z, d.z, l.z, f, m, g);
    } else this.curveType === "catmullrom" && (ji.initCatmullRom(h.x, u.x, d.x, l.x, this.tension), Yi.initCatmullRom(h.y, u.y, d.y, l.y, this.tension), Zi.initCatmullRom(h.z, u.z, d.z, l.z, this.tension));
    return i.set(
      ji.calc(o),
      Yi.calc(o),
      Zi.calc(o)
    ), i;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, i = t.points.length; e < i; e++) {
      const s = t.points[e];
      this.points.push(s.clone());
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, i = this.points.length; e < i; e++) {
      const s = this.points[e];
      t.points.push(s.toArray());
    }
    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, i = t.points.length; e < i; e++) {
      const s = t.points[e];
      this.points.push(new y().fromArray(s));
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
}
function cn(c, t, e, i, s) {
  const n = (i - t) * 0.5, r = (s - e) * 0.5, a = c * c, o = c * a;
  return (2 * e - 2 * i + n + r) * o + (-3 * e + 3 * i - 2 * n - r) * a + n * c + e;
}
function ja(c, t) {
  const e = 1 - c;
  return e * e * t;
}
function Ya(c, t) {
  return 2 * (1 - c) * c * t;
}
function Za(c, t) {
  return c * c * t;
}
function Te(c, t, e, i) {
  return ja(c, t) + Ya(c, e) + Za(c, i);
}
function $a(c, t) {
  const e = 1 - c;
  return e * e * e * t;
}
function Qa(c, t) {
  const e = 1 - c;
  return 3 * e * e * c * t;
}
function Ka(c, t) {
  return 3 * (1 - c) * c * c * t;
}
function to(c, t) {
  return c * c * c * t;
}
function ze(c, t, e, i, s) {
  return $a(c, t) + Qa(c, e) + Ka(c, i) + to(c, s);
}
class Pn extends lt {
  constructor(t = new S(), e = new S(), i = new S(), s = new S()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = s;
  }
  getPoint(t, e = new S()) {
    const i = e, s = this.v0, n = this.v1, r = this.v2, a = this.v3;
    return i.set(
      ze(t, s.x, n.x, r.x, a.x),
      ze(t, s.y, n.y, r.y, a.y)
    ), i;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class eo extends lt {
  constructor(t = new y(), e = new y(), i = new y(), s = new y()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = s;
  }
  getPoint(t, e = new y()) {
    const i = e, s = this.v0, n = this.v1, r = this.v2, a = this.v3;
    return i.set(
      ze(t, s.x, n.x, r.x, a.x),
      ze(t, s.y, n.y, r.y, a.y),
      ze(t, s.z, n.z, r.z, a.z)
    ), i;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class In extends lt {
  constructor(t = new S(), e = new S()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new S()) {
    const i = e;
    return t === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new S()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class io extends lt {
  constructor(t = new y(), e = new y()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new y()) {
    const i = e;
    return t === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new y()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class Nn extends lt {
  constructor(t = new S(), e = new S(), i = new S()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = i;
  }
  getPoint(t, e = new S()) {
    const i = e, s = this.v0, n = this.v1, r = this.v2;
    return i.set(
      Te(t, s.x, n.x, r.x),
      Te(t, s.y, n.y, r.y)
    ), i;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class so extends lt {
  constructor(t = new y(), e = new y(), i = new y()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = i;
  }
  getPoint(t, e = new y()) {
    const i = e, s = this.v0, n = this.v1, r = this.v2;
    return i.set(
      Te(t, s.x, n.x, r.x),
      Te(t, s.y, n.y, r.y),
      Te(t, s.z, n.z, r.z)
    ), i;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class On extends lt {
  constructor(t = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t;
  }
  getPoint(t, e = new S()) {
    const i = e, s = this.points, n = (s.length - 1) * t, r = Math.floor(n), a = n - r, o = s[r === 0 ? r : r - 1], h = s[r], l = s[r > s.length - 2 ? s.length - 1 : r + 1], u = s[r > s.length - 3 ? s.length - 1 : r + 2];
    return i.set(
      cn(a, o.x, h.x, l.x, u.x),
      cn(a, o.y, h.y, l.y, u.y)
    ), i;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, i = t.points.length; e < i; e++) {
      const s = t.points[e];
      this.points.push(s.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, i = this.points.length; e < i; e++) {
      const s = this.points[e];
      t.points.push(s.toArray());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, i = t.points.length; e < i; e++) {
      const s = t.points[e];
      this.points.push(new S().fromArray(s));
    }
    return this;
  }
}
var un = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: Ga,
  CatmullRomCurve3: Xa,
  CubicBezierCurve: Pn,
  CubicBezierCurve3: eo,
  EllipseCurve: as,
  LineCurve: In,
  LineCurve3: io,
  QuadraticBezierCurve: Nn,
  QuadraticBezierCurve3: so,
  SplineCurve: On
});
class no extends lt {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(t) {
    this.curves.push(t);
  }
  closePath() {
    const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
    if (!t.equals(e)) {
      const i = t.isVector2 === !0 ? "LineCurve" : "LineCurve3";
      this.curves.push(new un[i](e, t));
    }
    return this;
  }
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint(t, e) {
    const i = t * this.getLength(), s = this.getCurveLengths();
    let n = 0;
    for (; n < s.length; ) {
      if (s[n] >= i) {
        const r = s[n] - i, a = this.curves[n], o = a.getLength(), h = o === 0 ? 0 : 1 - r / o;
        return a.getPointAt(h, e);
      }
      n++;
    }
    return null;
  }
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength() {
    const t = this.getCurveLengths();
    return t[t.length - 1];
  }
  // cacheLengths must be recalculated.
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const t = [];
    let e = 0;
    for (let i = 0, s = this.curves.length; i < s; i++)
      e += this.curves[i].getLength(), t.push(e);
    return this.cacheLengths = t, t;
  }
  getSpacedPoints(t = 40) {
    const e = [];
    for (let i = 0; i <= t; i++)
      e.push(this.getPoint(i / t));
    return this.autoClose && e.push(e[0]), e;
  }
  getPoints(t = 12) {
    const e = [];
    let i;
    for (let s = 0, n = this.curves; s < n.length; s++) {
      const r = n[s], a = r.isEllipseCurve ? t * 2 : r.isLineCurve || r.isLineCurve3 ? 1 : r.isSplineCurve ? t * r.points.length : t, o = r.getPoints(a);
      for (let h = 0; h < o.length; h++) {
        const l = o[h];
        i && i.equals(l) || (e.push(l), i = l);
      }
    }
    return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
  }
  copy(t) {
    super.copy(t), this.curves = [];
    for (let e = 0, i = t.curves.length; e < i; e++) {
      const s = t.curves[e];
      this.curves.push(s.clone());
    }
    return this.autoClose = t.autoClose, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.autoClose = this.autoClose, t.curves = [];
    for (let e = 0, i = this.curves.length; e < i; e++) {
      const s = this.curves[e];
      t.curves.push(s.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
    for (let e = 0, i = t.curves.length; e < i; e++) {
      const s = t.curves[e];
      this.curves.push(new un[s.type]().fromJSON(s));
    }
    return this;
  }
}
class ro extends no {
  constructor(t) {
    super(), this.type = "Path", this.currentPoint = new S(), t && this.setFromPoints(t);
  }
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y);
    for (let e = 1, i = t.length; e < i; e++)
      this.lineTo(t[e].x, t[e].y);
    return this;
  }
  moveTo(t, e) {
    return this.currentPoint.set(t, e), this;
  }
  lineTo(t, e) {
    const i = new In(this.currentPoint.clone(), new S(t, e));
    return this.curves.push(i), this.currentPoint.set(t, e), this;
  }
  quadraticCurveTo(t, e, i, s) {
    const n = new Nn(
      this.currentPoint.clone(),
      new S(t, e),
      new S(i, s)
    );
    return this.curves.push(n), this.currentPoint.set(i, s), this;
  }
  bezierCurveTo(t, e, i, s, n, r) {
    const a = new Pn(
      this.currentPoint.clone(),
      new S(t, e),
      new S(i, s),
      new S(n, r)
    );
    return this.curves.push(a), this.currentPoint.set(n, r), this;
  }
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t), i = new On(e);
    return this.curves.push(i), this.currentPoint.copy(t[t.length - 1]), this;
  }
  arc(t, e, i, s, n, r) {
    const a = this.currentPoint.x, o = this.currentPoint.y;
    return this.absarc(
      t + a,
      e + o,
      i,
      s,
      n,
      r
    ), this;
  }
  absarc(t, e, i, s, n, r) {
    return this.absellipse(t, e, i, i, s, n, r), this;
  }
  ellipse(t, e, i, s, n, r, a, o) {
    const h = this.currentPoint.x, l = this.currentPoint.y;
    return this.absellipse(t + h, e + l, i, s, n, r, a, o), this;
  }
  absellipse(t, e, i, s, n, r, a, o) {
    const h = new as(t, e, i, s, n, r, a, o);
    if (this.curves.length > 0) {
      const u = h.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(h);
    const l = h.getPoint(1);
    return this.currentPoint.copy(l), this;
  }
  copy(t) {
    return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.currentPoint = this.currentPoint.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
  }
}
class hs extends ht {
  constructor(t = [new S(0, -0.5), new S(0.5, 0), new S(0, 0.5)], e = 12, i = 0, s = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: t,
      segments: e,
      phiStart: i,
      phiLength: s
    }, e = Math.floor(e), s = z(s, 0, Math.PI * 2);
    const n = [], r = [], a = [], o = [], h = [], l = 1 / e, u = new y(), d = new S(), p = new y(), f = new y(), m = new y();
    let g = 0, x = 0;
    for (let b = 0; b <= t.length - 1; b++)
      switch (b) {
        case 0:
          g = t[b + 1].x - t[b].x, x = t[b + 1].y - t[b].y, p.x = x * 1, p.y = -g, p.z = x * 0, m.copy(p), p.normalize(), o.push(p.x, p.y, p.z);
          break;
        case t.length - 1:
          o.push(m.x, m.y, m.z);
          break;
        default:
          g = t[b + 1].x - t[b].x, x = t[b + 1].y - t[b].y, p.x = x * 1, p.y = -g, p.z = x * 0, f.copy(p), p.x += m.x, p.y += m.y, p.z += m.z, p.normalize(), o.push(p.x, p.y, p.z), m.copy(f);
      }
    for (let b = 0; b <= e; b++) {
      const w = i + b * l * s, M = Math.sin(w), _ = Math.cos(w);
      for (let v = 0; v <= t.length - 1; v++) {
        u.x = t[v].x * M, u.y = t[v].y, u.z = t[v].x * _, r.push(u.x, u.y, u.z), d.x = b / e, d.y = v / (t.length - 1), a.push(d.x, d.y);
        const A = o[3 * v + 0] * M, T = o[3 * v + 1], k = o[3 * v + 0] * _;
        h.push(A, T, k);
      }
    }
    for (let b = 0; b < e; b++)
      for (let w = 0; w < t.length - 1; w++) {
        const M = w + b * t.length, _ = M, v = M + t.length, A = M + t.length + 1, T = M + 1;
        n.push(_, v, T), n.push(A, T, v);
      }
    this.setIndex(n), this.setAttribute("position", new Y(r, 3)), this.setAttribute("uv", new Y(a, 2)), this.setAttribute("normal", new Y(h, 3));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new hs(t.points, t.segments, t.phiStart, t.phiLength);
  }
}
class Dn extends hs {
  constructor(t = 1, e = 1, i = 4, s = 8) {
    const n = new ro();
    n.absarc(0, -e / 2, t, Math.PI * 1.5, 0), n.absarc(0, e / 2, t, 0, Math.PI * 0.5), super(n.getPoints(i), s), this.type = "CapsuleGeometry", this.parameters = {
      radius: t,
      length: e,
      capSegments: i,
      radialSegments: s
    };
  }
  static fromJSON(t) {
    return new Dn(t.radius, t.length, t.capSegments, t.radialSegments);
  }
}
class Ln extends ht {
  constructor(t = 1, e = 1, i = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: i,
      heightSegments: s
    };
    const n = t / 2, r = e / 2, a = Math.floor(i), o = Math.floor(s), h = a + 1, l = o + 1, u = t / a, d = e / o, p = [], f = [], m = [], g = [];
    for (let x = 0; x < l; x++) {
      const b = x * d - r;
      for (let w = 0; w < h; w++) {
        const M = w * u - n;
        f.push(M, -b, 0), m.push(0, 0, 1), g.push(w / a), g.push(1 - x / o);
      }
    }
    for (let x = 0; x < o; x++)
      for (let b = 0; b < a; b++) {
        const w = b + h * x, M = b + h * (x + 1), _ = b + 1 + h * (x + 1), v = b + 1 + h * x;
        p.push(w, M, v), p.push(M, _, v);
      }
    this.setIndex(p), this.setAttribute("position", new Y(f, 3)), this.setAttribute("normal", new Y(m, 3)), this.setAttribute("uv", new Y(g, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ln(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class ao extends Pt {
  constructor(t) {
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new J(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new J(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Hr, this.normalScale = new S(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new kt(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class fl extends ao {
  constructor(t) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new S(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return z(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(e) {
        this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new J(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new J(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new J(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(t);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(t) {
    this._anisotropy > 0 != t > 0 && this.version++, this._anisotropy = t;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(t) {
    this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(t) {
    this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(t) {
    this._dispersion > 0 != t > 0 && this.version++, this._dispersion = t;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(t) {
    this._sheen > 0 != t > 0 && this.version++, this._sheen = t;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(t) {
    this._transmission > 0 != t > 0 && this.version++, this._transmission = t;
  }
  copy(t) {
    return super.copy(t), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = t.anisotropy, this.anisotropyRotation = t.anisotropyRotation, this.anisotropyMap = t.anisotropyMap, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.dispersion = t.dispersion, this.ior = t.ior, this.iridescence = t.iridescence, this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, this.iridescenceThicknessRange = [...t.iridescenceThicknessRange], this.iridescenceThicknessMap = t.iridescenceThicknessMap, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this;
  }
}
class ml extends Pt {
  constructor(t) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = qr, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class yl extends Pt {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
function ni(c, t, e) {
  return !c || // let 'undefined' and 'null' pass
  !e && c.constructor === t ? c : typeof t.BYTES_PER_ELEMENT == "number" ? new t(c) : Array.prototype.slice.call(c);
}
function oo(c) {
  return ArrayBuffer.isView(c) && !(c instanceof DataView);
}
function ho(c) {
  function t(s, n) {
    return c[s] - c[n];
  }
  const e = c.length, i = new Array(e);
  for (let s = 0; s !== e; ++s) i[s] = s;
  return i.sort(t), i;
}
function dn(c, t, e) {
  const i = c.length, s = new c.constructor(i);
  for (let n = 0, r = 0; r !== i; ++n) {
    const a = e[n] * t;
    for (let o = 0; o !== t; ++o)
      s[r++] = c[a + o];
  }
  return s;
}
function Vn(c, t, e, i) {
  let s = 1, n = c[0];
  for (; n !== void 0 && n[i] === void 0; )
    n = c[s++];
  if (n === void 0) return;
  let r = n[i];
  if (r !== void 0)
    if (Array.isArray(r))
      do
        r = n[i], r !== void 0 && (t.push(n.time), e.push.apply(e, r)), n = c[s++];
      while (n !== void 0);
    else if (r.toArray !== void 0)
      do
        r = n[i], r !== void 0 && (t.push(n.time), r.toArray(e, e.length)), n = c[s++];
      while (n !== void 0);
    else
      do
        r = n[i], r !== void 0 && (t.push(n.time), e.push(r)), n = c[s++];
      while (n !== void 0);
}
class xi {
  constructor(t, e, i, s) {
    this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = s !== void 0 ? s : new e.constructor(i), this.sampleValues = e, this.valueSize = i, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(t) {
    const e = this.parameterPositions;
    let i = this._cachedIndex, s = e[i], n = e[i - 1];
    i: {
      t: {
        let r;
        e: {
          s: if (!(t < s)) {
            for (let a = i + 2; ; ) {
              if (s === void 0) {
                if (t < n) break s;
                return i = e.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
              }
              if (i === a) break;
              if (n = s, s = e[++i], t < s)
                break t;
            }
            r = e.length;
            break e;
          }
          if (!(t >= n)) {
            const a = e[1];
            t < a && (i = 2, n = a);
            for (let o = i - 2; ; ) {
              if (n === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (i === o) break;
              if (s = n, n = e[--i - 1], t >= n)
                break t;
            }
            r = i, i = 0;
            break e;
          }
          break i;
        }
        for (; i < r; ) {
          const a = i + r >>> 1;
          t < e[a] ? r = a : i = a + 1;
        }
        if (s = e[i], n = e[i - 1], n === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (s === void 0)
          return i = e.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
      }
      this._cachedIndex = i, this.intervalChanged_(i, n, s);
    }
    return this.interpolate_(i, n, t, s);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(t) {
    const e = this.resultBuffer, i = this.sampleValues, s = this.valueSize, n = t * s;
    for (let r = 0; r !== s; ++r)
      e[r] = i[n + r];
    return e;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class lo extends xi {
  constructor(t, e, i, s) {
    super(t, e, i, s), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: _s,
      endingEnd: _s
    };
  }
  intervalChanged_(t, e, i) {
    const s = this.parameterPositions;
    let n = t - 2, r = t + 1, a = s[n], o = s[r];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case Ss:
          n = t, a = 2 * e - i;
          break;
        case vs:
          n = s.length - 2, a = e + s[n] - s[n + 1];
          break;
        default:
          n = t, a = i;
      }
    if (o === void 0)
      switch (this.getSettings_().endingEnd) {
        case Ss:
          r = t, o = 2 * i - e;
          break;
        case vs:
          r = 1, o = i + s[1] - s[0];
          break;
        default:
          r = t - 1, o = e;
      }
    const h = (i - e) * 0.5, l = this.valueSize;
    this._weightPrev = h / (e - a), this._weightNext = h / (o - i), this._offsetPrev = n * l, this._offsetNext = r * l;
  }
  interpolate_(t, e, i, s) {
    const n = this.resultBuffer, r = this.sampleValues, a = this.valueSize, o = t * a, h = o - a, l = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, p = this._weightNext, f = (i - e) / (s - e), m = f * f, g = m * f, x = -d * g + 2 * d * m - d * f, b = (1 + d) * g + (-1.5 - 2 * d) * m + (-0.5 + d) * f + 1, w = (-1 - p) * g + (1.5 + p) * m + 0.5 * f, M = p * g - p * m;
    for (let _ = 0; _ !== a; ++_)
      n[_] = x * r[l + _] + b * r[h + _] + w * r[o + _] + M * r[u + _];
    return n;
  }
}
class co extends xi {
  constructor(t, e, i, s) {
    super(t, e, i, s);
  }
  interpolate_(t, e, i, s) {
    const n = this.resultBuffer, r = this.sampleValues, a = this.valueSize, o = t * a, h = o - a, l = (i - e) / (s - e), u = 1 - l;
    for (let d = 0; d !== a; ++d)
      n[d] = r[h + d] * u + r[o + d] * l;
    return n;
  }
}
class uo extends xi {
  constructor(t, e, i, s) {
    super(t, e, i, s);
  }
  interpolate_(t) {
    return this.copySampleValue_(t - 1);
  }
}
class ct {
  constructor(t, e, i, s) {
    if (t === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (e === void 0 || e.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    this.name = t, this.times = ni(e, this.TimeBufferType), this.values = ni(i, this.ValueBufferType), this.setInterpolation(s || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(t) {
    const e = t.constructor;
    let i;
    if (e.toJSON !== this.toJSON)
      i = e.toJSON(t);
    else {
      i = {
        name: t.name,
        times: ni(t.times, Array),
        values: ni(t.values, Array)
      };
      const s = t.getInterpolation();
      s !== t.DefaultInterpolation && (i.interpolation = s);
    }
    return i.type = t.ValueTypeName, i;
  }
  InterpolantFactoryMethodDiscrete(t) {
    return new uo(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodLinear(t) {
    return new co(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodSmooth(t) {
    return new lo(this.times, this.values, this.getValueSize(), t);
  }
  setInterpolation(t) {
    let e;
    switch (t) {
      case ai:
        e = this.InterpolantFactoryMethodDiscrete;
        break;
      case ts:
        e = this.InterpolantFactoryMethodLinear;
        break;
      case _i:
        e = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (e === void 0) {
      const i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (t !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(i);
      return console.warn("THREE.KeyframeTrack:", i), this;
    }
    return this.createInterpolant = e, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return ai;
      case this.InterpolantFactoryMethodLinear:
        return ts;
      case this.InterpolantFactoryMethodSmooth:
        return _i;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(t) {
    if (t !== 0) {
      const e = this.times;
      for (let i = 0, s = e.length; i !== s; ++i)
        e[i] += t;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(t) {
    if (t !== 1) {
      const e = this.times;
      for (let i = 0, s = e.length; i !== s; ++i)
        e[i] *= t;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(t, e) {
    const i = this.times, s = i.length;
    let n = 0, r = s - 1;
    for (; n !== s && i[n] < t; )
      ++n;
    for (; r !== -1 && i[r] > e; )
      --r;
    if (++r, n !== 0 || r !== s) {
      n >= r && (r = Math.max(r, 1), n = r - 1);
      const a = this.getValueSize();
      this.times = i.slice(n, r), this.values = this.values.slice(n * a, r * a);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let t = !0;
    const e = this.getValueSize();
    e - Math.floor(e) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
    const i = this.times, s = this.values, n = i.length;
    n === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
    let r = null;
    for (let a = 0; a !== n; a++) {
      const o = i[a];
      if (typeof o == "number" && isNaN(o)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, o), t = !1;
        break;
      }
      if (r !== null && r > o) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, o, r), t = !1;
        break;
      }
      r = o;
    }
    if (s !== void 0 && oo(s))
      for (let a = 0, o = s.length; a !== o; ++a) {
        const h = s[a];
        if (isNaN(h)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, h), t = !1;
          break;
        }
      }
    return t;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const t = this.times.slice(), e = this.values.slice(), i = this.getValueSize(), s = this.getInterpolation() === _i, n = t.length - 1;
    let r = 1;
    for (let a = 1; a < n; ++a) {
      let o = !1;
      const h = t[a], l = t[a + 1];
      if (h !== l && (a !== 1 || h !== t[0]))
        if (s)
          o = !0;
        else {
          const u = a * i, d = u - i, p = u + i;
          for (let f = 0; f !== i; ++f) {
            const m = e[u + f];
            if (m !== e[d + f] || m !== e[p + f]) {
              o = !0;
              break;
            }
          }
        }
      if (o) {
        if (a !== r) {
          t[r] = t[a];
          const u = a * i, d = r * i;
          for (let p = 0; p !== i; ++p)
            e[d + p] = e[u + p];
        }
        ++r;
      }
    }
    if (n > 0) {
      t[r] = t[n];
      for (let a = n * i, o = r * i, h = 0; h !== i; ++h)
        e[o + h] = e[a + h];
      ++r;
    }
    return r !== t.length ? (this.times = t.slice(0, r), this.values = e.slice(0, r * i)) : (this.times = t, this.values = e), this;
  }
  clone() {
    const t = this.times.slice(), e = this.values.slice(), i = this.constructor, s = new i(this.name, t, e);
    return s.createInterpolant = this.createInterpolant, s;
  }
}
ct.prototype.TimeBufferType = Float32Array;
ct.prototype.ValueBufferType = Float32Array;
ct.prototype.DefaultInterpolation = ts;
class ue extends ct {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(t, e, i) {
    super(t, e, i);
  }
}
ue.prototype.ValueTypeName = "bool";
ue.prototype.ValueBufferType = Array;
ue.prototype.DefaultInterpolation = ai;
ue.prototype.InterpolantFactoryMethodLinear = void 0;
ue.prototype.InterpolantFactoryMethodSmooth = void 0;
class Un extends ct {
}
Un.prototype.ValueTypeName = "color";
class di extends ct {
}
di.prototype.ValueTypeName = "number";
class po extends xi {
  constructor(t, e, i, s) {
    super(t, e, i, s);
  }
  interpolate_(t, e, i, s) {
    const n = this.resultBuffer, r = this.sampleValues, a = this.valueSize, o = (i - e) / (s - e);
    let h = t * a;
    for (let l = h + a; h !== l; h += 4)
      ce.slerpFlat(n, 0, r, h - a, r, h, o);
    return n;
  }
}
class bi extends ct {
  InterpolantFactoryMethodLinear(t) {
    return new po(this.times, this.values, this.getValueSize(), t);
  }
}
bi.prototype.ValueTypeName = "quaternion";
bi.prototype.InterpolantFactoryMethodSmooth = void 0;
class de extends ct {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(t, e, i) {
    super(t, e, i);
  }
}
de.prototype.ValueTypeName = "string";
de.prototype.ValueBufferType = Array;
de.prototype.DefaultInterpolation = ai;
de.prototype.InterpolantFactoryMethodLinear = void 0;
de.prototype.InterpolantFactoryMethodSmooth = void 0;
class pi extends ct {
}
pi.prototype.ValueTypeName = "vector";
class gl {
  constructor(t = "", e = -1, i = [], s = Wr) {
    this.name = t, this.tracks = i, this.duration = e, this.blendMode = s, this.uuid = nt(), this.duration < 0 && this.resetDuration();
  }
  static parse(t) {
    const e = [], i = t.tracks, s = 1 / (t.fps || 1);
    for (let r = 0, a = i.length; r !== a; ++r)
      e.push(mo(i[r]).scale(s));
    const n = new this(t.name, t.duration, e, t.blendMode);
    return n.uuid = t.uuid, n;
  }
  static toJSON(t) {
    const e = [], i = t.tracks, s = {
      name: t.name,
      duration: t.duration,
      tracks: e,
      uuid: t.uuid,
      blendMode: t.blendMode
    };
    for (let n = 0, r = i.length; n !== r; ++n)
      e.push(ct.toJSON(i[n]));
    return s;
  }
  static CreateFromMorphTargetSequence(t, e, i, s) {
    const n = e.length, r = [];
    for (let a = 0; a < n; a++) {
      let o = [], h = [];
      o.push(
        (a + n - 1) % n,
        a,
        (a + 1) % n
      ), h.push(0, 1, 0);
      const l = ho(o);
      o = dn(o, 1, l), h = dn(h, 1, l), !s && o[0] === 0 && (o.push(n), h.push(h[0])), r.push(
        new di(
          ".morphTargetInfluences[" + e[a].name + "]",
          o,
          h
        ).scale(1 / i)
      );
    }
    return new this(t, -1, r);
  }
  static findByName(t, e) {
    let i = t;
    if (!Array.isArray(t)) {
      const s = t;
      i = s.geometry && s.geometry.animations || s.animations;
    }
    for (let s = 0; s < i.length; s++)
      if (i[s].name === e)
        return i[s];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(t, e, i) {
    const s = {}, n = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, o = t.length; a < o; a++) {
      const h = t[a], l = h.name.match(n);
      if (l && l.length > 1) {
        const u = l[1];
        let d = s[u];
        d || (s[u] = d = []), d.push(h);
      }
    }
    const r = [];
    for (const a in s)
      r.push(this.CreateFromMorphTargetSequence(a, s[a], e, i));
    return r;
  }
  // parse the animation.hierarchy format
  static parseAnimation(t, e) {
    if (!t)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const i = function(u, d, p, f, m) {
      if (p.length !== 0) {
        const g = [], x = [];
        Vn(p, g, x, f), g.length !== 0 && m.push(new u(d, g, x));
      }
    }, s = [], n = t.name || "default", r = t.fps || 30, a = t.blendMode;
    let o = t.length || -1;
    const h = t.hierarchy || [];
    for (let u = 0; u < h.length; u++) {
      const d = h[u].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const p = {};
          let f;
          for (f = 0; f < d.length; f++)
            if (d[f].morphTargets)
              for (let m = 0; m < d[f].morphTargets.length; m++)
                p[d[f].morphTargets[m]] = -1;
          for (const m in p) {
            const g = [], x = [];
            for (let b = 0; b !== d[f].morphTargets.length; ++b) {
              const w = d[f];
              g.push(w.time), x.push(w.morphTarget === m ? 1 : 0);
            }
            s.push(new di(".morphTargetInfluence[" + m + "]", g, x));
          }
          o = p.length * r;
        } else {
          const p = ".bones[" + e[u].name + "]";
          i(
            pi,
            p + ".position",
            d,
            "pos",
            s
          ), i(
            bi,
            p + ".quaternion",
            d,
            "rot",
            s
          ), i(
            pi,
            p + ".scale",
            d,
            "scl",
            s
          );
        }
    }
    return s.length === 0 ? null : new this(n, o, s, a);
  }
  resetDuration() {
    const t = this.tracks;
    let e = 0;
    for (let i = 0, s = t.length; i !== s; ++i) {
      const n = this.tracks[i];
      e = Math.max(e, n.times[n.times.length - 1]);
    }
    return this.duration = e, this;
  }
  trim() {
    for (let t = 0; t < this.tracks.length; t++)
      this.tracks[t].trim(0, this.duration);
    return this;
  }
  validate() {
    let t = !0;
    for (let e = 0; e < this.tracks.length; e++)
      t = t && this.tracks[e].validate();
    return t;
  }
  optimize() {
    for (let t = 0; t < this.tracks.length; t++)
      this.tracks[t].optimize();
    return this;
  }
  clone() {
    const t = [];
    for (let e = 0; e < this.tracks.length; e++)
      t.push(this.tracks[e].clone());
    return new this.constructor(this.name, this.duration, t, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function fo(c) {
  switch (c.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return di;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return pi;
    case "color":
      return Un;
    case "quaternion":
      return bi;
    case "bool":
    case "boolean":
      return ue;
    case "string":
      return de;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + c);
}
function mo(c) {
  if (c.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const t = fo(c.type);
  if (c.times === void 0) {
    const e = [], i = [];
    Vn(c.keys, e, i, "value"), c.times = e, c.values = i;
  }
  return t.parse !== void 0 ? t.parse(c) : new t(c.name, c.times, c.values, c.interpolation);
}
const Bt = {
  enabled: !1,
  files: {},
  add: function(c, t) {
    this.enabled !== !1 && (this.files[c] = t);
  },
  get: function(c) {
    if (this.enabled !== !1)
      return this.files[c];
  },
  remove: function(c) {
    delete this.files[c];
  },
  clear: function() {
    this.files = {};
  }
};
class yo {
  constructor(t, e, i) {
    const s = this;
    let n = !1, r = 0, a = 0, o;
    const h = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function(l) {
      a++, n === !1 && s.onStart !== void 0 && s.onStart(l, r, a), n = !0;
    }, this.itemEnd = function(l) {
      r++, s.onProgress !== void 0 && s.onProgress(l, r, a), r === a && (n = !1, s.onLoad !== void 0 && s.onLoad());
    }, this.itemError = function(l) {
      s.onError !== void 0 && s.onError(l);
    }, this.resolveURL = function(l) {
      return o ? o(l) : l;
    }, this.setURLModifier = function(l) {
      return o = l, this;
    }, this.addHandler = function(l, u) {
      return h.push(l, u), this;
    }, this.removeHandler = function(l) {
      const u = h.indexOf(l);
      return u !== -1 && h.splice(u, 2), this;
    }, this.getHandler = function(l) {
      for (let u = 0, d = h.length; u < d; u += 2) {
        const p = h[u], f = h[u + 1];
        if (p.global && (p.lastIndex = 0), p.test(l))
          return f;
      }
      return null;
    };
  }
}
const go = /* @__PURE__ */ new yo();
class Fe {
  constructor(t) {
    this.manager = t !== void 0 ? t : go, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(t, e) {
    const i = this;
    return new Promise(function(s, n) {
      i.load(t, s, e, n);
    });
  }
  parse() {
  }
  setCrossOrigin(t) {
    return this.crossOrigin = t, this;
  }
  setWithCredentials(t) {
    return this.withCredentials = t, this;
  }
  setPath(t) {
    return this.path = t, this;
  }
  setResourcePath(t) {
    return this.resourcePath = t, this;
  }
  setRequestHeader(t) {
    return this.requestHeader = t, this;
  }
}
Fe.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const yt = {};
class xo extends Error {
  constructor(t, e) {
    super(t), this.response = e;
  }
}
class xl extends Fe {
  constructor(t) {
    super(t);
  }
  load(t, e, i, s) {
    t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const n = Bt.get(t);
    if (n !== void 0)
      return this.manager.itemStart(t), setTimeout(() => {
        e && e(n), this.manager.itemEnd(t);
      }, 0), n;
    if (yt[t] !== void 0) {
      yt[t].push({
        onLoad: e,
        onProgress: i,
        onError: s
      });
      return;
    }
    yt[t] = [], yt[t].push({
      onLoad: e,
      onProgress: i,
      onError: s
    });
    const r = new Request(t, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), a = this.mimeType, o = this.responseType;
    fetch(r).then((h) => {
      if (h.status === 200 || h.status === 0) {
        if (h.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || h.body === void 0 || h.body.getReader === void 0)
          return h;
        const l = yt[t], u = h.body.getReader(), d = h.headers.get("X-File-Size") || h.headers.get("Content-Length"), p = d ? parseInt(d) : 0, f = p !== 0;
        let m = 0;
        const g = new ReadableStream({
          start(x) {
            b();
            function b() {
              u.read().then(({ done: w, value: M }) => {
                if (w)
                  x.close();
                else {
                  m += M.byteLength;
                  const _ = new ProgressEvent("progress", { lengthComputable: f, loaded: m, total: p });
                  for (let v = 0, A = l.length; v < A; v++) {
                    const T = l[v];
                    T.onProgress && T.onProgress(_);
                  }
                  x.enqueue(M), b();
                }
              }, (w) => {
                x.error(w);
              });
            }
          }
        });
        return new Response(g);
      } else
        throw new xo(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`, h);
    }).then((h) => {
      switch (o) {
        case "arraybuffer":
          return h.arrayBuffer();
        case "blob":
          return h.blob();
        case "document":
          return h.text().then((l) => new DOMParser().parseFromString(l, a));
        case "json":
          return h.json();
        default:
          if (a === void 0)
            return h.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(a), d = u && u[1] ? u[1].toLowerCase() : void 0, p = new TextDecoder(d);
            return h.arrayBuffer().then((f) => p.decode(f));
          }
      }
    }).then((h) => {
      Bt.add(t, h);
      const l = yt[t];
      delete yt[t];
      for (let u = 0, d = l.length; u < d; u++) {
        const p = l[u];
        p.onLoad && p.onLoad(h);
      }
    }).catch((h) => {
      const l = yt[t];
      if (l === void 0)
        throw this.manager.itemError(t), h;
      delete yt[t];
      for (let u = 0, d = l.length; u < d; u++) {
        const p = l[u];
        p.onError && p.onError(h);
      }
      this.manager.itemError(t);
    }).finally(() => {
      this.manager.itemEnd(t);
    }), this.manager.itemStart(t);
  }
  setResponseType(t) {
    return this.responseType = t, this;
  }
  setMimeType(t) {
    return this.mimeType = t, this;
  }
}
class bo extends Fe {
  constructor(t) {
    super(t);
  }
  load(t, e, i, s) {
    this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const n = this, r = Bt.get(t);
    if (r !== void 0)
      return n.manager.itemStart(t), setTimeout(function() {
        e && e(r), n.manager.itemEnd(t);
      }, 0), r;
    const a = hi("img");
    function o() {
      l(), Bt.add(t, this), e && e(this), n.manager.itemEnd(t);
    }
    function h(u) {
      l(), s && s(u), n.manager.itemError(t), n.manager.itemEnd(t);
    }
    function l() {
      a.removeEventListener("load", o, !1), a.removeEventListener("error", h, !1);
    }
    return a.addEventListener("load", o, !1), a.addEventListener("error", h, !1), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), n.manager.itemStart(t), a.src = t, a;
  }
}
class bl extends Fe {
  constructor(t) {
    super(t);
  }
  load(t, e, i, s) {
    const n = new H(), r = new bo(this.manager);
    return r.setCrossOrigin(this.crossOrigin), r.setPath(this.path), r.load(t, function(a) {
      n.image = a, n.needsUpdate = !0, e !== void 0 && e(n);
    }, i, s), n;
  }
}
class Mi extends E {
  constructor(t, e = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new J(t), this.intensity = e;
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
const $i = /* @__PURE__ */ new C(), pn = /* @__PURE__ */ new y(), fn = /* @__PURE__ */ new y();
class ls {
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new S(512, 512), this.map = null, this.mapPass = null, this.matrix = new C(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new qa(), this._frameExtents = new S(1, 1), this._viewportCount = 1, this._viewports = [
      new L(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera, i = this.matrix;
    pn.setFromMatrixPosition(t.matrixWorld), e.position.copy(pn), fn.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(fn), e.updateMatrixWorld(), $i.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix($i), i.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), i.multiply($i);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return this.camera = t.camera.clone(), this.intensity = t.intensity, this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return this.intensity !== 1 && (t.intensity = this.intensity), this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
  }
}
class Mo extends ls {
  constructor() {
    super(new gt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(t) {
    const e = this.camera, i = Ce * 2 * t.angle * this.focus, s = this.mapSize.width / this.mapSize.height, n = t.distance || e.far;
    (i !== e.fov || s !== e.aspect || n !== e.far) && (e.fov = i, e.aspect = s, e.far = n, e.updateProjectionMatrix()), super.updateMatrices(t);
  }
  copy(t) {
    return super.copy(t), this.focus = t.focus, this;
  }
}
class Ml extends Mi {
  constructor(t, e, i = 0, s = Math.PI / 3, n = 0, r = 2) {
    super(t, e), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(E.DEFAULT_UP), this.updateMatrix(), this.target = new E(), this.distance = i, this.angle = s, this.penumbra = n, this.decay = r, this.map = null, this.shadow = new Mo();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(t) {
    this.intensity = t / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return super.copy(t, e), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
const mn = /* @__PURE__ */ new C(), Se = /* @__PURE__ */ new y(), Qi = /* @__PURE__ */ new y();
class wo extends ls {
  constructor() {
    super(new gt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new S(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new L(2, 1, 1, 1),
      // negative X
      new L(0, 1, 1, 1),
      // positive Z
      new L(3, 1, 1, 1),
      // negative Z
      new L(1, 1, 1, 1),
      // positive Y
      new L(3, 0, 1, 1),
      // negative Y
      new L(1, 0, 1, 1)
    ], this._cubeDirections = [
      new y(1, 0, 0),
      new y(-1, 0, 0),
      new y(0, 0, 1),
      new y(0, 0, -1),
      new y(0, 1, 0),
      new y(0, -1, 0)
    ], this._cubeUps = [
      new y(0, 1, 0),
      new y(0, 1, 0),
      new y(0, 1, 0),
      new y(0, 1, 0),
      new y(0, 0, 1),
      new y(0, 0, -1)
    ];
  }
  updateMatrices(t, e = 0) {
    const i = this.camera, s = this.matrix, n = t.distance || i.far;
    n !== i.far && (i.far = n, i.updateProjectionMatrix()), Se.setFromMatrixPosition(t.matrixWorld), i.position.copy(Se), Qi.copy(i.position), Qi.add(this._cubeDirections[e]), i.up.copy(this._cubeUps[e]), i.lookAt(Qi), i.updateMatrixWorld(), s.makeTranslation(-Se.x, -Se.y, -Se.z), mn.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromProjectionMatrix(mn);
  }
}
class wl extends Mi {
  constructor(t, e, i = 0, s = 2) {
    super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = i, this.decay = s, this.shadow = new wo();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(t) {
    this.intensity = t / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
  }
}
class _o extends zn {
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
    let n = i - t, r = i + t, a = s + e, o = s - e;
    if (this.view !== null && this.view.enabled) {
      const h = (this.right - this.left) / this.view.fullWidth / this.zoom, l = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      n += h * this.view.offsetX, r = n + h * this.view.width, a -= l * this.view.offsetY, o = a - l * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(n, r, a, o, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
class So extends ls {
  constructor() {
    super(new _o(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class _l extends Mi {
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(E.DEFAULT_UP), this.updateMatrix(), this.target = new E(), this.shadow = new So();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
class Sl extends Mi {
  constructor(t, e) {
    super(t, e), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class vl {
  static decodeText(t) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u")
      return new TextDecoder().decode(t);
    let e = "";
    for (let i = 0, s = t.length; i < s; i++)
      e += String.fromCharCode(t[i]);
    try {
      return decodeURIComponent(escape(e));
    } catch {
      return e;
    }
  }
  static extractUrlBase(t) {
    const e = t.lastIndexOf("/");
    return e === -1 ? "./" : t.slice(0, e + 1);
  }
  static resolveURL(t, e) {
    return typeof t != "string" || t === "" ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t);
  }
}
class Al extends Fe {
  constructor(t) {
    super(t), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(t) {
    return this.options = t, this;
  }
  load(t, e, i, s) {
    t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const n = this, r = Bt.get(t);
    if (r !== void 0) {
      if (n.manager.itemStart(t), r.then) {
        r.then((h) => {
          e && e(h), n.manager.itemEnd(t);
        }).catch((h) => {
          s && s(h);
        });
        return;
      }
      return setTimeout(function() {
        e && e(r), n.manager.itemEnd(t);
      }, 0), r;
    }
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader;
    const o = fetch(t, a).then(function(h) {
      return h.blob();
    }).then(function(h) {
      return createImageBitmap(h, Object.assign(n.options, { colorSpaceConversion: "none" }));
    }).then(function(h) {
      return Bt.add(t, h), e && e(h), n.manager.itemEnd(t), h;
    }).catch(function(h) {
      s && s(h), Bt.remove(t), n.manager.itemError(t), n.manager.itemEnd(t);
    });
    Bt.add(t, o), n.manager.itemStart(t);
  }
}
class Tl extends gt {
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.cameras = t;
  }
}
class zl {
  constructor(t = !0) {
    this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = yn(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
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
      const e = yn();
      t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
    }
    return t;
  }
}
function yn() {
  return performance.now();
}
const cs = "\\[\\]\\.:\\/", vo = new RegExp("[" + cs + "]", "g"), us = "[^" + cs + "]", Ao = "[^" + cs.replace("\\.", "") + "]", To = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", us), zo = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", Ao), Co = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", us), Fo = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", us), Bo = new RegExp(
  "^" + To + zo + Co + Fo + "$"
), Eo = ["material", "materials", "bones", "map"];
class ko {
  constructor(t, e, i) {
    const s = i || B.parseTrackName(e);
    this._targetGroup = t, this._bindings = t.subscribe_(e, s);
  }
  getValue(t, e) {
    this.bind();
    const i = this._targetGroup.nCachedObjects_, s = this._bindings[i];
    s !== void 0 && s.getValue(t, e);
  }
  setValue(t, e) {
    const i = this._bindings;
    for (let s = this._targetGroup.nCachedObjects_, n = i.length; s !== n; ++s)
      i[s].setValue(t, e);
  }
  bind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e)
      t[e].bind();
  }
  unbind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e)
      t[e].unbind();
  }
}
class B {
  constructor(t, e, i) {
    this.path = e, this.parsedPath = i || B.parseTrackName(e), this.node = B.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(t, e, i) {
    return t && t.isAnimationObjectGroup ? new B.Composite(t, e, i) : new B(t, e, i);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, "_").replace(vo, "");
  }
  static parseTrackName(t) {
    const e = Bo.exec(t);
    if (e === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + t);
    const i = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: e[2],
      objectName: e[3],
      objectIndex: e[4],
      propertyName: e[5],
      // required
      propertyIndex: e[6]
    }, s = i.nodeName && i.nodeName.lastIndexOf(".");
    if (s !== void 0 && s !== -1) {
      const n = i.nodeName.substring(s + 1);
      Eo.indexOf(n) !== -1 && (i.nodeName = i.nodeName.substring(0, s), i.objectName = n);
    }
    if (i.propertyName === null || i.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
    return i;
  }
  static findNode(t, e) {
    if (e === void 0 || e === "" || e === "." || e === -1 || e === t.name || e === t.uuid)
      return t;
    if (t.skeleton) {
      const i = t.skeleton.getBoneByName(e);
      if (i !== void 0)
        return i;
    }
    if (t.children) {
      const i = function(n) {
        for (let r = 0; r < n.length; r++) {
          const a = n[r];
          if (a.name === e || a.uuid === e)
            return a;
          const o = i(a.children);
          if (o) return o;
        }
        return null;
      }, s = i(t.children);
      if (s)
        return s;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(t, e) {
    t[e] = this.targetObject[this.propertyName];
  }
  _getValue_array(t, e) {
    const i = this.resolvedProperty;
    for (let s = 0, n = i.length; s !== n; ++s)
      t[e++] = i[s];
  }
  _getValue_arrayElement(t, e) {
    t[e] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(t, e) {
    this.resolvedProperty.toArray(t, e);
  }
  // Direct
  _setValue_direct(t, e) {
    this.targetObject[this.propertyName] = t[e];
  }
  _setValue_direct_setNeedsUpdate(t, e) {
    this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
    this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(t, e) {
    const i = this.resolvedProperty;
    for (let s = 0, n = i.length; s !== n; ++s)
      i[s] = t[e++];
  }
  _setValue_array_setNeedsUpdate(t, e) {
    const i = this.resolvedProperty;
    for (let s = 0, n = i.length; s !== n; ++s)
      i[s] = t[e++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
    const i = this.resolvedProperty;
    for (let s = 0, n = i.length; s !== n; ++s)
      i[s] = t[e++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e];
  }
  _setValue_arrayElement_setNeedsUpdate(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(t, e) {
    this.resolvedProperty.fromArray(t, e);
  }
  _setValue_fromArray_setNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(t, e) {
    this.bind(), this.getValue(t, e);
  }
  _setValue_unbound(t, e) {
    this.bind(), this.setValue(t, e);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let t = this.node;
    const e = this.parsedPath, i = e.objectName, s = e.propertyName;
    let n = e.propertyIndex;
    if (t || (t = B.findNode(this.rootNode, e.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (i) {
      let h = e.objectIndex;
      switch (i) {
        case "materials":
          if (!t.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          t = t.material.materials;
          break;
        case "bones":
          if (!t.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          t = t.skeleton.bones;
          for (let l = 0; l < t.length; l++)
            if (t[l].name === h) {
              h = l;
              break;
            }
          break;
        case "map":
          if ("map" in t) {
            t = t.map;
            break;
          }
          if (!t.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          t = t.material.map;
          break;
        default:
          if (t[i] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          t = t[i];
      }
      if (h !== void 0) {
        if (t[h] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
          return;
        }
        t = t[h];
      }
    }
    const r = t[s];
    if (r === void 0) {
      const h = e.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + h + "." + s + " but it wasn't found.", t);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = t, t.isMaterial === !0 ? a = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let o = this.BindingType.Direct;
    if (n !== void 0) {
      if (s === "morphTargetInfluences") {
        if (!t.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!t.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        t.morphTargetDictionary[n] !== void 0 && (n = t.morphTargetDictionary[n]);
      }
      o = this.BindingType.ArrayElement, this.resolvedProperty = r, this.propertyIndex = n;
    } else r.fromArray !== void 0 && r.toArray !== void 0 ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = r) : Array.isArray(r) ? (o = this.BindingType.EntireArray, this.resolvedProperty = r) : this.propertyName = s;
    this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
B.Composite = ko;
B.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
B.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
B.prototype.GetterByBindingType = [
  B.prototype._getValue_direct,
  B.prototype._getValue_array,
  B.prototype._getValue_arrayElement,
  B.prototype._getValue_toArray
];
B.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    B.prototype._setValue_direct,
    B.prototype._setValue_direct_setNeedsUpdate,
    B.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    B.prototype._setValue_array,
    B.prototype._setValue_array_setNeedsUpdate,
    B.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    B.prototype._setValue_arrayElement,
    B.prototype._setValue_arrayElement_setNeedsUpdate,
    B.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    B.prototype._setValue_fromArray,
    B.prototype._setValue_fromArray_setNeedsUpdate,
    B.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class Cl {
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
class Fl extends Ha {
  constructor(t, e = 16776960) {
    const i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), s = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], n = new ht();
    n.setIndex(new bt(i, 1)), n.setAttribute("position", new Y(s, 3)), super(n, new kn({ color: e, toneMapped: !1 })), this.box = t, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
  }
  updateMatrixWorld(t) {
    const e = this.box;
    e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(0.5), super.updateMatrixWorld(t));
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Bl extends le {
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
function El(c, t, e, i) {
  const s = Ro(i);
  switch (e) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case ir:
      return c * t;
    case nr:
      return c * t;
    case rr:
      return c * t * 2;
    case Sn:
      return c * t / s.components * s.byteLength;
    case ar:
      return c * t / s.components * s.byteLength;
    case or:
      return c * t * 2 / s.components * s.byteLength;
    case hr:
      return c * t * 2 / s.components * s.byteLength;
    case sr:
      return c * t * 3 / s.components * s.byteLength;
    case ss:
      return c * t * 4 / s.components * s.byteLength;
    case lr:
      return c * t * 4 / s.components * s.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case cr:
    case ur:
      return Math.floor((c + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case dr:
    case pr:
      return Math.floor((c + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case mr:
    case gr:
      return Math.max(c, 16) * Math.max(t, 8) / 4;
    case fr:
    case yr:
      return Math.max(c, 8) * Math.max(t, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case xr:
    case br:
      return Math.floor((c + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Mr:
      return Math.floor((c + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case wr:
      return Math.floor((c + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case _r:
      return Math.floor((c + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Sr:
      return Math.floor((c + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case vr:
      return Math.floor((c + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Ar:
      return Math.floor((c + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Tr:
      return Math.floor((c + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case zr:
      return Math.floor((c + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Cr:
      return Math.floor((c + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Fr:
      return Math.floor((c + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Br:
      return Math.floor((c + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Er:
      return Math.floor((c + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case kr:
      return Math.floor((c + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Rr:
      return Math.floor((c + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case Pr:
      return Math.floor((c + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case Ir:
    case Nr:
    case Or:
      return Math.ceil(c / 4) * Math.ceil(t / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case Dr:
    case Lr:
      return Math.ceil(c / 4) * Math.ceil(t / 4) * 8;
    case Vr:
    case Ur:
      return Math.ceil(c / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${e} format.`
  );
}
function Ro(c) {
  switch (c) {
    case wn:
    case Xn:
      return { byteLength: 1, components: 1 };
    case Yn:
    case jn:
    case $n:
      return { byteLength: 2, components: 1 };
    case Qn:
    case Kn:
      return { byteLength: 2, components: 4 };
    case _n:
    case Zn:
    case fi:
      return { byteLength: 4, components: 1 };
    case er:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${c}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: gn
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = gn);
export {
  Sh as ACESFilmicToneMapping,
  fs as AddEquation,
  xh as AddOperation,
  qo as AdditiveBlending,
  Ah as AgXToneMapping,
  ir as AlphaFormat,
  Gh as AlwaysCompare,
  uh as AlwaysDepth,
  zs as AlwaysStencilFunc,
  Sl as AmbientLight,
  gl as AnimationClip,
  Ga as ArcCurve,
  Tl as ArrayCamera,
  xs as AttachedBindMode,
  xn as BackSide,
  qr as BasicDepthPacking,
  Da as Bone,
  ue as BooleanKeyframeTrack,
  Rt as Box3,
  Fl as Box3Helper,
  rs as BoxGeometry,
  bt as BufferAttribute,
  ht as BufferGeometry,
  Xn as ByteType,
  Bt as Cache,
  zn as Camera,
  dl as CanvasTexture,
  Dn as CapsuleGeometry,
  Xa as CatmullRomCurve3,
  _h as CineonToneMapping,
  oe as ClampToEdgeWrapping,
  zl as Clock,
  J as Color,
  Un as ColorKeyframeTrack,
  $ as ColorManagement,
  hh as ConstantAlphaFactor,
  ah as ConstantColorFactor,
  Bl as Controls,
  Ra as CubeCamera,
  Gn as CubeReflectionMapping,
  zh as CubeRefractionMapping,
  Pa as CubeTexture,
  Bh as CubeUVReflectionMapping,
  Pn as CubicBezierCurve,
  eo as CubicBezierCurve3,
  lo as CubicInterpolant,
  Oo as CullFaceBack,
  Do as CullFaceFront,
  No as CullFaceNone,
  lt as Curve,
  no as CurvePath,
  Go as CustomBlending,
  vh as CustomToneMapping,
  el as Data3DTexture,
  tl as DataArrayTexture,
  Bn as DataTexture,
  go as DefaultLoadingManager,
  wi as DepthFormat,
  ws as DepthStencilFormat,
  pl as DepthTexture,
  Jn as DetachedBindMode,
  _l as DirectionalLight,
  uo as DiscreteInterpolant,
  Wo as DoubleSide,
  eh as DstAlphaFactor,
  sh as DstColorFactor,
  as as EllipseCurve,
  Uh as EqualCompare,
  ph as EqualDepth,
  Ch as EquirectangularReflectionMapping,
  Fh as EquirectangularRefractionMapping,
  kt as Euler,
  le as EventDispatcher,
  xl as FileLoader,
  Y as Float32BufferAttribute,
  fi as FloatType,
  Cn as Fog,
  Ki as FrontSide,
  qa as Frustum,
  Xh as GLSL3,
  qh as GreaterCompare,
  mh as GreaterDepth,
  Jh as GreaterEqualCompare,
  fh as GreaterEqualDepth,
  ul as Group,
  $n as HalfFloatType,
  Al as ImageBitmapLoader,
  bo as ImageLoader,
  la as ImageUtils,
  tn as InstancedBufferAttribute,
  hl as InstancedMesh,
  Zn as IntType,
  Ia as InterleavedBuffer,
  li as InterleavedBufferAttribute,
  xi as Interpolant,
  ai as InterpolateDiscrete,
  ts as InterpolateLinear,
  _i as InterpolateSmooth,
  Wt as KeepStencilOp,
  ct as KeyframeTrack,
  hs as LatheGeometry,
  ga as Layers,
  Vh as LessCompare,
  dh as LessDepth,
  Wh as LessEqualCompare,
  gs as LessEqualDepth,
  Mi as Light,
  Rn as Line,
  kn as LineBasicMaterial,
  In as LineCurve,
  io as LineCurve3,
  ll as LineLoop,
  Ha as LineSegments,
  ri as LinearFilter,
  co as LinearInterpolant,
  Mn as LinearMipmapLinearFilter,
  Rh as LinearMipmapNearestFilter,
  As as LinearSRGBColorSpace,
  Mh as LinearToneMapping,
  Ts as LinearTransfer,
  Fe as Loader,
  vl as LoaderUtils,
  yo as LoadingManager,
  rr as LuminanceAlphaFormat,
  nr as LuminanceFormat,
  Po as MOUSE,
  Pt as Material,
  jh as MathUtils,
  Mt as Matrix3,
  C as Matrix4,
  Zo as MaxEquation,
  yi as Mesh,
  Sa as MeshBasicMaterial,
  ml as MeshDepthMaterial,
  yl as MeshDistanceMaterial,
  fl as MeshPhysicalMaterial,
  ao as MeshStandardMaterial,
  Yo as MinEquation,
  Ms as MirroredRepeatWrapping,
  gh as MixOperation,
  Jo as MultiplyBlending,
  Hn as MultiplyOperation,
  Et as NearestFilter,
  kh as NearestMipmapLinearFilter,
  Eh as NearestMipmapNearestFilter,
  Th as NeutralToneMapping,
  Lh as NeverCompare,
  ch as NeverDepth,
  qn as NoBlending,
  vn as NoColorSpace,
  bh as NoToneMapping,
  Wr as NormalAnimationBlendMode,
  ps as NormalBlending,
  Hh as NotEqualCompare,
  yh as NotEqualDepth,
  di as NumberKeyframeTrack,
  E as Object3D,
  Dh as ObjectSpaceNormalMap,
  Qo as OneFactor,
  lh as OneMinusConstantAlphaFactor,
  oh as OneMinusConstantColorFactor,
  ih as OneMinusDstAlphaFactor,
  nh as OneMinusDstColorFactor,
  ys as OneMinusSrcAlphaFactor,
  th as OneMinusSrcColorFactor,
  _o as OrthographicCamera,
  Lo as PCFShadowMap,
  Vo as PCFSoftShadowMap,
  ro as Path,
  gt as PerspectiveCamera,
  ae as Plane,
  Ln as PlaneGeometry,
  wl as PointLight,
  cl as Points,
  Ja as PointsMaterial,
  B as PropertyBinding,
  Nn as QuadraticBezierCurve,
  so as QuadraticBezierCurve3,
  ce as Quaternion,
  bi as QuaternionKeyframeTrack,
  po as QuaternionLinearInterpolant,
  Ce as RAD2DEG,
  Vr as RED_GREEN_RGTC2_Format,
  Dr as RED_RGTC1_Format,
  gn as REVISION,
  Oh as RGBADepthPacking,
  ss as RGBAFormat,
  lr as RGBAIntegerFormat,
  kr as RGBA_ASTC_10x10_Format,
  Fr as RGBA_ASTC_10x5_Format,
  Br as RGBA_ASTC_10x6_Format,
  Er as RGBA_ASTC_10x8_Format,
  Rr as RGBA_ASTC_12x10_Format,
  Pr as RGBA_ASTC_12x12_Format,
  wr as RGBA_ASTC_4x4_Format,
  _r as RGBA_ASTC_5x4_Format,
  Sr as RGBA_ASTC_5x5_Format,
  vr as RGBA_ASTC_6x5_Format,
  Ar as RGBA_ASTC_6x6_Format,
  Tr as RGBA_ASTC_8x5_Format,
  zr as RGBA_ASTC_8x6_Format,
  Cr as RGBA_ASTC_8x8_Format,
  Ir as RGBA_BPTC_Format,
  Mr as RGBA_ETC2_EAC_Format,
  gr as RGBA_PVRTC_2BPPV1_Format,
  yr as RGBA_PVRTC_4BPPV1_Format,
  ur as RGBA_S3TC_DXT1_Format,
  dr as RGBA_S3TC_DXT3_Format,
  pr as RGBA_S3TC_DXT5_Format,
  sr as RGBFormat,
  Nr as RGB_BPTC_SIGNED_Format,
  Or as RGB_BPTC_UNSIGNED_Format,
  xr as RGB_ETC1_Format,
  br as RGB_ETC2_Format,
  mr as RGB_PVRTC_2BPPV1_Format,
  fr as RGB_PVRTC_4BPPV1_Format,
  cr as RGB_S3TC_DXT1_Format,
  or as RGFormat,
  hr as RGIntegerFormat,
  mi as Ray,
  Sn as RedFormat,
  ar as RedIntegerFormat,
  wh as ReinhardToneMapping,
  da as RenderTarget,
  bs as RepeatWrapping,
  jo as ReverseSubtractEquation,
  Ur as SIGNED_RED_GREEN_RGTC2_Format,
  Lr as SIGNED_RED_RGTC1_Format,
  it as SRGBColorSpace,
  Si as SRGBTransfer,
  rl as Scene,
  ka as ShaderMaterial,
  jn as ShortType,
  En as Skeleton,
  ol as SkinnedMesh,
  An as Source,
  wt as Sphere,
  Cl as Spherical,
  On as SplineCurve,
  Ml as SpotLight,
  al as Sprite,
  Na as SpriteMaterial,
  ms as SrcAlphaFactor,
  rh as SrcAlphaSaturateFactor,
  Ko as SrcColorFactor,
  es as StaticDrawUsage,
  de as StringKeyframeTrack,
  Xo as SubtractEquation,
  Ho as SubtractiveBlending,
  Io as TOUCH,
  Hr as TangentSpaceNormalMap,
  H as Texture,
  bl as TextureLoader,
  Q as Triangle,
  Nh as TriangleFanDrawMode,
  Ih as TriangleStripDrawMode,
  Ph as TrianglesDrawMode,
  bn as UVMapping,
  va as Uint16BufferAttribute,
  Aa as Uint32BufferAttribute,
  sl as UniformsUtils,
  wn as UnsignedByteType,
  tr as UnsignedInt248Type,
  er as UnsignedInt5999Type,
  _n as UnsignedIntType,
  Qn as UnsignedShort4444Type,
  Kn as UnsignedShort5551Type,
  Yn as UnsignedShortType,
  Uo as VSMShadowMap,
  S as Vector2,
  y as Vector3,
  L as Vector4,
  pi as VectorKeyframeTrack,
  Ft as WebGLCoordinateSystem,
  nl as WebGLCubeRenderTarget,
  pa as WebGLRenderTarget,
  oi as WebGPUCoordinateSystem,
  vs as WrapAroundEnding,
  _s as ZeroCurvatureEnding,
  $o as ZeroFactor,
  Ss as ZeroSlopeEnding,
  oa as arrayNeedsUint32,
  gi as cloneUniforms,
  Yh as createCanvasElement,
  hi as createElementNS,
  El as getByteLength,
  il as getUnlitUniformColorSpace,
  Ca as mergeUniforms,
  $h as probeAsync,
  Qh as toNormalizedProjectionMatrix,
  Kh as toReversedProjectionMatrix,
  Zh as warnOnce
};
