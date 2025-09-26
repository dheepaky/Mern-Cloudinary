import cloudinarymodel from "../models/cloudinary.model.js";
import cloudinary from "cloudinary";

export const uploadimg = async (req, res) => {
  try {
    let { img } = req.body;

    // cloudinary
    if (img) {
      const uploadedResponse = await cloudinary.uploader.upload(img, {
        folder: "/cloudinary-project",
      });
      console.log(uploadedResponse);

      img = uploadedResponse.secure_url;
    }

    const blog = new cloudinarymodel({
      img,
    });
    const blogs = await blog.save();
    res.status(201).json(blogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const viewimg = async (req, res) => {
  try {
    const uploads = await cloudinarymodel.find().sort({ createdAt: -1 });
    res.status(201).json(uploads);
    console.log(uploads);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
