const userController=require("../Controllers/usersController")
const blogController = require("../Controllers/blogsController");
const express=require("express")
const route=express.Router()
// const fs=require("fs")
const path=require("path")

// Register
route.post("/register",async function (req,res){

    if(req.body.userName==""|| req.body.userEmail==""||req.body.userPassword=="")
    {
        res.send("Error : you should insert valid values")
    }
    else
    {
        let new_user=await userController.register_new_user(req.body);
        res.send("Successfull regestration go to sign in")
    }

})


// login
route.post("/login",async function( req,res){
    let data_of_login_user = await userController.login_user (req.body.userName,req.body.userPassword)
    if(data_of_login_user.length==0)
    {
        res.status(401).send('Error:invalid credentials')
    }
    else{
    // res.send("Welcome to blogs page")
    let blogs_data=await blogController.get_all_blogs()
    // console.log(blogs_data)
    res.sendFile(path.join(__dirname,"../assets/html/blogs_page.html"));
    // res.sendFile("../assets/html/blogs_page")
    // res.render("../assets/html/blogs_page")
    }
    
})




module.exports=route