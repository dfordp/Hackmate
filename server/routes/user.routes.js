import express from 'express';

import { getALLUsers,createUser,getUserInfoById ,updateUser , deleteUser} from '../controllers/user.controller.js';

const router = express.Router();

router.route('/').get(getALLUsers);
router.route('/:id').get(getUserInfoById);
router.route('/').post(createUser);
router.route('/:id').patch(updateUser);
router.route('/:id').delete(deleteUser);

export default router;