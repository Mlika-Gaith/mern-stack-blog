const mongoose = require("mongoose");
// * timestamps adds default fields created at and updated at
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: false,
      unique: false,
      default: "",
    },
    lastName: {
      type: String,
      required: false,
      unique: false,
      default: "",
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
module.exports = mongoose.model("User", UserSchema);
