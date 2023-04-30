import express from 'express';

import { getALLUsers,createUser,getUserInfoById ,updateUser , deleteUser} from '../controllers/user.controller.js';

const router = express.Router();

router.route('/getAllUsers').get(getALLUsers);
router.route('/find/:id').get(getUserInfoById);
router.route('/createUser').post(createUser);
router.route('/update/:id').patch(updateUser);
router.route('/delete/:id').delete(deleteUser);

export default router;