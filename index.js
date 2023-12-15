import express from 'express';
const app=express();
import {connectDB} from "./database/connectDB.js"

import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const URL = process.env.DATABASE_URL;

app.get("/",(req,res)=>{
    res.send("Mike testing 123");
})
connectDB(URL);

app.listen(port ,()=>{
    console.log(`Server listening in ${port}`);
})

