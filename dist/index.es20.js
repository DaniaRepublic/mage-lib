import { TrianglesDrawMode as f, TriangleFanDrawMode as a, TriangleStripDrawMode as c } from "./index.es14.js";
function p(r, o) {
  if (o === f)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (o === a || o === c) {
    let n = r.getIndex();
    if (n === null) {
      const e = [], u = r.getAttribute("position");
      if (u !== void 0) {
        for (let l = 0; l < u.count; l++)
          e.push(l);
        r.setIndex(e), n = r.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
    }
    const s = n.count - 2, t = [];
    if (o === a)
      for (let e = 1; e <= s; e++)
        t.push(n.getX(0)), t.push(n.getX(e)), t.push(n.getX(e + 1));
    else
      for (let e = 0; e < s; e++)
        e % 2 === 0 ? (t.push(n.getX(e)), t.push(n.getX(e + 1)), t.push(n.getX(e + 2))) : (t.push(n.getX(e + 2)), t.push(n.getX(e + 1)), t.push(n.getX(e)));
    t.length / 3 !== s && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const i = r.clone();
    return i.setIndex(t), i.clearGroups(), i;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", o), r;
}
export {
  p as toTrianglesDrawMode
};
