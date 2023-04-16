import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    avatarImage: {type: String, required: true},
    bgImage: {type: String, required: true},
    userAbout: {type: String, required: true},
    previousEvents: [{type: mongoose.Schema.Types.ObjectId, ref: "Event"}],
    createdEvents: [{type: mongoose.Schema.Types.ObjectId, ref: "Event"}],
    interestedIn: [{type: mongoose.Schema.Types.ObjectId, ref: "Event"}],
    githubUsername: {type: String, required: false},
    instaUsername: {type: String, required: false},
    twitterUsername: {type: String, required: false},
    reportedBy:{type:Number,required:false},
});

const userModel=mongoose.model("User",userSchema);

export default userModel;