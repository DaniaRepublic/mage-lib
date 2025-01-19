import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

export class GLTFLoaderWrapper {
  #gltfLoader: GLTFLoader
  #baseUrl: string

  constructor(baseUrl: string) {
    this.#gltfLoader = new GLTFLoader()
    this.#baseUrl = baseUrl
  }

  async getGLTF(assetName: string) {
    return await this.#gltfLoader.loadAsync(this.#baseUrl + assetName)
  }
}

export function pointsFromBBox(bbox: THREE.Box3): number[] {
  const min = bbox.min // {x, y, z} minimum coords
  const max = bbox.max // {x, y, z} maximum coords

  const points = [
    min.x, min.y, min.z,
    min.x, min.y, max.z,
    min.x, max.y, min.z,
    min.x, max.y, max.z,
    max.x, min.y, min.z,
    max.x, min.y, max.z,
    max.x, max.y, min.z,
    max.x, max.y, max.z
  ]

  return points
}