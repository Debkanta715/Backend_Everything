const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const modelschema = mongoose.model("user", userschema);

module.exports = modelschema;
