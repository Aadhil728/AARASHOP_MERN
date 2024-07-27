const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  title: String,
  image: String,
});

const brandsModel = mongoose.model("brands", brandSchema);

module.exports = brandsModel;
