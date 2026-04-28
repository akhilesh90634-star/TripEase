import React from "react";
import {Box,Typography,Paper,Grid,Chip,Button} from "@mui/material";

function Itinerary() {

  const itineraryData = [
    {
      day: 1,
      date: "22 May",
      plan: "Arrival at Goa – Hotel Check-in",
      start: "02:00 PM",
      end: "08:00 PM",
      status: "Completed"
    },
    {
      day: 2,
      date: "23 May",
      plan: "North Goa Sightseeing",
      start: "08:00 AM",
      end: "07:00 PM",
      status: "Completed"
    },
    {
      day: 3,
      date: "24 May",
      plan: "Baga Beach & Water Sports",
      start: "08:00 AM",
      end: "08:00 PM",
      status: "Ongoing"
    },
    {
      day: 4,
      date: "25 May",
      plan: "South Goa Tour",
      start: "08:00 AM",
      end: "07:00 PM",
      status: "Upcoming"
    },
    {
      day: 5,
      date: "26 May",
      plan: "Leisure Day / Shopping",
      start: "10:00 AM",
      end: "08:00 PM",
      status: "Upcoming"
    },
    {
      day: 6,
      date: "27 May",
      plan: "Checkout & Departure",
      start: "08:00 AM",
      end: "12:00 PM",
      status: "Upcoming"
    }
  ];

function getStatusColor(status) {
    if (status === "Completed") return "success";
    if (status === "Ongoing") return "warning";
    return "default";
  }

  return (
    <Box sx={{ p: 3 }}>

      {/* HEADER */}
      <Typography variant="h5" fontWeight="bold" mb={1} >
        Itinerary
      </Typography>

      <Typography fontSize="14px" color="primary" mb={2}>
        Trip Details &gt; Goa Beach Escape
      </Typography>

      {/* TABLE */}
      <Paper sx={{ p: 2, borderRadius: 3 }}>

        {/* TABLE HEADER */}
        <Grid container sx={{ fontWeight: "bold", mb: 1 }}>
          <Grid item xs={1}>Day</Grid>
          <Grid item xs={2}>Date</Grid>
          <Grid item xs={3}>Plan</Grid>
          <Grid item xs={2}>Start Time</Grid>
          <Grid item xs={2}>End Time</Grid>
          <Grid item xs={1}>Status</Grid>
          <Grid item xs={1}>Action</Grid>
        </Grid>

        {/* TABLE ROWS */}
        {itineraryData.map((item, index) => (
          <Grid
            container
            key={index}
            sx={{
              py: 1.5,
              borderTop: "1px solid #eee",
              alignItems: "center"
            }}
          >
            <Grid item xs={1}>{item.day}</Grid>
            <Grid item xs={2}>{item.date}</Grid>
            <Grid item xs={3}>{item.plan}</Grid>
            <Grid item xs={2}>{item.start}</Grid>
            <Grid item xs={2}>{item.end}</Grid>

            <Grid item xs={1}>
              <Chip
                label={item.status}
                size="small"
                color={getStatusColor(item.status)}
              />
            </Grid>

            <Grid item xs={1}>
              {item.status === "Completed" ? (
                <Button size="small">View</Button>
              ) : (
                <Button size="small" variant="outlined">
                  Update
                </Button>
              )}
            </Grid>
          </Grid>
        ))}

      </Paper>
    </Box>
  );
}

export default Itinerary;