import express from "express";
import { uploadimg, viewimg } from "../controllers/cloudinary.controller.js";
const router = express.Router();
// import multer from "multer";
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

router.post("/upload", uploadimg);
router.get("/images", viewimg);

export default router;
