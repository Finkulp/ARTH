const express=require("express");
const Strategy=require("../modles/Strategy");
const User=require("../modles/auth");
const path = require('path');
const fetchuser=require('../middleware/fetchuser');
const jwt=require("jsonwebtoken");
const { spawn } = require('child_process');
const { exec } = require('child_process');
const serect_data="This is very confidentail";
const app=express();
app.use(express.json());


app.post("/addStrategy", fetchuser, async (req, res) => {
  try {
    const output = req.token;
    const jfy = jwt.verify(output, serect_data);
    console.log(jfy);

    const { addStrategy,strategyname } = req.body; // Expecting an object for the broker
    const userid = jfy.id;
    const name=strategyname;
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (!user.addedStrategies) {
      user.addedStrategies =[];
    }
    user.addedStrategies.push(addStrategy);
    console.log(user.addedStrategies)
    // Tell Mongoose that the addedStrategies field has been updated
    user.markModified('addedStrategies');
    let existingStrategy = await Strategy.findOne({ user: userid });

    if (existingStrategy) {
      // If it exists, update the specified strategy field
      existingStrategy[strategyname] = 1;
      await existingStrategy.save();
    } else {
      // If it doesn't exist, create a new strategy document
      const newStrategy = new Strategy({
        user: userid,
        [strategyname]: 1
      });
      await newStrategy.save();
    }


    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
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