const express = require("express");
const ConnectToDB = require("./DB/connectToDB");
require("dotenv").config();
const app = express();

ConnectToDB();

app.use(express.json());

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Listening on http://localhost:4000");
});
