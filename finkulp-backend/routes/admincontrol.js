const express=require('express');
const AdminData=require('../modles/adminauth');
const bycrypt=require("bcryptjs");
const jsonweb=require("jsonwebtoken");
const serect_data="This is very confidentail";
const fetchuser=require("../middleware/fetchuser");
const app=express();
app.post('/signup', async (req, res) => {
    try {
      let success=false;
      const { email, password, name,mobile } = req.body;
  
      const existingUser = await AdminData.findOne({ email: email });
      if (existingUser) {
        return res.json({success:success})
      }
  
      const hashedPassword = await bycrypt.hash(password, 10);
      const newUser = new AdminData({
        email: email,
        name: name,
        password: hashedPassword,
        mobile:mobile
      });
  
      await newUser.save();
      const id=newUser._id;
      // Create a JWT token with only the user ID as payload
      const token = jsonweb.sign({id:id}, serect_data);
      success=true;
      res.json({ authToken: token,success:success });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });
  
module.exports=app;
  