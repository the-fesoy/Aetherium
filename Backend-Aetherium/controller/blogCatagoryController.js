const blogCatagory = require("../models/blogCatagoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoId = require("../utils/validateMongoDBiD");

const createCatagory = asyncHandler(async (req, res) => {
  try {
    const newCatagory = await blogCatagory.create(req.body);
    res.json(newCatagory);
  } catch (error) {
    throw new Error(error);
  }
});
const updateCatagory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  validateMongoId(id);
  try {
    const updatedCatagory = await blogCatagory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCatagory);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteCatagory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const deletedCatagory = await blogCatagory.findByIdAndDelete(id);
    res.json(deletedCatagory);
  } catch (error) {
    throw new Error(error);
  }
});
const getCatagory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const gottenCatagory = await blogCatagory.findById(id);
    res.json(gottenCatagory);
  } catch (error) {
    throw new Error(error);
  }
});
const getAllCatagories = asyncHandler(async (req, res) => {
  try {
    const gottenCatagories = await blogCatagory.find();
    res.json({gottenCatagories});
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createCatagory,
  updateCatagory,
  deleteCatagory,
  getCatagory,
  getAllCatagories,
};

