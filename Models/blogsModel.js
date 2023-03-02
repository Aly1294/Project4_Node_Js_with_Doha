const mongoose=require("mongoose")

let blogSchema=mongoose.Schema({
    author:String,
    title:String,
    body:String,
    // img:String,
    // tags:Array,
});


let blogModel=mongoose.model("blogs",blogSchema)

module.exports=blogModel;