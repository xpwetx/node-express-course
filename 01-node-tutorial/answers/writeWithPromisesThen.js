const { writeFile, readFile } = require("fs").promises;

writeFile("texp.txt", "Line 1\n")
.then(() => writeFile("temp.txt", "Line 2\n", { flag: "a" }))
.then (() => writeFile("temp.txt", "Line 3\n", { flag: "a" }))
.then (() => readFile("temp.txt", "utf8"))
.then ((data) => console.log("file content:\n", data))
.catch ((err) => console.log("Error:", err));