const mongoose = require("mongoose");
// * timestamps adds default fields created at and updated at
const CommentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: false,
    },
    post_id: {
      type: String,
      required: true,
      unique: false,
    },
    comment: {
      type: String,
      required: true,
      unique: false,
    },
    profilPicture: {
      type: String,
      required: false,
      default: "",
    },
  },
  { timestamps: true }
);
// * export your DB schema
module.exports = mongoose.model("Comment", CommentSchema);
