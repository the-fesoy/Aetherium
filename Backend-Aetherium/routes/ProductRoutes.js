const express = require("express");
const router = express.Router();
const {
  createProduct,
  getaProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
  uploadImages,
  DeletingImages,
  fuckOfff,
} = require("../controller/ProductCtrl");
const { isAdmin, authMiddleware } = require("../middleware/authMiddleware");
const { uploadPhoto, productImgResize } = require("../middleware/uploadImages");
router.delete("/delete-image/:id", DeletingImages);

router.post("/", createProduct);
router.get("/", getAllProducts);

router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.put(
  "/upload",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.get("/:id", getaProduct);

module.exports = router;
