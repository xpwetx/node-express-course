const { writeFile, readFile } = require("fs").promises; 

// async writer function
async function writer() {
    try {
      await writeFile("temp.txt", "First line\n");
      await writeFile("temp.txt", "Second line\n", { flag: "a" });
      await writeFile("temp.txt", "Third line\n", { flag: "a" });
    } catch (err) {
      console.error("Error writing file:", err);
    }
  }
  
  // async reader function
  async function reader() {
    try {
      const data = await readFile("temp.txt", "utf-8");
      console.log(data);
    } catch (err) {
      console.error("Error reading file:", err);
    }
  }
  
  // async function to run in order
  async function readWrite() {
    await writer();
    await reader();
  }
  
  // call the function
  readWrite();
  