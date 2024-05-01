const express=require("express");
const login=require("../modles/login");
const bycrypt=require("bcryptjs");
const app=express();
app.post('/',async(req,res)=>{
    const{email,password}=req.login;
    if()
})