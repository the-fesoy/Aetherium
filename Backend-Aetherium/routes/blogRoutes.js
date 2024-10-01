const express = require("express");
const {
  createBLog,
  updateBLog,
  getBlog,
  getallblogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImages,
} = require("../controller/blogController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const { uploadPhoto, blogImgResize } = require("../middleware/uploadImages");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBLog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);
router.put("/likes", authMiddleware, likeBlog);
router.put("/dislikes", authMiddleware, dislikeBlog);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadImages
);
router.put("/:id", authMiddleware, isAdmin, updateBLog);
router.get("/", getallblogs);
router.get("/:id", getBlog);

module.exports = router;
