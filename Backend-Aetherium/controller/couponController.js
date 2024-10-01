const Coupon = require("../models/couponModel");
const asyncHandler = require("express-async-handler");
const validateMongoId = require("../utils/validateMongoDBiD");

const createCoupon = asyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (error) {
    throw new Error(error);
  }
});
const getallCoupon = asyncHandler(async (req, res) => {
  try {
    const AllCoupons = await Coupon.find();
    res.json(AllCoupons);
  } catch (error) {
    throw new Error(error);
  }
});
const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const updatedCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json(updatedCoupon);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const deletedCoupon = await Coupon.findByIdAndDelete(id);

    res.json(deletedCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCoupon,
  getallCoupon,
  updateCoupon,
  deleteCoupon,
};
