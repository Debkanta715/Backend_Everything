const express = require("express");
const cookieParser = require("cookie-parser");
const authrouters = require("./authrouter/router");
const musicauthroutes = require("./authrouter/music.routes");
const app = express();

app.use(express.json());
app.use(cookieParser());

//prefix  for api

app.use("/api/auth", authrouters);
app.use("/api/auth", authrouters);

// for music create like artist

app.use("/api/music", musicauthroutes);
module.exports = app;
