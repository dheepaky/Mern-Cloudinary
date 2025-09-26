import mongoose from "mongoose";

const cloudinaryschema = new mongoose.Schema(
  {
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

const cloudinarymodel = mongoose.model("image", cloudinaryschema);

export default cloudinarymodel;
