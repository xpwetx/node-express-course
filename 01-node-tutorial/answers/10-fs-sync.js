const { writeFileSync, readFileSync } = require("fs");
const filePath = "./temporary/fileA.txt";

// First line (overwrite or create)
writeFileSync(filePath, "Line 1\n");

// Append two more
writeFileSync(filePath, "Line 2\n", { flag: "a" });
writeFileSync(filePath, "Line 3\n", { flag: "a" });

const data = readFileSync(filePath, "utf8");
console.log("File contents:\n" + data);
