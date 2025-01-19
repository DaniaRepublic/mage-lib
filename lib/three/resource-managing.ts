import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

export type TThreeResources =
  THREE.BufferGeometry | THREE.Material | THREE.Texture | THREE.Mesh | THREE.Light | THREE.Box3Helper | THREE.Group

interface IResourceManager {
  /**
   * Starts tracking the resource (essential for memory management).
   * @param resource available types to track
   */
  track(resource: TThreeResources): TThreeResources

  dispose(): void
}

export class ThreeResourceManager implements IResourceManager {
  private geometries: Set<THREE.BufferGeometry> = new Set()
  private materials: Set<THREE.Material> = new Set()
  private textures: Set<THREE.Texture> = new Set()
  private meshes: Set<THREE.Mesh> = new Set()
  private lights: Set<THREE.Light> = new Set()
  private box3Helpers: Set<THREE.Box3Helper> = new Set()
  private groups: Set<THREE.Group> = new Set()
  scene: THREE.Scene | null = null
  renderer: THREE.WebGLRenderer | null = null
  controls: PointerLockControls | OrbitControls | null = null

  track(resource: TThreeResources): TThreeResources {
    if (resource instanceof THREE.BufferGeometry) this.geometries.add(resource)
    if (resource instanceof THREE.Material) this.materials.add(resource)
    if (resource instanceof THREE.Texture) this.textures.add(resource)
    if (resource instanceof THREE.Mesh) this.meshes.add(resource)
    if (resource instanceof THREE.Light) this.lights.add(resource)
    if (resource instanceof THREE.Box3Helper) this.box3Helpers.add(resource)
    if (resource instanceof THREE.Group) this.groups.add(resource)
    return resource
  }

  setScene(scene: THREE.Scene) { this.scene = scene }
  setRenderer(renderer: THREE.WebGLRenderer) { this.renderer = renderer }
  setControls(controls: PointerLockControls | OrbitControls) { this.controls = controls }

  /**
   * Release all memory used by this manager.
   */
  dispose() {
    this.geometries.forEach(geometry => geometry.dispose())
    this.materials.forEach(material => material.dispose())
    this.textures.forEach(texture => texture.dispose())
    this.lights.forEach(light => light.dispose())
    this.box3Helpers.forEach(box3Helper => box3Helper.dispose())
    this.groups.forEach(group => {
      group.traverse(object => {
        if ("dispose" in object && typeof object.dispose === "function") {
          object.dispose()
        }
      })
    })
    this.renderer?.dispose()
    this.controls?.dispose()
    this.scene?.clear()

    this.geometries.clear()
    this.materials.clear()
    this.textures.clear()
    this.meshes.clear()
  }
}

export function useThree(resources = new ThreeResourceManager()) {
  function cleanup() {
    resources.dispose()
  }

  function createGeometry(geometryFn: () => THREE.BufferGeometry): THREE.BufferGeometry {
    return resources.track(geometryFn()) as THREE.BufferGeometry
  }

  function createMaterial(materialFn: () => THREE.Material): THREE.Material {
    return resources.track(materialFn()) as THREE.Material
  }

  function createTexture(textureFn: () => THREE.Texture): THREE.Texture {
    return resources.track(textureFn()) as THREE.Texture
  }

  function createMesh(geometry: THREE.BufferGeometry, material: THREE.Material): THREE.Mesh {
    return resources.track(new THREE.Mesh(geometry, material)) as THREE.Mesh
  }

  function createLight(lightFn: () => THREE.Light): THREE.Light {
    return resources.track(lightFn()) as THREE.Light
  }

  function createGroup(groupFn: () => THREE.Group): THREE.Group {
    return resources.track(groupFn()) as THREE.Group
  }

  return {
    resources,
    cleanup,
    createGeometry,
    createMaterial,
    createTexture,
    createMesh,
    createLight,
    createGroup
  }
}