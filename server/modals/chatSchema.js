const mongoose =require("mongoose");

const Schema=mongoose.Schema
const chatSchema=new Schema({
    members:{
        type:Array
    }
},{
    timestamps:true
})

module.exports=mongoose.model("Chat",chatSchema);