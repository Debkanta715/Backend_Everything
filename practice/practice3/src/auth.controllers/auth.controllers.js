const usermodel = require("../models/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieparser = require("cookie-parser");

async function registration(req, res) {
  const { username, email, password, role = "user" } = req.body;

  const isUserAlreadyExists = await usermodel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "user already exists",
    });
  }

  const pass = await bcrypt.hash(password, 10);

  const user = await usermodel.create({
    username,
    email,
    password: pass,
    role,
  });

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_URI,
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user created successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
}

async function login(req, res) {
  const { username, email, password } = req.body;

  const user = await usermodel.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res.status(409).json({
      message: "user is not registered",
    });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(409).json({
      message: "password is incorrect",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_URI,
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "user logged in successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
}

module.exports = { registration, login };
