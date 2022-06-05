
const express=require("express");
const route=express.Router();
const User=require("../Models/User");

route.get("/get" ,(req ,res)=>{
    
    User.find({email :"bensariahazem@gmail.com"}).then(following=>{
        console.log(following)
        res.status(200).json(following)
    },err=>{
        console.log(err)
    })
})

module.exports=route;