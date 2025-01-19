var n = Object.defineProperty;
var u = (r, t, e) => t in r ? n(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var s = (r, t, e) => u(r, typeof t != "symbol" ? t + "" : t, e);
class i {
  constructor(t) {
    s(this, "root");
    s(this, "userData");
    this.userData = t;
  }
  translation() {
    return this.root.translation();
  }
  rotation() {
    return this.root.rotation();
  }
}
class o {
  constructor(t) {
    s(this, "root");
    s(this, "userData");
    this.userData = t;
  }
  translation() {
    return this.root.translation();
  }
  rotation() {
    return this.root.rotation();
  }
}
class l extends i {
  constructor(e, a) {
    super(a);
    s(this, "world");
    this.world = e;
  }
}
class b extends o {
  constructor(e, a) {
    super(a);
    s(this, "threeResourceManager");
    this.threeResourceManager = e;
  }
}
class h extends o {
  constructor(e, a, c) {
    super(c);
    s(this, "world");
    s(this, "threeResourceManager");
    this.world = e, this.threeResourceManager = a;
  }
}
class w extends l {
  constructor(t, e) {
    super(t, e);
  }
}
class j extends h {
  constructor(t, e, a) {
    super(t, e, a);
  }
}
export {
  i as GameObjectBase,
  o as GameObjectBaseClient,
  b as GameObjectDrawableBase,
  w as GameObjectNetworkedBase,
  j as GameObjectNetworkedBaseClient,
  l as GameObjectPhysicalBase,
  h as GameObjectPhysicalDrawableBase
};
