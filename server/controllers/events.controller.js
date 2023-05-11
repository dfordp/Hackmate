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

const getLocationGeocode = async (req, res) => {
    try{
        const {locationName} = req.body;
        const apiKey = ""
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${locationName}&key=${apiKey}`;
        
        const response = await fetch(url);
        const data = await response.json();
        const {lat,lng} = data.results[0].geometry.location;
        res.status(200).json({lat,lng});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

const createEvent = async (req, res) => {
    try{
       const { eventName , eventDescription , eventType , eventLocation , eventDuration , eventDate , createdBy} = req.body 

       const eventExists = Event.findOne({eventName:eventName , createdBy:createdBy , eventType:eventType , eventLocation:eventLocation});

        if(eventExists){
            res.status(202).json({message:"Event already exists"});
        }

        else{

            const {latitude , longitude} = await getLocationGeocode(eventLocation);

            const type = eventType.lowerCase();
            const eventPic = "../../assests/event-pics/" + type + ".jpg";

            const newEvent = await Event.create({
                eventName : eventName,
                eventDescription : eventDescription,
                eventType : eventType,
                eventLocation : eventLocation,
                latitude : latitude,
                longitude : longitude,
                eventDuration : eventDuration,
                eventDate : eventDate,
                createdBy : createdBy,
                interestedUsers : [],
                eventPic : eventPic,
            });
            newEvent.save();
            res.status(200).json(newEvent);
        }
    
}
    catch(error){
        res.status(500).json({message:error.message});
    } 
};


const updateEvent = async (req, res) => {
    try{
        const { name, description, type, locationName, duration, date  } = req.body;
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