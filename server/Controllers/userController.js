const userModel=require("../modals/userSchema");
const bcrypt=require("bcrypt");
const asyncHandler=require("express-async-handler");

const getUser=asyncHandler(async(req,res)=>{
    const id=req.params.id;

    try{
        const user=await userModel.findOne({_id:id});

        if(user){
            const {password,...otherDetails}=user._doc;
            
            res.status(200).json(otherDetails);
        }
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
})
const getAllUsers = async (req, res) => {

    try {
      let users = await userModel.find();
      users = users.map((user)=>{
        const {password, ...otherDetails} = user._doc
        return otherDetails
      })
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  };

const updateUser=asyncHandler(async(req,res)=>{
    const id=req.params.id;

    const{currentUserId,AdminStatus,password}=req.body;

    if(id==currentUserId||AdminStatus){
        try{
            if(password){
                const salt=await  bcrypt.genSalt(10);
                req.body.password=await bcrypt.hash(password,salt)
            }
            const user=await userModel.findByIdAndUpdate(id,req.body,{new:true});
            res.status(200).json(user);
        }catch(error){
            console.log(error);
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("Access Denied!")
    }
})

const deleteUser=asyncHandler(async(req,res)=>{
    const id=req.params.id;

    const{currentUserId,AdminStatus}=req.body;
    if(id==currentUserId||AdminStatus){
        try{
            await userModel.findByIdAndDelete(id);
            res.status(200).json("user deleted suceesfully")
        }catch(error){
            console.log(error);
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("Access Denied!")
    }

})

// follow a user

const followUser=asyncHandler(async(req,res)=>{
    const id=req.params.id;

    const{currentUserId}=req.body;
    if(id===currentUserId){
        res.status(403).json("action forbidden")
    }else{
        try{
            const follow=await userModel.findById(id)
            const following=await userModel.findById(currentUserId)

            if(!follow.followers.includes(currentUserId)){
                await follow.updateOne({$push:{followers:currentUserId}})
                await following.updateOne({$push:{following:id}})

                res.status(200).json("user followed!!!!!")
            }else{
                res.status(403).json("user is already followed by you")
            }
        }catch(error){
            console.log(error);
            res.status(500).json(error)
        }
    }
})

// unfollow user

const unfollow=asyncHandler(async(req,res)=>{
    const id=req.params.id;

    const {currentUserId}=req.body;
    if(currentUserId===id){
        req.status(403).josn("action forbidden!");
    }else{
        try{
            const unfollowUser=await userModel.findById(id)
            const unFollowing=await userModel.findById(currentUserId);

            if(unfollowUser.followers.includes(currentUserId)){

                await unfollowUser.updateOne({$pull : {followers:currentUserId}})
                await unFollowing.updateOne({$pull : {following: id}})

                res.status(200).json("Unfollowed Successfully!")

            }else{
                res.status(403).josn("you are not following user");
            }
        }catch(error){
            res.status(500).json(error)
        }
    }
})
module.exports={
    getUser,
    updateUser,
    deleteUser,
    followUser,
    unfollow,
    getAllUsers
}