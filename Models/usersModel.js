const mongoose=require("mongoose")

let userSchema=mongoose.Schema({
    userName:String,
    userEmail:String,
    userPassword:Number,
    userBlogs:Array,
});


let userModel=mongoose.model("users",userSchema)
module.exports=userModel;