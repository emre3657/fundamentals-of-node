const { readFile, writeFile } = require("fs/promises");

// Normal readFile and writeFile - (callback) - require("fs")
/*
let firstData = "";
let secondData = "";

new Promise((resolve, reject) => {
  readFile("./content/first.txt", "utf8", (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
})
  .then((first) => {
    firstData = first;
    return new Promise((resolve, reject) => {
      readFile("./content/second.txt", "utf8", (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  })
  .then((second) => {
    secondData = second;
    console.log(firstData + "\n" + secondData);
    return new Promise((resolve, reject) => {
      writeFile(
        "./content/new-async-file.txt",
        "Here is the result\n" + firstData + "\n" + secondData,
        (err) => {
          if (err) reject(err);
          else resolve();
        }
      );
    });
  })
  .then(() => console.log("done writing file"))
  .catch((err) => console.log(err));
*/

/*************************************************************/

/*
const first = new Promise((resolve, reject) => {
  readFile("./content/first.txt", "utf8", (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});

const second = new Promise((resolve, reject) => {
  readFile("./content/second.txt", "utf8", (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});


Promise.all([first, second])
  .then((data) => {
    console.log(data[0] + "\n" + data[1]);
    return new Promise((reject) => {
      writeFile(
        "./content/new-async-file.txt",
        "Here is the result\n" + data[0] + "\n" + data[1],
        (err) => {
          if (err) reject(err);
        }
      );
    });
  })
  .then(() => console.log("done writing file"))
  .catch((err) => console.log(err));
*/

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    const data = first + "\n" + second;
    console.log(data);
    await writeFile(
      "./content/new-async-file.txt",
      "Here is the result:\n" + data
    );
    console.log("file writting completed!");
  } catch (err) {
    console.log(err);
  }
};
start(); // Can not use 'await'. It is only allowed ES+6 modules
console.log("next task started");
