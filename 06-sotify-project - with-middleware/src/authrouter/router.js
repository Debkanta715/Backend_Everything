// api create here

const express = require("express");
const authcontroller = require("../auth.controller/controller");
const router = express.Router();

router.post("/register", authcontroller.registerUser); // here only write the api name or /path but the logic are written in the controllers
router.post("/login", authcontroller.loginuser);
module.exports = router;
