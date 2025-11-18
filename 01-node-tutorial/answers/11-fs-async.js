const { writeFile } = require("fs");
const filePath = "./temporary/fileB.txt";

console.log("at start");

writeFile(filePath, "This is line 1\n", (err) => {
  if (err) throw err;
  console.log("Wrote line 1");

  writeFile(filePath, "This is line 2\n", { flag: "a" }, (err) => {
    if (err) throw err;
    console.log("Wrote line 2");

    writeFile(filePath, "This is line 3\n", { flag: "a" }, (err) => {
      if (err) throw err;
      console.log("Wrote line 3");

      console.log("All done!");
    });
  });
});

console.log("at end");
