const express=require('express');
const AdminData=require('../modles/adminauth');
const bycrypt=require("bcryptjs");
const jsonweb=require("jsonwebtoken");
const serect_data="This is very confidentail";
const fetchuser=require("../middleware/fetchuser");
const app=express();
app.post('/signup', async (req, res) => {
  try {
      let success = false;
      const { email, password, name, mobile } = req.body;

      const existingUser = await AdminData.findOne({ email: email });
      if (existingUser) {
          return res.json({ success: success });
      }

      const hashedPassword = await bycrypt.hash(password, 10);
      const newUser = new AdminData({
          email: email,
          name: name,
          password: hashedPassword,
          mobile: mobile
      });

      await newUser.save();
      const id = newUser._id;
      // Create a JWT token with only the user ID as payload
      const token = jsonweb.sign({ id: id }, serect_data);
      success = true;
      res.json({ authToken: token, success: success });
  } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
      const findUser = await AdminData.findOne({ email: email });
      if (!findUser) {
          res.json({ success: false });
          return;
      }

      const isPasswordValid = await bycrypt.compare(password, findUser.password); // Await the bcrypt.compare function
        console.log(isPasswordValid);
      if (!isPasswordValid) {
          res.json({ success: false });
          return;
      }

      const id = findUser._id; // Create a payload object with user ID
      const token = jsonweb.sign({ id: id }, serect_data);

      res.json({ authToken: token, success: true });
  } catch (error) {
      console.error(error.message);
      res.json({ success: false });
      return;
  }
});
app.post("/fetchuser", fetchuser, async (req, res) => {
    jsonweb.verify(req.token, serect_data, async (err, authData) => {
      if (err) {
        res.status(403).send("Invalid token");
      } else {
        try {
          console.log(authData.id);
          const findUser = await AdminData.findOne({ _id:authData.id });
          console.log(findUser);
          if (findUser) {
            res.json({findUser,success:true});
          } else {
            res.status(404).send("User not found");
          }
        } catch (error) {
          console.error('Error querying database:', error.message);
          res.status(500).send("Server error");
        }
      }
    });
  });
  

module.exports = app;