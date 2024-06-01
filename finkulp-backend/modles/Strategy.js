const mongoose = require('mongoose');
const { Schema } = mongoose;

const strategySchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  Strategy1:{
    type:Number,
    default:0
  },
  Strategy2:{
    type:Number,
    default:0
  },
  Strategy3:{
    type:Number,
    default:0
  },Strategy4:{
    type:Number,
    default:0
  },
  Strategy5:{
    type:Number,
    default:0
  },
  Strategy6:{
    type:Number,
    default:0
  },Strategy7:{
    type:Number,
    default:0
  },
  Strategy8:{
    type:Number,
    default:0
  },
  Strategy9:{
    type:Number,
    default:0
  },
  Strategy10:{
    type:Number,
    default:0
  },
});

const Strategy = mongoose.model('Strategy', strategySchema);

module.exports = Strategy;
