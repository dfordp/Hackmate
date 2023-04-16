import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    chatId:{type:String,required:true},
    sender:{type:String,required:true},
    message:{type:String,required:true},
    timestamp:{type:Date,default:Date.now},
});

const messageModel = mongoose.model("Message",messageSchema);

export default messageModel;