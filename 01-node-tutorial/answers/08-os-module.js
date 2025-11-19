const os = require("os");

console.log("User Info:", os.userInfo());
console.log("System Uptime (sec):", os.uptime());
console.log("OS Type:", os.type());
console.log("Platform:", os.platform());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
