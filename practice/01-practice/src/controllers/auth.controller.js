const postmodel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registration(req, res) {
  const { username, email, password } = req.body;

  const ifUserAlredyExits = await postmodel.findOne({
    email,
  });

  if (ifUserAlredyExits) {
    return res.status(409).json({
      Message: "User alredy created ",
    });
  }

  //user create

  const user = await postmodel.create({
    username,
    email,
    password,
  });

  // toekn creation

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_URI,
  );

  // create a cookie

  res.cookie("token", token);

  // token print
  res.status(201).json({
    Message: "token created sucessfully",
    user,
  });
}

module.exports = { registration };
