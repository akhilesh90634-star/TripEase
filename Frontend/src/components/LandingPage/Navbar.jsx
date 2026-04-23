// import React, { useState } from "react";
// import { AppBar, Toolbar, Button, Box, IconButton, Drawer} from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { MenuOutlined } from "@mui/icons-material";

// function Navbar() {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "Destinations", path: "/destinations" },
//     { name: "Packages", path: "/packages" },
//     { name: "About Us", path: "/about" },
//     { name: "Sign Up", path: "/register" },
//     { name: "Login", path: "/login" }
//   ];

//   return (
//     <div>
//       <AppBar
//         position="static"
//         sx={{
//           background: "linear-gradient(90deg, #3f7dfc, #00c6ff)",
//           color: "#fff",
//           px: 3
//         }}
//       >
//         <Toolbar
//         sx={{ display: "flex",
//         justifyContent: "space-between",
//          minHeight: "64px"
//          }}
//         >

//           {/* LOGO */}
//           <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
//             <img
//               src="/logo.png"
//               alt="TripEase Logo"
//               style={{ height: "70px"}}
//             />
//           </Box>

//           <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               alignItems: "center",
//               gap: 3
//             }}
//           >
//             <Button sx={{ color: "#fff" }} onClick={() => navigate("/")}>Home</Button>
//             <Button sx={{ color: "#fff" }}>Destinations</Button>
//             <Button sx={{ color: "#fff" }}>Packages</Button>
//             <Button sx={{ color: "#fff" }}>About Us</Button>
//             <Button sx={{ color: "#fff" }} onClick={() => navigate("/register")}>
//               Sign Up
//             </Button>

//             <Button
//               variant="contained"
//               onClick={() => navigate("/login")}
//               sx={{
//                 borderRadius: "20px",
//                 px: 3,
//                 backgroundColor: "#3f7dfc",
//                 color: "#fff",
//                 fontWeight: "bold"
//               }}
//             >
//               Login
//             </Button>
//           </Box>

//           {/*  MENU ICON */}
//           <IconButton
//             sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
//             onClick={() => setOpen(true)}
//           >
//             <MenuOutlined />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
//   <Box sx={{ width: 250, p: 2 }}>

//     {/*Logo in mobile responsive  */}
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         mb: 2,
//         cursor: "pointer"
//       }}
//       onClick={() => {
//         navigate("/");
//         setOpen(false);
//       }}
//     >
//       <img
//         src="/logo.png"
//         alt="TripEase Logo"
//         style={{ height: "100px", width: "150px" }}
//       />
//     </Box>
//     {menuItems.map((item,ind) => (
//       <Button
//         key={item.name}
//         fullWidth
//         sx={{
//           justifyContent: "flex-start",
//           mb: 1,
//         }}
//         onClick={() => {
//           navigate(item.path);
//           setOpen(false);
//         }}
//       >
//         {item.name}
//       </Button>
//     ))}
//   </Box>
// </Drawer>
//     </div>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { IconButton, Drawer, Box } from "@mui/material";
// import { MenuOutlined } from "@mui/icons-material";
// import SVGComponent from "./SVGComponent";

// function Navbar() {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const blurStyle = {
//     background: "rgb(0 0 0 / 10%)",
//     fontWeight: "500",
//     backdropFilter: "blur(8px)",
//     WebkitBackdropFilter: "blur(8px)",
//     padding: "8px 15px",
//     border: "1px solid rgba(255, 255, 255, 0.2)",
//     boxShadow: "0 4px 20px rgba(0, 0, 0, 0.18)",
//     borderRadius: "100px",
//     cursor: "pointer",
//     textDecoration: "none",
//     color: "black",
//     textTransform: "uppercase",
//   };

//   const menuItems = [
//     { name: "Destinations", path: "/destinations" },
//     { name: "Packages", path: "/packages" },
//     { name: "About Us", path: "/about" },
//     { name: "Sign Up", path: "/register" },
//     { name: "Login", path: "/login" }
//   ];

