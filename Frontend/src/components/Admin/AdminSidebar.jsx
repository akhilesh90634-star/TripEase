import React, { useState } from "react";
import { Box, Typography, Divider, IconButton, Tooltip } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { Dashboard, Luggage, Map, EventNote, CalendarMonth, Groups, ReportProblem, Person,
  Settings, KeyboardDoubleArrowLeft, Logout,People, Discount,LocalOffer,Hotel,HotelSharp,Home,CardTravel} from "@mui/icons-material";

function AdminSidebar() {
  const [isMenuclose, setisMenuclose] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

 const menuData = [
  { id: 1, name: "Dashboard", icon: <Dashboard />, path: "/admin" },
  { id: 2, name: "Users", icon: <People />, path: "/admin/users" },
  { id: 3, name: "Agents", icon: <People />, path: "/admin/agents" },
  { id: 4, name: "Trips", icon: <Luggage />, path: "/admin/trip" },
  { id: 5, name: "Trip Details", icon: <Map />, path: "/admin/detailsoftrips" },
  { id: 6, name: "Packages", icon: <CardTravel />, path: "/admin/packages" },
  { id: 7, name: "Daily Updates", icon: <EventNote />, path: "/admin/dailyupdates" },
  { id: 8, name: "Schedule", icon: <CalendarMonth />, path: "/admin/schedule" },
  { id: 9, name: "Bookings", icon: <Groups />, path: "/admin/bookings" },
  { id: 10, name: "Hotels", icon: <Home />, path: "/admin/hotels" },
  { id: 11, name: "Coupons", icon: <LocalOffer />, path: "/admin/coupons" },
  { id: 12, name: "Discount", icon: <Discount />, path: "/admin/discount" },
  { id: 13, name: "Issues", icon: <ReportProblem />, path: "/admin/issues" },
  { id: 14, name: "Profile", icon: <Person />, path: "/admin/profile" },
];

 function handleMenu() {
  setisMenuclose(!isMenuclose);
}

 function handleLogout() {
  localStorage.removeItem("accessToken"); 

  navigate("/login", { replace: true }); 
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
        {menuData.map((item,ind) => {
          const isActive = location.pathname === item.path;

          return (
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
                   mb: 0.9,  
                  color: isActive ? "#fff" : "#cbd5e1",
                  background: isActive
                    ? "linear-gradient(90deg,#3b82f6,#2563eb)"
                    : "transparent",
                  "&:hover": {
                    background: isActive
                      ? "linear-gradient(90deg,#3b82f6,#2563eb)"
                      : "rgba(255,255,255,0.1)",
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
          );
        })}
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
              Admin
            </Typography>

            <Typography fontSize="12px" sx={{ opacity: 0.7, color: "#cbd5e1" }}>
              admin
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

export default AdminSidebar;