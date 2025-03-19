// Create a Simple HTTP Server – Build a server that responds with "Hello, World!" on any request.

// import http from "http"

// const server = http.createServer((req, res)=>{
//     // res.end("Hello, World!");
//     if(req.url === "/"){
//         res.end("Welcome to Home Page");
//     } else if(req.url === "/about"){
//         res.end("Welcome to about Page");
//     }else if(req.url === "/contact"){
//         res.end("Welcome to contact Page");
//     }else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("404 Not Found");
//     }
// })

// const port = 3000;

// server.listen(port,()=>{
//     console.log(`Server is running on http://localhost:${port}`);
// })


// ========================================
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log("__filename", __filename);
// console.log("__dirname", __dirname);

// output
// __filename /home/neuralit/Desktop/newlearning/backendnodejs/Practice12/httpServer.js
// __dirname /home/neuralit/Desktop/newlearning/backendnodejs/Practice12

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const filePath = path.join(__dirname, "index.html");
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("500 Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Us");
    } else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Contact Page");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
