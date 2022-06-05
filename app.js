const express = require("express")
const app=express();
const  Connection  = require('./config/DBConnection.js');
const userRoutes=require("./Modules/Routes/User");

Connection();
//----------------------------setHeaders------------------------------------------------
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin , X-Requested-With , Content-Type , Accept,authorization");//authorization to store the token
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE,OPTIONS");
    next();
})


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
    

//------------------------
module.exports=app;