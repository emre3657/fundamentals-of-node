const { readFileSync, writeFileSync, appendFile } = require("fs");

try {
  console.log("start");
  const first = readFileSync("./content/first.txt", {
    encoding: "utf8",
    flag: "r",
  });
  const second = readFileSync("./content/second.txt", "utf8");
  console.log(first + "\n" + second);

  writeFileSync(
    "./content/new-sync-file.txt",
    `Here is the result: 
${first},
${second}`,
    { flag: "w" } // "a" append, "w" overwrite
  );
  console.log("done with this task");
} catch (err) {
  console.log(err.message);
}
console.log("starting the next one");
