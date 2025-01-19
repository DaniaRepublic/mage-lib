import * as THREE from "three";
export declare class GLTFLoaderWrapper {
    #private;
    constructor(baseUrl: string);
    getGLTF(assetName: string): Promise<import("three/examples/jsm/loaders/GLTFLoader.js").GLTF>;
}
export declare function pointsFromBBox(bbox: THREE.Box3): number[];
