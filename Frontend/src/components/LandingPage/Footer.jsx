import { Box, Container, Grid, Typography, Stack, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#0f172a",
        color: "#fff",
        pt: 5,
        pb: 3
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          
          {/* BRAND */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              TripEase
            </Typography>
            <Typography variant="body2" color="gray">
              Making every trip easy and memorable. Explore the world with comfort and confidence.
            </Typography>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={12} md={3}>
            <Typography fontWeight="bold" mb={2}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="none" color="gray">Home</Link>
              <Link href="#" underline="none" color="gray">Packages</Link>
              <Link href="#" underline="none" color="gray">About</Link>
              <Link href="#" underline="none" color="gray">Contact</Link>
            </Stack>
          </Grid>

          {/* SUPPORT */}
          <Grid item xs={12} md={3}>
            <Typography fontWeight="bold" mb={2}>
              Support
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="none" color="gray">Help Center</Link>
              <Link href="#" underline="none" color="gray">Terms & Conditions</Link>
              <Link href="#" underline="none" color="gray">Privacy Policy</Link>
            </Stack>
          </Grid>

          {/* SOCIAL */}
          <Grid item xs={12} md={3}>
            <Typography fontWeight="bold" mb={2}>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton sx={{ color: "white" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* BOTTOM */}
        <Box
          sx={{
            borderTop: "1px solid #1e293b",
            mt: 4,
            pt: 2,
            textAlign: "center"
          }}
        >
          <Typography variant="body2" color="gray">
            © {new Date().getFullYear()} TripEase. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;