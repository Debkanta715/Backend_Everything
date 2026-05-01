const mongoose = require("mongoose");

async function ConnectDB() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Data base are connected sucessfully");
  } catch (err) {
    console.log("data base are not connected sucessfully");
  }
}

module.exports = ConnectDB;
