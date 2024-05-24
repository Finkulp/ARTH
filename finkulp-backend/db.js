const mongoose = require("mongoose");
const uri = "mongodb+srv://arunrathaur985:Aa9406789323@finkulpdatabase.eefv0im.mongodb.net/?retryWrites=true&w=majority&appName=FinkulpDataBase"; // Replace 'yourDatabaseName' with your actual database name
const connect = async () => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to Mongoose");
};

module.exports = connect;
