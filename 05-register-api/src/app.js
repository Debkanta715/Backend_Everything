const express = require("express");
// const userModel = require("./src/models/user.model");
const authroutes = require("./routes/auth.route");
const postroutes = require("./routes/post.route");



const cookieParser = require("cookie-parser");
const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authroutes); // here /api/auth is the prefix it always use when we create the api

app.use("/api/post", postroutes);  // here i use the /api/post so post name i can give also differnt name based on my choice 

module.exports = app; 
