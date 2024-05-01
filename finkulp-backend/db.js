const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/IIT"; // Replace 'yourDatabaseName' with your actual database name
const connect = async () => {
 await mongoose.connect(uri)
  console.log("connected to Mongoose");
};

module.exports = connect;
