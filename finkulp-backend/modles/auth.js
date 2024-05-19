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
  addedStrategies: [ {
    type: Object
}],
  added_broker:[ {
    type: Object
}],
 
});

const User = mongoose.model('User', authSchema);
User.createIndexes();

module.exports = User;
