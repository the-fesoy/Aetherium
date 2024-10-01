const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (err) {
      throw new Error("not authorized");
    }
  } else {
    throw new Error("there isnt a token attacked to the header");
  }
  
});
const isAdmin = asyncHandler(
    async (req, res, next) => {
        const {email} = req.user;
        const adminUser = await User.findOne({email})
        if(adminUser.Admin != 1){
            throw new Error('You Are Not An Admin');
        }
        else{
            next();
        }

    }
)
module.exports = { authMiddleware, isAdmin };
