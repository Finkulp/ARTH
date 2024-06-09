const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Trade schema
const tradeSchema = new Schema({
  strategyName: {
    type: String,
    default: ""
  },
  tradeType: {
    type: String,
    default: ""
  },
  entryPrice: {
    type: Number,
    default: 0
  },
  exitPrice: {
    type: Number,
    default: 0
  },
  dateTime: {
    type: Date,
    default: Date.now
  },
  capitalInvested: {
    type: Number,
    default: 0
  },
  profitLoss: {
    type: Number,
    default: 0
  }
});

// Define the User schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String
  },
  trades: [tradeSchema], // Change to an array of tradeSchema
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
  netCapitalValue: {
    type: Number,
    default: 0
  },
  PandL: {
    type: Number,
    default: 0
  },
  tradingVolume: {
    type: Number,
    default: 0
  },
  finkulpMoneyUsage: {
    type: Number,
    default: 0
  },
  strategiesDeployed: {
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

const User = mongoose.model('User', userSchema);
User.createIndexes();

module.exports = User;
