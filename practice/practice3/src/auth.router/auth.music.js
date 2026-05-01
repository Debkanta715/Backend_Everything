const express = require("express");
// const userregistration = require("../auth.controllers/auth.controllers");
const musiclogin = require("../auth.controllers/auth.music.controller");
const router = express.Router();

// router.post("/register", userregistration.registration);
// router.post("/login", userregistration.login);
router.post("/login", musiclogin.musiccreate);

module.exports = router;
