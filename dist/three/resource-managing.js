import * as THREE from "three";
export class ThreeResourceManager {
    geometries = new Set();
    materials = new Set();
    textures = new Set();
    meshes = new Set();
    lights = new Set();
    box3Helpers = new Set();
    groups = new Set();
    scene = null;
    renderer = null;
    controls = null;
    track(resource) {
        if (resource instanceof THREE.BufferGeometry)
            this.geometries.add(resource);
        if (resource instanceof THREE.Material)
            this.materials.add(resource);
        if (resource instanceof THREE.Texture)
            this.textures.add(resource);
        if (resource instanceof THREE.Mesh)
            this.meshes.add(resource);
        if (resource instanceof THREE.Light)
            this.lights.add(resource);
        if (resource instanceof THREE.Box3Helper)
            this.box3Helpers.add(resource);
        if (resource instanceof THREE.Group)
            this.groups.add(resource);
        return resource;
    }
    setScene(scene) { this.scene = scene; }
    setRenderer(renderer) { this.renderer = renderer; }
    setControls(controls) { this.controls = controls; }
    /**
     * Release all memory used by this manager.
     */
    dispose() {
        this.geometries.forEach(geometry => geometry.dispose());
        this.materials.forEach(material => material.dispose());
        this.textures.forEach(texture => texture.dispose());
        this.lights.forEach(light => light.dispose());
        this.box3Helpers.forEach(box3Helper => box3Helper.dispose());
        this.groups.forEach(group => {
            group.traverse(object => {
                if ("dispose" in object && typeof object.dispose === "function") {
                    object.dispose();
                }
            });
        });
        this.renderer?.dispose();
        this.controls?.dispose();
        this.scene?.clear();
        this.geometries.clear();
        this.materials.clear();
        this.textures.clear();
        this.meshes.clear();
    }
}
export function useThree(resources = new ThreeResourceManager()) {
    function cleanup() {
        resources.dispose();
    }
    function createGeometry(geometryFn) {
        return resources.track(geometryFn());
    }
    function createMaterial(materialFn) {
        return resources.track(materialFn());
    }
    function createTexture(textureFn) {
        return resources.track(textureFn());
    }
    function createMesh(geometry, material) {
        return resources.track(new THREE.Mesh(geometry, material));
    }
    function createLight(lightFn) {
        return resources.track(lightFn());
    }
    function createGroup(groupFn) {
        return resources.track(groupFn());
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
    };
}
