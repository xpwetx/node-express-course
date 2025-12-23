console.log("Express Tutorial");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// Import products from data.js
const { products } = require("./data");

// router
const peopleRouter = require("./routes/people");

// Logger middleware
const logger = (req, res, next) => {
  const time = new Date().toLocaleTimeString();
  console.log(`${req.method} ${req.url} - ${time}`);
  next();
};

// Auth middleware (cookie-based)
const auth = (req, res, next) => {
    if (req.cookies && req.cookies.name) {
      req.user = req.cookies.name;
      next();
    } else {
      res
        .status(401)
        .json({ success: false, message: "unauthorized" });
    }
  };


// Global Middleware (serve public static files)
app.use(logger);
app.use(express.static("methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Auth Routes
app.post("/logon", (req, res) => {
    const { name } = req.body;
  
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Please provide a name",
      });
    }
  
    res.cookie("name", name);
    res.status(201).json({
      success: true,
      message: `Hello, ${name}`,
    });
  });
  
  app.delete("/logoff", (req, res) => {
    res.clearCookie("name");
    res.status(200).json({
      success: true,
      message: "You are logged off",
    });
  });
  
  app.get("/test", auth, (req, res) => {
    res.status(200).json({
      success: true,
      message: `Welcome ${req.user}`,
    });
  });
  
  
// JSON API test route
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

// Get all products
app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
    const id = Number(req.params.productID);
    const product = products.find((p) => p.id === id);
  
    if (!product) {
      return res.status(404).json({
        message: "That product was not found",
      });
    }
  
    res.json(product);
  });
  

// People routes
app.use("/api/v1/people", peopleRouter);


// 404 handler comes after all other routes
app.all("*", (req, res) => {
  res.status(404).send("No page found");
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
