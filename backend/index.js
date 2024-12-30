import express from "express";
import dotenv from 'dotenv';
import { DBconnect } from "./config/Dbconnect.js";

dotenv.config({path:"backend/config/config.env"});
const app=express();


app.use(express.json());

//database
DBconnect();

import routeAuth from "./route/auth.js"
app.use("/api",routeAuth);

//for testing 
// app.get("/",(req,res)=>{
//     res.send("Server started");
// })


app.listen(4000,()=>{
    console.log("server run on port 4000");
});