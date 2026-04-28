import React from "react";
import { Box, Typography, Grid, Paper, Chip, Button} from "@mui/material";

function Dashboard() {

  const statsData = [
    { title: "My Trips", value: 3, subtitle: "Total Assigned", color: "#e0f2fe" },
    { title: "Today's Updates", value: 1, subtitle: "Submitted", color: "#dcfce7" },
    { title: "Pending Updates", value: 2, subtitle: "Pending", color: "#fef3c7" },
    { title: "Completed Trips", value: 1, subtitle: "Completed", color: "#e0e7ff" }
  ];

  const scheduleData = {
    title: "Goa Beach Escape",
    day: "Day 3 of 6",
    time: "08:00 AM - 06:00 PM",
    places: "Baga Beach, Water Sports, Local Sightseeing"
  };

  const tasksData = [
    { task: "Update Day 3 activities", status: "Pending" },
    { task: "Upload Hotel Invoice", status: "Pending" }
  ];

  const updatesData = [
    {
      trip: "Goa Beach Escape",
      date: "19 May 2025",
      day: "Day 2",
      status: "Submitted",
      time: "08:30 PM"
    },
    {
      trip: "Manali Adventure",
      date: "18 May 2025",
      day: "Day 1",
      status: "Submitted",
      time: "09:15 PM"
    },
    {
      trip: "Kerala Backwaters",
      date: "17 May 2025",
      day: "Day 4",
      status: "Pending",
      time: "-"
    }
  ];

  return (
    <Box
      sx={{
        p: 3,
        background: "#f8fafc",
        height: "88vh",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
             display: "none" 
        },
        scrollbarWidth: "none"
      }}
    >

      {/* HEADER */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Welcome back, Deepak!
          </Typography>
          <Typography color="gray">
            Here's what's happening with your trip today.
          </Typography>
        </Box>

        <Box textAlign="right">
          <Typography fontSize="14px">26 April 2026</Typography>
          <Typography fontSize="12px" color="gray">
            Sunday
          </Typography>
        </Box>
      </Box>

      {/* STATS CARDS */}
      <Grid container spacing={2}>
        {statsData.map((item, ind) => (
          <Grid item xs={12} md={3} key={ind}>
            <Paper sx={{ p: 2, borderRadius: 3, background: item.color }}>
              <Typography fontSize="14px">{item.title}</Typography>
              <Typography variant="h5" fontWeight="bold">
                {item.value}
              </Typography>
              <Typography fontSize="12px">{item.subtitle}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} mt={1}>

        {/* TODAY'S SCHEDULE */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, borderRadius: 3 }}>
            <Typography fontWeight="bold" mb={1}>
              Today's Schedule
            </Typography>

            <Typography fontWeight="bold">
              {scheduleData.title}
            </Typography>

            <Typography fontSize="12px" color="gray">
              {scheduleData.day}
            </Typography>

            <Typography mt={1}>
              {scheduleData.time}
            </Typography>

            <Typography fontSize="12px" color="gray">
              {scheduleData.places}
            </Typography>

            <Button size="small" sx={{ mt: 1 }}>
              View Schedule
            </Button>
          </Paper>
        </Grid>

        {/* PENDING TASKS */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, borderRadius: 3 }}>
            <Typography fontWeight="bold" mb={1}>
              Pending Tasks
            </Typography>

            {tasksData.map((item, ind) => (
              <Box
                key={ind}
                display="flex"
                justifyContent="space-between"
                mb={1}
              >
                <Typography fontSize="14px">
                  {item.task}
                </Typography>
                <Chip
                  label={item.status}
                  color="warning"
                  size="small"
                />
              </Box>
            ))}

            <Typography
              mt={2}
              fontSize="12px"
              color="primary"
              sx={{ cursor: "pointer" }}
            >
              View All
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* RECENT UPDATES */}
      <Box mt={3}>
        <Paper sx={{ p: 2, borderRadius: 3 }}>
          <Typography fontWeight="bold" mb={2}>
            Recent Updates
          </Typography>

          {/* TABLE HEADER */}
          <Grid
            container
            sx={{
              fontWeight: "bold",
              fontSize: "13px",
              mb: 1
            }}
          >
            <Grid item xs={3}>Trip Name</Grid>
            <Grid item xs={2}>Date</Grid>
            <Grid item xs={2}>Day</Grid>
            <Grid item xs={2}>Status</Grid>
            <Grid item xs={3}>Updated At</Grid>
          </Grid>

          {/* TABLE ROWS */}
          {updatesData.map((item, ind) => (
            <Grid
              container
              key={ind}
              sx={{
                py: 1,
                borderTop: "1px solid #eee",
                fontSize: "13px"
              }}
            >
              <Grid item xs={3}>{item.trip}</Grid>
              <Grid item xs={2}>{item.date}</Grid>
              <Grid item xs={2}>{item.day}</Grid>

              <Grid item xs={2}>
                <Chip
                  label={item.status}
                  size="small"
                  color={
                    item.status === "Submitted"? "success": "warning"
                  }
                />
              </Grid>

              <Grid item xs={3}>{item.time}</Grid>
            </Grid>
          ))}

          <Typography
            mt={2}
            fontSize="12px"
            color="primary"
            sx={{ cursor: "pointer" }}
          >
            View All Updates
          </Typography>
        </Paper>
      </Box>

    </Box>
  );
}

export default Dashboard;