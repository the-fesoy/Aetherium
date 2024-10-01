//getting em needs

const User = require("../models/userModel");

const Order = require("../models/orderModel");

const Product = require("../models/productModel");

const Cart = require("../models/cartModel");

const asyncHandler = require("express-async-handler");

const { generateToken } = require("../config/token");

const validateMongoId = require("../utils/validateMongoDBiD");

const { generateRefreshToken } = require("../config/refreshToken");

const crypto = require("crypto");

const uniqid = require("uniqid");

const jwt = require("jsonwebtoken");

const sendEmail = require("./emailController");

const Coupon = require("../models/couponModel");
const { orderBy } = require("lodash");
//making things i have no idea about

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const userExists = await User.findOne({ email: email });
  console.log("user created");
  if (!userExists) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("user already exists");
  }
});
const logIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const UserExists = await User.findOne({ email });
  if (UserExists && (await UserExists.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(UserExists?._id);
    const updateUser = await User.findByIdAndUpdate(
      UserExists?._id,
      { refreshToken: refreshToken },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    console.log("log in succeeded");

    res.json({
      _id: UserExists._id,
      firstname: UserExists?.firstname,
      lastname: UserExists?.lastname,
      email: UserExists?.email,
      mobile: UserExists?.mobile,
      token: generateToken(UserExists?._id),
      Admin: UserExists.Admin === 0 ? "False" : "True",
    });
  } else {
    throw new Error("invalid email or password");
  }
});

//admin logging in ig

const logInAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findAdmin = await User.findOne({ email });
  if (!findAdmin.Admin) {
    throw new Error("Not Authorised");
  }
  if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findAdmin?._id);
    const updateUser = await User.findByIdAndUpdate(
      findAdmin?._id,
      { refreshToken: refreshToken },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    console.log("log in succeeded");

    res.json({
      _id: findAdmin._id,
      firstname: findAdmin?.firstname,
      lastname: findAdmin?.lastname,
      email: findAdmin?.email,
      mobile: findAdmin?.mobile,
      token: generateToken(findAdmin?._id),
      Admin: findAdmin.Admin === 0 ? "False" : "True",
    });
  } else {
    throw new Error("invalid email or password");
  }
});

const handleRefresh = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) {
    throw new Error("no refresh token in cookies");
  }
  const refreshToken = cookie.refreshToken;
  console.log(refreshToken);
  const user = await User.findOne({ refreshToken });
  if (!user) {
    throw new Error("no reference token present in db or not matched");
  }
  jwt.verify(refreshToken, process.env.SECRET_KEY, (error, decoded) => {
    if (error || user.id !== decoded.id) {
      throw new Error("theres smth wrong with ur dumbass refreshing token");
    }
    const acccessToken = generateToken(refreshToken?.id);
    res.json({ acccessToken });
  });
});

const logout = asyncHandler(async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(400).json({ message: "No refresh token present" });
  }

  const user = await User.findOne({ refreshToken });

  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: false,
    });
    return res.sendStatus(204);
  }

  await User.findOneAndUpdate(
    { refreshToken },
    { $unset: { refreshToken: "" } }
  );

  // Clear the cookie
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: false,
  });

  res.sendStatus(204);
});

const saveUserAddress = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoId(_id);

  try {
    const AddressedUser = await User.findByIdAndUpdate(_id, {
      address: req?.body?.address,
    });
    res.json(AddressedUser);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllUSers = asyncHandler(async (req, res) => {
  try {
    const GetUsers = await User.find();
    res.json(GetUsers);
  } catch (err) {
    throw new Error(err);
  }
});

const getSepcificUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  const userFound = await User.findById(id);
  res.json({
    userFound: userFound,
  });
});
const deleteUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const Deleted = await User.findByIdAndDelete(_id);
  res.json({
    Deleted,
  });
});

const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const block = await User.findByIdAndUpdate(
      id,
      { isBlocked: true },
      { new: true }
    );
    res.json({
      message: "user blocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});
const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const unblock = await User.findByIdAndUpdate(
      id,
      { isBlocked: false },
      { new: true }
    );
    res.json({
      message: "user unblocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const UpdateForUser = asyncHandler(async (req, res) => {
  console.log("user is updating");
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    const updateUser = await User.findByIdAndUpdate(
      _id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      { new: true }
    );
    console.log("user updated");
    res.json(updateUser);
  } catch (err) {
    throw new Error(err);
  }
});
const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongoId(_id);
  const user = await User.findById(_id);
  if (password) {
    user.password = password;
    const updatePassword = await user.save();
    res.json(updatePassword);
  } else {
    res.json(user);
  }
});

const forgorPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    try {
      const token = await user.createPasswordResetToken();
      await user.save();
      const resetURL = `Hi Please Follow This Link To Reset Your Password. this link is valid for only 10 min. <a href='http://localhost:4000/api/user/reset-password/${token}' >Click Here</a>`;
      const data = {
        to: email,
        text: "hello there",
        subject: "Forgot Password",
        htm: resetURL,
      };
      sendEmail(data);
      res.json(token);
    } catch (error) {
      throw new Error(error);
    }
  } else {
    throw new Error("email dont exist or u wrote it wrong lil bro");
  }
});

const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashToken,
    passwordResetExpire: { $gt: Date.now() },
  });
  if (!user) {
    throw new Error("Token Expired Please Try Again Later");
  }
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpire = undefined;
  await user.save();
  res.json(user);
});

const getWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  try {
    const findUser = await User.findById(_id).populate("wishlist");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
});

const UserCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    let products = [];
    const user = await User.findById(_id);
    const alreadyExistCart = await Cart.findOne({ orderby: user._id });
    if (alreadyExistCart) {
      alreadyExistCart.remove();
    }
    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i]._id;
      object.count = cart[i].count;
      object.color = cart[i].color;
      console.log(object);
      let getPrice = await Product.findById(cart[i]._id).select("price").exec();
      object.price = getPrice.price;
      products.push(object);
    }
    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
      console.log(products[i].price);
      cartTotal = cartTotal + products[i].price * products[i].count;
    }
    console.log(products, cartTotal);
    let newCart = await new Cart({
      products,
      cartTotal,
      orderBy: user?._id,
    }).save();
    res.json(newCart);
  } catch (error) {
    throw new Error(error);
  }
});

const getUserCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    const cart = await Cart.findOne({ orderBy: _id }).populate(
      "products.product"
    );
    if (!cart) {
      res.json("its empty");
    }
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});
const emptyCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    const user = await User.findOne({ _id });
    const cart = await Cart.findOneAndDelete({ orderBy: user._id });
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});
const applyCoupon = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoId(_id);
  const { coupon } = req.body;
  const validCoupon = await Coupon.findOne({ name: coupon });
  if (!validCoupon) {
    throw new Error("Enter A Valid Coupon");
  } else {
    const user = await User.findOne({ _id });
    let { products, cartTotal } = await Cart.findOne({ orderBy: _id });
    let totalAfterDiscount = (
      cartTotal -
      (cartTotal * validCoupon.discount) / 100
    ).toFixed(2);
    const newCart = await Cart.findOneAndUpdate(
      { orderBy: user._id },
      {
        totalAfterDiscount,
      },
      { new: true }
    ).populate("products.product");
    res.json(newCart);
  }
});
const createOrder = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    const { COD, couponApplied } = req.body;
    if (!COD) {
      throw new Error("Create Cash Order Failed");
    }
    const user = await User.findById(_id);
    let userCart = await Cart.findOne({ orderBy: user._id });
    let finalAmount = 0;
    if (couponApplied && userCart.totalAfterDiscount) {
      finalAmount = userCart.totalAfterDiscount;
    } else {
      finalAmount = userCart.cartTotal;
    }
    let newOrder = await new Order({
      products: userCart.products,
      paymentIntent: {
        id: uniqid(),
        method: "COD",
        amount: finalAmount,
        status: "Cash On Delivery",
        created: Date.now(),
        currency: "USD",
      },
      orderBy: user._id,
      orderStatus: "Cash On Delivery",
    }).save();
    let update = userCart.products.map((item) => {
      return {
        updateOne: {
          filter: { _id: item.product._id },
          update: { $inc: { quantity: -item.count, sold: +item.count } },
        },
      };
    });
    const updated = await Product.bulkWrite(update, {});
    console.log(update, newOrder, updated);

    res.json({ message: "success" });
  } catch (error) {
    throw new Error(error);
  }
});

const getOrders = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    const userOrders = await Order.findOne({ orderBy: _id })
      .populate("products.product")
      .exec();
    res.json(userOrders);
  } catch (error) {
    throw new Error(error);
  }
});

const updateOrderStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  validateMongoId(id);
  try {
    const updateOrderStatus = await Order.findByIdAndUpdate(
      id,
      {
        orderStatus: status,
        paymentIntent: {
          status: status,
        },
      },
      { new: true }
    );
    res.json(updateOrderStatus);
  } catch (error) {
    throw new Error(error);
  }
});
//trying to exports the unknown thingys tbh one of them probably causes cancer

module.exports = {
  createUser,
  logIn,
  logInAdmin,
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
  getWishlist,
  saveUserAddress,
  UserCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
};
