const express = require("express");
const cookieParser = require("cookie-parser");
const authcontroller = require("./auth.router/auth.router");
const authmusic = require("./auth.router/auth.music");
const app = express();

app.use(express.json()); // middelware
app.use(cookieParser());

app.use("/api/auth/", authcontroller);
app.use("/api/auth/", authcontroller);

app.use("/api/auth/", authmusic);

module.exports = app;
