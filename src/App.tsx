import React, { useRef } from "react";
import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import UploadIcon from "@mui/icons-material/Upload";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Papa from "papaparse";
import { Dashboard } from "./components/Dashboard/Dashboard";

interface CsvData {
  [key: string]: string; // Assuming each row is an object with string keys and values
}

function App() {
  const [data, setData] = React.useState<CsvData[]>([]);
  const [isAnalysisPage, setIsAnalysisPage] = React.useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      Papa.parse<CsvData>(file, {
        header: true, // Set to false if you want to read it as an array
        skipEmptyLines: true,
        complete: (results) => {
          setData(results.data);
          setIsAnalysisPage(true);
        },
        error: (error) => {
          console.error("Error parsing CSV: ", error);
        },
      });
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
        {isAnalysisPage && (
          <Button
            variant="outlined"
            startIcon={<ArrowBackIosNewIcon />}
            style={{
              position: "absolute", // Set the button to absolute positioning
              left: "16px", // Adjust the position as needed
              top: "15px",
            }}
            onClick={() => setIsAnalysisPage(false)}
          >
            Delete
          </Button>
        )}
        <h2>{isAnalysisPage ? "Your Dashboard" : "Upload CSV for Analysis"}</h2>
      </div>
      {isAnalysisPage ? (
        <Dashboard />
      ) : (
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
      )}
    </Stack>
  );
}

export default App;
