const Product = require("../models/productModel");
const validateMongoId = require("../utils/validateMongoDBiD");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const slugify = require("slugify");
const fs = require("fs");

const {
  cloudinaryUploadingImg,
  cloudinaryDeletingingImg,
} = require("../utils/cloudinary");

const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }

    const ProductToUpdate = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(ProductToUpdate);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    console.log(deletedProduct);
    console.log(id);

    res.json("product has been deleted");
  } catch (error) {
    throw new Error(error);
  }
});

const getaProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const FindProduct = await Product.findById(id);
    res.json(FindProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const queryObj = { ...req.query };

    const excludeFields = ["page", "sort", "limit", "fields"];

    excludeFields.forEach((element) => {
      delete queryObj[element];
    });
    console.log(queryObj, req.query);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    let query = Product.find(JSON.parse(queryStr));

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) {
        throw new Error("this page doesnt exist like your dad");
      }
    }
    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

const addToWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { prodId } = req.body;
  try {
    const user = await User.findById(_id);
    console.log(user);
    const alreadyAdded = user.wishlist.find((id) => {
      return id.toString() === prodId;
    });

    console.log(alreadyAdded);
    if (alreadyAdded) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: prodId },
        },
        { new: true }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: prodId },
        },
        { new: true }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, prodId, comment } = req.body;

  try {
    const product = await Product.findById(prodId);

    let alreadyRated = product.ratings.find((rating) => {
      return (
        rating &&
        rating.postedBy &&
        rating.postedBy.toString() === _id.toString()
      );
    });

    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          _id: prodId,
          "ratings._id": alreadyRated._id,
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        }
      );
    } else {
      const ratedProduct = await Product.findByIdAndUpdate(
        prodId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedBy: _id,
            },
          },
        },
        { new: true }
      );
    }
    const getallratings = await Product.findById(prodId);
    let totalRating = getallratings.ratings.length;
    let ratingSum = getallratings.ratings
      .map((item) => item.star)
      .reduce((prev, current) => prev + current, 0);
    let actualRating = Math.round(ratingSum / totalRating);
    let finalproduct = await Product.findByIdAndUpdate(
      prodId,
      {
        totalRating: actualRating,
      },
      { new: true }
    );
    res.json(finalproduct);
  } catch (error) {
    throw new Error(error);
  }
});

const uploadImages = asyncHandler(async (req, res) => {
  try {
    const uploader = async (path) => {
      const result = await cloudinaryUploadingImg(path);
      return result;
    };

    const urls = [];
    const files = req.files;

    for (const file of files) {
      const { path } = file;
      const newpath = await uploader(path);

      urls.push({
        url: newpath.url,
        asset_id: newpath.asset_id,
        public_id: newpath.public_id,
      });
    }

    res.json(urls);
  } catch (error) {
    throw new Error(error);
  }
});

const DeletingImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await cloudinaryDeletingingImg(id, "images");
    console.log(deleted);
    res.json({ message: "deleted" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createProduct,
  getaProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
  uploadImages,
  DeletingImages,
};
