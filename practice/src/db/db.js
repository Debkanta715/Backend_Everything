const mongoose = require("mongoose");

async function ConnectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database are connected Sucessfully");
  } catch (err) {
    console.log("Data base are not connect, the error is : ", err);
  }
}

module.exports = ConnectDB;
