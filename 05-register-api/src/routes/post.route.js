const express = require("express");
const authcontroller = require("../controllers/auth.controller");
// for check the token that is correct user token or not we here also use the same pakages that is below
const jwt = require("jsonwebtoken");
//const postmodel = require("../models/user.models");
const userModel = require("../models/user.models");

const router = express.Router();

router.post("/create", async (req, res) => {
  // server two parts any token exits or not and if exits then those token are correct  or not
  //if not correct then return unauthorize

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "unauthorize",
    });
  }

  // here user correct token check
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({
      _id: decode.id,
    });
    console.log(user);
  } catch (err) {
    return res.status(401).json({
      message: "unauthorize",
    });
  }
  //   console.log(req.body);

  //   console.log(req.cookies);

  res.send("post create sucessfully");
});

module.exports = router;
