
import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

function PackageDetails() {

  const trips = [
    {
      title: "Goa Beach Escape",
      image: "/Goa.jpg",
      details: [
        "22 May - 27 May 2025",
        "6 Days / 5 Nights",
        "Goa, India",
        "Clients: 18",
        "Hotel: Sea View Resort"
      ]
    },
    {
      title: "Jaipur Royal Tour",
      image: "/jaipur.jpg",
      details: [
        "05 June - 09 June 2025",
        "5 Days / 4 Nights",
        "Jaipur, Rajasthan",
        "Clients: 12",
        "Hotel: Pink Palace"
      ]
    },
    {
      title: "Ladakh Adventure Trip",
      image: "/Ladakh.jpg",
      details: [
        "15 June - 21 June 2025",
        "7 Days / 6 Nights",
        "Ladakh, India",
        "Clients: 20",
        "Hotel: Snow Peak Camp"
      ]
    },
    {
      title: "Manali Adventure Trip",
      image: "/Manali.jpg",
      details: [
        "15 June - 21 June 2025",
        "7 Days / 6 Nights",
        "Manali, Himachal",
        "Clients: 20",
        "Hotel: Snow Peak"
      ]
    }
  ];

  return (
    <Box>
      <Paper
        sx={{
          p: 2,
          borderRadius: 3,
          height: "89vh",
          overflowY: "auto",
          pb: 3,
          "&::-webkit-scrollbar": { display: "none" }
        }}
      >
        <Typography fontWeight="bold" fontSize={18} mb={2}>
          Trip Details
        </Typography>

        <Grid container spacing={3}>
          {trips.map((item, index) => (
            <Grid item xs={4} key={index}>
              <Paper
                sx={{
                  p: 2,
                  borderRadius: 3,
                  border: "1px solid #eee"
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  sx={{
                    width: "100%",
                    height: 140,
                    borderRadius: "10px",
                    objectFit: "cover",
                    mb: 1
                  }}
                />

                <Typography fontWeight="bold" fontSize={16} mb={0.5}>
                  {item.title}
                </Typography>

                {item.details.map((detail, ind) => (
                  <Typography
                    key={ind}
                    fontSize={13}
                    color="text.secondary"
                  >
                    {detail}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>

      </Paper>
    </Box>
  );
}

export default PackageDetails;