import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ErrorMiddleware } from "./middlewares/error.js";
import { connectDb } from "./db/db.js";
import blogRoutes from "./routes/blog.routes.js";
import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";

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

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
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
