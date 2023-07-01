const express=require("express");
const { addMessage, getMessages } = require("../Controllers/messageController");

const router=express.Router()

router.route('/')
.post(addMessage)

router.route('/:chatId')
.get(getMessages)

module.exports=router