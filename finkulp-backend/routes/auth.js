const express=require('express');
const user=require('../modles/auth');
const bycrypt=require("bcryptjs");
const jsonweb=require("jsonwebtoken");
const serect_data="This is very confidentail";
const fetchuser=require("../middleware/fetchuser");
const app=express();


//This is for creating a new user
app.post('/', async (req, res) => {
  try {
    let success=false;
    const { email, password, name } = req.body;

    const existingUser = await user.findOne({ email: email });
    if (existingUser) {
      return res.json({success:success})
    }

    const hashedPassword = await bycrypt.hash(password, 10);
    const newUser = new user({
      email: email,
      name: name,
      password: hashedPassword
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


// This is for  login a user
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const findUser = await user.findOne({ email: email });

    if (!findUser) {
      return res.status(404).send("User with this email does not exist in the database");
    }

    const isPasswordValid =  bycrypt.compare(password, findUser.password);

    if (!isPasswordValid) {
      return res.status(401).send("Incorrect password");
    }
    const id = findUser._id ; // Create a payload object with user ID
    const token = jsonweb.sign({id:id}, serect_data);

    res.json({ authToken: token, success: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});



// for getting the details of user
app.post("/fetchuser", fetchuser, async (req, res) => {
 jsonweb.verify(req.token,serect_data,(err,authData)=>{
  if(err){
    res.send("Invalid token");
  }
  else{
    res.json({
      authData
    })
  }
 })
});


module.exports=app;
