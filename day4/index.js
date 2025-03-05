const http = require('http');
const fs = require('fs');

const file = "data.txt"

const server = http.createServer((request, response)=>{

// // downloading files in bad way X
//     if(fs.existsSync(file)){
//         const filedetails = fs.readFileSync(file)
//         response.end(filedetails);
//     }else{
//         response.end("somethings wrong");
//     }


// Downloading file in a good way (Stream)
    if(fs.existsSync(file)){
        const readablestream= fs.createReadStream(file)
        readablestream.pipe(response);
    }else{
        response.end("somethings wrong");
    }
        
})


server.listen(8000,()=>{
    console.log("server is running on 8000");
})


// stream  ===> writeable and readable
//  readable<=== pipe ===>writeable

// req : readable stream 
// res : writeable stream


