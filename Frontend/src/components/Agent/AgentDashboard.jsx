import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./AgentLayout/Sidebar";
import Headers from "./AgentLayout/Header";
import Dashboard from "./AgentLayout/Dashboard";
import { Outlet } from "react-router-dom";

function AgentDashboard() {
  return (
    <Box sx={{
       height: "80vh", 
       display: "flex", 
       flexDirection: "column" 
       }}
    >
      {/* <Headers /> */}
        <Box sx={{
          display: "flex", 
          flex: 1 
          }}
        >
        <Sidebar />

        {/* Dashboard */}
        <Box sx={{ 
            flex: 1, 
            p: 2, 
            background: "#f8fafc" 
            }}
          >
          <Outlet/>
        </Box>
      </Box>
    </Box>
  );
}

export default AgentDashboard;