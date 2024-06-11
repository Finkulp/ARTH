const mongoose = require('mongoose');

const strategySchema = new mongoose.Schema({
  Strategy_name: {
    type: String,
    required: true
  },
  StrategyDescription: {
    type: Object
  },
});

const StrategyInfo = mongoose.model('StrategyInfo', strategySchema);

module.exports = StrategyInfo;