require("dotenv").config();
const { config } = require("dotenv");
const app = require("./src/app");

const connectDB = require("./src/db/db");
connectDB();

app.listen(2111, () => {
  console.log("app is listen on port 2111");
});
