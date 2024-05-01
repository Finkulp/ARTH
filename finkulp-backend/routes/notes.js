const express=require("express");
const notes=require("../modles/notes");
const fetchuser=require('../middleware/fetchuser');
const jwt=require("jsonwebtoken");
const serect_data="This is very confidentail";
const app=express();
app.post("/",async(req,res)=>{
  const{title,description}=req.body;
  console.log(title);
  console.log(description);
  if(await notes.findOne({title:title})){
    res.send("book with same title alredy exist");
  }
  else{
    const Newbok=new notes({
      title:title,
      description:description
    });
    await Newbok.save();
    res.send(`New Notes are added`);
  }
})

app.get('/getnotes', fetchuser, async (req, res) => {
  if (req.token) {
      try {
          const output = req.token;
          const jfy=jwt.verify(output,serect_data);
          console.log(jfy);
          const note = await notes.find({ user:jfy.id });
          if (note) {
              res.json(note);
          } else {
              res.status(404).json({ error: "Note not found" });
          }
      } catch (error) {
          res.status(500).json({ error: error.message });
      }
  } else {
      res.status(401).json({ error: "Access denied" });
  }
});
//posting the notes on the same user id
app.post("/postnotes",fetchuser,async(req,res)=>{
  const output=req.token;
  const jfy=jwt.verify(output,serect_data);
  console.log(jfy);
  const{title,description}=req.body;
  const userid=jfy.id;
  const Notes=new notes({
    user:userid,
    title:title,
    description:description
  });
  await Notes.save();
  res.json(Notes);
})


//update the existing note
app.put('/updatenote/:id',fetchuser,async(req,res)=>{
  const output=req.token;
  const jfy=jwt.verify(output,serect_data);
  if(jfy){
    const{title,description}=req.body;
    const Newnote={};
    if(title){Newnote.title=title};
    if(description){Newnote.description=description}
    console.log(req.params.id);
    const nnote=await notes.findById(req.params.id);
    if(!nnote){return res.status(404).send("not found")}
    const note=await notes.findByIdAndUpdate(req.params.id,{$set:Newnote});
    res.json("Updated succesfully");
  }

})


app.delete('/deletenote/:id',fetchuser,async(req,res)=>{
  const output=req.token;
  const jfy=jwt.verify(output,serect_data);
  if(jfy){
    console.log(req.params.id);
    const nnote=await notes.findById(req.params.id);
    if(!nnote){return res.status(404).send("not found")}
    const note=await notes.findByIdAndDelete(req.params.id);
    res.json("Deleted succesfully");
  }

})

module.exports=app;