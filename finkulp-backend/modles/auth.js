const mongoose = require('mongoose');
const { Schema } = mongoose;

const authSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String
  },
  mobile: {
    type: Number
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  id: {
    type: String
  },
  alternateMobile: {
    type: Number
  },
  addedStrategies: [{
    type: Object
  }],
  added_broker: [{
    type: Object
  }],
  netCaptialValue: {
    type: Number,
    default: 0
  },
  PandL: {
    type: Number,
    default: 0
  },
  TradingVolume: {
    type: Number,
    default: 0
  },
  finkulpMoneyUsage: {
    type: Number,
    default: 0
  },
  StrategiesDeployed: {
    type: Number,
    default: 0
  },
  dateOfBirth: {
    type: Date
  },
  address: {
    type: String
  },
  securityQuestion: {
    type: String
  },
  securityAnswer: {
    type: String
  },
  profileImage: {
    type: String
  }
});

const User = mongoose.model('User', authSchema);
User.createIndexes();

module.exports = User;
