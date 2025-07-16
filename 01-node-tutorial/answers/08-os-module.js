// 08-os-module.js

// Load built-in 'os' module
const os = require("os");

// Display some interesting system information
console.log('Operating System Info:');
console.log("_____________________");
console.log(`OS Platform          : ${os.platform()}`);
console.log(`OS Type              : ${os.type()}`);
console.log(`OS Release           : ${os.release()}`);
console.log(`CPU Architecture     : ${os.arch()}`);
console.log(`CPU Cores            : ${os.cpus().length}`);
console.log(`Total Memory         : ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Free Memory          : ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Uptime               : ${(os.uptime() / 3600).toFixed(2)} hours`);
console.log(`User Info            : `, os.userInfo());
console.log(`Home Directory       : ${os.homedir()}`); 