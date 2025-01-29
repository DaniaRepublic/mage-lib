import RAPIER from "@dimforge/rapier3d-compat"
import * as THREE from "three"

import { ThreeResourceManager } from "./three/resource-managing.js"


export type TUserData = {
  id: string,
  networked: boolean,
}

export interface IServerObjectSetup {
  /**
   * This method should get called during game's setup.
   */
  setup(): Promise<void>
}

export interface IClientObjectSetup {
  /**
   * This method should get called during game's setup. 
   * @param threeResourceManager rendering resource manager.
   */
  setup(threeResourceManager: ThreeResourceManager): Promise<void>
}

export interface IGameObjectBase {
  /**
   * The root of the scene
   */
  root: RAPIER.RigidBody

  /**
   * Should return root.translation. 
   */
  translation(): RAPIER.Vector

  /**
   * Should return root.rotation.
   */
  rotation(): RAPIER.Quaternion

  /**
   * User defined string for storing information about an oject such as id.
   */
  userData: TUserData

  /**
   * This function is for physics logic.
   * @param deltaTime time delta since last call
   */
  physicsLoopLogic(deltaTime: number): void
}

export abstract class GameObjectBase implements IGameObjectBase, IServerObjectSetup {
  root: RAPIER.RigidBody
  userData: TUserData

  constructor(userData?: TUserData) {
    this.userData = userData
  }

  translation() {
    return this.root.translation()
  }

  rotation() {
    return this.root.rotation()
  }

  abstract setup(): Promise<void>
  abstract physicsLoopLogic(deltaTime: number): void
}

interface IGameObjectBaseClient extends IGameObjectBase, IClientObjectSetup {
  /**
   * This method should get called during game's setup.
   */
  setup(): Promise<void>

  /**
   * This function if for draw logic.
   * @param deltaTime time delta since last call
   */
  drawLoopLogic(deltaTime: number): void
}

export abstract class GameObjectBaseClient implements IGameObjectBaseClient {
  root: RAPIER.RigidBody
  userData: TUserData

  constructor(userData?: TUserData) {
    this.userData = userData
  }

  translation() {
    return this.root.translation()
  }

  rotation() {
    return this.root.rotation()
  }

  abstract setup(): Promise<void>
  abstract physicsLoopLogic(deltaTime: number): void
  abstract drawLoopLogic(deltaTime: number): void
}

interface IGameObjectPhysicalBase {
  world: RAPIER.World
}

export abstract class GameObjectPhysicalBase extends GameObjectBase implements IGameObjectPhysicalBase {
  world: RAPIER.World

  constructor(world: RAPIER.World, userData?: TUserData) {
    super(userData)
    this.world = world
  }
}

interface IGameObjectDrawableBase {
  threeResourceManager: ThreeResourceManager
}

export abstract class GameObjectDrawableBase extends GameObjectBaseClient implements IGameObjectDrawableBase {
  threeResourceManager: ThreeResourceManager

  constructor(threeResourceManager: ThreeResourceManager, userData?: TUserData) {
    super(userData)
    this.threeResourceManager = threeResourceManager
  }
}

export abstract class GameObjectPhysicalDrawableBase extends GameObjectBaseClient implements IGameObjectPhysicalBase, IGameObjectDrawableBase {
  world: RAPIER.World
  threeResourceManager: ThreeResourceManager

  constructor(world: RAPIER.World, threeResourceManager: ThreeResourceManager, userData?: TUserData) {
    super(userData)
    this.world = world
    this.threeResourceManager = threeResourceManager
  }
}

// TODO: implement networked game object. Its state should be replicated by the networked game.
export interface IGameObjectNetworkedBase extends IGameObjectPhysicalBase { }

export abstract class GameObjectNetworkedBase extends GameObjectPhysicalBase {
  constructor(world: RAPIER.World, userData: TUserData) {
    super(world, userData)
  }
}

export abstract class GameObjectNetworkedBaseClient extends GameObjectPhysicalDrawableBase {
  rendererRoot: THREE.Mesh

  constructor(world: RAPIER.World, threeResourceManager: ThreeResourceManager, userData: TUserData) {
    super(world, threeResourceManager, userData)
  }
}