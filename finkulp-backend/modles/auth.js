const mongoose = require('mongoose');
const { Schema } = mongoose;

const authSchema = new Schema({
 name:{
    type:String,
    require:true
 },
 email:{
    type:String,
    require:true,
    unique:true
 },
 password:{
    type:String,
    require:true
 },
 id:{
   type:String
 }
  }
);
const User=mongoose.model('user', authSchema);
User.createIndexes();
module.exports=User;