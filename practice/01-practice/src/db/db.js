const mongoose = require("mongoose");

async function connectDB() { // create  a function name connectDB
    //use try and catch for the error handel if the data base are not connect properly this time cath work 
  try {
    await mongoose.connect(process.env.MONGO_URI);  // MONGO_URI are store in .env 
    console.log("Database are connected sucessfully");
  } catch (err) {
    console.log("Data base are  not connected : the err are :", err);
  }
}

module.exports = connectDB;
