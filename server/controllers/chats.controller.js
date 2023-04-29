import Chat from '../mongodb/models/chat.js';
import Message from '../mongodb/models/message.js';

const createChat = async (req, res) => {
    try {
        const {userID1 , userID2} = req.body;

        const chatExists = await Chat.findOne({userID1,userID2});
        if(chatExists){
            res.status(200).json(chatExists)
        }

        const NewChat = await Chat.create({
            userID1,
            userID2,
        });
        res.status(201).json(NewChat);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};


const getChatDetailsById = async (req, res) => {
    try{
        const {id} = req.params;
        const chat = await Chat.findById(id);
        if(!chat){
            res.status(404).json({message:"Chat not found"});
        }
        chat.messages = await getMessages(chat.chatId);
        chat.users = await Chat.findById(id).populate('users');
        res.status(200).json(chat);
    }   
    catch(error){
        res.status(500).json({message:error.message});
    }
};

const getMessages = async (req, res) => {
    try{
        const {id} = req.params;
        const chat = await Chat.findById(id);
        if(!chat){
            res.status(404).json({message:"Chat not found"});
        }
        chat.messages = await Message.find({chatId:chat.chatId}).populate('messages');
        res.status(200).json(chat.messages);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

const sendMessage = async (req, res) => {
    try{
        const {chatId, sender, content} = req.body;
        const newMessage = await Message.create({
            chatId,
            sender,
            content,
            timestamp:Date.now()
        });
        res.status(201).json(newMessage);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

const deleteChat = async (req, res) => {};

export { createChat,getChatDetailsById,getMessages, sendMessage, deleteChat };