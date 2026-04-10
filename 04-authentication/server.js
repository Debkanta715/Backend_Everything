require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB();

app.listen(4002, () => {
  console.log("app is listen on port 4002");
});
