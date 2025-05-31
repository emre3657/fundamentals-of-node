const { readFile, writeFile } = require("fs");

console.log("start");
readFile(
  "./content/first.txt",
  { encoding: "utf8", flag: "r" },
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const first = data;
    readFile("./content/second.txt", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      const second = data;
      writeFile(
        "./content/new-async-file.txt",
        `Here is the result:
${first},
${second}`,
        { encoding: "utf8", flag: "w" },
        (err) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("done with this task");
        }
      );
    });
  }
);
console.log("starting next task");
