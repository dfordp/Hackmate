import express from 'express';

import { getAllEvents,getEventDetailsById,createEvent,updateEvent,deleteEvent } from '../controllers/events.controller.js';

const router = express.Router();

router.route('/').get(getAllEvents);
router.route('/').post(createEvent);
router.route('/:id').get(getEventDetailsById);
router.route('/:id').patch(updateEvent);
router.route('/:id').delete(deleteEvent);

export default router;