//   return (
//     <div>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr auto 1fr",
//           alignItems: "center",
//           padding: "25px 60px 0px",
//         }}
//       >
//         {/* Left Section - Desktop */}
//         <div
//           style={{
//             display: "flex",
//             gap: "20px",
//             textTransform: "uppercase",
//           }}
//           className="desktop-menu"
//         >
//           <Link to="/destinations" style={blurStyle}>Destinations</Link>
//           <Link to="/packages" style={blurStyle}>Packages</Link>
//         </div>

//         {/* Center Logo → Home */}
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <Link
//             to="/"
//             style={{
//               background: "rgb(0 0 0 / 10%)",
//               fontWeight: "500",
//               backdropFilter: "blur(8px)",
//               WebkitBackdropFilter: "blur(8px)",
//               border: "1px solid rgba(255, 255, 255, 0.2)",
//               boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//               borderRadius: "100px",
//               cursor: "pointer",
//               textDecoration: "none",
//               color: "white",
//               display: "inline-flex",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "5px",
//             }}
//           >
//             <img
//               src="/logo.png"
//               alt="TripEase Logo"
//               style={{ height: "70px", width: "auto" }}
//             />
//           </Link>
//         </div>

//         {/* Right Section - Desktop */}
//         <div
//           style={{
//             display: "flex",
//             gap: "20px",
//             textTransform: "uppercase",
//             justifyContent: "flex-end",
//           }}
//           className="desktop-menu"
//         >
//           <Link to="/about" style={blurStyle}>About Us</Link>
//           <Link to="/register" style={blurStyle}>Sign Up</Link>
//           <Link to="/login" style={{
//             ...blurStyle,
//             background: "rgba(63, 125, 252, 0.3)",
//             border: "1px solid rgba(63, 125, 252, 0.4)",
//             fontWeight: "bold",
//           }}>
//             Login
//           </Link>
//         </div>

//         {/* Mobile Menu Icon */}
//         <IconButton
//           sx={{
//             display: { xs: "block", md: "none" },
//             color: "#fff",
//             position: "fixed",
//             right: "20px",
//             top: "20px",
//             zIndex: 1000,
//             ...blurStyle,
//             borderRadius: "50%",
//           }}
//           onClick={() => setOpen(true)}
//         >
//           <MenuOutlined />
//         </IconButton>

//         {/* Hide desktop menu on mobile */}
//         <style>{`
//           @media (max-width: 900px) {
//             .desktop-menu {
//               display: none !important;
//             }
//           }
//         `}</style>
//       </div>

//       {/* Mobile Drawer */}
//       <Drawer
//         anchor="right"
//         open={open}
//         onClose={() => setOpen(false)}
//         PaperProps={{
//           sx: {
//             background: "rgba(0, 0, 0, 0.8)",
//             backdropFilter: "blur(20px)",
//             borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
//             color: "white",
//           }
//         }}
//       >
//         <Box sx={{ width: 250, p: 2 }}>
//           {/* Logo in mobile */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               mb: 3,
//               cursor: "pointer"
//             }}
//             onClick={() => {
//               navigate("/");
//               setOpen(false);
//             }}
//           >
//             <img
//               src="/logo.png"
//               alt="TripEase Logo"
//               style={{ height: "80px", width: "auto" }}
//             />
//           </Box>

//           {menuItems.map((item) => (
//             <Box
//               key={item.name}
//               onClick={() => {
//                 navigate(item.path);
//                 setOpen(false);
//               }}
//               sx={{
//                 display: "block",
//                 width: "100%",
//                 padding: "12px 20px",
//                 margin: "8px 0",
//                 background: "rgba(255, 255, 255, 0.1)",
//                 backdropFilter: "blur(8px)",
//                 borderRadius: "100px",
//                 border: "1px solid rgba(255, 255, 255, 0.2)",
//                 color: "white",
//                 textTransform: "uppercase",
//                 textDecoration: "none",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 transition: "all 0.3s ease",
//                 '&:hover': {
//                   background: "rgba(255, 255, 255, 0.2)",
//                 }
//               }}
//             >
//               {item.name}
//             </Box>
//           ))}
//         </Box>
//       </Drawer>
//     </div>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { IconButton, Drawer, Box } from "@mui/material";
// import { MenuOutlined } from "@mui/icons-material";

