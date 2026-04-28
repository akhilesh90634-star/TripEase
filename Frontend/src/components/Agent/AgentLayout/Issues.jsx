import React from "react";
import {Box,Typography,Paper,Grid,Chip,Button} from "@mui/material";

function Issues() {

  const issuesData = [
    {
      id: "ISS001",
      desc: "One client having fever",
      date: "20 May 2025",
      status: "Open"
    },
    {
      id: "ISS002",
      desc: "Hotel room AC not working",
      date: "19 May 2025",
      status: "In Progress"
    },
    {
      id: "ISS003",
      desc: "Transport delay",
      date: "18 May 2025",
      status: "Resolved"
    }
  ];

  function getStatusColor(status) {
    if (status === "Open")
       return "warning";
    if (status === "In Progress") 
      return "info";
    if (status === "Resolved")
       return "success";
    return "default";
  }

  return (
    <Box sx={{ p: 3, background: "#f8fafc", height: "85vh" }}>

      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" mb={2}  textAlign="right">
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Issues / Support
          </Typography>
        </Box>

        <Button variant="contained">
          Raise New Issue
        </Button>
      </Box>

      {/* TABLE */}
      <Paper sx={{ p: 2, borderRadius: 3 }}>

        {/* HEADER ROW */}
        <Grid container sx={{ fontWeight: "bold", mb: 1 }}>
          <Grid item xs={2}>Issue ID</Grid>
          <Grid item xs={4}>Issue Description</Grid>
          <Grid item xs={2}>Reported On</Grid>
          <Grid item xs={2}>Status</Grid>
          <Grid item xs={2}>Action</Grid>
        </Grid>

        {/* DATA ROWS */}
        {issuesData.map((item, index) => (
          <Grid
            container
            key={index}
            sx={{
              py: 1.5,
              borderTop: "1px solid #eee",
              alignItems: "center"
            }}
          >
            <Grid item xs={2}>{item.id}</Grid>
            <Grid item xs={4}>{item.desc}</Grid>
            <Grid item xs={2}>{item.date}</Grid>

            <Grid item xs={2}>
              <Chip
                label={item.status}
                size="small"
                color={getStatusColor(item.status)}
              />
            </Grid>

            <Grid item xs={2}>
              <Typography
                color="primary"
                sx={{ cursor: "pointer" }}
              >
                View
              </Typography>
            </Grid>
          </Grid>
        ))}

        {/* FOOTER */}
        <Typography mt={2} fontSize="12px" color="gray">
          Showing 1 to {issuesData.length} of {issuesData.length} issues
        </Typography>

      </Paper>
    </Box>
  );
}

export default Issues;