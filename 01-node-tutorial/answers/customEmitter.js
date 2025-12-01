const EventEmitter = require("events");

// Create two emitters just for fun
const emitterA = new EventEmitter();
const emitterB = new EventEmitter();

//
// 1. BASIC EVENT HANDLER + EMITTER
//
emitterA.on("greet", (name) => {
  console.log(`[A] Greeting event received: Hello ${name}!`);
});

// Emit event
emitterA.emit("greet", "Alice");

//
// 2. EVENT HANDLER THAT TRIGGERS A DIFFERENT EVENT
//
emitterA.on("ping", () => {
  console.log("[A] Received 'ping', now emitting 'pong' on emitterB...");
  emitterB.emit("pong", "pong!!");
});

emitterB.on("pong", (msg) => {
  console.log(`[B] Pong event received: ${msg}`);
});

// Trigger the chain reaction
emitterA.emit("ping");

//
// 3. EVENT TRIGGERED ON A TIMER
//
setInterval(() => {
  emitterA.emit("timer", "Tick tock...");
}, 2000);

emitterA.on("timer", (msg) => {
  console.log(`[A] Timer event: ${msg}`);
});

//
// 4. WAITING FOR AN EVENT USING A PROMISE + ASYNC
//
const waitForSpecialEvent = () => {
  return new Promise((resolve) => {
    emitterB.on("special", (msg) => resolve(msg));
  });
};

const doWait = async () => {
  const msg = await waitForSpecialEvent();
  console.log("[B] SPECIAL EVENT WAS RECEIVED:", msg);
};

doWait();

// Emit the special event after a short delay
setTimeout(() => {
  emitterB.emit("special", "⭐ A very special message ⭐");
}, 1500);
