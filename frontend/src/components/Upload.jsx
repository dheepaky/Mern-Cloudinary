import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUploadOutlined";
import SendIcon from "@mui/icons-material/Send"; // Optional: for an icon
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../baseurl/BaseUrl";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
// Create a visually hidden input component
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Upload() {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/cloudinary/upload`, {
        img: img,
      });
      // console.log("Uploaded:", response.data);
      navigate("/uploads");
    } catch (error) {
      console.error("error in Createblog", error);
    } finally {
      setLoading(false);
    }
    // console.log(img);
  };

  const handlefileupload = (e) => {
    const file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setImg(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center p-6">
      <h2 className="text-2xl ">Upload an image</h2>
      <div className="flex   gap-10">
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}>
          Select Files
          {/* Use the VisuallyHiddenInput component */}
          <VisuallyHiddenInput
            type="file"
            accept="image/*"
            onChange={handlefileupload}
          />
        </Button>

        {img && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            endIcon={!loading && <SendIcon />}
            disabled={loading}>
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Upload"
            )}
          </Button>
        )}
      </div>
      {img && (
        <div className=" p-5 shadow-[0_3px_10px_-1px_rgba(0,0,0,0.3)]  rounded-lg  shadow-gray-500">
          <img src={img} alt="Preview" className=" h-40 rounded-md mt-10 " />

          <p className="mt-5">Preview</p>
        </div>
      )}
    </div>
  );
}
