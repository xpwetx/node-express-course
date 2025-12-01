const { writeFile, readFile } = require("fs").promises;

writeFile("temp.txt", "First line\n")
  .then(() => {
    // write second line (append)
    return writeFile("temp.txt", "Second line\n", { flag: "a" });
  })
  .then(() => {
    // write third line (append)
    return writeFile("temp.txt", "Third line\n", { flag: "a" });
  })
  .then(() => {
    // read the file
    return readFile("temp.txt", "utf-8");
  })
  .then((data) => {
    // log contents
    console.log(data);
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });
