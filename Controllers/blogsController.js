const blogModel = require ("../Models/blogsModel")
const fs=require("fs")
const path = require ("path")

async function get_all_blogs (){
    let data_blogs = await blogModel.find()
    return data_blogs ;
}
async function add_new_blog (blog_data){
    let new_blog = await blogModel.create(blog_data)
    return new_blog ;
}

async function get_blog_by_id (id){
    let wanted_blog = await blogModel.findOne({_id:id})
    return wanted_blog ;
}

async function get_blog_by_author_name (authorName){
    let wanted_blogs = await blogModel.find({author:authorName})
    console.log("wanted_blogs")
    return wanted_blogs ;

}

async function get_blog_by_title (title){
    let wanted_blogs = await blogModel.find({title:title})
    console.log("wanted_blogs")
    return wanted_blogs ;

}

// async function update_blog_by_id (id,newData){
//     let file_contain_data=fs.readFileSync("text.json","utf-8");
//     file_contain_data=JSON.parse(file_contain_data)
//     let wanted_blog_befor = await blogModel.findOne({_id:id})
//     let updated_blog = await blogModel.updateOne({_id:id},newData)
//     console.log("updated_blog")
//     return updated_blog ;
// }

async function delete_blog_by_id (id){
    let deleted_blog = await blogModel.deleteOne({_id:id})
    return deleted_blog ;
}

module.exports={
    add_new_blog,
    get_blog_by_id,
    get_blog_by_author_name,
    get_blog_by_title,
    get_all_blogs,
    // update_blog_by_id,
    delete_blog_by_id
}