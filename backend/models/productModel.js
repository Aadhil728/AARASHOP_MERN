const mongoose = require("mongoose");

const producrtSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  ratings: String,
  images: [
    {
      image: String,
    },
  ],
  category: String,
  seller: String,
  stock: String,
  numberOfViews: String,
  createdAt: Date,
});

const productModel = mongoose.model("Product", producrtSchema);

module.exports = productModel;
