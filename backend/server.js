import express from "express";
import dotenv from "dotenv";
import db from "./db/db.js";
import router from "./routes/cloudinary.route.js";
import cors from "cors";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const app = express();

const __dirname = path.resolve();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
  })
);
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/api/cloudinary", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, "/frontend", "dist", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("API works");
});

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
  db();
});
