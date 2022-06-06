const express = require("express");
const app=express();
const cors = require("cors")
const  Connection  = require("./config/DBConnection.js");
const userRoutes=require("./Modules/Routes/User");
const postRoutes=require("./Modules/Routes/post");
const jobtRoutes = require("./Modules/Routes/job");
const likeRoutes = require("./Modules/Routes/like");
const bodyParser=require("body-parser");


//----------------------------setHeaders------------------------------------------------
app.use(cors())
Connection();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.get("/",(req ,res)=>{
    const obj={
        name :"hazem",
        age: 21,
        isvalid: true,
        DBKey: process.env.CONNECTION_URL
    }
    res.send(obj)
    console.log("helo")})



//-----------------------------userRoute----------------
app.use("/user",userRoutes);
app.use("/post",postRoutes);
app.use("/like",likeRoutes);
app.use("/job",jobtRoutes);
    

//------------------------
module.exports=app;