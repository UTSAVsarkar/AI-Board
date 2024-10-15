import React from "react";
import Stack from "@mui/material/Stack";
import { kpiStyle } from "./Dashboard.styles";

export const Dashboard = () => {
  const kpis = [
    { title: "Total Sales", value: 2500 },
    { title: "New Customers", value: 120 },
    { title: "Revenue", value: "$15,000" },
    { title: "Customer Satisfaction", value: "92%" },
  ];

  return (
    <div
      style={{
        background: "#7b6a6a",
        margin: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column", // Column layout for KPIs and visual boxes
        justifyContent: "flex-start",
        alignItems: "center", // Center horizontally
        paddingTop: "20px",
        padding: "0 20px", // Add horizontal padding here
      }}
    >
      {/* KPI Section */}
      <Stack direction="row" spacing={2} sx={{ width: "100%", padding: 2 }}>
        {kpis.map((kpi, index) => (
          <div key={index} style={kpiStyle}>
            <center>
              <h3>{kpi.value}</h3>
            </center>
            <center style={{ color: "green" }}>
              <b>{kpi.title}</b>
            </center>
          </div>
        ))}
      </Stack>

      {/* Visual Boxes Section */}
      <Stack
        sx={{
          width: "100%",
          flex: 1,
          padding: 2,
        }}
      >
        {/* First Row */}
        <Stack direction="row" spacing={2} sx={{ width: "100%", flex: 1 }}>
          {Array.from({ length: 2 }, (_, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                flex: 1, // Distribute available space evenly
                borderRadius: "8px", // Optional: rounded corners
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)", // Optional: subtle shadow
                margin: "0 10px", // Add horizontal margin to boxes
              }}
            >
              {/* Placeholder for Visual */}
              <p style={{ color: "black" }}>Visual {index + 1}</p>
            </div>
          ))}
        </Stack>

        {/* Second Row */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ width: "100%", flex: 1, marginTop: "20px" }} // Add marginTop here
        >
          {Array.from({ length: 2 }, (_, index) => (
            <div
              key={index + 2} // Increment index for the second row
              style={{
                backgroundColor: "white",
                flex: 1, // Distribute available space evenly
                borderRadius: "8px", // Optional: rounded corners
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)", // Optional: subtle shadow
                margin: "0 10px", // Add horizontal margin to boxes
              }}
            >
              {/* Placeholder for Visual */}
              <p style={{ color: "black" }}>Visual {index + 3}</p>{" "}
              {/* Adjust index for second row */}
            </div>
          ))}
        </Stack>
      </Stack>
    </div>
  );
};
