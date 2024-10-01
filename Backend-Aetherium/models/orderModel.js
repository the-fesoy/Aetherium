const mongoose = require("mongoose");

var orderSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      color: String,
      count: Number,
    },
  ],
  paymentIntent: {},
  orderStatus: {
    type: String,
    default: "Not Processed",
    enum: [
      "Not Procssed",
      "Cash On Delivery",
      "Processing",
      "Dispatched",
      "Cancelled",
      "Delivered",
    ],
  },
  orderBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
},{timestamps: true});

module.exports = mongoose.model("Order", orderSchema);
