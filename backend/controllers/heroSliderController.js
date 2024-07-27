const heroSliderModel = require("../models/heroSliderModel");

//get all the products from mongodb database (api/v1/heroSlider)
exports.getHeroSlider = async (req, res, next) => {
  const products = await heroSliderModel.find({});
  res.json({
    success: true,
    message: "Products fetched successfully",
    data: products,
  });
};
