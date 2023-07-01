const express=require("express")
const {createChat,userChat,findChat}=require('../Controllers/chat Controller')
const router=express.Router()

router.route("/")
.post(createChat)

router.route("/:userId")
.get(userChat)

router.route("/find/:firstId/:secondId")
.get(findChat)

module.exports=router