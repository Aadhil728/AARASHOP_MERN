const orderModel = require("../models/orderModel");

exports.createOrder = async (req, res, next) => {
  const cartItems = req.body;
  const amount = Number(
    cartItems
      .reduce((acc, item) => acc + item.product.price * item.qty, 0)
      .toFixed(2)
  );
  const status = "Pending";

  const order = await orderModel.create({
    cartItems,
    amount,
    status,
  });

  res.json({
    success: true,
    message: "Order created successfully",
    data: order,
  });
};
