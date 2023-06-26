const mongoose=require("mongoose");

const postSchema=mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    desc:{
        type:String
    },
    likes:[],
    createdAt: {
        type: Date,
        default: new Date(),
    },
    images:{
     type:String,   
    }
},{
    timestamps:true
})
module.exports=mongoose.model('Post',postSchema);