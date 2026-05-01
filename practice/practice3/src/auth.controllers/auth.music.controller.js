const usermodel = require("../models/music.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieparser = require("cookie-parser");

async function musiccreate(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "unauthorized user , login first ",
    });
  }

  try {
    const decode = jwt.verify(process.env.JWT_URI);

    if (decode.role !== "artist") {
      return res.status(401).json({
        message: "You have no acess to create the music ",
      });
    }
  } catch (err) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }

  const { title } = req.body;
  const file = req.file;
}

module.exports = { musiccreate };
