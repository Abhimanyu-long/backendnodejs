import express from 'express';
import publicroute from './routes/public.routes.js';
import privateroute from './routes/private.routes.js';
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import logsmiddleware from './middleware/logs.middleware.js';

const app = express();

// inbuild middleware
app.use(express.json());

// global custom middleware
app.use(logsmiddleware)

const __filename = fileURLToPath(import.meta.url);  
console.log("this is file path",__filename);
const __dirname = path.dirname(__filename);
console.log("this is directory path",__dirname);

if(!fs.existsSync(path.join(__dirname, "logs"))){
    fs.mkdirSync(path.join(__dirname, "logs"));
}


app.use("/public", publicroute);
app.use("/private", privateroute);

app.listen(8000,()=>{
    console.log("server is runningon port http://localhost:8000");
})

