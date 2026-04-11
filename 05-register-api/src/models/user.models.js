const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const userModel = mongoose.model("user", userschema);

module.exports = userModel;
