// for login artist (like they can create the music)

const musicModel = require("../model/music.model");
const albummodel = require("../model/album.model");
const jwt = require("jsonwebtoken");
const { uploadFile } = require("../services/storage.service");

async function createmusic(req, res) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "unauthorized user, login first",
    });
  }

  // if token get so we have to verify in this token it have id and also role like it is artist or not or it is user or artist
  // for handel the error or resolve the imediate stop of the apps .
  try {
    const decoded = jwt.verify(token, process.env.JWT_URI); // in thsi decoded we store the verify data yes or no ike this

    // check the role here

    if (decoded.role !== "artist") {
      return res.status(401).json({
        message: "you have no access to create a music",
      });
    }

    // if it is artist then for create a music

    const { title } = req.body;
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No music file uploaded" });
    }
    const result = await uploadFile(file.buffer.toString("base64"));
    const music = await musicModel.create({
      uri: result.url,
      title,
      artist: decoded.id,
    });
    res.status(201).json({
      message: "Music created successfully",
      music: {
        id: music._id,
        uri: music.uri,
        title: music.title,
        artist: music.artist,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "unauthorized",
    });
  }
}

async function createalbum(req, res) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "you can not create album ",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_URI);

    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "unauthorized Cookies not match ",
      });
    }

    const { title, musics } = req.body;

    const albnum = await albummodel.create({
      title,
      artist: decoded.id,
      musics: musics,
    });

    res.status(201).json({
      message: "album created successfully",
      albnum: {
        id: albnum._id,
        title: albnum.title,
        artist: albnum.artist,
        musics: albnum.musics,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "unauthorized",
    });
  }
}
module.exports = { createmusic, createalbum };
