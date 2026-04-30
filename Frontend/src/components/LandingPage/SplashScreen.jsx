import React from "react";
import { Box, Typography } from "@mui/material";

function SplashScreen() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      }}
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1
        }}
      >
        <source src="/Bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay content */}
      <Box textAlign="center">
          <Typography
            variant="h2"
            sx={{
              fontSize: "64px",
              fontWeight: 800,
              fontFamily: "serif",
              fontStyle: "italic",
            }}
          >
            TripEase
          </Typography>

        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          Explore. Dream. Travel.
        </Typography>
      </Box>
    </Box>
  );
}

export default SplashScreen;