// Create a Simple HTTP Server – Build a server that responds with "Hello, World!" on any request.

import http from "http"

const server = http.createServer((req, res)=>{
    res.end("Hello, World!");
})

const port = 3000;

server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

