const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("start", (msg) => {
    console.log("Start event received:", msg);
    emitter.emit("middle", "Continuing...");
});

emitter.on("middle", (msg) => {
    console.log("Middle event receibed:", msg);
    emitter.emit("end", "Finished.");
});

emitter.on("end", (msg) => {
    console.log("End event received:", msg);
});

emitter.emit("start", "Hello world!");

// Bonus (async waiting)
const waitForEvent = () => {
    return new Promise((resolve) => {
        emitter.on("delayed", resolve);
    });
};

const doWait = async () => {
    const msg = await waitForEvent();
    console.log("Got delayed event:", msg);
};

doWait();

setTimeout(() => {
    emitter.emit("delayed", "This happened later");
}, 2000);