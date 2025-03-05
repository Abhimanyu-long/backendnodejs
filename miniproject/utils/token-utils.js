import crypto from "crypto";

export const generateToken = () =>{
    return crypto.randomBytes(32).toString("hex");
}

export const validateToken = (token) =>{
    return token.length === 64;
} 
