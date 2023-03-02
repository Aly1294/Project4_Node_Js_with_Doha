const userModel = require("../Models/usersModel")


async function login_user (userName,userPassword){
   
    let existed_user = await userModel.find({$and:[{$or:[{userName:userName},{userEmail:userName}]},{userPassword:userPassword}]})
    return existed_user
}


async function add_blog_to_user (userName,blogName){

    let userName_who_add_blog = await userModel.findOne({userName:userName})
    console.log("number of items in array = "+userName_who_add_blog.userBlogs.length)
    let user_who_add_blog = await userModel.updateOne({userName:userName},{$push:{"userBlogs":blogName}})
    let userName_who_add_blog2 = await userModel.findOne({userName:userName})
    console.log("number of items in array = "+userName_who_add_blog2.userBlogs.length)
    return user_who_add_blog
}

async function register_new_user (user_data){
    let new_user = await userModel.create(user_data)
    return new_user
}








module.exports={
    login_user,
    register_new_user,
    add_blog_to_user,
}
