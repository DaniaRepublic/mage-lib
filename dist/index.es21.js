import "./index.es17.js";
import { toTrianglesDrawMode as J } from "./index.es22.js";
import { Loader as Te, LoaderUtils as G, FileLoader as ce, Color as C, LinearSRGBColorSpace as w, SpotLight as Re, PointLight as xe, DirectionalLight as Ee, MeshBasicMaterial as H, SRGBColorSpace as B, MeshPhysicalMaterial as M, Vector2 as ue, Vector3 as F, InstancedMesh as _e, InstancedBufferAttribute as Le, Object3D as le, TextureLoader as Se, ImageBitmapLoader as Me, BufferAttribute as j, InterleavedBuffer as ye, LinearFilter as W, LinearMipmapLinearFilter as fe, RepeatWrapping as Y, NearestFilter as he, PointsMaterial as we, Material as K, LineBasicMaterial as be, MeshStandardMaterial as de, DoubleSide as Ne, PropertyBinding as Ie, BufferGeometry as Oe, SkinnedMesh as Ce, Mesh as Fe, LineSegments as De, Line as Pe, LineLoop as ke, Points as He, Group as V, PerspectiveCamera as Ge, MathUtils as Be, OrthographicCamera as ve, Skeleton as Ue, AnimationClip as je, Bone as Ke, InterpolateLinear as pe, ColorManagement as $, Matrix4 as v, Quaternion as me, NearestMipmapNearestFilter as Ve, LinearMipmapNearestFilter as Xe, NearestMipmapLinearFilter as ze, ClampToEdgeWrapping as qe, MirroredRepeatWrapping as We, InterpolateDiscrete as Ye, FrontSide as Qe, InterleavedBufferAttribute as Ze, Texture as ee, TriangleStripDrawMode as Je, TriangleFanDrawMode as $e, VectorKeyframeTrack as ne, NumberKeyframeTrack as te, QuaternionKeyframeTrack as se, Box3 as en, Sphere as nn, Interpolant as tn } from "./index.es15.js";
class Un extends Te {
  constructor(n) {
    super(n), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
      return new cn(e);
    }), this.register(function(e) {
      return new un(e);
    }), this.register(function(e) {
      return new Tn(e);
    }), this.register(function(e) {
      return new Rn(e);
    }), this.register(function(e) {
      return new xn(e);
    }), this.register(function(e) {
      return new fn(e);
    }), this.register(function(e) {
      return new hn(e);
    }), this.register(function(e) {
      return new dn(e);
    }), this.register(function(e) {
      return new pn(e);
    }), this.register(function(e) {
      return new an(e);
    }), this.register(function(e) {
      return new mn(e);
    }), this.register(function(e) {
      return new ln(e);
    }), this.register(function(e) {
      return new gn(e);
    }), this.register(function(e) {
      return new An(e);
    }), this.register(function(e) {
      return new rn(e);
    }), this.register(function(e) {
      return new En(e);
    }), this.register(function(e) {
      return new _n(e);
    });
  }
  load(n, e, r, t) {
    const s = this;
    let i;
    if (this.resourcePath !== "")
      i = this.resourcePath;
    else if (this.path !== "") {
      const c = G.extractUrlBase(n);
      i = G.resolveURL(c, this.path);
    } else
      i = G.extractUrlBase(n);
    this.manager.itemStart(n);
    const a = function(c) {
      t ? t(c) : console.error(c), s.manager.itemError(n), s.manager.itemEnd(n);
    }, o = new ce(this.manager);
    o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(n, function(c) {
      try {
        s.parse(c, i, function(l) {
          e(l), s.manager.itemEnd(n);
        }, a);
      } catch (l) {
        a(l);
      }
    }, r, a);
  }
  setDRACOLoader(n) {
    return this.dracoLoader = n, this;
  }
  setKTX2Loader(n) {
    return this.ktx2Loader = n, this;
  }
  setMeshoptDecoder(n) {
    return this.meshoptDecoder = n, this;
  }
  register(n) {
    return this.pluginCallbacks.indexOf(n) === -1 && this.pluginCallbacks.push(n), this;
  }
  unregister(n) {
    return this.pluginCallbacks.indexOf(n) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(n), 1), this;
  }
  parse(n, e, r, t) {
    let s;
    const i = {}, a = {}, o = new TextDecoder();
    if (typeof n == "string")
      s = JSON.parse(n);
    else if (n instanceof ArrayBuffer)
      if (o.decode(new Uint8Array(n, 0, 4)) === Ae) {
        try {
          i[A.KHR_BINARY_GLTF] = new Ln(n);
        } catch (u) {
          t && t(u);
          return;
        }
        s = JSON.parse(i[A.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(o.decode(n));
    else
      s = n;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      t && t(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new kn(s, {
      path: e || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let l = 0; l < this.pluginCallbacks.length; l++) {
      const u = this.pluginCallbacks[l](c);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[u.name] = u, i[u.name] = !0;
    }
    if (s.extensionsUsed)
      for (let l = 0; l < s.extensionsUsed.length; ++l) {
        const u = s.extensionsUsed[l], f = s.extensionsRequired || [];
        switch (u) {
          case A.KHR_MATERIALS_UNLIT:
            i[u] = new on();
            break;
          case A.KHR_DRACO_MESH_COMPRESSION:
            i[u] = new Sn(s, this.dracoLoader);
            break;
          case A.KHR_TEXTURE_TRANSFORM:
            i[u] = new Mn();
            break;
          case A.KHR_MESH_QUANTIZATION:
            i[u] = new yn();
            break;
          default:
            f.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    c.setExtensions(i), c.setPlugins(a), c.parse(r, t);
  }
  parseAsync(n, e) {
    const r = this;
    return new Promise(function(t, s) {
      r.parse(n, e, t, s);
    });
  }
}
function sn() {
  let h = {};
  return {
    get: function(n) {
      return h[n];
    },
    add: function(n, e) {
      h[n] = e;
    },
    remove: function(n) {
      delete h[n];
    },
    removeAll: function() {
      h = {};
    }
  };
}
const A = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class rn {
  constructor(n) {
    this.parser = n, this.name = A.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const n = this.parser, e = this.parser.json.nodes || [];
    for (let r = 0, t = e.length; r < t; r++) {
      const s = e[r];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && n._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(n) {
    const e = this.parser, r = "light:" + n;
    let t = e.cache.get(r);
    if (t) return t;
    const s = e.json, o = ((s.extensions && s.extensions[this.name] || {}).lights || [])[n];
    let c;
    const l = new C(16777215);
    o.color !== void 0 && l.setRGB(o.color[0], o.color[1], o.color[2], w);
    const u = o.range !== void 0 ? o.range : 0;
    switch (o.type) {
      case "directional":
        c = new Ee(l), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new xe(l), c.distance = u;
        break;
      case "spot":
        c = new Re(l), c.distance = u, o.spot = o.spot || {}, o.spot.innerConeAngle = o.spot.innerConeAngle !== void 0 ? o.spot.innerConeAngle : 0, o.spot.outerConeAngle = o.spot.outerConeAngle !== void 0 ? o.spot.outerConeAngle : Math.PI / 4, c.angle = o.spot.outerConeAngle, c.penumbra = 1 - o.spot.innerConeAngle / o.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + o.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, y(c, o), o.intensity !== void 0 && (c.intensity = o.intensity), c.name = e.createUniqueName(o.name || "light_" + n), t = Promise.resolve(c), e.cache.add(r, t), t;
  }
  getDependency(n, e) {
    if (n === "light")
      return this._loadLight(e);
  }
  createNodeAttachment(n) {
    const e = this, r = this.parser, s = r.json.nodes[n], a = (s.extensions && s.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(o) {
      return r._getNodeRef(e.cache, a, o);
    });
  }
}
class on {
  constructor() {
    this.name = A.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return H;
  }
  extendParams(n, e, r) {
    const t = [];
    n.color = new C(1, 1, 1), n.opacity = 1;
    const s = e.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const i = s.baseColorFactor;
        n.color.setRGB(i[0], i[1], i[2], w), n.opacity = i[3];
      }
      s.baseColorTexture !== void 0 && t.push(r.assignTexture(n, "map", s.baseColorTexture, B));
    }
    return Promise.all(t);
  }
}
class an {
  constructor(n) {
    this.parser = n, this.name = A.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(n, e) {
    const t = this.parser.json.materials[n];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = t.extensions[this.name].emissiveStrength;
    return s !== void 0 && (e.emissiveIntensity = s), Promise.resolve();
  }
}
class cn {
  constructor(n) {
    this.parser = n, this.name = A.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(n) {
    const r = this.parser.json.materials[n];
    return !r.extensions || !r.extensions[this.name] ? null : M;
  }
  extendMaterialParams(n, e) {
    const r = this.parser, t = r.json.materials[n];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [], i = t.extensions[this.name];
    if (i.clearcoatFactor !== void 0 && (e.clearcoat = i.clearcoatFactor), i.clearcoatTexture !== void 0 && s.push(r.assignTexture(e, "clearcoatMap", i.clearcoatTexture)), i.clearcoatRoughnessFactor !== void 0 && (e.clearcoatRoughness = i.clearcoatRoughnessFactor), i.clearcoatRoughnessTexture !== void 0 && s.push(r.assignTexture(e, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), i.clearcoatNormalTexture !== void 0 && (s.push(r.assignTexture(e, "clearcoatNormalMap", i.clearcoatNormalTexture)), i.clearcoatNormalTexture.scale !== void 0)) {
      const a = i.clearcoatNormalTexture.scale;
      e.clearcoatNormalScale = new ue(a, a);
    }
    return Promise.all(s);
  }
}
class un {
  constructor(n) {
    this.parser = n, this.name = A.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(n) {
    const r = this.parser.json.materials[n];
    return !r.extensions || !r.extensions[this.name] ? null : M;
  }
  extendMaterialParams(n, e) {
    const t = this.parser.json.materials[n];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = t.extensions[this.name];
    return e.dispersion = s.dispersion !== void 0 ? s.dispersion : 0, Promise.resolve();
  }
}
class ln {
  constructor(n) {
    this.parser = n, this.name = A.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(n) {
    const r = this.parser.json.materials[n];
    return !r.extensions || !r.extensions[this.name] ? null : M;
  }
  extendMaterialParams(n, e) {
    const r = this.parser, t = r.json.materials[n];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [], i = t.extensions[this.name];
    return i.iridescenceFactor !== void 0 && (e.iridescence = i.iridescenceFactor), i.iridescenceTexture !== void 0 && s.push(r.assignTexture(e, "iridescenceMap", i.iridescenceTexture)), i.iridescenceIor !== void 0 && (e.iridescenceIOR = i.iridescenceIor), e.iridescenceThicknessRange === void 0 && (e.iridescenceThicknessRange = [100, 400]), i.iridescenceThicknessMinimum !== void 0 && (e.iridescenceThicknessRange[0] = i.iridescenceThicknessMinimum), i.iridescenceThicknessMaximum !== void 0 && (e.iridescenceThicknessRange[1] = i.iridescenceThicknessMaximum), i.iridescenceThicknessTexture !== void 0 && s.push(r.assignTexture(e, "iridescenceThicknessMap", i.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class fn {
  constructor(n) {
    this.parser = n, this.name = A.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(n) {
    const r = this.parser.json.materials[n];
    return !r.extensions || !r.extensions[this.name] ? null : M;
  }
  extendMaterialParams(n, e) {
    const r = this.parser, t = r.json.materials[n];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [];
    e.sheenColor = new C(0, 0, 0), e.sheenRoughness = 0, e.sheen = 1;
    const i = t.extensions[this.name];
    if (i.sheenColorFactor !== void 0) {
      const a = i.sheenColorFactor;
      e.sheenColor.setRGB(a[0], a[1], a[2], w);
    }
    return i.sheenRoughnessFactor !== void 0 && (e.sheenRoughness = i.sheenRoughnessFactor), i.sheenColorTexture !== void 0 && s.push(r.assignTexture(e, "sheenColorMap", i.sheenColorTexture, B)), i.sheenRoughnessTexture !== void 0 && s.push(r.assignTexture(e, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(s);
  }
}
class hn {
  constructor(n) {
    this.parser = n, this.name = A.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(n) {
    const r = this.parser.json.materials[n];
    return !r.extensions || !r.extensions[this.name] ? null : M;
  }
  extendMaterialParams(n, e) {
    const r = this.parser, t = r.json.materials[n];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [], i = t.extensions[this.name];
    return i.transmissionFactor !== void 0 && (e.transmission = i.transmissionFactor), i.transmissionTexture !== void 0 && s.push(r.assignTexture(e, "transmissionMap", i.transmissionTexture)), Promise.all(s);
  }
}
class dn {
  constructor(n) {
    this.parser = n, this.name = A.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(n) {
    const r = this.parser.json.materials[n];
    return !r.extensions || !r.extensions[this.name] ? null : M;
  }
  extendMaterialParams(n, e) {
    const r = this.parser, t = r.json.materials[n];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [], i = t.extensions[this.name];
    e.thickness = i.thicknessFactor !== void 0 ? i.thicknessFactor : 0, i.thicknessTexture !== void 0 && s.push(r.assignTexture(e, "thicknessMap", i.thicknessTexture)), e.attenuationDistance = i.attenuationDistance || 1 / 0;
    const a = i.attenuationColor || [1, 1, 1];
    return e.attenuationColor = new C().setRGB(a[0], a[1], a[2], w), Promise.all(s);
  }
}
class pn {
  constructor(n) {
    this.parser = n, this.name = A.KHR_MATERIALS_IOR;
  }
  getMaterialType(n) {
    const r = this.parser.json.materials[n];
    return !r.extensions || !r.extensions[this.name] ? null : M;
  }
  extendMaterialParams(n, e) {
    const t = this.parser.json.materials[n];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = t.extensions[this.name];
    return e.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class mn {
  constructor(n) {
    this.parser = n, this.name = A.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(n) {
    const r = this.parser.json.materials[n];
    return !r.extensions || !r.extensions[this.name] ? null : M;
  }
  extendMaterialParams(n, e) {
    const r = this.parser, t = r.json.materials[n];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [], i = t.extensions[this.name];
    e.specularIntensity = i.specularFactor !== void 0 ? i.specularFactor : 1, i.specularTexture !== void 0 && s.push(r.assignTexture(e, "specularIntensityMap", i.specularTexture));
    const a = i.specularColorFactor || [1, 1, 1];
    return e.specularColor = new C().setRGB(a[0], a[1], a[2], w), i.specularColorTexture !== void 0 && s.push(r.assignTexture(e, "specularColorMap", i.specularColorTexture, B)), Promise.all(s);
  }
}
class An {
  constructor(n) {
    this.parser = n, this.name = A.EXT_MATERIALS_BUMP;
  }
  getMaterialType(n) {
    const r = this.parser.json.materials[n];
    return !r.extensions || !r.extensions[this.name] ? null : M;
  }
  extendMaterialParams(n, e) {
    const r = this.parser, t = r.json.materials[n];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [], i = t.extensions[this.name];
    return e.bumpScale = i.bumpFactor !== void 0 ? i.bumpFactor : 1, i.bumpTexture !== void 0 && s.push(r.assignTexture(e, "bumpMap", i.bumpTexture)), Promise.all(s);
  }
}
class gn {
  constructor(n) {
    this.parser = n, this.name = A.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(n) {
    const r = this.parser.json.materials[n];
    return !r.extensions || !r.extensions[this.name] ? null : M;
  }
  extendMaterialParams(n, e) {
    const r = this.parser, t = r.json.materials[n];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const s = [], i = t.extensions[this.name];
    return i.anisotropyStrength !== void 0 && (e.anisotropy = i.anisotropyStrength), i.anisotropyRotation !== void 0 && (e.anisotropyRotation = i.anisotropyRotation), i.anisotropyTexture !== void 0 && s.push(r.assignTexture(e, "anisotropyMap", i.anisotropyTexture)), Promise.all(s);
  }
}
class Tn {
  constructor(n) {
    this.parser = n, this.name = A.KHR_TEXTURE_BASISU;
  }
  loadTexture(n) {
    const e = this.parser, r = e.json, t = r.textures[n];
    if (!t.extensions || !t.extensions[this.name])
      return null;
    const s = t.extensions[this.name], i = e.options.ktx2Loader;
    if (!i) {
      if (r.extensionsRequired && r.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return e.loadTextureImage(n, s.source, i);
  }
}
class Rn {
  constructor(n) {
    this.parser = n, this.name = A.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(n) {
    const e = this.name, r = this.parser, t = r.json, s = t.textures[n];
    if (!s.extensions || !s.extensions[e])
      return null;
    const i = s.extensions[e], a = t.images[i.source];
    let o = r.textureLoader;
    if (a.uri) {
      const c = r.options.manager.getHandler(a.uri);
      c !== null && (o = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return r.loadTextureImage(n, i.source, o);
      if (t.extensionsRequired && t.extensionsRequired.indexOf(e) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return r.loadTexture(n);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(n) {
      const e = new Image();
      e.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", e.onload = e.onerror = function() {
        n(e.height === 1);
      };
    })), this.isSupported;
  }
}
class xn {
  constructor(n) {
    this.parser = n, this.name = A.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(n) {
    const e = this.name, r = this.parser, t = r.json, s = t.textures[n];
    if (!s.extensions || !s.extensions[e])
      return null;
    const i = s.extensions[e], a = t.images[i.source];
    let o = r.textureLoader;
    if (a.uri) {
      const c = r.options.manager.getHandler(a.uri);
      c !== null && (o = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return r.loadTextureImage(n, i.source, o);
      if (t.extensionsRequired && t.extensionsRequired.indexOf(e) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return r.loadTexture(n);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(n) {
      const e = new Image();
      e.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", e.onload = e.onerror = function() {
        n(e.height === 1);
      };
    })), this.isSupported;
  }
}
class En {
  constructor(n) {
    this.name = A.EXT_MESHOPT_COMPRESSION, this.parser = n;
  }
  loadBufferView(n) {
    const e = this.parser.json, r = e.bufferViews[n];
    if (r.extensions && r.extensions[this.name]) {
      const t = r.extensions[this.name], s = this.parser.getDependency("buffer", t.buffer), i = this.parser.options.meshoptDecoder;
      if (!i || !i.supported) {
        if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(a) {
        const o = t.byteOffset || 0, c = t.byteLength || 0, l = t.count, u = t.byteStride, f = new Uint8Array(a, o, c);
        return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(l, u, f, t.mode, t.filter).then(function(d) {
          return d.buffer;
        }) : i.ready.then(function() {
          const d = new ArrayBuffer(l * u);
          return i.decodeGltfBuffer(new Uint8Array(d), l, u, f, t.mode, t.filter), d;
        });
      });
    } else
      return null;
  }
}
class _n {
  constructor(n) {
    this.name = A.EXT_MESH_GPU_INSTANCING, this.parser = n;
  }
  createNodeMesh(n) {
    const e = this.parser.json, r = e.nodes[n];
    if (!r.extensions || !r.extensions[this.name] || r.mesh === void 0)
      return null;
    const t = e.meshes[r.mesh];
    for (const c of t.primitives)
      if (c.mode !== _.TRIANGLES && c.mode !== _.TRIANGLE_STRIP && c.mode !== _.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const i = r.extensions[this.name].attributes, a = [], o = {};
    for (const c in i)
      a.push(this.parser.getDependency("accessor", i[c]).then((l) => (o[c] = l, o[c])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(n)), Promise.all(a).then((c) => {
      const l = c.pop(), u = l.isGroup ? l.children : [l], f = c[0].count, d = [];
      for (const m of u) {
        const T = new v(), p = new F(), g = new me(), x = new F(1, 1, 1), E = new _e(m.geometry, m.material, f);
        for (let R = 0; R < f; R++)
          o.TRANSLATION && p.fromBufferAttribute(o.TRANSLATION, R), o.ROTATION && g.fromBufferAttribute(o.ROTATION, R), o.SCALE && x.fromBufferAttribute(o.SCALE, R), E.setMatrixAt(R, T.compose(p, g, x));
        for (const R in o)
          if (R === "_COLOR_0") {
            const S = o[R];
            E.instanceColor = new Le(S.array, S.itemSize, S.normalized);
          } else R !== "TRANSLATION" && R !== "ROTATION" && R !== "SCALE" && m.geometry.setAttribute(R, o[R]);
        le.prototype.copy.call(E, m), this.parser.assignFinalMaterial(E), d.push(E);
      }
      return l.isGroup ? (l.clear(), l.add(...d), l) : d[0];
    }));
  }
}
const Ae = "glTF", k = 12, re = { JSON: 1313821514, BIN: 5130562 };
class Ln {
  constructor(n) {
    this.name = A.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const e = new DataView(n, 0, k), r = new TextDecoder();
    if (this.header = {
      magic: r.decode(new Uint8Array(n.slice(0, 4))),
      version: e.getUint32(4, !0),
      length: e.getUint32(8, !0)
    }, this.header.magic !== Ae)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const t = this.header.length - k, s = new DataView(n, k);
    let i = 0;
    for (; i < t; ) {
      const a = s.getUint32(i, !0);
      i += 4;
      const o = s.getUint32(i, !0);
      if (i += 4, o === re.JSON) {
        const c = new Uint8Array(n, k + i, a);
        this.content = r.decode(c);
      } else if (o === re.BIN) {
        const c = k + i;
        this.body = n.slice(c, c + a);
      }
      i += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Sn {
  constructor(n, e) {
    if (!e)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = A.KHR_DRACO_MESH_COMPRESSION, this.json = n, this.dracoLoader = e, this.dracoLoader.preload();
  }
  decodePrimitive(n, e) {
    const r = this.json, t = this.dracoLoader, s = n.extensions[this.name].bufferView, i = n.extensions[this.name].attributes, a = {}, o = {}, c = {};
    for (const l in i) {
      const u = Q[l] || l.toLowerCase();
      a[u] = i[l];
    }
    for (const l in n.attributes) {
      const u = Q[l] || l.toLowerCase();
      if (i[l] !== void 0) {
        const f = r.accessors[n.attributes[l]], d = D[f.componentType];
        c[u] = d.name, o[u] = f.normalized === !0;
      }
    }
    return e.getDependency("bufferView", s).then(function(l) {
      return new Promise(function(u, f) {
        t.decodeDracoFile(l, function(d) {
          for (const m in d.attributes) {
            const T = d.attributes[m], p = o[m];
            p !== void 0 && (T.normalized = p);
          }
          u(d);
        }, a, c, w, f);
      });
    });
  }
}
class Mn {
  constructor() {
    this.name = A.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(n, e) {
    return (e.texCoord === void 0 || e.texCoord === n.channel) && e.offset === void 0 && e.rotation === void 0 && e.scale === void 0 || (n = n.clone(), e.texCoord !== void 0 && (n.channel = e.texCoord), e.offset !== void 0 && n.offset.fromArray(e.offset), e.rotation !== void 0 && (n.rotation = e.rotation), e.scale !== void 0 && n.repeat.fromArray(e.scale), n.needsUpdate = !0), n;
  }
}
class yn {
  constructor() {
    this.name = A.KHR_MESH_QUANTIZATION;
  }
}
class ge extends tn {
  constructor(n, e, r, t) {
    super(n, e, r, t);
  }
  copySampleValue_(n) {
    const e = this.resultBuffer, r = this.sampleValues, t = this.valueSize, s = n * t * 3 + t;
    for (let i = 0; i !== t; i++)
      e[i] = r[s + i];
    return e;
  }
  interpolate_(n, e, r, t) {
    const s = this.resultBuffer, i = this.sampleValues, a = this.valueSize, o = a * 2, c = a * 3, l = t - e, u = (r - e) / l, f = u * u, d = f * u, m = n * c, T = m - c, p = -2 * d + 3 * f, g = d - f, x = 1 - p, E = g - f + u;
    for (let R = 0; R !== a; R++) {
      const S = i[T + R + a], b = i[T + R + o] * l, L = i[m + R + a], P = i[m + R] * l;
      s[R] = x * S + E * b + p * L + g * P;
    }
    return s;
  }
}
const wn = new me();
class bn extends ge {
  interpolate_(n, e, r, t) {
    const s = super.interpolate_(n, e, r, t);
    return wn.fromArray(s).normalize().toArray(s), s;
  }
}
const _ = {
  FLOAT: 5126,
  //FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, D = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, ie = {
  9728: he,
  9729: W,
  9984: Ve,
  9985: Xe,
  9986: ze,
  9987: fe
}, oe = {
  33071: qe,
  33648: We,
  10497: Y
}, X = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Q = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, I = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Nn = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: pe,
  STEP: Ye
}, z = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function In(h) {
  return h.DefaultMaterial === void 0 && (h.DefaultMaterial = new de({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Qe
  })), h.DefaultMaterial;
}
function O(h, n, e) {
  for (const r in e.extensions)
    h[r] === void 0 && (n.userData.gltfExtensions = n.userData.gltfExtensions || {}, n.userData.gltfExtensions[r] = e.extensions[r]);
}
function y(h, n) {
  n.extras !== void 0 && (typeof n.extras == "object" ? Object.assign(h.userData, n.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + n.extras));
}
function On(h, n, e) {
  let r = !1, t = !1, s = !1;
  for (let c = 0, l = n.length; c < l; c++) {
    const u = n[c];
    if (u.POSITION !== void 0 && (r = !0), u.NORMAL !== void 0 && (t = !0), u.COLOR_0 !== void 0 && (s = !0), r && t && s) break;
  }
  if (!r && !t && !s) return Promise.resolve(h);
  const i = [], a = [], o = [];
  for (let c = 0, l = n.length; c < l; c++) {
    const u = n[c];
    if (r) {
      const f = u.POSITION !== void 0 ? e.getDependency("accessor", u.POSITION) : h.attributes.position;
      i.push(f);
    }
    if (t) {
      const f = u.NORMAL !== void 0 ? e.getDependency("accessor", u.NORMAL) : h.attributes.normal;
      a.push(f);
    }
    if (s) {
      const f = u.COLOR_0 !== void 0 ? e.getDependency("accessor", u.COLOR_0) : h.attributes.color;
      o.push(f);
    }
  }
  return Promise.all([
    Promise.all(i),
    Promise.all(a),
    Promise.all(o)
  ]).then(function(c) {
    const l = c[0], u = c[1], f = c[2];
    return r && (h.morphAttributes.position = l), t && (h.morphAttributes.normal = u), s && (h.morphAttributes.color = f), h.morphTargetsRelative = !0, h;
  });
}
function Cn(h, n) {
  if (h.updateMorphTargets(), n.weights !== void 0)
    for (let e = 0, r = n.weights.length; e < r; e++)
      h.morphTargetInfluences[e] = n.weights[e];
  if (n.extras && Array.isArray(n.extras.targetNames)) {
    const e = n.extras.targetNames;
    if (h.morphTargetInfluences.length === e.length) {
      h.morphTargetDictionary = {};
      for (let r = 0, t = e.length; r < t; r++)
        h.morphTargetDictionary[e[r]] = r;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Fn(h) {
  let n;
  const e = h.extensions && h.extensions[A.KHR_DRACO_MESH_COMPRESSION];
  if (e ? n = "draco:" + e.bufferView + ":" + e.indices + ":" + q(e.attributes) : n = h.indices + ":" + q(h.attributes) + ":" + h.mode, h.targets !== void 0)
    for (let r = 0, t = h.targets.length; r < t; r++)
      n += ":" + q(h.targets[r]);
  return n;
}
function q(h) {
  let n = "";
  const e = Object.keys(h).sort();
  for (let r = 0, t = e.length; r < t; r++)
    n += e[r] + ":" + h[e[r]] + ";";
  return n;
}
function Z(h) {
  switch (h) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Dn(h) {
  return h.search(/\.jpe?g($|\?)/i) > 0 || h.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : h.search(/\.webp($|\?)/i) > 0 || h.search(/^data\:image\/webp/) === 0 ? "image/webp" : h.search(/\.ktx2($|\?)/i) > 0 || h.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const Pn = new v();
class kn {
  constructor(n = {}, e = {}) {
    this.json = n, this.extensions = {}, this.plugins = {}, this.options = e, this.cache = new sn(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let r = !1, t = -1, s = !1, i = -1;
    if (typeof navigator < "u") {
      const a = navigator.userAgent;
      r = /^((?!chrome|android).)*safari/i.test(a) === !0;
      const o = a.match(/Version\/(\d+)/);
      t = r && o ? parseInt(o[1], 10) : -1, s = a.indexOf("Firefox") > -1, i = s ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || r && t < 17 || s && i < 98 ? this.textureLoader = new Se(this.options.manager) : this.textureLoader = new Me(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new ce(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(n) {
    this.extensions = n;
  }
  setPlugins(n) {
    this.plugins = n;
  }
  parse(n, e) {
    const r = this, t = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(i) {
      return i._markDefs && i._markDefs();
    }), Promise.all(this._invokeAll(function(i) {
      return i.beforeRoot && i.beforeRoot();
    })).then(function() {
      return Promise.all([
        r.getDependencies("scene"),
        r.getDependencies("animation"),
        r.getDependencies("camera")
      ]);
    }).then(function(i) {
      const a = {
        scene: i[0][t.scene || 0],
        scenes: i[0],
        animations: i[1],
        cameras: i[2],
        asset: t.asset,
        parser: r,
        userData: {}
      };
      return O(s, a, t), y(a, t), Promise.all(r._invokeAll(function(o) {
        return o.afterRoot && o.afterRoot(a);
      })).then(function() {
        for (const o of a.scenes)
          o.updateMatrixWorld();
        n(a);
      });
    }).catch(e);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const n = this.json.nodes || [], e = this.json.skins || [], r = this.json.meshes || [];
    for (let t = 0, s = e.length; t < s; t++) {
      const i = e[t].joints;
      for (let a = 0, o = i.length; a < o; a++)
        n[i[a]].isBone = !0;
    }
    for (let t = 0, s = n.length; t < s; t++) {
      const i = n[t];
      i.mesh !== void 0 && (this._addNodeRef(this.meshCache, i.mesh), i.skin !== void 0 && (r[i.mesh].isSkinnedMesh = !0)), i.camera !== void 0 && this._addNodeRef(this.cameraCache, i.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   *
   * @param {Object} cache
   * @param {Object3D} index
   */
  _addNodeRef(n, e) {
    e !== void 0 && (n.refs[e] === void 0 && (n.refs[e] = n.uses[e] = 0), n.refs[e]++);
  }
  /**
   * Returns a reference to a shared resource, cloning it if necessary.
   *
   * @param {Object} cache
   * @param {Number} index
   * @param {Object} object
   * @return {Object}
   */
  _getNodeRef(n, e, r) {
    if (n.refs[e] <= 1) return r;
    const t = r.clone(), s = (i, a) => {
      const o = this.associations.get(i);
      o != null && this.associations.set(a, o);
      for (const [c, l] of i.children.entries())
        s(l, a.children[c]);
    };
    return s(r, t), t.name += "_instance_" + n.uses[e]++, t;
  }
  _invokeOne(n) {
    const e = Object.values(this.plugins);
    e.push(this);
    for (let r = 0; r < e.length; r++) {
      const t = n(e[r]);
      if (t) return t;
    }
    return null;
  }
  _invokeAll(n) {
    const e = Object.values(this.plugins);
    e.unshift(this);
    const r = [];
    for (let t = 0; t < e.length; t++) {
      const s = n(e[t]);
      s && r.push(s);
    }
    return r;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(n, e) {
    const r = n + ":" + e;
    let t = this.cache.get(r);
    if (!t) {
      switch (n) {
        case "scene":
          t = this.loadScene(e);
          break;
        case "node":
          t = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(e);
          });
          break;
        case "mesh":
          t = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(e);
          });
          break;
        case "accessor":
          t = this.loadAccessor(e);
          break;
        case "bufferView":
          t = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(e);
          });
          break;
        case "buffer":
          t = this.loadBuffer(e);
          break;
        case "material":
          t = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(e);
          });
          break;
        case "texture":
          t = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(e);
          });
          break;
        case "skin":
          t = this.loadSkin(e);
          break;
        case "animation":
          t = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(e);
          });
          break;
        case "camera":
          t = this.loadCamera(e);
          break;
        default:
          if (t = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(n, e);
          }), !t)
            throw new Error("Unknown type: " + n);
          break;
      }
      this.cache.add(r, t);
    }
    return t;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(n) {
    let e = this.cache.get(n);
    if (!e) {
      const r = this, t = this.json[n + (n === "mesh" ? "es" : "s")] || [];
      e = Promise.all(t.map(function(s, i) {
        return r.getDependency(n, i);
      })), this.cache.add(n, e);
    }
    return e;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(n) {
    const e = this.json.buffers[n], r = this.fileLoader;
    if (e.type && e.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + e.type + " buffer type is not supported.");
    if (e.uri === void 0 && n === 0)
      return Promise.resolve(this.extensions[A.KHR_BINARY_GLTF].body);
    const t = this.options;
    return new Promise(function(s, i) {
      r.load(G.resolveURL(e.uri, t.path), s, void 0, function() {
        i(new Error('THREE.GLTFLoader: Failed to load buffer "' + e.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(n) {
    const e = this.json.bufferViews[n];
    return this.getDependency("buffer", e.buffer).then(function(r) {
      const t = e.byteLength || 0, s = e.byteOffset || 0;
      return r.slice(s, s + t);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(n) {
    const e = this, r = this.json, t = this.json.accessors[n];
    if (t.bufferView === void 0 && t.sparse === void 0) {
      const i = X[t.type], a = D[t.componentType], o = t.normalized === !0, c = new a(t.count * i);
      return Promise.resolve(new j(c, i, o));
    }
    const s = [];
    return t.bufferView !== void 0 ? s.push(this.getDependency("bufferView", t.bufferView)) : s.push(null), t.sparse !== void 0 && (s.push(this.getDependency("bufferView", t.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", t.sparse.values.bufferView))), Promise.all(s).then(function(i) {
      const a = i[0], o = X[t.type], c = D[t.componentType], l = c.BYTES_PER_ELEMENT, u = l * o, f = t.byteOffset || 0, d = t.bufferView !== void 0 ? r.bufferViews[t.bufferView].byteStride : void 0, m = t.normalized === !0;
      let T, p;
      if (d && d !== u) {
        const g = Math.floor(f / d), x = "InterleavedBuffer:" + t.bufferView + ":" + t.componentType + ":" + g + ":" + t.count;
        let E = e.cache.get(x);
        E || (T = new c(a, g * d, t.count * d / l), E = new ye(T, d / l), e.cache.add(x, E)), p = new Ze(E, o, f % d / l, m);
      } else
        a === null ? T = new c(t.count * o) : T = new c(a, f, t.count * o), p = new j(T, o, m);
      if (t.sparse !== void 0) {
        const g = X.SCALAR, x = D[t.sparse.indices.componentType], E = t.sparse.indices.byteOffset || 0, R = t.sparse.values.byteOffset || 0, S = new x(i[1], E, t.sparse.count * g), b = new c(i[2], R, t.sparse.count * o);
        a !== null && (p = new j(p.array.slice(), p.itemSize, p.normalized)), p.normalized = !1;
        for (let L = 0, P = S.length; L < P; L++) {
          const N = S[L];
          if (p.setX(N, b[L * o]), o >= 2 && p.setY(N, b[L * o + 1]), o >= 3 && p.setZ(N, b[L * o + 2]), o >= 4 && p.setW(N, b[L * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        p.normalized = m;
      }
      return p;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(n) {
    const e = this.json, r = this.options, s = e.textures[n].source, i = e.images[s];
    let a = this.textureLoader;
    if (i.uri) {
      const o = r.manager.getHandler(i.uri);
      o !== null && (a = o);
    }
    return this.loadTextureImage(n, s, a);
  }
  loadTextureImage(n, e, r) {
    const t = this, s = this.json, i = s.textures[n], a = s.images[e], o = (a.uri || a.bufferView) + ":" + i.sampler;
    if (this.textureCache[o])
      return this.textureCache[o];
    const c = this.loadImageSource(e, r).then(function(l) {
      l.flipY = !1, l.name = i.name || a.name || "", l.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (l.name = a.uri);
      const f = (s.samplers || {})[i.sampler] || {};
      return l.magFilter = ie[f.magFilter] || W, l.minFilter = ie[f.minFilter] || fe, l.wrapS = oe[f.wrapS] || Y, l.wrapT = oe[f.wrapT] || Y, l.generateMipmaps = !l.isCompressedTexture && l.minFilter !== he && l.minFilter !== W, t.associations.set(l, { textures: n }), l;
    }).catch(function() {
      return null;
    });
    return this.textureCache[o] = c, c;
  }
  loadImageSource(n, e) {
    const r = this, t = this.json, s = this.options;
    if (this.sourceCache[n] !== void 0)
      return this.sourceCache[n].then((u) => u.clone());
    const i = t.images[n], a = self.URL || self.webkitURL;
    let o = i.uri || "", c = !1;
    if (i.bufferView !== void 0)
      o = r.getDependency("bufferView", i.bufferView).then(function(u) {
        c = !0;
        const f = new Blob([u], { type: i.mimeType });
        return o = a.createObjectURL(f), o;
      });
    else if (i.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + n + " is missing URI and bufferView");
    const l = Promise.resolve(o).then(function(u) {
      return new Promise(function(f, d) {
        let m = f;
        e.isImageBitmapLoader === !0 && (m = function(T) {
          const p = new ee(T);
          p.needsUpdate = !0, f(p);
        }), e.load(G.resolveURL(u, s.path), m, void 0, d);
      });
    }).then(function(u) {
      return c === !0 && a.revokeObjectURL(o), y(u, i), u.userData.mimeType = i.mimeType || Dn(i.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", o), u;
    });
    return this.sourceCache[n] = l, l;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   *
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @param {string} colorSpace
   * @return {Promise<Texture>}
   */
  assignTexture(n, e, r, t) {
    const s = this;
    return this.getDependency("texture", r.index).then(function(i) {
      if (!i) return null;
      if (r.texCoord !== void 0 && r.texCoord > 0 && (i = i.clone(), i.channel = r.texCoord), s.extensions[A.KHR_TEXTURE_TRANSFORM]) {
        const a = r.extensions !== void 0 ? r.extensions[A.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const o = s.associations.get(i);
          i = s.extensions[A.KHR_TEXTURE_TRANSFORM].extendTexture(i, a), s.associations.set(i, o);
        }
      }
      return t !== void 0 && (i.colorSpace = t), n[e] = i, i;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(n) {
    const e = n.geometry;
    let r = n.material;
    const t = e.attributes.tangent === void 0, s = e.attributes.color !== void 0, i = e.attributes.normal === void 0;
    if (n.isPoints) {
      const a = "PointsMaterial:" + r.uuid;
      let o = this.cache.get(a);
      o || (o = new we(), K.prototype.copy.call(o, r), o.color.copy(r.color), o.map = r.map, o.sizeAttenuation = !1, this.cache.add(a, o)), r = o;
    } else if (n.isLine) {
      const a = "LineBasicMaterial:" + r.uuid;
      let o = this.cache.get(a);
      o || (o = new be(), K.prototype.copy.call(o, r), o.color.copy(r.color), o.map = r.map, this.cache.add(a, o)), r = o;
    }
    if (t || s || i) {
      let a = "ClonedMaterial:" + r.uuid + ":";
      t && (a += "derivative-tangents:"), s && (a += "vertex-colors:"), i && (a += "flat-shading:");
      let o = this.cache.get(a);
      o || (o = r.clone(), s && (o.vertexColors = !0), i && (o.flatShading = !0), t && (o.normalScale && (o.normalScale.y *= -1), o.clearcoatNormalScale && (o.clearcoatNormalScale.y *= -1)), this.cache.add(a, o), this.associations.set(o, this.associations.get(r))), r = o;
    }
    n.material = r;
  }
  getMaterialType() {
    return de;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(n) {
    const e = this, r = this.json, t = this.extensions, s = r.materials[n];
    let i;
    const a = {}, o = s.extensions || {}, c = [];
    if (o[A.KHR_MATERIALS_UNLIT]) {
      const u = t[A.KHR_MATERIALS_UNLIT];
      i = u.getMaterialType(), c.push(u.extendParams(a, s, e));
    } else {
      const u = s.pbrMetallicRoughness || {};
      if (a.color = new C(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const f = u.baseColorFactor;
        a.color.setRGB(f[0], f[1], f[2], w), a.opacity = f[3];
      }
      u.baseColorTexture !== void 0 && c.push(e.assignTexture(a, "map", u.baseColorTexture, B)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(e.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), c.push(e.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), i = this._invokeOne(function(f) {
        return f.getMaterialType && f.getMaterialType(n);
      }), c.push(Promise.all(this._invokeAll(function(f) {
        return f.extendMaterialParams && f.extendMaterialParams(n, a);
      })));
    }
    s.doubleSided === !0 && (a.side = Ne);
    const l = s.alphaMode || z.OPAQUE;
    if (l === z.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, l === z.MASK && (a.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && i !== H && (c.push(e.assignTexture(a, "normalMap", s.normalTexture)), a.normalScale = new ue(1, 1), s.normalTexture.scale !== void 0)) {
      const u = s.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    if (s.occlusionTexture !== void 0 && i !== H && (c.push(e.assignTexture(a, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && i !== H) {
      const u = s.emissiveFactor;
      a.emissive = new C().setRGB(u[0], u[1], u[2], w);
    }
    return s.emissiveTexture !== void 0 && i !== H && c.push(e.assignTexture(a, "emissiveMap", s.emissiveTexture, B)), Promise.all(c).then(function() {
      const u = new i(a);
      return s.name && (u.name = s.name), y(u, s), e.associations.set(u, { materials: n }), s.extensions && O(t, u, s), u;
    });
  }
  /**
   * When Object3D instances are targeted by animation, they need unique names.
   *
   * @param {String} originalName
   * @return {String}
   */
  createUniqueName(n) {
    const e = Ie.sanitizeNodeName(n || "");
    return e in this.nodeNamesUsed ? e + "_" + ++this.nodeNamesUsed[e] : (this.nodeNamesUsed[e] = 0, e);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(n) {
    const e = this, r = this.extensions, t = this.primitiveCache;
    function s(a) {
      return r[A.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, e).then(function(o) {
        return ae(o, a, e);
      });
    }
    const i = [];
    for (let a = 0, o = n.length; a < o; a++) {
      const c = n[a], l = Fn(c), u = t[l];
      if (u)
        i.push(u.promise);
      else {
        let f;
        c.extensions && c.extensions[A.KHR_DRACO_MESH_COMPRESSION] ? f = s(c) : f = ae(new Oe(), c, e), t[l] = { primitive: c, promise: f }, i.push(f);
      }
    }
    return Promise.all(i);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(n) {
    const e = this, r = this.json, t = this.extensions, s = r.meshes[n], i = s.primitives, a = [];
    for (let o = 0, c = i.length; o < c; o++) {
      const l = i[o].material === void 0 ? In(this.cache) : this.getDependency("material", i[o].material);
      a.push(l);
    }
    return a.push(e.loadGeometries(i)), Promise.all(a).then(function(o) {
      const c = o.slice(0, o.length - 1), l = o[o.length - 1], u = [];
      for (let d = 0, m = l.length; d < m; d++) {
        const T = l[d], p = i[d];
        let g;
        const x = c[d];
        if (p.mode === _.TRIANGLES || p.mode === _.TRIANGLE_STRIP || p.mode === _.TRIANGLE_FAN || p.mode === void 0)
          g = s.isSkinnedMesh === !0 ? new Ce(T, x) : new Fe(T, x), g.isSkinnedMesh === !0 && g.normalizeSkinWeights(), p.mode === _.TRIANGLE_STRIP ? g.geometry = J(g.geometry, Je) : p.mode === _.TRIANGLE_FAN && (g.geometry = J(g.geometry, $e));
        else if (p.mode === _.LINES)
          g = new De(T, x);
        else if (p.mode === _.LINE_STRIP)
          g = new Pe(T, x);
        else if (p.mode === _.LINE_LOOP)
          g = new ke(T, x);
        else if (p.mode === _.POINTS)
          g = new He(T, x);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(g.geometry.morphAttributes).length > 0 && Cn(g, s), g.name = e.createUniqueName(s.name || "mesh_" + n), y(g, s), p.extensions && O(t, g, p), e.assignFinalMaterial(g), u.push(g);
      }
      for (let d = 0, m = u.length; d < m; d++)
        e.associations.set(u[d], {
          meshes: n,
          primitives: d
        });
      if (u.length === 1)
        return s.extensions && O(t, u[0], s), u[0];
      const f = new V();
      s.extensions && O(t, f, s), e.associations.set(f, { meshes: n });
      for (let d = 0, m = u.length; d < m; d++)
        f.add(u[d]);
      return f;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(n) {
    let e;
    const r = this.json.cameras[n], t = r[r.type];
    if (!t) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return r.type === "perspective" ? e = new Ge(Be.radToDeg(t.yfov), t.aspectRatio || 1, t.znear || 1, t.zfar || 2e6) : r.type === "orthographic" && (e = new ve(-t.xmag, t.xmag, t.ymag, -t.ymag, t.znear, t.zfar)), r.name && (e.name = this.createUniqueName(r.name)), y(e, r), Promise.resolve(e);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(n) {
    const e = this.json.skins[n], r = [];
    for (let t = 0, s = e.joints.length; t < s; t++)
      r.push(this._loadNodeShallow(e.joints[t]));
    return e.inverseBindMatrices !== void 0 ? r.push(this.getDependency("accessor", e.inverseBindMatrices)) : r.push(null), Promise.all(r).then(function(t) {
      const s = t.pop(), i = t, a = [], o = [];
      for (let c = 0, l = i.length; c < l; c++) {
        const u = i[c];
        if (u) {
          a.push(u);
          const f = new v();
          s !== null && f.fromArray(s.array, c * 16), o.push(f);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', e.joints[c]);
      }
      return new Ue(a, o);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(n) {
    const e = this.json, r = this, t = e.animations[n], s = t.name ? t.name : "animation_" + n, i = [], a = [], o = [], c = [], l = [];
    for (let u = 0, f = t.channels.length; u < f; u++) {
      const d = t.channels[u], m = t.samplers[d.sampler], T = d.target, p = T.node, g = t.parameters !== void 0 ? t.parameters[m.input] : m.input, x = t.parameters !== void 0 ? t.parameters[m.output] : m.output;
      T.node !== void 0 && (i.push(this.getDependency("node", p)), a.push(this.getDependency("accessor", g)), o.push(this.getDependency("accessor", x)), c.push(m), l.push(T));
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(a),
      Promise.all(o),
      Promise.all(c),
      Promise.all(l)
    ]).then(function(u) {
      const f = u[0], d = u[1], m = u[2], T = u[3], p = u[4], g = [];
      for (let x = 0, E = f.length; x < E; x++) {
        const R = f[x], S = d[x], b = m[x], L = T[x], P = p[x];
        if (R === void 0) continue;
        R.updateMatrix && R.updateMatrix();
        const N = r._createAnimationTracks(R, S, b, L, P);
        if (N)
          for (let U = 0; U < N.length; U++)
            g.push(N[U]);
      }
      return new je(s, void 0, g);
    });
  }
  createNodeMesh(n) {
    const e = this.json, r = this, t = e.nodes[n];
    return t.mesh === void 0 ? null : r.getDependency("mesh", t.mesh).then(function(s) {
      const i = r._getNodeRef(r.meshCache, t.mesh, s);
      return t.weights !== void 0 && i.traverse(function(a) {
        if (a.isMesh)
          for (let o = 0, c = t.weights.length; o < c; o++)
            a.morphTargetInfluences[o] = t.weights[o];
      }), i;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(n) {
    const e = this.json, r = this, t = e.nodes[n], s = r._loadNodeShallow(n), i = [], a = t.children || [];
    for (let c = 0, l = a.length; c < l; c++)
      i.push(r.getDependency("node", a[c]));
    const o = t.skin === void 0 ? Promise.resolve(null) : r.getDependency("skin", t.skin);
    return Promise.all([
      s,
      Promise.all(i),
      o
    ]).then(function(c) {
      const l = c[0], u = c[1], f = c[2];
      f !== null && l.traverse(function(d) {
        d.isSkinnedMesh && d.bind(f, Pn);
      });
      for (let d = 0, m = u.length; d < m; d++)
        l.add(u[d]);
      return l;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(n) {
    const e = this.json, r = this.extensions, t = this;
    if (this.nodeCache[n] !== void 0)
      return this.nodeCache[n];
    const s = e.nodes[n], i = s.name ? t.createUniqueName(s.name) : "", a = [], o = t._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(n);
    });
    return o && a.push(o), s.camera !== void 0 && a.push(t.getDependency("camera", s.camera).then(function(c) {
      return t._getNodeRef(t.cameraCache, s.camera, c);
    })), t._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(n);
    }).forEach(function(c) {
      a.push(c);
    }), this.nodeCache[n] = Promise.all(a).then(function(c) {
      let l;
      if (s.isBone === !0 ? l = new Ke() : c.length > 1 ? l = new V() : c.length === 1 ? l = c[0] : l = new le(), l !== c[0])
        for (let u = 0, f = c.length; u < f; u++)
          l.add(c[u]);
      if (s.name && (l.userData.name = s.name, l.name = i), y(l, s), s.extensions && O(r, l, s), s.matrix !== void 0) {
        const u = new v();
        u.fromArray(s.matrix), l.applyMatrix4(u);
      } else
        s.translation !== void 0 && l.position.fromArray(s.translation), s.rotation !== void 0 && l.quaternion.fromArray(s.rotation), s.scale !== void 0 && l.scale.fromArray(s.scale);
      return t.associations.has(l) || t.associations.set(l, {}), t.associations.get(l).nodes = n, l;
    }), this.nodeCache[n];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(n) {
    const e = this.extensions, r = this.json.scenes[n], t = this, s = new V();
    r.name && (s.name = t.createUniqueName(r.name)), y(s, r), r.extensions && O(e, s, r);
    const i = r.nodes || [], a = [];
    for (let o = 0, c = i.length; o < c; o++)
      a.push(t.getDependency("node", i[o]));
    return Promise.all(a).then(function(o) {
      for (let l = 0, u = o.length; l < u; l++)
        s.add(o[l]);
      const c = (l) => {
        const u = /* @__PURE__ */ new Map();
        for (const [f, d] of t.associations)
          (f instanceof K || f instanceof ee) && u.set(f, d);
        return l.traverse((f) => {
          const d = t.associations.get(f);
          d != null && u.set(f, d);
        }), u;
      };
      return t.associations = c(s), s;
    });
  }
  _createAnimationTracks(n, e, r, t, s) {
    const i = [], a = n.name ? n.name : n.uuid, o = [];
    I[s.path] === I.weights ? n.traverse(function(f) {
      f.morphTargetInfluences && o.push(f.name ? f.name : f.uuid);
    }) : o.push(a);
    let c;
    switch (I[s.path]) {
      case I.weights:
        c = te;
        break;
      case I.rotation:
        c = se;
        break;
      case I.position:
      case I.scale:
        c = ne;
        break;
      default:
        switch (r.itemSize) {
          case 1:
            c = te;
            break;
          case 2:
          case 3:
          default:
            c = ne;
            break;
        }
        break;
    }
    const l = t.interpolation !== void 0 ? Nn[t.interpolation] : pe, u = this._getArrayFromAccessor(r);
    for (let f = 0, d = o.length; f < d; f++) {
      const m = new c(
        o[f] + "." + I[s.path],
        e.array,
        u,
        l
      );
      t.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(m), i.push(m);
    }
    return i;
  }
  _getArrayFromAccessor(n) {
    let e = n.array;
    if (n.normalized) {
      const r = Z(e.constructor), t = new Float32Array(e.length);
      for (let s = 0, i = e.length; s < i; s++)
        t[s] = e[s] * r;
      e = t;
    }
    return e;
  }
  _createCubicSplineTrackInterpolant(n) {
    n.createInterpolant = function(r) {
      const t = this instanceof se ? bn : ge;
      return new t(this.times, this.values, this.getValueSize() / 3, r);
    }, n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Hn(h, n, e) {
  const r = n.attributes, t = new en();
  if (r.POSITION !== void 0) {
    const a = e.json.accessors[r.POSITION], o = a.min, c = a.max;
    if (o !== void 0 && c !== void 0) {
      if (t.set(
        new F(o[0], o[1], o[2]),
        new F(c[0], c[1], c[2])
      ), a.normalized) {
        const l = Z(D[a.componentType]);
        t.min.multiplyScalar(l), t.max.multiplyScalar(l);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = n.targets;
  if (s !== void 0) {
    const a = new F(), o = new F();
    for (let c = 0, l = s.length; c < l; c++) {
      const u = s[c];
      if (u.POSITION !== void 0) {
        const f = e.json.accessors[u.POSITION], d = f.min, m = f.max;
        if (d !== void 0 && m !== void 0) {
          if (o.setX(Math.max(Math.abs(d[0]), Math.abs(m[0]))), o.setY(Math.max(Math.abs(d[1]), Math.abs(m[1]))), o.setZ(Math.max(Math.abs(d[2]), Math.abs(m[2]))), f.normalized) {
            const T = Z(D[f.componentType]);
            o.multiplyScalar(T);
          }
          a.max(o);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    t.expandByVector(a);
  }
  h.boundingBox = t;
  const i = new nn();
  t.getCenter(i.center), i.radius = t.min.distanceTo(t.max) / 2, h.boundingSphere = i;
}
function ae(h, n, e) {
  const r = n.attributes, t = [];
  function s(i, a) {
    return e.getDependency("accessor", i).then(function(o) {
      h.setAttribute(a, o);
    });
  }
  for (const i in r) {
    const a = Q[i] || i.toLowerCase();
    a in h.attributes || t.push(s(r[i], a));
  }
  if (n.indices !== void 0 && !h.index) {
    const i = e.getDependency("accessor", n.indices).then(function(a) {
      h.setIndex(a);
    });
    t.push(i);
  }
  return $.workingColorSpace !== w && "COLOR_0" in r && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$.workingColorSpace}" not supported.`), y(h, n), Hn(h, n, e), Promise.all(t).then(function() {
    return n.targets !== void 0 ? On(h, n.targets, e) : h;
  });
}
export {
  Un as GLTFLoader
};
