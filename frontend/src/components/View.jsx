import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../baseurl/BaseUrl";
import Skeleton from "@mui/material/Skeleton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function View() {
  const [upload, setUpload] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/cloudinary/images`);
        setUpload(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUploads();
  }, []);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <div>
      {loading ? (
        <ul className="flex flex-wrap gap-4 justify-center ">
          {Array.from({ length: 6 }).map((_, index) => (
            <li key={index}>
              <Skeleton variant="rounded" width={192} height={192} />
            </li>
          ))}
        </ul>
      ) : upload.length > 0 ? (
        <ul className="flex flex-wrap gap-6 justify-center ">
          {upload.map((item, index) => (
            <li
              key={item.id || index}
              className="flex flex-col items-center gap-3">
              <img
                src={item.img}
                alt={`Uploaded content ${index + 1}`}
                className="w-48 h-48 object-cover rounded-md"
              />
              <button
                onClick={() => handleCopy(item.img, index)}
                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition cursor-pointer">
                {copiedIndex === index ? (
                  <>
                    <CheckCircleIcon fontSize="small" color="success" />
                    Copied!
                  </>
                ) : (
                  <>
                    <ContentCopyIcon fontSize="small" />
                    Copy Link
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 mt-10">No images to display.</p>
      )}
    </div>
  );
}
