import express from 'express';

const app = express();

app.get("/", (req, res)=>{
    res.cookie("name","express");
    res.status(200).send("hello man");
})

app.listen(8000, ()=>{
    console.log("server is running on http://localhost:8000");
})