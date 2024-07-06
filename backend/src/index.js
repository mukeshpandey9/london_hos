import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ErrorMiddleware } from "./middlewares/error.js";
import { connectDb } from "./db/db.js";
import blogRoutes from "./routes/blog.routes.js";
import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(express.json({ limit: "50mb", extended: true }));
app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));
app.use(cors());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// Counter

// Counter for visitors

const visitorSchema = new mongoose.Schema({
  counter: {
    type: Number,
    default: 0,
  },
});

// Creating Visitor Table in visitCounterDB
const Visitor = mongoose.model("Visitor", visitorSchema);

const siteViewsUp = async () => {
  const visitor = await Visitor.findOne();
  if (visitor) {
    visitor.counter++;
    await visitor.save();
  } else {
    const newVisitor = new Visitor({
      counter: 1,
    });
    await newVisitor.save();
  }
};

app.get("/api/v1/visitor-count", async (req, res) => {
  await siteViewsUp();
  return res.json({ success: true });
});

app.get("/api/v1/visitors", async (req, res) => {
  const visitor = await Visitor.findById("6688d258538fde60c31bb1f4");
  res.json({
    visitors: visitor.counter,
  });
});

app.use("/api/v1/blog", blogRoutes);

app.use(ErrorMiddleware);
const port = process.env.PORT || 4000;
connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  })
  .catch(() => {
    console.log("MongoDb connection failed");
  });
