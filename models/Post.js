const mongoose = require("mongoose");
// * timestamps adds default fields created at and updated at
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
    },
    description: {
      type: String,
      required: true,
      unique: false,
    },
    postPicture: {
      type: String,
      required: false,
      default: "",
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);
// * export your DB schema
module.exports = mongoose.model("Post", PostSchema);
