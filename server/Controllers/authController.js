const UserModel=require('../modals/userSchema');
const asyncHandler=require("express-async-handler")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");



dotenv.config();
const registerUser=asyncHandler(async(req,res)=>{
    const {username,password,firstname,lastname,profilePicture,about,livesin,worksAt,relationship}=req.body;
    try{
    const userExist=await UserModel.findOne({username:username});
    if(userExist){
        res.status(404).json({message:"user is already there"});
    }
    const salt=await bcrypt.genSalt(10);
    const hashPass=await bcrypt.hash(password,salt);

    const newUser=new UserModel({
        username,
        password:hashPass,
        firstname,
        lastname,
        profilePicture,
        about,livesin,worksAt,relationship
    })
    
        const user =await newUser.save();
        const token = jwt.sign(
            { username: user.username, id: user._id },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
        );
        res.status(200).json({ user, token });
    }catch(error){
        res.status(500).json({message:error.message})
    }
});

const loginUser=asyncHandler(async(req,res)=>{
    const {username,password}=req.body;

    try{
        const user=await UserModel.findOne({username:username});
        if(user){
            const validity=await bcrypt.compare(password,user.password);

            if (!validity) {
                res.status(400).json("wrong password");
              } else {
                const token = jwt.sign(
                  { username: user.username, id: user._id },
                  process.env.JWT_KEY,
                  { expiresIn: "1h" }
                );
                res.status(200).json({ user, token });
              }
        }else{
            res.status(404).send("user doesnt exists")
        }
    }catch(error){
        res.status(500).json({message:error.message});
    }
})
module.exports={
    registerUser,
    loginUser
}