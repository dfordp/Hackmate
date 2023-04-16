import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    chatId: {
        type: String,
        required: true
      },
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      content: {
        type: String,
        required: true
      },
      timestamp: {
        type: Date,
        default: Date.now
      }
});

const messageModel = mongoose.model("Message",messageSchema);

export default messageModel;