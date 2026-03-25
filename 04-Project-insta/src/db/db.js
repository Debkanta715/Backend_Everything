const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://yt:PFsDio394LwdmmkE@firstproject.eieqkdx.mongodb.net/",
  );
  console.log("connect to db");
}

module.exports = connectDB;
