import React, { useState } from "react";
import {Box,Typography,Paper,Grid,Chip,Button,Dialog,DialogTitle,DialogContent,
  DialogActions,TextField,MenuItem} from "@mui/material";

function Itinerary() {

  const [viewOpen, setViewOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itineraryData, setItineraryData] = useState([
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
  ]);

  function getStatusColor(status) {
    if (status === "Completed") return "success";
    if (status === "Ongoing") return "warning";
    return "default";
  }

  function handleView(item) {
    setSelectedItem(item);
    setViewOpen(true);
  }

  function handleUpdate(item) {
    setSelectedItem(item);
    setUpdateOpen(true);
  }

  function handleClose() {
    setViewOpen(false);
    setUpdateOpen(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSelectedItem({ ...selectedItem, [name]: value });
  }

  //  SAVE & UPDATE TABLE
  function handleSave() {
    const updatedData = itineraryData.map((item,ind) =>
      item.day === selectedItem.day ? selectedItem : item
    );

    setItineraryData(updatedData);
    setUpdateOpen(false);
  }

  return (
    <Box sx={{ px: 3, py: 2 }}>

      <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
        Schedule
      </Typography>

      <Paper
        sx={{
          p: 2,
          borderRadius: 3,
          height: "80vh",
          overflowY: "auto",
          "&::-webkit-scrollbar": { width: "none" },
          scrollbarWidth: "none"
        }}
      >
        <Grid container sx={{ fontWeight: "bold", mb: 1, px: 1 }}>
          <Grid item xs={1}>Day</Grid>
          <Grid item xs={2}>Date</Grid>
          <Grid item xs={3}>Plan</Grid>
          <Grid item xs={2}>Start Time</Grid>
          <Grid item xs={2}>End Time</Grid>
          <Grid item xs={1}>Status</Grid>
          <Grid item xs={1}>Action</Grid>
        </Grid>

        {itineraryData.map((item, index) => (
          <Grid
            container
            key={index}
            sx={{
              py: 1.5,
              px: 1,
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
                <Button size="small" onClick={() => handleView(item)}>
                  View
                </Button>
              ) : (
                <Button size="small" variant="outlined" onClick={() => handleUpdate(item)}>
                  Update
                </Button>
              )}
            </Grid>
          </Grid>
        ))}
      </Paper>

      {/* VIEW */}
      <Dialog open={viewOpen} onClose={handleClose} fullWidth>
        <DialogTitle>Day Details</DialogTitle>
        <DialogContent>
          {selectedItem && (
            <Box>
              <Typography><strong>Day:</strong> {selectedItem.day}</Typography>
              <Typography><strong>Date:</strong> {selectedItem.date}</Typography>
              <Typography><strong>Plan:</strong> {selectedItem.plan}</Typography>
              <Typography><strong>Start:</strong> {selectedItem.start}</Typography>
              <Typography><strong>End:</strong> {selectedItem.end}</Typography>
              <Typography><strong>Status:</strong> {selectedItem.status}</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* UPDATE */}
      <Dialog open={updateOpen} onClose={handleClose} fullWidth>
        <DialogTitle>Update Schedule</DialogTitle>

        <DialogContent>
          {selectedItem && (
            <>
              <TextField
                fullWidth
                margin="normal"
                label="Plan"
                name="plan"
                value={selectedItem.plan}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Start Time"
                name="start"
                value={selectedItem.start}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                margin="normal"
                label="End Time"
                name="end"
                value={selectedItem.end}
                onChange={handleChange}
              />

              <TextField
                select
                fullWidth
                margin="normal"
                label="Status"
                name="status"
                value={selectedItem.status}
                onChange={handleChange}
              >
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="Ongoing">Ongoing</MenuItem>
                <MenuItem value="Upcoming">Upcoming</MenuItem>
              </TextField>
            </>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
}

export default Itinerary;