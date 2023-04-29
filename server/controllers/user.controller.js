import User from '../mongodb/models/user.js';


const getALLUsers = async (req, res) => {
    try{
        const users = await User.find({}).limit(req.query.end);
        res.status(200).json(users);
    } catch(error){
        res.status(500).json({message:error.message});
    }
};

const createUser = async (req, res) => {
    try{
        const {name ,email , userName} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            res.status(200).json(userExists)
    }

    const newUser = await User.create({
        name,
        email,
        userName,
        avatar,
        bgImage,
        userAbout:"Passionate Bootscript Developer",
        createdEvents:[],
        previousEvents:[],
        interestedIn:[],
        previouslyConnectWith:[],
        githubUsername:"",
        instaUsername:"",
        twitterUsername:"",
        reportedBy:0,
    });
    res.status(201).json(newUser);
    } catch(error){
        res.status(500).json({message:error.message});
    }
};

const getUserInfoById = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        
        if(!user){
            res.status(404).json({message:"User not found"});
        }
        res.status(200).json(user);
    } catch(error){
        res.status(500).json({message:error.message});
    }
};

const updateUser = async (req, res) => {
    try{
        const {instaUsername,githubUsername,twitterUsername, userAbout} = req.body;
        const {id} = req.params;

        const user = await User.findById(id);
        if(!user){
            res.status(404).json({message:"User not found"});
        }
        user.instaUsername = instaUsername;
        user.githubUsername = githubUsername;
        user.twitterUsername = twitterUsername;
        user.userAbout = userAbout;
        await user.save();
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

const deleteUser = async (req, res) => {
    
};

export{
    getALLUsers,
    createUser,
    getUserInfoById,
    updateUser,
    deleteUser,
}

