const mongoose = require("mongoose");

var blogCatagorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("blogCatagory", blogCatagorySchema);
