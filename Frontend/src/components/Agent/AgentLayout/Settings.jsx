import React, { useState } from "react";
import {Box,Typography,TextField,Switch,Button,Card,Grid,MenuItem   } from "@mui/material";

function AgentSettings() {
  const [settings, setSettings] = useState({
    name: "",
    email: "",
    phone: "",
    emailNotif: true,
    smsNotif: false,
    autoAccept: false,
    available: true,
    maxBookings: 5,
    language: "English",
    theme: "Light"  
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  }

  function handleToggle(name) {
    setSettings({ ...settings, [name]: !settings[name] });
  }

  function handleSave() {
    console.log("Saved Settings:", settings);
  }

  return (
    <Box
      sx={{
        height: "85vh",
        overflowY: "auto",
        p: 3,
        backgroundColor: "#f5f5f5"
      }}
    >
      <Typography variant="h5" mb={3}>
        Agent Settings
      </Typography>

      {/* Profile */}
      <Card sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6">Profile</Typography>
        <Grid container spacing={2} mt={1} mb={2}>
         
         <Grid container spacing={2} mt={1} mb={2}>
 
            <Grid item xs={12}>
                <TextField fullWidth label="Name" name="name" onChange={handleChange} />
            </Grid>

            <Grid item xs={12}>
                <TextField fullWidth label="Email" name="email" onChange={handleChange} />
            </Grid>

            <Grid item xs={12}>
                <TextField fullWidth label="Phone" name="phone" onChange={handleChange} />
            </Grid>

            </Grid>
                    
        </Grid>
      </Card>

      {/* Notifications */}
      <Card sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6">Notifications</Typography>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography>Email Notifications</Typography>
          <Switch
            checked={settings.emailNotif}
            onChange={ ()=> {
              handleToggle("emailNotif");
            }}
          />
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography>SMS Notifications</Typography>
          <Switch
            checked={settings.smsNotif}
            onChange={()=> {
              handleToggle("smsNotif");
            }}
          />
        </Box>
      </Card>

      {/* Agent Controls */}
      <Card sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6">Agent Controls</Typography>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography>Available</Typography>
          <Switch
            checked={settings.available}
            onChange={ ()=> {
              handleToggle("available");
            }}
          />
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography>Auto Accept Bookings</Typography>
          <Switch
            checked={settings.autoAccept}
            onChange={ ()=> {
              handleToggle("autoAccept");
            }}
          />
        </Box>

        <TextField
          fullWidth
          label="Max Bookings Per Day"
          name="maxBookings"
          type="number"
          sx={{ mt: 2 }}
          value={settings.maxBookings}
          onChange={handleChange}
        />
      </Card>

      {/* Preferences */}
      <Card sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6">Preferences</Typography>

        <TextField
          select
          fullWidth
          label="Language"
          name="language"
          sx={{ mt: 2 }}
          value={settings.language}
          onChange={handleChange}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Hindi">Hindi</MenuItem>
        </TextField>

      </Card>

      <Button variant="contained" onClick={handleSave}>
        Save Changes
      </Button>
    </Box>
  );
}

export default AgentSettings;