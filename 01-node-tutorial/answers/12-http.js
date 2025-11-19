const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to the home page!");
  }
  if (req.url === "/about") {
    return res.end("This is the about page.");
  }

  res.statusCode = 404;
  res.end("Page not found");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
