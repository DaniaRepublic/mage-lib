import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
export type TThreeResources = THREE.BufferGeometry | THREE.Material | THREE.Texture | THREE.Mesh | THREE.Light | THREE.Box3Helper | THREE.Group;
interface IResourceManager {
    /**
     * Starts tracking the resource (essential for memory management).
     * @param resource available types to track
     */
    track(resource: TThreeResources): TThreeResources;
    dispose(): void;
}
export declare class ThreeResourceManager implements IResourceManager {
    private geometries;
    private materials;
    private textures;
    private meshes;
    private lights;
    private box3Helpers;
    private groups;
    scene: THREE.Scene | null;
    renderer: THREE.WebGLRenderer | null;
    controls: PointerLockControls | OrbitControls | null;
    track(resource: TThreeResources): TThreeResources;
    setScene(scene: THREE.Scene): void;
    setRenderer(renderer: THREE.WebGLRenderer): void;
    setControls(controls: PointerLockControls | OrbitControls): void;
    /**
     * Release all memory used by this manager.
     */
    dispose(): void;
}
export declare function useThree(resources?: ThreeResourceManager): {
    resources: ThreeResourceManager;
    cleanup: () => void;
    createGeometry: (geometryFn: () => THREE.BufferGeometry) => THREE.BufferGeometry;
    createMaterial: (materialFn: () => THREE.Material) => THREE.Material;
    createTexture: (textureFn: () => THREE.Texture) => THREE.Texture;
    createMesh: (geometry: THREE.BufferGeometry, material: THREE.Material) => THREE.Mesh;
    createLight: (lightFn: () => THREE.Light) => THREE.Light;
    createGroup: (groupFn: () => THREE.Group) => THREE.Group;
};
export {};
