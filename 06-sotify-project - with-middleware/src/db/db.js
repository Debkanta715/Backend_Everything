const { LogIn } = require("lucide-react");
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database are connected sucessfully");
  } catch (err) {
    console.log("Data base are not conneted , this is the error :", err);
  }
}

module.exports = connectDB;
