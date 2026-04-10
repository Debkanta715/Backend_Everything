const { Logs } = require("lucide-react");
const userModel = require("../models/user.models");
const jwt = require("jsonwebtoken");

async function registration(req, res) {
  const { username, email, password } = req.body;

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
  res.cookie("token-dev", token);


  //message send 
  res.status(201).json({
    maessage: "user registerd sucessfully",
    user,
  });
}
module.exports = { registration };
