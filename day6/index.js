import express from 'express';
import router from './routers/user.router.js';

const app = express();
const PORT = 8000;

// Global Middleware
function middlewareCheck(req, res, next){
    console.log("Global middleware is checked");
    next();
}
// app.use(middlewareCheck);

app.use("/api/v1/user",router);  // using router

app.get("/", middlewareCheck ,(req, res)=>{   // specific middleware
    res.send("server connected");
})


app.listen(PORT, ()=>{
    console.log("server is running on port",PORT);
})