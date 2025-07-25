// 10-fs-sync.js 

const fs = require('fs');
const path = require('path');

// Directory
const dir = path.join(__dirname, '.temporary');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

//first line (overwrite or create)
const filePath = path.join(dir, 'fileA.txt');
fs.writeFileSync(filePath, 'This is file A');

console.log('File written successfully.');