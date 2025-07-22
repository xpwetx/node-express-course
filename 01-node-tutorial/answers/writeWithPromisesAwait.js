const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
    try {
        await writeFile("temp.txt", "First line\n");
        await writeFile("temp.txt", "Second line \n", { flag: "a" });
        await writeFile("temp.txt", "Third line \n", { flag: "a" });
    } catch (err) {
        console.log("Write error:", err);
    }
};

const reader = async () => {
    try {
        const data = await readFile("temp.txt", "utf8");
    } catch (err) {
        console.log("Read error:", err);
    }
};

const readWrite = async () => {
    await writer();
    await reader();
};

readWrite();