// for login artist (like they can create the music)

const musicschema = require("../model/music.model");
const jwt = require("jsonwebtoken"); // for the token genarate
const bcrypt = require("bcryptjs");

async function createmusic(req, res) {
  const token = req.cookies.token;

  // if no toeken get
  if (!token) {
    return res.this.status(401).json({
      message: "unauthorized user , login first ",
    });
  }

  // if token get so we have to verify in this token it have id and also role like it is artist or not or it is user or artist
  // for handel the error or resolve the imediate stop of the apps .
  try {
    const decoded = jwt.verify(token, process.env.JWT_URI); // in thsi decoded we store the verify data yes or no ike this

    // check the role here

    if (decoded.role !== "artist") {
      return res.status(401).json({
        message: "you have no access to create an music",
      });
    }
  } catch (err) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }

  // if it is artist then for create a music

  const { title } = req.body;
  const file = req.file;
}
