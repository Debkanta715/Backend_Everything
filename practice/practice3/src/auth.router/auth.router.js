const express = require("express");
const userregistration = require("../auth.controllers/auth.controllers");
const router = express.Router();

router.post("/register", userregistration.registration);
router.post("/login", userregistration.login);

module.exports = router;
