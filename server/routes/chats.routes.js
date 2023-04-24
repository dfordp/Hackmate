import express from 'express';

import { getMessages,getChatDetailsById,createChat,sendMessage,deleteChat } from "../controllers/chats.controller.js"

const router = express.Router();

router.route('/').post(createChat);
router.route('/:id').get(getChatDetailsById);
router.route('/:id/messages').get(getMessages);
router.route('/:id/messages').post(sendMessage);
router.route('/:id').delete(deleteChat);


export default router;