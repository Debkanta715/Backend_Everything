require("dotenv").config(); //  require  the env pakages in the server

const app = require("./src/app"); // import the app fro the app.js
const connectDB = require("./src/db/db"); // here we impoprt the databse from db file
connectDB(); // call the connect db
app.listen(2004, () => {
  console.log("app  is listen on port : 2004");
});
