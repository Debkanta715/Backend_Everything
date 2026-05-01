require("dotenv").config();
const app = require("./src/app");
const ConnectDB = require("./src/db/db");
ConnectDB();

app.listen(3222, () => {
  console.log("app is listen on port : 3222");
});
