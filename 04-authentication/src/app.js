const express = require("express");
// const userModel = require("./src/models/user.model");
const authroutes = require("./routes/auth.route");
const cookieParser = require("cookie-parser");
const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authroutes); // here /api/auth is the prefix it always use when we create the api
module.exports = app;
