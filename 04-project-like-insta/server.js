require('dotenv').config();
const app = require("./src/App");
const connectDB = require("./src/database/DB");

connectDB();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});