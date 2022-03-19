// * creating express server
// * install and use nodemon for a responsive server
const express = require("express");
const app = express();

// * adding mongodb and dotenv
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

// * routes
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");

//using json
app.use(express.json());

// * connecting to mongodb
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("connected to db"))
  .catch((err) => console.log(err));
// ? auth route

app.use("/", authRoute);
app.use("/users", usersRoute);
app.use("/posts", postsRoute);
app.listen("8081", () => console.log("server running"));
