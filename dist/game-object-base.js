export class GameObjectBase {
    root;
    userData;
    constructor(userData) {
        this.userData = userData;
    }
    translation() {
        return this.root.translation();
    }
    rotation() {
        return this.root.rotation();
    }
}
export class GameObjectBaseClient {
    root;
    userData;
    constructor(userData) {
        this.userData = userData;
    }
    translation() {
        return this.root.translation();
    }
    rotation() {
        return this.root.rotation();
    }
}
export class GameObjectPhysicalBase extends GameObjectBase {
    world;
    constructor(world, userData) {
        super(userData);
        this.world = world;
    }
}
export class GameObjectDrawableBase extends GameObjectBaseClient {
    threeResourceManager;
    constructor(threeResourceManager, userData) {
        super(userData);
        this.threeResourceManager = threeResourceManager;
    }
}
export class GameObjectPhysicalDrawableBase extends GameObjectBaseClient {
    world;
    threeResourceManager;
    constructor(world, threeResourceManager, userData) {
        super(userData);
        this.world = world;
        this.threeResourceManager = threeResourceManager;
    }
}
export class GameObjectNetworkedBase extends GameObjectPhysicalBase {
    constructor(world, userData) {
        super(world, userData);
    }
}
export class GameObjectNetworkedBaseClient extends GameObjectPhysicalDrawableBase {
    constructor(world, threeResourceManager, userData) {
        super(world, threeResourceManager, userData);
    }
}
