import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.get("/dashboard", authMiddleware, (req, res)=>{
    res.status(200).send({
        message: `Welcome to dashboard ${req.user.name}`,
    });
})

//   "/dashboard"   ===> (access only they have token)

export default router;