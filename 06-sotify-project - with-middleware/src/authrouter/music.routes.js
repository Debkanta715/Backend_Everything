const express = require("express");
const musiccontroller = require("../auth.controller/music.controller");
const multer = require("multer");
// const authenticate = require("../middleware/auth");

const upload = multer({
  storage: multer.memoryStorage(),
});
const router = express.Router();

router.post("/upload", upload.single("music"), musiccontroller.createmusic);

router.post("/album", upload.single("music"), musiccontroller.createalbum);

module.exports = router;
