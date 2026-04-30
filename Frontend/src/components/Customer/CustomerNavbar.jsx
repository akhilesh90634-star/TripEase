import React, { useState } from "react";
import {Box,Typography,IconButton,Drawer,Menu,MenuItem,} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import {Menu as MenuIcon,Dashboard,Luggage,Map,EventNote,ShoppingCart,Payment,LocalOffer,Logout,Person} from "@mui/icons-material";

function CustomerNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const menuData = [
    { name: "Dashboard", icon: <Dashboard />, path: "/customer" },
    { name: "Trips", icon: <Luggage />, path: "/customer/trips" },
    { name: "Details", icon: <Map />, path: "/customer/tripdetails" },
    { name: "Bookings", icon: <EventNote />, path: "/customer/bookings" },
    { name: "Cart", icon: <ShoppingCart />, path: "/customer/mycart" },
    { name: "Payments", icon: <Payment />, path: "/customer/payments" },
    { name: "Coupons", icon: <LocalOffer />, path: "/customer/coupons" },
  ];

  function handleLogout() {
    localStorage.removeItem("accessToken");
    navigate("/login", { replace: true });
  }

  function handleProfileClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      {/* NAVBAR */}
      <Box
        sx={{
          width: "100%",
          height: "60px",
          background: "#0f1c2e",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          color: "#fff",
        }}
      >
        {/* LEFT */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* MOBILE MENU BUTTON */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography fontWeight="bold">TripEase</Typography>
        </Box>

        {/* DESKTOP MENU */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
          }}
        >
          {menuData.map((item) => {
            const isActive = location.pathname.startsWith(item.path);

            return (
              <Box
                key={item.name}
                onClick={() => navigate(item.path)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  cursor: "pointer",
                  color: isActive ? "#3b82f6" : "#cbd5e1",
                  borderBottom: isActive ? "2px solid #3b82f6" : "none",
                  "&:hover": { color: "#fff" },
                }}
              >
                {item.icon}
                <Typography fontSize="14px">{item.name}</Typography>
              </Box>
            );
          })}
        </Box>

        {/* PROFILE */}
        <Box>
          <IconButton onClick={handleProfileClick} sx={{ color: "#fff" }}>
            <Person />
          </IconButton>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={() => navigate("/customer/profile")}>
              Profile
            </MenuItem>
            <MenuItem onClick={() => navigate("/customer/settings")}>
              Settings
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleLogout();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Typography fontWeight="bold" mb={2}>
            TripEase
          </Typography>

          {menuData.map((item) => (
            <Box
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setMobileOpen(false);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                py: 1,
                cursor: "pointer",
              }}
            >
              {item.icon}
              <Typography>{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </Drawer>
    </>
  );
}

export default CustomerNavbar;