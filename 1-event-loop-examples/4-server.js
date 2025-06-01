const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.writeHead(200, {
    "content-type": "text-plain",
  });

  res.end("Hello world");
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
