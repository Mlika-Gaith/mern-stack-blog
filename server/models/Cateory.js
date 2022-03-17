const mongoose = require("mongoose");
// * timestamps adds default fields created at and updated at
const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});
// * export your DB schema
module.exports = mongoose.model("Category", CategorySchema);
