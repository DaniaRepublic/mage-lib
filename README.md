# MaGE

Maybe a Game Engine

## Idea sketch

My current understanding of how the project should shape up.

1. Client initiates a connection to a game
2. Server starts local master instance of that game
   1. Connection to database is established
   2. Physics sym starts running
   3. Replication service goes online
3. Client connects to it and updates its state to match most current
4. Game is able to start
5. Other clients may connect now

Client is a browser instance.
Server is a websocket webserver.

## Tech stack

 - Socket.io - realtime communication (when WebTransport support rolls out to runtimes, will switch to that).
 - Rapier-js - physics lib
 - Three.js - rendering lib
 - SolidJS - a frontend framework with useful primitives. Maybe this is a mistake to adopt it, but it seems reasonable - no virtual dom or server and client state sync like in react. Lifetime hooks and signals seem especially useful for games. Plus JSX support, which is the best templating format for html.

## TODOs
 - [2025-01-28](#2025-01-28)
    - [ ] Client side prediction.
    - [ ] Server reconciliation.

 - [2025-01-24](#2025-01-24)
    - [x] Create serialization helpers for keyboard events.
    - [x] Controllable network player.
    - [x] Abstract network object classes.
    - [ ] RPC replacement with socket.io events.
    - [ ] Abstract network game classes.

 - [2025-01-15](#2025-01-15)
    - [x] Implement network object base class.
      - [ ] Test it.
    - [x] Network game.
      - [ ] Test it.
    - [x] Create a package for the library so that it can be shared in the server and in client and server can run the game and take authority.

 - [2025-01-08](#2025-01-08)
    - [x] Implement game object base class.
    - [x] Rewrite player and HUD in it.

## Matters at hand

### 2025-01-28

At this point we have playable character replication, but with any lag or dropped packets the game is unplayable.
To address these issues implement [Client-Side Prediction and Server Reconciliation](https://gabrielgambetta.com/client-side-prediction-server-reconciliation.html).

### 2025-01-24

Now the replication of objects works. There's also basic interpolation.

The network game classes are an mvp rn, they need cleaning and standardization.

But there's no controllable network player. After it's implemented there needs to be separation between players and just network objects.
How should the client be implemented? It sends the action to the server, like keyboard events.
At 60 fps for the physics engine, there will be 60 data points for each message.
For example a message with keyboard events can look like so:

```typescript
type TKeyboardEvents = number[]

// Example variable of that type.
// Lets have a bit mask for the events pressed.
const keyboardEvents: TKeyboardEvents = [2314, 1234560, 3124, ...] // up to 60 times

// To convert integer to binary string:
let a = 34
let b = a.toString(2)

// To convert binary string to integer:
let b = "10010"
let a = Number.parseInt(b, 2)
```

There are also no rpcs. Really socket.io allows to use emit events like rpc's sorta.

### 2025-01-15

The multiplayer aspect of the engine is starting to take shape.
WebTransport standard is not quite there yet for the server. The support is just not there.
WebSockets, therefore.

Multiplayer game setup is shared between client and server.

When a client is trying to recreate the world on its end, it will request userData for all networked objects.

One useful aspect of the deterministic physics engine is that I can use something like rpc to make same actions happen for all clients.

### 2025-01-08

It turns out I'm building a game engine.

I need a base class for a game object.
Game object is any entity that exists within the game.

Game object base class should have its own setup and physics and draw loops, just like the game class itself.
Game object's setup method should get called during game's setup (inside setup method). Therefore, the setup method is async on game object base class.
Game object's physics and draw calls should be made in respectful game methods. They are sync

Here's a sketch of a game object base class:

```typescript
class GameObjectBase {
  #name: string | null

  get name() {
    return this.#name
  }

  constructor(name?: string) {
    this.#name = name
  }

  async setup() { }

  /**
   * This function is for physics logic.
   * @param deltaTime time delta since last call
   */
  physicsLoopLogic(deltaTime: number) { }

  /**
   * This function if for draw logic.
   * @param deltaTime time delta since last call
   */
  drawLoopLogic(deltaTime: number) { }
}
```