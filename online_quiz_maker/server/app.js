const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
// const Quiz=require("./models/Quiz");

const app = express();
const port = 8080;

const conn = mongoose.connect("mongodb://localhost:27017/CodeSoft_Quiz")
.then(()=>{console.log("MongoDB connection successful")})
.catch((error)=>{console.log(error)});

app.get("/",async(req,resp)=>{
   const user=await User.findOne({});
    resp.send(user);
})


app.listen(port,()=>{
    console.log(`server started at port no : ${port}`)
})
