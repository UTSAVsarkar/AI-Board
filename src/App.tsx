import React, { useRef } from "react";
import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import UploadIcon from "@mui/icons-material/Upload";

function App() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("File selected:", file.name);
      console.log(file);
      // Further file processing logic here
    }
  };

  return (
    <Stack spacing={2} sx={{ height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "black",
          color: "white",
        }}
      >
        <h2>Upload CSV for Analysis</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <Button
          variant="contained"
          startIcon={<UploadIcon style={{ fontSize: "2rem" }} />}
          color="success"
          onClick={handleFileUpload}
          sx={{
            padding: "12px 24px", // Adjust padding for height and width
            fontSize: "1.25rem", // Adjust font size
            minWidth: "150px", // Set a minimum width
          }}
        >
          <b>Upload</b>
        </Button>
      </div>
    </Stack>
  );
}

export default App;
