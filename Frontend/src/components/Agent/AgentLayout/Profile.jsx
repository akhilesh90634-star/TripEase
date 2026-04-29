import React, { useState } from "react";
import {Box,Typography,Paper,Grid,Avatar,Button,Dialog,DialogTitle,DialogContent,DialogActions,
  TextField} from "@mui/material";

function Profile() {

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "Ramesh Kumar",
    email: "ramesh.agent@tripease.com",
    phone: "9876543210"
  });

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSave() {
    console.log("Updated:", form);
    setOpen(false);
  }

  return (
    <Box
      sx={{
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8fafc"
      }}
    >

      <Box sx={{ width: "100%", p: 3 }}>

        {/* TITLE */}
        <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center">
          Profile
        </Typography>

        <Grid container spacing={3} justifyContent="center">

          {/* PROFILE INFO */}
          <Grid item xs={12} md={7}>
            <Paper
              sx={{
                p: 4,
                borderRadius: 3,
                minHeight: 320
              }}
            >

              <Box
                display="flex"
                justifyContent="space-between"
                mb={2}
              >
                <Typography fontWeight="bold">
                  Profile
                </Typography>

                <Button variant="outlined" size="small" onClick={handleOpen}>
                  Edit
                </Button>
              </Box>

              <Box display="flex" gap={3}>

                {/* AVATAR */}
                <Box textAlign="center">
                  <Avatar sx={{ width: 100, height: 100 }} />
                  <Button size="small" sx={{ mt: 1 }}>
                    Change Photo
                  </Button>
                </Box>

                {/* DETAILS */}
                <Box>
                  <Typography fontSize="14px" mb={1}>
                    <strong>AGENT ID :</strong> AGT1023
                  </Typography>

                  <Typography fontSize="14px" mb={1}>
                    <strong>FULL NAME :</strong> {form.name}
                  </Typography>

                  <Typography fontSize="14px" mb={1}>
                    <strong>EMAIL :</strong> {form.email}
                  </Typography>

                  <Typography fontSize="14px" mb={1}>
                    <strong>PHONE :</strong> {form.phone}
                  </Typography>

                  <Typography fontSize="14px" mb={1}>
                    <strong>ROLE :</strong> Travel Agent
                  </Typography>

                  <Typography fontSize="14px" mb={1}>
                    <strong>ASSIGNED REGION :</strong> South India
                  </Typography>

                  <Typography fontSize="14px" mb={1}>
                    <strong>EXPERIENCE :</strong> 3 Years
                  </Typography>

                  <Typography fontSize="14px" mb={1}>
                    <strong>CURRENT TRIP :</strong> Goa Beach Escape
                  </Typography>

                  <Typography fontSize="14px" mb={1}>
                    <strong>LOCATION :</strong> Goa, India
                  </Typography>

                  <Typography fontSize="14px" mb={1}>
                    <strong>RATING :</strong> 4.5 / 5
                  </Typography>

                  <Typography fontSize="14px">
                    <strong>JOINING DATE :</strong> 01 Jan 2025
                  </Typography>
                </Box>

              </Box>
            </Paper>
          </Grid>

        </Grid>
      </Box>

      {/* EDIT POPUP */}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Edit Profile</DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
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

export default Profile;