import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Button, Paper } from "@mui/material";
import { Add } from "@mui/icons-material";

function DailyUpdates() {
  return (
    <Box>
      <Paper
        sx={{
          borderRadius: "12px",
          height: "90vh",
          overflowY: "auto",
          px: 3,
          py: 2,

          "&::-webkit-scrollbar": {
            width: "none"
          },
          scrollbarWidth: "none"
        }}
      >
        
        {/* HEADER */}
        <Typography fontSize="18px" fontWeight="bold" mb={2} textAlign="center">
          Daily Updates
        </Typography>

        {/* DATE + DAY */}
        <Grid container spacing={2} mb={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Date" value="27 April 2026" />
          </Grid>

          <Grid item xs={6}>
            <TextField fullWidth label="Day" value="Day 3" />
          </Grid>
        </Grid>

        {/* ACTIVITIES */}
        <Typography fontWeight="600" mb={1}>
          Today's Activities
        </Typography>

        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="Visited beach, activities..."
          sx={{ mb: 2 }}
        />

        {/* CHECK IN / OUT */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography fontWeight="600" mb={1}>
              Check-In Details
            </Typography>

            <TextField fullWidth label="Hotel Name" sx={{ mb: 2 }} />
            <TextField fullWidth label="Check-in Time" sx={{ mb: 2 }} />
            <TextField fullWidth label="Location" />
          </Grid>

          <Grid item xs={6}>
            <Typography fontWeight="600" mb={1}>
              Check-Out Details
            </Typography>

            <TextField fullWidth label="Check-Out Time" sx={{ mb: 2 }} />
            <TextField fullWidth label="Next Destination" sx={{ mb: 2 }} />
            <TextField fullWidth label="Remarks" />
          </Grid>
        </Grid>

        {/* BUTTONS */}
        <Box display="flex" justifyContent="flex-end" gap={2} mt={3}>
          <Button variant="outlined">Cancel</Button>

          <Button
            variant="contained"
            sx={{
              background: "#5c7cfa",
              "&:hover": { background: "#4c6ef5" }
            }}
          >
            Submit Update
          </Button>
        </Box>

      </Paper>
    </Box>
  );
}

export default DailyUpdates;