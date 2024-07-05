import { CatchAsyncError } from "../middlewares/catchAsyncError.js";
import { Blog } from "../models/blog.model.js";
import { uploadFile } from "../utils/cloudinary.js";
import { Errorhandler } from "../utils/errorHandler.js";

// Create a new blog

export const createBlog = CatchAsyncError(async (req, res, next) => {
  try {
    const blog = await req.body;
    console.log(blog);
    blog.createdBy = "666c64fda0904b736c8d054e";
    const blogImage = req.files.image;
    const image = await uploadFile(blogImage.data);
    blog.image = image.url;
    const newBlog = await Blog.create(blog);
    if (!newBlog) {
      return next(new Errorhandler("Failed to create blog", 400));
    }
    res
      .status(201)
      .json({ success: true, message: "Blog created successfully" });
  } catch (error) {
    console.log(error);
    return next(new Errorhandler("Failed to create blog", 500));
  }
});

// Get all blogs
export const getBlogs = CatchAsyncError(async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    if (!blogs || blogs.length === 0) {
      return next(new Errorhandler("No blogs found", 404));
    }
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    return next(new Errorhandler("Failed to get blogs", 500));
  }
});

// get single blog

export const getBlog = CatchAsyncError(async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return next(new Errorhandler("Blog not found", 404));
    }
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    return next(new Errorhandler("Failed to get blog", 500));
  }
});

// update the blog

export const updateBlog = CatchAsyncError(async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      return next(new Errorhandler("Blog not found", 404));
    }
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    return next(new Errorhandler("Failed to update blog", 500));
  }
});

// Delete blog

export const deleteBlog = CatchAsyncError(async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return next(new Errorhandler("Blog not found", 404));
    }
    res
      .status(200)
      .json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    return next(new Errorhandler("Failed to delete blog", 500));
  }
});
