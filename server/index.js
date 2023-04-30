import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import redisClient from "./redis/redisClient.js";
import RedisStore from "connect-redis";
import session from "express-session";
// import http from "http";
// import {Server} from "socket.io";

import connectDB from "./mongodb/connect.js";

import userRouter from "./routes/user.routes.js";
import chatRouter from "./routes/chats.routes.js";
import eventRouter from "./routes/events.routes.js";

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());
// const server = http.createServer(app);
// const io = new Server(server);

app.get("/",(req,res)=>{
    res.send({message:"Hello World"});
});

app.use('/api/users',userRouter);
app.use('/api/chats',chatRouter);
app.use('/api/events',eventRouter);

app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 1 day
      }
    })
  );

const startServer=async()=>{
    try{
        connectDB(process.env.MONGO_URL);
        app.listen(8080, ()=>console.log("Server started on http://localhost:8080"));
    } catch(error){
        console.log(error);
    }
}


startServer();

// io.on('connection', (socket) => {
//     console.log('New user connected')
//     socket.on("join" , ({name,room}) => {
//        const user ={id:socket.id,name,room};
//         socket.join(user.room);
//         socket.emit("message",{user:"admin",text:`${user.name}, welcome to the room ${user.room}`});
//     });

//     socket.on("sendMessage",(message,callback)=>{
//         const user = getUser(socket.id);
//         io.to(user.room).emit("message",{user:user.name,text:message});
//         callback();
//     });

//     socket.on('disconnect', () => {
//         console.log('User was disconnected')
//     })
// }) 

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