// function Navbar() {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const blurStyle = {
//     background: "rgb(0 0 0 / 10%)",
//     fontWeight: "500",
//     backdropFilter: "blur(8px)",
//     WebkitBackdropFilter: "blur(8px)",
//     padding: "8px 15px",
//     border: "1px solid rgba(255, 255, 255, 0.2)",
//     boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//     borderRadius: "100px",
//     cursor: "pointer",
//     textDecoration: "none",
//     color: "white",
//     textTransform: "uppercase",
//   };

//   const menuItems = [
//     { name: "Destinations", path: "/destinations" },
//     { name: "Packages", path: "/packages" },
//     { name: "About Us", path: "/about" },
//     { name: "Sign Up", path: "/register" },
//     { name: "Login", path: "/login" },
//   ];

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "1fr auto 1fr",
//         alignItems: "center",
//         padding: "15px 60px",
//         // background: "rgba(0, 0, 0, 0.2)",
//         // backdropFilter: "blur(10px)",
//         WebkitBackdropFilter: "blur(10px)",
//         borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
//       }}
//     >
//       {/* Left Section - Desktop */}
//       <div
//         style={{
//           display: "flex",
//           gap: "20px",
//         }}
//         className="desktop-menu"
//       >
//         <Link to="/destinations" style={blurStyle}>
//           Destinations
//         </Link>
//         <Link to="/packages" style={blurStyle}>
//           Packages
//         </Link>
//       </div>

//       {/* Center Logo → Home */}
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Link
//           to="/"
//           style={{
//             background: "rgb(0 0 0 / 10%)",
//             backdropFilter: "blur(8px)",
//             WebkitBackdropFilter: "blur(8px)",
//             // padding: "10px",
//             border: "1px solid rgba(255, 255, 255, 0.2)",
//             boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//             borderRadius: "90%",
//             cursor: "pointer",
//             textDecoration: "none",
//             display: "inline-flex",
//             alignItems: "center",
//             justifyContent: "center",
//             // width: "110px",
//             // height: "110px",
//           }}
//         >
//           <img
//             src="/logo.png"
//             alt="TripEase Logo"
//             style={{
//               height: "100px",
//               width: "100px",
//               filter: "brightness(0) invert(1)",
//             }}
//           />
//         </Link>
//       </div>

//       {/* Right Section - Desktop */}
//       <div
//         style={{
//           display: "flex",
//           gap: "20px",
//           justifyContent: "flex-end",
//         }}
//         className="desktop-menu"
//       >
//         <Link to="/about" style={blurStyle}>
//           About Us
//         </Link>
//         <Link to="/register" style={blurStyle}>
//           Sign Up
//         </Link>
//         <Link
//           to="/login"
//           style={{
//             ...blurStyle,
//             // background: "rgba(63, 125, 252, 0.3)",
//             // border: "1px solid rgba(63, 125, 252, 0.4)",
//             fontWeight: "bold",
//           }}
//         >
//           Login
//         </Link>
//       </div>

//       {/* Mobile Menu Icon */}
//       <IconButton
//         sx={{
//           display: { xs: "block", md: "none" },
//           position: "fixed",
//           right: "20px",
//           top: "15px",
//           zIndex: 10,
//           ...blurStyle,
//           borderRadius: "50%",
//           width: "45px",
//           height: "45px",
//           color: "white",
//         }}
//         onClick={() => setOpen(true)}
//       >
//         <MenuOutlined />
//       </IconButton>

//       {/* Hide desktop menu on mobile */}
//       <style>{`
//         @media (max-width: 900px) {
//           .desktop-menu {
//             display: none !important;
//           }
//           .mobile-logo {
//             display: block !important;
//           }
//         }
//         @media (min-width: 901px) {
//           .mobile-logo {
//             display: none !important;
//           }
//         }
//       `}</style>

