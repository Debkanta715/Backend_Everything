require("dotenv").config();
const app = require("./src/app");
const connectdb = require("./src/db/db");
connectdb();
app.listen(1000, () => {
  console.log("app is listen on port : 1000");
});
