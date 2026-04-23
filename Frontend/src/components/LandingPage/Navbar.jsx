import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box, IconButton, Drawer} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MenuOutlined } from "@mui/icons-material";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "About Us", path: "/about" },
    { name: "Sign Up", path: "/register" },
    { name: "Login", path: "/login" }
  ];

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #3f7dfc, #00c6ff)",
          color: "#fff",
          px: 3
        }}
      >
        <Toolbar 
        sx={{ display: "flex", 
        justifyContent: "space-between",
         minHeight: "64px"
         }}
        >

          {/* LOGO */}
          <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            <img
              src="/logo.png"
              alt="TripEase Logo"
              style={{ height: "70px"}}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3
            }}
          >
            <Button sx={{ color: "#fff" }} onClick={() => navigate("/")}>Home</Button>
            <Button sx={{ color: "#fff" }}>Destinations</Button>
            <Button sx={{ color: "#fff" }}>Packages</Button>
            <Button sx={{ color: "#fff" }}>About Us</Button>
            <Button sx={{ color: "#fff" }} onClick={() => navigate("/register")}>
              Sign Up
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/login")}
              sx={{
                borderRadius: "20px",
                px: 3,
                backgroundColor: "#3f7dfc",
                color: "#fff",
                fontWeight: "bold"
              }}
            >
              Login
            </Button>
          </Box>

          {/*  MENU ICON */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
            onClick={() => setOpen(true)}
          >
            <MenuOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
  <Box sx={{ width: 250, p: 2 }}>

    {/*Logo in mobile responsive  */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: 2,
        cursor: "pointer"
      }}
      onClick={() => {
        navigate("/");
        setOpen(false);
      }}
    >
      <img
        src="/logo.png"
        alt="TripEase Logo"
        style={{ height: "100px", width: "150px" }}
      />
    </Box>
    {menuItems.map((item,ind) => (
      <Button
        key={item.name}
        fullWidth
        sx={{
          justifyContent: "flex-start",
          mb: 1,
        }}
        onClick={() => {
          navigate(item.path);
          setOpen(false);
        }}
      >
        {item.name}
      </Button>
    ))}
  </Box>
</Drawer>
    </div>
  );
}

export default Navbar;