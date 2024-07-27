const bannerModel = require("../models/bannerModel");

//get all the products from mongodb database (api/v1/banner)
exports.getBannerData = async (req, res, next) => {
  const products = await bannerModel.find({});
  res.json({
    success: true,
    message: "Products fetched successfully",
    data: products,
  });
};
