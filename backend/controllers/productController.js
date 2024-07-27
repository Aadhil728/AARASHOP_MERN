const productModel = require("../models/productModel");

//get all the products from mongodb database (api/v1/products)
exports.getProducts = async (req, res, next) => {
  const products = await productModel.find({});
  res.json({
    success: true,
    message: "Products fetched successfully",
    data: products,
  });
};

//get single product from mongodb database using ID (api/v1/product/:id)
exports.getSingleProduct = async (req, res, next) => {
  productId = req.params.id;

  try {
    const productById = await productModel.findById(productId);
    res.json({
      success: true,
      message: "Single Product fetched successfully",
      data: productById,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
};

// Get latest products from MongoDB database (api/v1/products/latest)
exports.getLatestProducts = async (req, res, next) => {
  try {
    const latestProducts = await productModel
      .find({})
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order
      .limit(8); // Limit to 8 products

    res.json({
      success: true,
      message: "Latest products fetched successfully",
      data: latestProducts,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
