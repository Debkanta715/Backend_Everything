const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Data base is connected sucessfully");
  } catch (err) {
    console.log("Database connection errror: ", err);
  }
}

module.exports = connectDB;
