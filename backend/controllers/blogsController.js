const blogsModel = require("../models/blogsModel");

//get all the products from mongodb database (api/v1/blogs)
exports.getBlogsData = async (req, res, next) => {
  const products = await blogsModel.find({});
  res.json({
    success: true,
    message: "Products fetched successfully",
    data: products,
  });
};
