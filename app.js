const express = require("express")
const app=express();
const  Connection  = require('./config/DBConnection.js');
const userRoutes=require("./Modules/Routes/User");
const postRoutes=require("./Modules/Routes/post");
const bodyParser=require("body-parser");
// const jobtRoutes = require('./Modules/Routes/job');
// const likeRoutes = require('./Modules/Routes/like')

Connection();

//----------------------------setHeaders------------------------------------------------
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin , X-Requested-With , Content-Type , Accept,authorization");//authorization to store the token
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE,OPTIONS");
    next();
})

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
// app.use("/api/like",likeRoutes);
// app.use("/api/job",jobtRoutes);
    

//------------------------
module.exports=app;