import cookieParser from 'cookie-parser';
import express from 'express';
import session from 'express-session';

const app = express();

app.use(session({
    secret: 'mysecret', // Required: Set a strong secret key
    resave: false, // Required: Set to false unless you need to resave sessions
    saveUninitialized: false, // Required: Set
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}));

app.use(cookieParser("abhimanyu"));

app.get("/", (req, res)=>{

    console.log(req.session);
    console.log(req.session.id);
    res.cookie("name","express");
    res.status(200).send("hello man");
})

app.listen(8000, ()=>{
    console.log("server is running on http://localhost:8000");
})