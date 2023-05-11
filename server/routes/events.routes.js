import express from 'express';

import { getAllEvents,getEventDetailsById,createEvent,updateEvent,deleteEvent } from '../controllers/events.controller.js';

const router = express.Router();

router.route('/getAllEvents').get(getAllEvents);
router.route('/createEvent').post(createEvent);
router.route('/getEventDetails/:id').get(getEventDetailsById);
router.route('/updateEvent/:id').patch(updateEvent);
router.route('/deleteEvent/:id').delete(deleteEvent);

export default router;
