import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    chatId: {
        type: String,
        required: true,
        unique: true
      },
      users: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        }
      ]
});

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;