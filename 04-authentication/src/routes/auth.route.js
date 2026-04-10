const express = require("express");
const authcontroller = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register", authcontroller.registration);
router.get("/test", (req, res) => {
  console.log("cookies:", res.cookie);

  res.json({
    Message: "test route",
    cookies: req.cookies,
  });
});
module.exports = router;
