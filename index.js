const http = require('http');

const PORT = 8080;

const SERVER = http.createServer((request, response)=>{
    console.log(request.url);
    response.end("server connection is on");
})

SERVER.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`)
})