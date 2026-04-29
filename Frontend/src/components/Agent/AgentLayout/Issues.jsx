import React, { useState } from "react";
import { Box, Typography, Paper, Grid, Chip, Button, Dialog, DialogTitle, DialogContent,
  DialogActions,TextField} from "@mui/material";

function Issues() {
   const [open, setOpen] = useState(false);
  const [newIssue, setNewIssue] = useState({
    desc: "",
    date: "",
    status: "Open"
  });
  const [issuesData, setIssuesData] = useState([
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
  ]);

  function getStatusColor(status) {
    if (status === "Open") return "warning";
    if (status === "In Progress") return "info";
    if (status === "Resolved") return "success";
    return "default";
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNewIssue({ ...newIssue, [name]: value });
  }

  //   SAVE FUNCTION
  function handleSave() {

    const newEntry = {
      id: "ISS" + (issuesData.length + 1).toString().padStart(3, "0"),
      desc: newIssue.desc,
      date: newIssue.date,
      status: newIssue.status
    };

    setIssuesData([...issuesData, newEntry]);

    // reset form
    setNewIssue({
      desc: "",
      date: "",
      status: "Open"
    });

    setOpen(false);
  }

  return (
    <Box sx={{ p: 3, background: "#f8fafc", height: "85vh" }}>

      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h5" fontWeight="bold">
          Issues / Support
        </Typography>

        <Button variant="contained" onClick={handleOpen}>
          New Issue
        </Button>
      </Box>

      {/* TABLE */}
      <Paper sx={{ p: 2, borderRadius: 3 }}>

        <Grid container sx={{ fontWeight: "bold", mb: 1 }}>
          <Grid item xs={2}>Issue ID</Grid>
          <Grid item xs={4}>Issue Description</Grid>
          <Grid item xs={4}>Reported On</Grid>
          <Grid item xs={2}>Status</Grid>
        </Grid>

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
            <Grid item xs={4}>{item.date}</Grid>

            <Grid item xs={2}>
              <Chip
                label={item.status}
                size="small"
                color={getStatusColor(item.status)}
              />
            </Grid>
          </Grid>
        ))}

      </Paper>

      {/* ISSUE POPUP */}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Create New Issue</DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Issue Description"
            name="desc"
            value={newIssue.desc}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Reported Date"
            name="date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={newIssue.date}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Status"
            name="status"
            value={newIssue.status}
            onChange={handleChange}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
}

export default Issues;