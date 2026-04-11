const { Logs } = require("lucide-react");
const userModel = require("../models/user.models");
const jwt = require("jsonwebtoken");

async function registration(req, res) {
  // register api create
  //here we check the unique key are same or differnt like mobile number , email so we crate this here how it check
  // we can create a acccount with only a one mail

  const { username, email, password } = req.body;

  //here we check the  user is already or not
  const isUserAlreadyExits = await userModel.findOne({
    email,
  });
  if (isUserAlreadyExits) {
    return res.status(409).json({
      Message: "user alredy exits",
    });
  }

  ////



  const user = await userModel.create({
    username,
    email,
    password,
  });

  //token creation

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  //set the cookies
  res.cookie("token", token);

  //message send
  res.status(201).json({
    maessage: "user registerd sucessfully",
    user,
  });
}
module.exports = { registration };
