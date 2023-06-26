const express=require("express");
const {getUser,getAllUsers,updateUser,deleteUser,followUser,unfollow}=require("../Controllers/userController");

const router=express.Router();

router.route('/')
.get(getAllUsers)

router.route('/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUser)

router.route('/:id/follow')
.put(followUser)

router.route('/:id/unfollow')
.put(unfollow)

module.exports=router;