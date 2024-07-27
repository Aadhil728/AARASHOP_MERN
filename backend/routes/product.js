const express = require("express");
const {
  getProducts,
  getSingleProduct,
  getLatestProducts,
} = require("../controllers/productController");
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct);
// Add the route for latest products
router.route("/products/latest").get(getLatestProducts);

module.exports = router;
