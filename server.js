const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const fs=require("fs")
const path=require ("path")
const userRoute = require("./Routes/userRoute");
const blogRoute = require("./Routes/blogRoute");

// Connect Data Base
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://0.0.0.0:27017/Blog_website")
  .then(() => {
    console.log("Data base Connected succesfully");
  })
  .catch((error) => {
    console.log(error);
  });

// ............. Middle ware ....................
// to decode post data from form
app.use(express.urlencoded({ extended: true }));
// this line to mean that all filles wanted by the programm will find it in assets
app.use(express.static("./assets"));


app.use("/users", userRoute);
app.use("/blogs", blogRoute);



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
