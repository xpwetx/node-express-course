const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", {
  encoding: "utf8",
  highWaterMark: 300,  
});

let chunkCount = 0;

// Handle incoming data chunks
stream.on("data", (chunk) => {
  chunkCount++;
  console.log(`Chunk #${chunkCount}:\n`, chunk);
});

// Handle end of stream
stream.on("end", () => {
  console.log("\n-------------------------");
  console.log(`Stream ended. Total chunks received: ${chunkCount}`);
  console.log("-------------------------");
});

// Handle any errors
stream.on("error", (err) => {
  console.error("Stream error:", err);
});
