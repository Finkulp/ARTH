const express=require("express");
const Strategy=require("../modles/Strategy");
const StrategyInfo=require('../modles/strategyinfo')
const User=require("../modles/auth");
const path = require('path');
const fetchuser=require('../middleware/fetchuser');
const jwt=require("jsonwebtoken");
const { spawn } = require('child_process');
const { exec } = require('child_process');
const serect_data="This is very confidentail";
const crypto=require('crypto')
const axios = require('axios');
const app=express();
app.use(express.json());



const salt_key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';

app.post("/phonepepayment", fetchuser, async (req, res) => {
  const data = {
    "merchantId": "PGTESTPAYUAT",
    "merchantTransactionId": "MT7850590068188104",
    "merchantUserId": "MUID123",
    "amount": 10000,
    "redirectUrl": "https://chromewebstore.google.com/",
    "redirectMode": "REDIRECT",
    "callbackUrl": "https://www.facebook.com/",
    "mobileNumber": "9999999999",
    "paymentInstrument": {
      "type": "PAY_PAGE"
    }
  };

  try {
    const payload = JSON.stringify(data);
    const payloadMin = Buffer.from(payload).toString('base64');
    const keyIndex = 1;
    const string = payloadMin + '/pg/v1/pay' + salt_key;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + '###' + keyIndex;

    const options = {
      method: 'POST',
      url: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum,
        // Add other required authentication headers here if needed
      },
      data: {
        request: payloadMin
      }
    };

    const response = await axios.request(options);
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(error.response ? error.response.status : 500).json({ error: error.response ? error.response.data : 'Internal Server Error' });
  }
});


