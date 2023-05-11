import mongoose from "mongoose";


const eventSchema=new mongoose.Schema({
    eventName:{type:String,required:true},
    eventDescription:{type:String,required:true},
    eventType: {type:String,required:true},
    eventLocation:{type:String,required:true}, 
    latitude:{type:Number,required:true},
    longitude:{type:Number,required:true},
    eventDuration:{type:Number,required:true},
    eventDate:{type:Date,required:true},    
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    eventPic:{type:String,required:true},
    interestedUsers:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
});

const eventModel=mongoose.model("Event",eventSchema);

export default eventModel;