import React, { useState } from "react";
import { Box,Typography,Divider,IconButton,Tooltip} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {Dashboard,Luggage,Map,EventNote,CalendarMonth,Groups,ReportProblem,Person,
  Settings,KeyboardDoubleArrowLeft,Logout} from "@mui/icons-material";

function Sidebar() {
  const [isMenuclose, setisMenuclose] = useState(false);
  const navigate = useNavigate();

  const menuData = [
  { id: 1, name: "Dashboard", icon: <Dashboard/>, path:"/agent/dashboard" },
  { id: 2, name: "My Trips", icon: <Luggage/>, path:"/agent/trips" },
  { id: 3, name: "Trip Details", icon: <Map />, path:"/agent/tripdetails" },
  { id: 4, name: "Daily Updates", icon: <EventNote />, path:"/agent/dailyupdates" },
  { id: 5, name: " Schedule", icon: <CalendarMonth/>, path:"/agent/schedule" },
  { id: 6, name: " Bookings", icon: <Groups />, path:"/agent/bookings" },
  { id: 7, name: "Issues ", icon: <ReportProblem />, path:"/agent/issues" },
  { id: 8, name: "Profile", icon: <Person/>, path:"/agent/profile" },
  { id: 9, name: "Settings", icon: <Settings />, path:"/agent/settings" }
];
   
 function handleMenu() {
    setisMenuclose((prev) => !prev);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <Box
      sx={{
        width: isMenuclose ? 80 : 220,
        height: "80vh",
        background: "#fff",
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #eee"
      }}
    >
      {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: isMenuclose ? "center" : "space-between",
            p: 2
          }}
        >
          {!isMenuclose && (
            <Box sx={{ display: "flex", alignItems: "center"}}>
              <img
                src="/logo.png"
                alt="logo"
                style={{
                  width: "60px",
                  height: "80px",
                  objectFit: "contain"
                }}
              />
              <Typography fontWeight="bold" fontSize="18px">
                AGENT
             </Typography>
            </Box>
          )}

          <IconButton onClick={handleMenu}>
            <KeyboardDoubleArrowLeft
              sx={{
                transform: isMenuclose ? "rotate(180deg)" : "none"
              }}
            />
          </IconButton>
        </Box>

      <Divider />

      {/* MENU */}
      <Box 
      sx={{ 
        flex: 1, 
        mt: 1 ,  
        overflowY: "auto",
        "&::-webkit-scrollbar": {
         display: "none"
    },
   }}>
        {menuData.map((item, ind) => (
          <Tooltip
            key={item.id}
            title={isMenuclose ? item.name : ""}
            placement="right"
          >
            <Box
              onClick={() => item.path && navigate(item.path)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                px: 2,
                py: 1.5,
                cursor: "pointer",
                justifyContent: isMenuclose ? "center" : "flex-start",
                borderRadius: "8px",
                mx: 1,
                "&:hover": {
                  background: "#f1f5ff"
                }
              }}
            >
              {item.icon}
              {!isMenuclose && (
                <Typography fontSize="14px">{item.name}</Typography>
              )}
            </Box>
          </Tooltip>
        ))}
      </Box>

      <Divider />

      {/* LOGOUT */}
      <Box
        onClick={handleLogout}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          px: 2,
          py: 2,
          cursor: "pointer",
          color: "#e53935",
          justifyContent: isMenuclose ? "center" : "flex-start",
          "&:hover": {
            background: "#fdecea"
          }
        }}
      >
        <Logout/>
        {!isMenuclose && (
          <Typography fontSize="14px" fontWeight="500">
            Logout
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Sidebar;