//       {/* Show logo on mobile left side */}
//       <div className="mobile-logo" style={{ display: "none" }}>
//         <Link to="/">
//           <img
//             src="/logo.png"
//             alt="TripEase Logo"
//             style={{
//               height: "50px",
//               width: "auto",
//               filter: "brightness(0) invert(1)",
//             }}
//           />
//         </Link>
//       </div>

//       {/* Mobile Drawer */}
//       <Drawer
//         anchor="right"
//         open={open}
//         onClose={() => setOpen(false)}
//         PaperProps={{
//           sx: {
//             background: "rgba(0, 0, 0, 0.85)",
//             backdropFilter: "blur(20px)",
//             borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
//             color: "white",
//           },
//         }}
//       >
//         <Box sx={{ width: 250, p: 2 }}>
//           {/* Logo in mobile drawer */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               mb: 3,
//               mt: 1,
//               cursor: "pointer",
//             }}
//             onClick={() => {
//               navigate("/");
//               setOpen(false);
//             }}
//           >
//             <img
//               src="/logo.png"
//               alt="TripEase Logo"
//               style={{
//                 height: "80px",
//                 width: "auto",
//                 filter: "brightness(0) invert(1)",
//               }}
//             />
//           </Box>

//           {menuItems.map((item) => (
//             <Box
//               key={item.name}
//               onClick={() => {
//                 navigate(item.path);
//                 setOpen(false);
//               }}
//               sx={{
//                 display: "block",
//                 width: "100%",
//                 padding: "12px 20px",
//                 margin: "8px 0",
//                 background: "rgba(255, 255, 255, 0.1)",
//                 backdropFilter: "blur(8px)",
//                 borderRadius: "100px",
//                 border: "1px solid rgba(255, 255, 255, 0.2)",
//                 color: "white",
//                 textTransform: "uppercase",
//                 textDecoration: "none",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   background: "rgba(255, 255, 255, 0.2)",
//                 },
//               }}
//             >
//               {item.name}
//             </Box>
//           ))}
//         </Box>
//       </Drawer>
//     </div>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { IconButton, Drawer, Box } from "@mui/material";
// import { MenuOutlined } from "@mui/icons-material";

// function Navbar() {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const blurStyle = {
//     background: "rgb(0 0 0 / 10%)",
//     fontWeight: "500",
//     backdropFilter: "blur(8px)",
//     WebkitBackdropFilter: "blur(8px)",
//     padding: "8px 15px",
//     border: "1px solid rgba(255, 255, 255, 0.2)",
//     boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//     borderRadius: "100px",
//     cursor: "pointer",
//     textDecoration: "none",
//     color: "white",
//     textTransform: "uppercase",
//   };

//   const menuItems = [
//     { name: "Destinations", path: "/destinations" },
//     { name: "Packages", path: "/packages" },
//     { name: "About Us", path: "/about" },
//     { name: "Sign Up", path: "/register" },
//     { name: "Login", path: "/login" },
//   ];

//   return (
//     <nav
//       style={{
//         position: "fixed", // Fixed position for navbar overlay
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 9999,
//         display: "grid",
//         gridTemplateColumns: "1fr auto 1fr",
//         alignItems: "center",
//         padding: "5px 60px",
//         backdropFilter: "blur(10px)", // Blur effect
//         WebkitBackdropFilter: "blur(10px)", // Safari support
//         borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
//       }}
//     >
//       {/* Left Section - Desktop */}
//       <div
//         style={{
//           display: "flex",
//           gap: "20px",
//         }}
//         className="desktop-menu"
//       >
//         <Link to="/destinations" style={blurStyle}>
//           Destinations
//         </Link>
//         <Link to="/packages" style={blurStyle}>
//           Packages
//         </Link>
//       </div>

