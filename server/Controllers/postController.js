const postModel=require('../modals/postSchema');
const asyncHandler=require('express-async-handler');
const userModel =require('../modals/userSchema');
const mongoose=require("mongoose");

const createPost=asyncHandler(async(req,res)=>{
    try{
        await postModel.create(req.body);
        res.status(200).json("posted successfully");
    }catch(error){
        res.status(500).json({message:error})
    }
})

const getPost=asyncHandler(async(req,res)=>{
    const id = req.params.id;

  try {
    const post = await postModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
})

const updatePost = async (req, res) => {
    const postId = req.params.id;
    const { userId } = req.body;
  
    try {
      const post = await postModel.findById(postId);
      if (post.userId === userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("Post updated!");
      } else {
        res.status(403).json("Authentication failed");
      }
    } catch (error) {
        res.status(500).json(error);
    }
  };

  const deletePost = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
  
    try {
      const post = await postModel.findById(id);
      if (post.userId === userId) {
        await post.deleteOne();
        res.status(200).json("Post deleted.");
      } else {
        res.status(403).json("Action forbidden");
      }
    }catch(error){
      res.status(500).json(error);
    }
  };

  const likePost = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
    try {
      const post = await postModel.findById(id);
      if (post.likes.includes(userId)) {
        await post.updateOne({ $pull: { likes: userId } });
        res.status(200).json("Post disliked");
      } else {
        await post.updateOne({ $push: { likes: userId } });
        res.status(200).json("Post liked");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

//   timeline post means this post includes the post of his/herself aur the person he/she have followed
const timelinePost=asyncHandler(async(req,res)=>{
    const userId=req.params.id;

    try{
        // issmera joh current login user h uska sara post mil jainga
        const currentUserPost=await postModel.find({userId:userId})


        // aggregration is array of step
        const followingPosts=await userModel.aggregate([
            {
                $match:{
                    _id:new mongoose.Types.ObjectId(userId)
                }
            },{
                // we use Lookup when we have to match the documnent in an other model by placing the query in an other model

                // means  here i placing query from the user model but we want to get result from post model
                $lookup:{
                    // posts refer to post model from where we get the result
                    from:"posts",
                    // localfield is a field against we want to integrate with other model
                    localField: "following",

                    // in the post modal we have userId field these user fiels match the local field that contain
                    // here we integrate with the localfield 
                    foreignField: "userId",

                    // as give the result int he form of following post object
                    as: "followingPosts",
                }
            },{
                // return type of aggregration means which fiels do you want to return
                $project:{
                    followingPosts:1,
                    _id:0
                }
            }
        ])

        res.status(200).json(
            currentUserPost
              .concat(...followingPosts[0].followingPosts)
            //   here from 0 index we target the following post
              .sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt);
              })
          );

    }catch(error){
      console.log(error);
        res.status(500).json(error);
    }
})
// **********************************************************
  
module.exports={
    createPost,
    getPost,
    updatePost,
    deletePost,
    likePost,
    timelinePost
}