import React from "react";
import { Box } from "@mui/material";
import AdminSidebar from "./AdminSidebar";
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
        <AdminSidebar />

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