app.post("/addStrategy", fetchuser, async (req, res) => {
  try {
    const { strategy_name, user_id } = req.body;
    const strategyName = strategy_name.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    const userId = user_id;

    // Find the strategy by name (case-insensitive)
    let strategy = await Strategy.findOne({ Strategy_name: { $regex: new RegExp("^" + strategyName + "$", "i") } });

    if (strategy) {
      // Check if the user ID is already in the Users array
      const isUserIdPresent = strategy.Users.some(user => user.equals(userId));

      if (!isUserIdPresent) {
        strategy.Users.push(userId);
        await strategy.save();
      }
    } else {
      // If the strategy does not exist, create a new one with the user ID
      strategy = new Strategy({
        Strategy_name: strategyName,
        Users: [userId]
      });
      await strategy.save();
    }

    res.status(201).json(strategy);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});



app.post("/addTrade", fetchuser, async (req, res) => {
  try {
    // Get the token from the request
    const output = req.token;

    // Verify the token
    const decoded = jwt.verify(output, serect_data);
    const userid = decoded.id;

    // Get the trade details from the request body
    const newTrade = req.body.trade;

    // Find the user by ID
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Ensure the trades array exists
    if (!user.trades) {
      user.trades = [];
    }

    // Add the new trade to the trades array
    user.trades.push(newTrade);

    // Save the user with the updated trades
    await user.save();

    // Send the updated user as the response
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




app.post("/addStrategytouser", fetchuser, async (req, res) => {
  try {
    const output = req.token;
    const jfy = jwt.verify(output, serect_data);

    const { addedStrategy } = req.body; // Expecting an object for the strategy
    const userid = jfy.id;
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user.addedStrategies) {
      user.addedStrategies = [];
    }

    // Check if the strategy already exists
    const strategyExists = user.addedStrategies.some(strategy => strategy.Strategist === addedStrategy.Strategist);

    if (strategyExists) {
      return res.status(400).json({ error: "Strategy already added" });
    }

    user.addedStrategies.push(addedStrategy);
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/updatestrategystatus", fetchuser, async (req, res) => {
  try {
    const output = req.token;
    const jfy = jwt.verify(output, serect_data);

    const { strategyName, status } = req.body; // Expecting strategy name and new status
    const userid = jfy.id;
    const user = await User.findById(userid);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user.addedStrategies) {
      return res.status(400).json({ error: "No strategies to update" });
    }

    // Find the strategy by name and update its status
    const strategy = user.addedStrategies.find(strategy => strategy.Strategist === strategyName);
    if (strategy) {
      strategy.status = status;

      // Logging the modified strategy
      user.markModified('addedStrategies');
      await user.save();

      // Logging user strategies after modification
      console.log('After update:',strategy.status);

      return res.json(user);
    } else {
      return res.status(404).json({ error: "Strategy not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/getAllStrategyInfo", fetchuser, async (req, res) => {
  jwt.verify(req.token, serect_data, async (err, authData) => {
    if (err) {
      return res.status(403).send("Invalid token");
    } else {
      try {
        const findUser = await User.findOne({ _id: authData.id });
        if (!findUser) {
          return res.status(404).send("User not found");
        }

        const allStrategies = await StrategyInfo.find();
        res.status(200).json(allStrategies);
      } catch (error) {
        res.status(500).send("Internal Server Error");
      }
    }
  });
});

app.get('/:scriptName', (req, res) => {
  const scriptName = req.params.scriptName;
  console.log(scriptName);
  const childPython = spawn('python', [`Brokers/${scriptName}`]);
  // Listen for data event to capture stdout
  childPython.stdout.on('data', (data) => {
    console.log(`stderr:${data}`);
    res.send(data);
  });

  // Listen for error event to handle stderr
  childPython.stderr.on('data', (data) => {
    console.error(`stderr:${data}`);
  });

  // Listen for close event to send the response
  childPython.on('close', (code) => {
   console.log(`child process exited with code ${code}`);
  });
});

// app.get('Strategies/:scriptName', (req, res) => {
//   const scriptName = req.params.scriptName;
//   const childPython = spawn('python', [`${scriptName}`]);
//   // Listen for data event to capture stdout
//   childPython.stdout.on('data', (data) => {
//     console.log(`stderr:${data}`);
//     res.send(data);
//   });

//   // Listen for error event to handle stderr
//   childPython.stderr.on('data', (data) => {
//     console.error(`stderr:${data}`);
//   });

  // Listen for close event to send the response
//   childPython.on('close', (code) => {
//    console.log(`child process exited with code ${code}`);
//   });
// });

app.post("/addStrategy", fetchuser, async (req, res) => {
  try {
    const { strategy_name, user_id } = req.body;
    const strategyName = strategy_name.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    const userId = user_id;

    // Find the strategy by name (case-insensitive)
    let strategy = await Strategy.findOne({ Strategy_name: { $regex: new RegExp("^" + strategyName + "$", "i") } });

    if (strategy) {
      // Check if the user ID is already in the Users array
      const isUserIdPresent = strategy.Users.some(user => user.equals(userId));

      if (!isUserIdPresent) {
        strategy.Users.push(userId);
        await strategy.save();
      }
    } else {
      // If the strategy does not exist, create a new one with the user ID
      strategy = new Strategy({
        Strategy_name: strategyName,
        Users: [userId]
      });
      await strategy.save();
    }

    res.status(201).json(strategy);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});
app.delete("/removeUserFromStrategy", fetchuser, async (req, res) => {
  try {
    const { strategy_name, user_id } = req.body;
    const strategyName = strategy_name.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    const userId = user_id;

    // Find the strategy by name (case-insensitive)
    let strategy = await Strategy.findOne({ Strategy_name: { $regex: new RegExp("^" + strategyName + "$", "i") } });

    if (strategy) {
      // Check if the user ID is in the Users array
      const userIndex = strategy.Users.findIndex(user => user.equals(userId));

      if (userIndex !== -1) {
        // Remove the user ID from the Users array
        strategy.Users.splice(userIndex, 1);
        strategy.markModified('Users');
        await strategy.save();
        return res.status(200).json({ message: "User removed from strategy", strategy });
      } else {
        return res.status(404).json({ message: "User ID not found in strategy" });
      }
    } else {
      return res.status(404).json({ message: "Strategy not found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});


app.post("/addBroker", fetchuser, async (req, res) => {
  try {
    const output = req.token;
    const jfy = jwt.verify(output, serect_data);
    console.log(jfy);

    const { addedBroker } = req.body; // Expecting an object for the broker
    const userid = jfy.id;
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user.added_broker) {
      user.added_broker = [];
    }

    user.added_broker.push(addedBroker);
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



// app.post("/",async(req,res)=>{
//   const{title,description}=req.body;
//   console.log(title);
//   console.log(description);
//   if(await notes.findOne({title:title})){
//     res.send("book with same title alredy exist");
//   }
//   else{
//     const Newbok=new notes({
//       title:title,
//       description:description
//     });
//     await Newbok.save();
//     res.send(`New Notes are added`);
//   }
// })

// app.get('/getnotes', fetchuser, async (req, res) => {
//   if (req.token) {
//       try {
//           const output = req.token;
//           const jfy=jwt.verify(output,serect_data);
//           console.log(jfy);
//           const note = await notes.find({ user:jfy.id });
//           if (note) {
//               res.json(note);
//           } else {
//               res.status(404).json({ error: "Note not found" });
//           }
//       } catch (error) {
//           res.status(500).json({ error: error.message });
//       }
//   } else {
//       res.status(401).json({ error: "Access denied" });
//   }
// });
//posting the notes on the same user id



// //update the existing note
// app.put('/updatenote/:id',fetchuser,async(req,res)=>{
//   const output=req.token;
//   const jfy=jwt.verify(output,serect_data);
//   if(jfy){
//     const{title,description}=req.body;
//     const Newnote={};
//     if(title){Newnote.title=title};
//     if(description){Newnote.description=description}
//     console.log(req.params.id);
//     const nnote=await notes.findById(req.params.id);
//     if(!nnote){return res.status(404).send("not found")}
//     const note=await notes.findByIdAndUpdate(req.params.id,{$set:Newnote});
//     res.json("Updated succesfully");
//   }

// })


// app.delete('/deletenote/:id',fetchuser,async(req,res)=>{
//   const output=req.token;
//   const jfy=jwt.verify(output,serect_data);
//   if(jfy){
//     console.log(req.params.id);
//     const nnote=await notes.findById(req.params.id);
//     if(!nnote){return res.status(404).send("not found")}
//     const note=await notes.findByIdAndDelete(req.params.id);
//     res.json("Deleted succesfully");
//   }

// })

module.exports=app;