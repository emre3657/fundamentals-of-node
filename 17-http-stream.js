const http = require("http");
const fs = require("fs");
const { eventNames } = require("process");

http
  .createServer((req, res) => {
    // This sync(or async, not matter) operation(s) transferred all data(file) in once through the internet
    // const text = fs.readFileSync("./content/big.txt", "utf8");
    // res.end(text);
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });

    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
