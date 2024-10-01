const express = require("express");
const {
  createCatagory,
  updateCatagory,
  deleteCatagory,
  getCatagory,
  getAllCatagories,
} = require("../controller/blogCatagoryController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCatagory);
router.put("/:id", authMiddleware, isAdmin, updateCatagory);
router.delete("/:id", authMiddleware, isAdmin, deleteCatagory);
router.get("/", getAllCatagories);
router.get("/:id", getCatagory);

module.exports = router;