//       {/* Center Logo → Home */}
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Link
//           to="/"
//           style={{
//             background: "rgb(0 0 0 / 10%)",
//             backdropFilter: "blur(8px)",
//             WebkitBackdropFilter: "blur(8px)",
//             border: "1px solid rgba(255, 255, 255, 0.2)",
//             boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//             borderRadius: "90%", // Circular container
//             cursor: "pointer",
//             textDecoration: "none",
//             display: "inline-flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <img
//             src="/logo.png"
//             alt="TripEase Logo"
//             style={{
//               height: "100px", // Logo size inside circle
//               width: "100px",
//               filter: "brightness(0) invert(1)",
//             }}
//           />
//         </Link>
//       </div>

//       {/* Right Section - Desktop */}
//       <div
//         style={{
//           display: "flex",
//           gap: "20px",
//           justifyContent: "flex-end",
//         }}
//         className="desktop-menu"
//       >
//         <Link to="/about" style={blurStyle}>
//           About Us
//         </Link>
//         <Link to="/register" style={blurStyle}>
//           Sign Up
//         </Link>
//         <Link
//           to="/login"
//           style={{
//             ...blurStyle,
//             fontWeight: "bold",
//           }}
//         >
//           Login
//         </Link>
//       </div>

//       {/* Mobile Menu Icon */}
//       <div className="mobile-menu-icon" style={{ display: "none" }}>
//         <IconButton
//           sx={{
//             color: "white",
//             ...blurStyle,
//             borderRadius: "50%",
//             width: "45px",
//             height: "45px",
//             minWidth: "45px",
//           }}
//           onClick={() => setOpen(true)}
//         >
//           <MenuOutlined />
//         </IconButton>
//       </div>

//       {/* Hide desktop menu on mobile */}
// <style>{`
//   @media (max-width: 900px) {
//     nav {
//       display: none;
//       grid-template-columns: 1fr auto !important;
//       padding: 15px 20px !important;
//     }
//     .desktop-menu {
//       display: none !important;
//     }
//     .mobile-logo {
//       display: none;
//     }
//     .mobile-menu-icon {
//       display: flex !important;
//       justify-content: flex-end;
//     }
//   }
//   @media (min-width: 901px) {
//     .mobile-logo {
//       display: none !important;
//     }
//     .mobile-menu-icon {
//       display: none !important;
//     }
//   }
// `}</style>

//       {/* Show logo on mobile left side */}
//       <div className="mobile-logo" style={{ display: "none" }}>
//         <Link to="/">
//           <img
//             src="/logo.png"
//             alt="TripEase Logo"
//             style={{
//               height: "50px",
//               width: "auto",
//               filter: "brightness(0) invert(1)",
//             }}
//           />
//         </Link>
//       </div>

//       {/* Mobile Drawer */}
//       <Drawer
//         anchor="right"
//         open={open}
//         onClose={() => setOpen(false)}
//         PaperProps={{
//           sx: {

//             background: "rgba(145, 56, 56, 0.85)",
//             backdropFilter: "blur(20px)",
//             WebkitBackdropFilter: "blur(20px)", // Safari support
//             borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
//             color: "white",
//           },
//         }}
//       >
//         <Box sx={{ width: 250, p: 2 }}>
//           {/* Logo in mobile drawer */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               mb: 3,
//               mt: 1,
//               cursor: "pointer",
//               color:"black"
//             }}
//             onClick={() => {
//               navigate("/");
//               setOpen(false);
//             }}
//           >
//             <img
//               src="/logo.png"
//               alt="TripEase Logo"
//               style={{
//                 height: "80px",
//                 width: "auto",
//               }}
//             />
//           </Box>

//           {menuItems.map((item) => (
//             <Box
//               key={item.name}
//               onClick={() => {
//                 navigate(item.path);
//                 setOpen(false);
//               }}
//               sx={{
//                 display: "block",
//                 // width: "100%",
//                 padding: "12px 20px",
//                 margin: "8px 0",
//                 // background: "rgba(255, 255, 255, 0.1)",
//                 backdropFilter: "blur(8px)",
//                 // WebkitBackdropFilter: "blur(8px)", // Safari support
//                 borderRadius: "100px",
//                 border: "1px solid rgba(0, 0, 0, 0.2)",
//                 color: "black",
//                 textTransform: "uppercase",
//                 textDecoration: "none",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   background: "rgba(255, 255, 255, 0.2)",
//                 },
//               }}
//             >
//               {item.name}
//             </Box>
//           ))}
//         </Box>
//       </Drawer>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { IconButton, Drawer, Box } from "@mui/material";
// import { MenuOutlined } from "@mui/icons-material";
// import logo from "../../assets/logo.png"; // ✅ FIXED PATH (important)

