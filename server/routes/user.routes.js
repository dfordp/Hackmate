import express from 'express';

import { getALLUsers,createUser,getUserInfoById } from '../controllers/user.controller.js';

const router = express.Router();

router.route('/').get(getALLUsers);
router.route('/:id').get(getUserInfoById);
router.route('/').post(createUser);

export default router;