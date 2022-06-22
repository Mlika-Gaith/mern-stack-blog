const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});
// * export your DB schema
module.exports = mongoose.model("Category", CategorySchema);
