// * creating express server
// * install and use nodemon for a responsive server
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 8081;
// Protect from cross origin error
app.use(cors());

// * adding mongodb and dotenv
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

//* multer for handling file upload
const multer = require("multer");

// * routes
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const commentRoute = require("./routes/comments");

// * using json
app.use(express.json());

// * adding uploaded images path
app.use("/images", express.static(path.join(__dirname, "/images")));

// * connecting to mongodb
console.log(process.env.MONGODB_URI)
mongoose
  .connect(process.env.MONGODB_URI || process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(console.log("connected to db"))
  .catch((err) => console.log(err));

// file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/file/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/", authRoute);
app.use("/users", usersRoute);
app.use("/posts", postsRoute);
app.use("/categories", categoryRoute);
app.use("/comments", commentRoute);
// for deployîng in heroko
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
app.listen(PORT, () => console.log("server running"));
