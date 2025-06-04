const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Welcome");
// });

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subcribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  console.log("request came", req.url);
  res.end("Welcome");
});

server.listen(5000);
