import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";

import {userRouter} from "./routes/users.routes.js";
import {chatRouter} from "./routes/chats.routes.js";
import {eventRouter} from "./routes/events.routes.js";

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send({message:"Hello World"});
});{
app.use('/users',userRouter);
app.use('/chats',chatRouter);
app.use('/events',eventRouter);

const startServer=async()=>{
    try{
        connectDB(process.env.MONGO_URL);
        app.listen(8080, ()=>console.log("Server started on http://localhost:8080"));
    } catch(error){
        console.log(error);
    }
}

startServer();