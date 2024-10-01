const express = require("express");
const router = express.Router();
const {
  createUser,
  logIn,
  getAllUSers,
  getSepcificUser,
  deleteUser,
  UpdateForUser,
  blockUser,
  unblockUser,
  handleRefresh,
  logout,
  updatePassword,
  forgorPasswordToken,
  resetPassword,
  logInAdmin,
  getWishlist,
  saveUserAddress,
  UserCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

router.post("/logout", logout);

router.post("/register", createUser);

router.post("/LogIn", logIn);

router.post("/LogInAdmin", logInAdmin);

router.post("/cart", authMiddleware, UserCart);

router.post("/cart/applyingcoupon", authMiddleware, applyCoupon);

router.post("/forgot-password", forgorPasswordToken);

router.post("/cart/order", authMiddleware, createOrder);

router.get("/GetAllUsers", getAllUSers);

router.get("/handle-refresh", handleRefresh);

router.get("/cart", authMiddleware, getUserCart);

router.get("/get-wishlist", authMiddleware, getWishlist);

router.get("/order", authMiddleware, getOrders);

router.get("/:id", authMiddleware, isAdmin, getSepcificUser);

router.delete("/Delete-user", authMiddleware, deleteUser);

router.delete("/cart", authMiddleware, emptyCart);

router.put("/password", authMiddleware, updatePassword);

router.put("/save-address", authMiddleware, saveUserAddress);

router.put("/order/update-status/:id", authMiddleware, isAdmin ,updateOrderStatus);

router.put("/reset-password/:token", resetPassword);

router.put("/:id", authMiddleware, UpdateForUser);

router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);

router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
