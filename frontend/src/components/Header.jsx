import React from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CloudUploadIcon from "@mui/icons-material/CloudUpload"; // optional icon

export default function Header() {
  const location = useLocation();

  const getTabValue = (pathname) => {
    if (pathname.startsWith("/uploads")) return "/uploads";
    return "/";
  };

  const currentTab = getTabValue(location.pathname);

  return (
    <div className="top-0 sticky z-10">
      <div className="py-1 bg-blue-500 ">
        <h2 className="text-center text-2xl py-3 text-white flex items-center justify-center gap-2">
          <CloudUploadIcon />
          Mern Cloudinary
        </h2>
      </div>

      <div className="flex justify-center items-center mb-10 z-10 bg-white">
        <Box sx={{ width: "100%" }}>
          <Tabs value={currentTab} aria-label="Navigation tabs" centered>
            <Tab label="Upload Image" value="/" component={Link} to="/" />
            <Tab
              label="My Uploads"
              value="/uploads"
              component={Link}
              to="/uploads"
            />
          </Tabs>
        </Box>
      </div>
    </div>
  );
}
