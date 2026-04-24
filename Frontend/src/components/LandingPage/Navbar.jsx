import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IconButton, Drawer, Box } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import logo from "/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
    textTransform: "uppercase",
    padding: "8px 14px",
    borderRadius: "30px",
    transition: "0.3s",
  };

  const activeStyle = {
    background: "rgba(255,255,255,0.2)",
  };

  const menuItems = [
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "About Us", path: "/about" },
    { name: "Sign Up", path: "/register" },
    { name: "Login", path: "/login" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 20px",
          background: "rgba(15, 23, 42, 0.75)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          style={{
            height: "70px",
            cursor: "pointer",
            filter: "brightness(0) invert(1)",
          }}
          onClick={() => navigate("/")}
        />

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              style={({ isActive }) =>
                isActive ? { ...linkStyle, ...activeStyle } : linkStyle
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu">
          <IconButton onClick={() => setOpen(true)} sx={{ color: "white" }}>
            <MenuOutlined />
          </IconButton>
        </div>
      </nav>

      {/* DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            background: "rgba(15, 23, 42, 0.95)",
            color: "white",
          },
        }}
      >
        <Box sx={{ pt: 12, width: "200px" }}>
          <Box
            sx={{ display: "flex", justifyContent: "center", mb: 3 }}
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                height: "70px",
                filter: "brightness(0)", // makes it black
                cursor: "pointer",
              }}
            />
          </Box>

          {menuItems.map((item) => (
            <Box
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setOpen(false);
              }}
              sx={{
                padding: "12px",
                margin: "8px 0",
                borderColor: "black",
                borderRadius: "30px",
                textAlign: "center",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  background: "rgba(16, 12, 12, 0.37)",
                },
              }}
            >
              {item.name}
            </Box>
          ))}
        </Box>
      </Drawer>

      {/* ✅ RESPONSIVE CSS (NO INLINE CONFLICTS) */}
      <style>{`
        .desktop-menu {
          display: flex;
          gap: 20px;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }

          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
