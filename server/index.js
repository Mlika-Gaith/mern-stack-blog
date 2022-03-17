// * creating express server
// * install and use nodemon for a responsive server
const express = require("express");
const app = express();
// * adding mongodb url
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to db"))
  .catch((err) => console.log(err));
app.listen("8080", () => console.log("server running"));
