import { Router } from "express";   // importing Router from express

const router = Router();   // creating a router

router.get("/user",(req, res)=>{
    res.send("hiii i am user");
})

router.get("/user-details",(req, res)=>{
    res.send("hiii i am user details");
})

router.get("/user-info",(req, res)=>{
    res.send("hiii i am user info");
})

export default router;