// function Navbar() {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const linkStyle = {
//     textDecoration: "none",
//     color: "white",
//     fontWeight: "500",
//     textTransform: "uppercase",
//     padding: "8px 14px",
//     borderRadius: "30px",
//     transition: "0.3s",
//   };

//   const activeStyle = {
//     background: "rgba(255,255,255,0.2)",
//   };

//   const menuItems = [
//     { name: "Destinations", path: "/destinations" },
//     { name: "Packages", path: "/packages" },
//     { name: "About Us", path: "/about" },
//     { name: "Sign Up", path: "/register" },
//     { name: "Login", path: "/login" },
//   ];

//   return (
//     <>
//       {/* ✅ NAVBAR */}
//       <nav
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 9999,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           padding: "10px 20px",
//           backdropFilter: "blur(10px)",
//           // background: "rgba(0,0,0,0.3)",
//           borderBottom: "1px solid rgba(255,255,255,0.1)",
//         }}
//       >
//         {/* ✅ Logo */}
//         <img
//           src={logo}
//           alt="logo"
//           style={{
//             height: "50px",
//             cursor: "pointer",
//             filter: "brightness(0) invert(1)",
//           }}
//           onClick={() => navigate("/")}
//         />

//         {/* ✅ Desktop Menu */}
//         <div className="desktop-menu" style={{ display: "flex", gap: "20px" }}>
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               style={({ isActive }) =>
//                 isActive ? { ...linkStyle, ...activeStyle } : linkStyle
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </div>

//         {/* ✅ Mobile Menu Icon */}
//         <div className="mobile-menu">
//           <IconButton onClick={() => setOpen(true)} sx={{ color: "white" }}>
//             <MenuOutlined />
//           </IconButton>
//         </div>
//       </nav>

//       {/* ✅ DRAWER */}
//       <Drawer
//         anchor="right"
//         open={open}
//         onClose={() => setOpen(false)}
//         PaperProps={{
//           sx: {
//             background: "rgba(0,0,0,0.95)",
//             color: "white",
//             width: 220,
//                             zIndex:"99999999999999999999999999999999999999999999",
//           },
//         }}
//       >
//         <Box sx={{ p: 2 ,                zIndex:"99999999999999999999999999999999999999999999",}}>
//           {/* Logo inside drawer */}
//           <Box
//             sx={{ display: "flex", justifyContent: "center", mb: 3 }}
//             onClick={() => {
//               navigate("/");
//               setOpen(false);
//             }}
//           >
//             <img src={logo} alt="logo" style={{ height: "60px" }} />
//           </Box>

//           {/* Menu items */}
//           {menuItems.map((item) => (
//             <Box
//               key={item.name}
//               onClick={() => {
//                 navigate(item.path);
//                 setOpen(false);
//               }}
//               sx={{
//                 zIndex:"99999999999999999999999999999999999999999999",
//                 padding: "12px",
//                 margin: "8px 0",
//                 borderColor:"black",
//                 borderRadius: "30px",
//                 textAlign: "center",
//                 cursor: "pointer",
//                 transition: "0.3s",
//                 "&:hover": {
//                   background: "rgba(255,255,255,0.2)",
//                 },
//               }}
//             >
//               {item.name}
//             </Box>
//           ))}
//         </Box>
//       </Drawer>

//       {/* ✅ RESPONSIVE CSS */}
//       <style>{`
//         .mobile-menu {
//           display: none;
//         }

//         @media (max-width: 900px) {
//           .desktop-menu {
//             display: none !important;
//           }

//           .mobile-menu {
//             display: block !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// export default Navbar;

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
