import React, { useState } from "react";
import { Box, Typography, Divider, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Dashboard, Luggage, Map, EventNote, CalendarMonth, Groups, ReportProblem, Person,
  Settings, KeyboardDoubleArrowLeft, Logout} from "@mui/icons-material";

function Sidebar() {
  const [isMenuclose, setisMenuclose] = useState(false);
  const navigate = useNavigate();

  const menuData = [
    { id: 1, name: "Dashboard", icon: <Dashboard />, path: "/agent/dashboard" },
    { id: 2, name: "My Trips", icon: <Luggage />, path: "/agent/trips" },
    { id: 3, name: "Trip Details", icon: <Map />, path: "/agent/tripdetails" },
    { id: 4, name: "Daily Updates", icon: <EventNote />, path: "/agent/dailyupdates" },
    { id: 5, name: "Schedule", icon: <CalendarMonth />, path: "/agent/schedule" },
    { id: 6, name: "Bookings", icon: <Groups />, path: "/agent/bookings" },
    { id: 7, name: "Issues", icon: <ReportProblem />, path: "/agent/issues" },
    { id: 8, name: "Profile", icon: <Person />, path: "/agent/profile" },
    { id: 9, name: "Settings", icon: <Settings />, path: "/agent/settings" }
  ];

 function handleMenu() {
  setisMenuclose(!isMenuclose);
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
        height: "95vh",
        background: "linear-gradient(180deg, #0f1c2e, #132a4a)",
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid rgba(255,255,255,0.1)",
        marginTop: 2, 
        marginLeft: 2,  
        borderRadius:5
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2
        }}
      >
        {!isMenuclose && (
          <img
            src="/logo.png"
            alt="logo"
            style={{
              width: "120px",
              height: "50px",
              objectFit: "contain",
              filter: "brightness(0) invert(1)", 
              cursor: "pointer"
            }} 
          />
        )}

        <IconButton onClick={handleMenu}>
          <KeyboardDoubleArrowLeft
            sx={{
              color: "#fff",
              transform: isMenuclose ? "rotate(180deg)" : "none"
            }}
          />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

      {/* MENU */}
      <Box
        sx={{
          flex: 1,
          mt: 1,
          overflowY: "auto",
          "&::-webkit-scrollbar": { display: "none" }
        }}
      >
        {menuData.map((item,ind) => (
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
                color: "#cbd5e1",
                "&:hover": {
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff"
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

      {/* PROFILE */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          p: 2,
          borderRadius: "10px",
          mx: 1,
          my: 1
        }}
      >
        <img
          src="/logo.png"
          alt="profile"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover"
          }}
        />

        {!isMenuclose && (
          <Box>
            <Typography fontSize="14px" fontWeight="bold" color="#fff">
              Agent
            </Typography>

            <Typography fontSize="12px" sx={{ opacity: 0.7, color: "#cbd5e1" }}>
              Travel Agent
            </Typography>
          </Box>
        )}
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

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
          color: "#f87171",
          justifyContent: isMenuclose ? "center" : "flex-start",
          "&:hover": {
            background: "rgba(248,113,113,0.1)"
          }
        }}
      >
        <Logout />
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
