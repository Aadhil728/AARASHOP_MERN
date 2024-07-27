const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  discount: String,
  title: String,
  date: String,
  image: String,
  title2: String,
  title3: String,
  description: String,
  bgColor: String,
});

const bannerModel = mongoose.model("banner", bannerSchema);

module.exports = bannerModel;
