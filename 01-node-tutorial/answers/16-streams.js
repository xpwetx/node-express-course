const { createReadStream } = require("fs");
const path = require("path");

const stream = createReadStream(
    path.join(__dirname, "../content/big.txt"),
    {
        encoding: "utf8",
        highWaterMark: 138,
    }
);

let chunkCount = 0;

stream.on("data", (chunk) => {
    chunkCount++;
    console.log(`Chunk ${chunkCount}:`, chunk.slice(0, 50), "...");
});

stream.on("end", () => {
    console.log(`\nTotal Chunks: ${chunkCount}`);
});

stream.on("error", (err) => {
    console.log("Stream error:", err);
});