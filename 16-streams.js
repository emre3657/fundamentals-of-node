const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 1000,
});

// default 64kb
// last buffer - remainder
// hightWaterMar - control size
// const stream = createReadStream("./content/big.txt", {highWaterMark: 10000});
// const stream = createReadStream("./content/big.txt", {encoding: "utf8"});

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("error", (err) => {
  console.log(err);
});
