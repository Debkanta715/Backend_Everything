const express = require("express");
const authroutes = require("./routes/auth.routes");
const post = require("./routes/post");
const cookie = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookie());

app.use("/api/auth", authroutes);
app.use("/api/postt", post);

module.exports = app;
