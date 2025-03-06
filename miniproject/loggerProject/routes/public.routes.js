import { Router } from "express";
import { generateToken } from "../utils/token-utils.js";

const router = Router();

router.get("/generate-token", (req, res)=>{
    const token= generateToken();

    res.status(200).send({
        message:"Token generated successfully",
        token:token
    })
})

router.get("/", (req, res)=>{
    res.status(200).send({
        message:"Welcome to home page",
    })
})

export default router;