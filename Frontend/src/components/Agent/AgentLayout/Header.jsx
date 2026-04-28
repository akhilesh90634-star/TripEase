import React, { useState } from "react";
import {AppBar,Toolbar,Typography,Box,Avatar,IconButton,Paper, Divider} from "@mui/material";
import { KeyboardArrowDown, PowerSettingsNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


function Headers() {
 
  const [open, setOpen] = useState(false);
  const navigate=useNavigate();

   function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <Box sx={{ p: 2 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "#f8f9fb",
          color: "#333",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* LEFT SIDE  */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src="/logo.png"
              alt="logo"
              style={{
                width: "80px",   
                height: "80px",
                objectFit: "contain"
              }}
            />
            <Typography variant="h6" fontWeight="bold">
             TRIP EASE
            </Typography>
          </Box>

          {/* RIGHT SIDE  */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            
            <Avatar sx={{ width: 32, height: 32, bgcolor: "#5a8dee" }}>
              A
            </Avatar>

            <Typography variant="body2" fontWeight="500">
              Agent
            </Typography>

            <IconButton size="small" onClick={() => setOpen(!open)}>
              <KeyboardArrowDown/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
         
  {open && (
        <Paper
          elevation={3}
          sx={{
            position: "absolute",
            top: 70,
            right: 20,
            width: 200,
            borderRadius: "10px",
            p: 1
          }}
        >
          <Box  
               sx={{ 
                textAlign:"left",
                 px: 1 
              }}
          >
            <Typography variant="body2">agent@gmail.com</Typography>
            <Typography variant="caption" color="text.secondary">
              Agent
            </Typography>
          </Box>

             <Divider  sx={{ my: 1 }} />

          <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                px: 1
              }}
            >
              <PowerSettingsNew
                sx={{
                  color: "red",
                  fontSize: "18px",   
                  mt: "2px"          
                }}
              />

              <Typography
                onMouseDown={handleLogout}
                sx={{
                  color: "red",
                  fontSize: "16px",   
                  cursor: "pointer"
                }}
              >
                LOGOUT
              </Typography>
            </Box>    
        </Paper>
      )}
    </Box>
  );
}
export default Headers;


