var s = Object.defineProperty;
var d = (r, i, e) => i in r ? s(r, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[i] = e;
var a = (r, i, e) => d(r, typeof i != "symbol" ? i + "" : i, e);
import { GameObjectDrawableBase as o } from "./index.es5.js";
import { Scene as p, OrthographicCamera as u, SpriteMaterial as m, Sprite as c, CanvasTexture as w } from "./index.es15.js";
class S extends o {
  constructor(e) {
    super(e);
    a(this, "hudScene");
    a(this, "hudCamera");
    a(this, "jumpSprite");
  }
  async setup() {
    this.hudScene = new p(), this.hudCamera = new u(
      -window.innerWidth / 2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      -window.innerHeight / 2,
      1,
      10
    ), this.hudCamera.position.z = 10;
    const e = this.createTextTexture("🦘".repeat(3)), t = new m({ map: e });
    this.jumpSprite = new c(t), this.jumpSprite.scale.set(150, 50, 1), this.jumpSprite.position.set(-window.innerWidth / 2 + 140, window.innerHeight / 2 - 40, 1), this.hudScene.add(this.jumpSprite);
  }
  createTextTexture(e) {
    const t = document.createElement("canvas"), n = t.getContext("2d");
    t.width = 384, t.height = 128, n.font = "Bold 72px Arial", n.fillStyle = "white", n.textAlign = "center", n.textBaseline = "middle", n.fillText(e, t.width / 2, t.height / 2);
    const h = new w(t);
    return h.needsUpdate = !0, h;
  }
  updateJumps(e) {
    const t = this.createTextTexture("🦘".repeat(e));
    this.jumpSprite.material.map = t, this.jumpSprite.material.needsUpdate = !0;
  }
  drawLoopLogic(e) {
    this.threeResourceManager.renderer.clearDepth(), this.threeResourceManager.renderer.render(this.hudScene, this.hudCamera);
  }
  physicsLoopLogic(e) {
  }
  // Call this when window is resized
  resize() {
    this.hudCamera.left = -window.innerWidth / 2, this.hudCamera.right = window.innerWidth / 2, this.hudCamera.top = window.innerHeight / 2, this.hudCamera.bottom = -window.innerHeight / 2, this.hudCamera.updateProjectionMatrix(), this.jumpSprite.position.set(-window.innerWidth / 2 + 140, window.innerHeight / 2 - 40, 1);
  }
}
export {
  S as HUD
};
