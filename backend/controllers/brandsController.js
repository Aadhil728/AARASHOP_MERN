const brandModel = require("../models/brandModel");

//get all the products from mongodb database (api/v1/brands)
exports.getBrandsData = async (req, res, next) => {
  const products = await brandModel.find({});
  res.json({
    success: true,
    message: "Brands fetched successfully",
    data: products,
  });
};
