const express = require("express");
//here we import the controller and if here we can also use the models
const registration = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register", registration.registration);

module.exports = router;
