const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    return res.end("Here is our short history");
  }
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <h1>Oops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href="/">Home</a>
  `);
});

server.listen(5000);
