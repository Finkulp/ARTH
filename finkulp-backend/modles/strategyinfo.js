const mongoose = require('mongoose');

const strategySchema = new mongoose.Schema({
  Strategy_name: {
    type: String,
    required: true
  },
});

const Strategy = mongoose.model('Strategy', strategySchema);

module.exports = Strategy;