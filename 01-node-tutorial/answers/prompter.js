
const http = require("http");

const secretNumber = Math.floor(Math.random() * 100) + 1;
let lastMessage = "Guess a number between 1 and 100!";

// form
const getFormHTML = () => `
<html>
<head><title>Guess the Number!</title></head>
  <body>
  <p>${lastMessage}</p>
  <form method="POST">
  <label for="guess">Your guess: </label>
  <input type="number" id="guess" name="guess" min="1" max="100" required />
  <button type="submit">Submit</button>
  </form>
  </body>
  </html>
  `;

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);

  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(getFormHTML());
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
  
    req.on("end", () => {
      const params = new URLSearchParams(body);
      const guess = parseInt(params.get('guess'), 10);

      if (isNaN(guess)) {
        lastMessage = "Please enter a valid number.";
      } else if (guess < secretNumber) {
        lastMessage = `Your guess of ${guess} is too low!`;
      } else if (guess > secretNumber) {
        lastMessage = `Your guess of ${guess} is too high!`;
      } else {
        lastMessage = `Correct! The number was ${secretNumber}. Refresh to play again!`;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(formHTML);
    });
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method not allowed");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});

  