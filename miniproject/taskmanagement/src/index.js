import express from "express";


const app = express();


// Global middleware
app.use(express.json());


// Route related api
app.get("/", (req, res)=>{
    res.send("welcome to task management api yoy");
})

app.listen(8000, () =>{
    console.log("server is running on port http://localhost:8000");
})

