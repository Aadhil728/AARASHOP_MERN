const mongoose = require("mongoose");

const heroSliderSchema = new mongoose.Schema({
  image: String,
  subTitle: String,
  title: String,
  title2: String,
  description: String,
});

const heroSliderModel = mongoose.model("heroSlider", heroSliderSchema);

module.exports = heroSliderModel;
