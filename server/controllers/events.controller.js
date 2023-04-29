import Event from "../mongodb/models/event.js";
import User from "../mongodb/models/user.js";

const getAllEvents = async (req, res) => {
    try{
        const events = await Event.find({}).limit(req.query.end);
        res.status(200).json(events);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};


const getEventDetailsById = async (req, res) => {
    try{
    const {id} = req.params;
    const Event = await Event.findById(id);
    if(!Event){
        res.status(404).json({message:"Event not found"});
    }
    res.status(200).json(Event);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};


const createEvent = async (req, res) => {
    try{
        const { name, description, type, locationName, latitide, longitude, duration, date , createdBy } = req.body;

        const eventExists = await Event.findOne({name,createdBy});
        if(eventExists){
            res.status(200).json(eventExists)
        }

        const newEvent = await Event.create({
            name,
            description,
            type,
            locationName,
            latitide:0.00,
            longitude:0.00,
            duration,
            date,
            createdBy,
        });
        res.status(201).json(newEvent);
        User.findByIdAndUpdate(createdBy,{$push:{createdEvents:newEvent._id}});
    }   
    catch(error){
        res.status(500).json({message:error.message});
    } 
};


const updateEvent = async (req, res) => {
    try{
        const { name, description, type, locationName, location, duration, date  } = req.body;
        const {id} = req.params;

        const Event = await Event.findById(id);
        if(!Event){
            res.status(404).json({message:"Event not found"});
        }

        Event.name = name;
        Event.description = description;
        Event.type = type;
        Event.locationName = locationName;
        Event.latitide = latitide;
        Event.longitude = longitude;
        Event.duration = duration;
        Event.date = date;
        await Event.save();
        res.status(200).json(Event);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};


const deleteEvent = async (req, res) => {
    try{
        const {id} = req.params;
        const Event = await Event.findById(id);
        if(!Event){
            res.status(404).json({message:"Event not found"});
        }
        await Event.remove();
        res.status(200).json({message:"Event deleted successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

export{
    getAllEvents,
    getEventDetailsById,
    createEvent,
    updateEvent,
    deleteEvent,
}