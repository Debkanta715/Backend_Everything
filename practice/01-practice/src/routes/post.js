const express = require("express");
const jwt = require("jsonwebtoken");
const postmodel = require("../models/user.model");
const controller = require("../controllers/auth.controller");

const router = express.Router();

router.post("/create", async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      Message: "undefined",
    });
  }
  //check correct token

  try {
    const decode = jwt.verify(token, process.env.JWT_URI);
    const user = await postmodel.findOne({
      _id: decode.id,
    });
    console.log(user);
  } catch (err) {
    return res.status(401).json({
      Message: "undefined",
    });
  }

  res.send("post created sucessfully");
});

module.exports = router;
