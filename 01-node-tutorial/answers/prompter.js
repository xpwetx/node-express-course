const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let selectedColor = "white";

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body style="background-color:${selectedColor}; font-family:Arial; padding: 20px;">
 <h1>Choose a background color</h1>
 <p>Current color: <strong>${selectedColor}</strong></p>

 <form method="POST">
 <label for="color">Pick a color:</label>
 <select name="color" id="color">
 <option value="white">White</option>
 <option value="red">Red</option>
 <option value="orange">Orange</option>
 <option value="yellow">Yellow</option>
 <option value="green">Green</option>
 <option value="blue">Blue</option>
 <option value="purple">Purple</option>
 </select>
 
 <button type="submit">Apply color</button>
 </form>
 </body>
 `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);

  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);

      // here, you can add your own logic
      if (body["color"]) {
        selectedColor = body["color"];
      } 

      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.on("request", (req) => {
  console.log("event received: ", req.method, req.url);
});


server.listen(3000);
console.log("The server is listening on port 3000.");
