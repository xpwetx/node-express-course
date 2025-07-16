// 12-http.js

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Received request for URL: ${req.url}`);

    res.writeHead(200, { 'Content-Type' : 'text/plain' });

    if (req.url === '/') {
        res.end('Hello! You are at the home page.');
    } else if (req.url === '/about') {
        res.end('This is the about page.'); 
        } else if (req.url === '/contact') {
            res.end('Contact us at contact@example.com');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 -- Page not found');
        }
    });

    server.listen(3000, () => {
        console.log('Server is listening on http://localhost:3000');
    });
