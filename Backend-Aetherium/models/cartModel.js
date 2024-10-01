const mongoose = require('mongoose');


var cartSchema = new mongoose.Schema({
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        color: String,
        count: Number,
        price: Number,

      },
    ],
    cartTotal: Number,
    totalAfterDiscount: Number,
    orderBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },{timestamps: true});


module.exports = mongoose.model('Cart', cartSchema);