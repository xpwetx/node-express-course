console.log('Express Tutorial')
const express = require('express');
const app = express();

// Import products from data.js
const { products } = require('./data');

// Middleware (serve public static files)
app.use(express.static('public'));

// JSON API route comes first
app.get("/api/v1/test", (req, res) => {
    res.json({ message: "It worked!" });
});

// Get all products
app.get('/api/v1/products', (req,res) => {
    res.json(products)
})

// Get single products by id
app.get('/api/v1/products/:productID', (req,res) => {
    const idToFind = parseInt(req.params.productID);

    // try to find the product
    const product = products.find((p) => p.id === idToFind);

    // handle "not found"
    if (!product) {
        return res.status(404).json({message: "That product was not found"})
    }

    res.json(product)
})

// Query example 
app.get('/api/v1/query', (req,res) => {
    const {search,limit,maxPrice} = req.query;

    let filtered = [...products];

    // name starts with search term
    if (search) {
        filtered = filtered.filter((p) =>
        p.name.toLowerCase().startsWith(search.toLowerCase()))
    }

    // maxPrice filter 
    if (maxPrice) {
        filtered = filtered.filter((p) => p.price <= parseFloat(maxPrice))
    }

    // limit results
    if (limit) {
        filtered = filtered.slice(0, Number(limit))
    }
    
    res.json(filtered)
})


// 404 handler comes after all other routes
app.all("*", (req, res) => {
    res.status(404).send("No page found");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
