const Enq = require("../models/enqModel");
const asyncHandler = require("express-async-handler");
const validateMongoId = require("../utils/validateMongoDBiD");

const createEnq = asyncHandler(async (req, res) => {
  try {
    const newEnq = await Enq.create(req.body);
    res.json(newEnq);
  } catch (error) {
    throw new Error(error);
  }
});
const updateEnq = asyncHandler(async (req, res) => {
  const { id } = req.params;

  validateMongoId(id);
  try {
    const updatedEnq = await Enq.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedEnq);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteEnq = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const deletedEnq = await Enq.findByIdAndDelete(id);
    res.json(deletedEnq);
  } catch (error) {
    throw new Error(error);
  }
});
const getEnq = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const gottenEnq = await Enq.findById(id);
    res.json(gottenEnq);
  } catch (error) {
    throw new Error(error);
  }
});
const getAllEnq = asyncHandler(async (req, res) => {
  try {
    const gottenEnq = await Enq.find();
    res.json({gottenEnq});
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createEnq,
  updateEnq,
  deleteEnq,
  getEnq,
  getAllEnq,
};
