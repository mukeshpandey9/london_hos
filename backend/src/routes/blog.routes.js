import express from "express";
import {
  createBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.route("/create").post(createBlog);
router.route("/").get(getBlogs);
router.route("/:id").get(getBlog).put(updateBlog);

export default router;
