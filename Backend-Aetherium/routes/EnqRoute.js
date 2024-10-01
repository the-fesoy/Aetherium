const express = require("express");
const {
  createEnq,
  updateEnq,
  deleteEnq,
  getEnq,
  getAllEnq,
} = require("../controller/enqController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", createEnq);
router.put("/:id", authMiddleware, isAdmin, updateEnq);
router.delete("/:id", authMiddleware, isAdmin, deleteEnq);
router.get("/", getAllEnq);
router.get("/:id", getEnq);

module.exports = router;
