import React from "react";
import { Box, Typography, Paper, Grid, Chip} from "@mui/material";

function Bookings() {

  const clientsData = [
    {
      name: "Rahul Sharma",
      phone: "9876543210",
      age: 28,
      checkin: "22 May",
      checkout: "27 May",
      status: "Active"
    },
    {
      name: "Anjali Verma",
      phone: "9123456780",
      age: 26,
      checkin: "22 May",
      checkout: "27 May",
      status: "Active"
    },
    {
      name: "Vikram Singh",
      phone: "9988776655",
      age: 30,
      checkin: "22 May",
      checkout: "27 May",
      status: "Active"
    },
    {
      name: "Sneha Reddy",
      phone: "8899001122",
      age: 27,
      checkin: "22 May",
      checkout: "27 May",
      status: "Active"
    },
    {
      name: "Arjun Mehta",
      phone: "7766554433",
      age: 29,
      checkin: "22 May",
      checkout: "27 May",
      status: "Active"
    }
  ];

  return (
    <Box sx={{ p: 3, background: "#f8fafc", height: "85vh" }}>

      {/* HEADER */}
      <Typography variant="h5" fontWeight="bold" mb={1}>
         Bookings
      </Typography>


      {/* TABLE */}
      <Paper sx={{ p: 2, borderRadius: 3 }}>

        {/* HEADER ROW */}
        <Grid container sx={{ fontWeight: "bold", mb: 1 }}>
          <Grid item xs={2}>Client Name</Grid>
          <Grid item xs={2}>Phone</Grid>
          <Grid item xs={1}>Age</Grid>
          <Grid item xs={2}>Check-in</Grid>
          <Grid item xs={2}>Check-out</Grid>
          <Grid item xs={2}>Status</Grid>
        </Grid>

        {/* DATA ROWS */}
        {clientsData.map((item, index) => (
          <Grid
            container
            key={index}
            sx={{
              py: 1.5,
              borderTop: "1px solid #eee",
              alignItems: "center"
            }}
          >
            <Grid item xs={2}>{item.name}</Grid>
            <Grid item xs={2}>{item.phone}</Grid>
            <Grid item xs={1}>{item.age}</Grid>
            <Grid item xs={2}>{item.checkin}</Grid>
            <Grid item xs={2}>{item.checkout}</Grid>

            <Grid item xs={2}>
              <Chip
                label={item.status}
                color="success"
                size="small"
              />
            </Grid>
          </Grid>
        ))}

      </Paper>
    </Box>
  );
}

export default Bookings;