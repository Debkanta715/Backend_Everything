const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // require means when the user create a account this time they have to give the username mandatoryly
    unique: true, // unique username
  },
  email: {
    type: String,
    required: true, // require means when the user create a account this time they have to give the username mandatoryly
    unique: true,
  },
  password: {
    type: String,
    required: true, // require means when the user create a account this time they have to give the username mandatoryly
  },
  role: {
    type: String,
    enum: ["user", "artist"], // enum said the role can be for the user or artist and basis of this role they can acces some features
    default: "user",
  },
});

const usermodel = mongoose.model("user", userschema);
module.exports = usermodel;
