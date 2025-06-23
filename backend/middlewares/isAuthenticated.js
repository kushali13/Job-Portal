import jwt from "jsonwebtoken";
import express from "express";

import cookieParser from "cookie-parser";
const app=express();

const isAuthenticated=async(req,res,next)=>{
    try{
        app.use(cookieParser());

        const token = req.cookies.token;
        const decode = jwt.verify(token, "kushali");

        if(!token){
            return res.status(401).json({
                message:"User not Authenticate",
                success:false
            })
        }
        if(!decode){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        };
        req.id=decode.userId;
        next();
    }
    catch(error){
        console.log(error);
    }
}
export default isAuthenticated;