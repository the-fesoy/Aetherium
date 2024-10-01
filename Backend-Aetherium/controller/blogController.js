const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoId = require("../utils/validateMongoDBiD");
const cloudinaryUploadingImg = require("../utils/cloudinary");
const fs = require("fs");

const createBLog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json({
      newBlog,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updateBLog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    validateMongoId(id);

    const updatedUser = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});

const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const gottenUser = await Blog.findById(id)
      .populate("likes")
      .populate("dislikes");
    const updateViews = await Blog.findByIdAndUpdate(
      id,
      { $inc: { numberViews: 1 } },
      { new: true }
    );
    res.json(gottenUser);
  } catch (error) {
    throw new Error(error);
  }
});

const getallblogs = asyncHandler(async (req, res) => {
  try {
    const gottenBlog = await Blog.find();

    res.json({ gottenBlog });
  } catch (error) {
    throw new Error(error);
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    validateMongoId(deletedBlog);

    res.json({ deletedBlog });
  } catch (error) {
    throw new Error(error);
  }
});
const likeBlog = asyncHandler(async (req, res) => {
  const { blogid } = req.body;
  validateMongoId(blogid);

  const blog = await Blog.findById(blogid);

  const loginUserId = req?.user?._id;
  log;
  const isLiked = blog?.isLiked;
  console.log(isLiked);

  const alreadyDisliked = blog?.dislikes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );

  if (alreadyDisliked) {
    const blog = await Blog.findByIdAndUpdate(
      blogid,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
  if (isLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogid,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogid,
      {
        $push: { likes: loginUserId },
        isLiked: true,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
});

const dislikeBlog = asyncHandler(async (req, res) => {
  const { blogid } = req.body;
  validateMongoId(blogid);

  const blog = await Blog.findById(blogid);

  const loginUserId = req?.user?._id;
  const isdisliked = blog?.isDisliked;

  const alreadyliked = blog?.likes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );

  if (alreadyliked) {
    const blog = await Blog.findByIdAndUpdate(
      blogid,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
  if (isdisliked) {
    const blog = await Blog.findByIdAndUpdate(
      blogid,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogid,
      {
        $push: { dislikes: loginUserId },
        isDisliked: true,
      },
      {
        new: true,
      }
    );
    res.json(blog);
  }
});
const uploadImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);

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

      urls.push({ url: newpath.url });
      fs.unlinkSync(path)

    }

    const findBlog = await Blog.findByIdAndUpdate(
      id,
      { images: urls },
      { new: true }
    );

    res.json(findBlog);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBLog,
  updateBLog,
  getBlog,
  getallblogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImages,
};
