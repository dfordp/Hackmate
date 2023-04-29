import mongoose from "mongoose";


const eventSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    type: {type:String,required:true},
    locationName:{type:String,required:true}, 
    latitide:{type:Number,required:true},
    longitude:{type:Number,required:true},
    duration:{type:Number,required:true},
    date:{type:Date,required:true},    
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"Usr"},

});

const eventModel=mongoose.model("Event",eventSchema);

export default eventModel;