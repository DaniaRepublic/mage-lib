var c = Object.defineProperty;
var u = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var s = (r, e, t) => u(r, typeof e != "symbol" ? e + "" : e, t);
class i {
  constructor(e) {
    s(this, "root");
    s(this, "userData");
    this.userData = e;
  }
  translation() {
    return this.root.translation();
  }
  rotation() {
    return this.root.rotation();
  }
}
class n {
  constructor(e) {
    s(this, "root");
    s(this, "userData");
    this.userData = e;
  }
  translation() {
    return this.root.translation();
  }
  rotation() {
    return this.root.rotation();
  }
}
class l extends i {
  constructor(t, a) {
    super(a);
    s(this, "world");
    this.world = t;
  }
}
class b extends n {
  constructor(t, a) {
    super(a);
    s(this, "threeResourceManager");
    this.threeResourceManager = t;
  }
}
class h extends n {
  constructor(t, a, o) {
    super(o);
    s(this, "world");
    s(this, "threeResourceManager");
    this.world = t, this.threeResourceManager = a;
  }
}
class w extends l {
  constructor(e, t) {
    super(e, t);
  }
}
class j extends h {
  constructor(t, a, o) {
    super(t, a, o);
    s(this, "rendererRoot");
  }
}
export {
  i as GameObjectBase,
  n as GameObjectBaseClient,
  b as GameObjectDrawableBase,
  w as GameObjectNetworkedBase,
  j as GameObjectNetworkedBaseClient,
  l as GameObjectPhysicalBase,
  h as GameObjectPhysicalDrawableBase
};
