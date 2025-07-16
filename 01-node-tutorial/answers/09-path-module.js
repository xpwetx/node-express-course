// 09-path-module.js

// Load the build-in 'path' module
const path = require("path");

// Join segments into full path
const fullPath = path.join("Users", "JohnSmith", "node-express-course", "01-node-tutorial", "answers");

console.log("Joined Path:");
console.log(fullPath);