const blogController = require("../Controllers/blogsController");
const userController = require("../Controllers/usersController");
const express = require("express");
const route = express.Router();
// const fs=require("fs")
const path = require("path");

// New Blog
route.post("/newBlog", async function (req, res) {
  if (req.body.title == "" || req.body.author == "" || req.body.body == "") {
    res.send("you should enter valid data");
  } else {
    let new_blog = await blogController.add_new_blog(req.body);
    let add_blog_to_user = await userController.add_blog_to_user(
      req.body.author,
      req.body.title
    );
    console.log(add_blog_to_user);
    res.send("Blog Saved Successfully");
  }
});

// Searching
route.post("/searchBlog", async function (req, res) {
  console.log(typeof req.body.blog_id);
  // searching by id
  if (req.body.blog_id != "") {
    let wanted_blog = await blogController.get_blog_by_id(req.body.blog_id);
    res.send(wanted_blog);
  }
  // searching by author
  else if (req.body.author != "") {
    let wanted_blog = await blogController.get_blog_by_author_name(
      req.body.author
    );
    res.send(wanted_blog);
  }
  // searching by title
  else if (req.body.title != "") {
    let wanted_blog = await blogController.get_blog_by_title(req.body.title);
    res.send(wanted_blog);
  } else {
    res.send("You should enter valid data");
  }
});

// route.put("/updateBlog",async function(req,res){
//     if (req.body.title == "" ||req.body.author == "" ||req.body.body == "" ||  ){
//         res.send("you should enter valid data")
//     }
//     else{
//         let new_blog= await blogController.add_new_blog(req.body)
//         let add_blog_to_user =await userController.add_blog_to_user(req.body.author,req.body.title)
//         console.log(add_blog_to_user)
//         res.send("Blog Saved Successfully")
//     }
// 
// })



// لما بشيل البوست و بحط مكانها ديليت مش بتشتغل لييييييييييه ؟ 
route.post("/deleteBlog",async function(req,res){
      if (req.body.blog_id == "" ){
          res.send("you should enter valid data")
      }
      else{
          let deleted_blog= await blogController.delete_blog_by_id(req.body.blog_id)
          res.send(deleted_blog)
      }
  })


module.exports = route;
