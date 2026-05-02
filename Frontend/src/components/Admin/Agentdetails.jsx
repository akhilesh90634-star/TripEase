import React, { useState } from "react";
import {Box, Typography, Grid, Card, CardContent,Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Stack,TextField, Button, Chip, IconButton,
  Dialog, DialogTitle, DialogContent, DialogActions, MenuItem} from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";

function Agentdetails() {

  const [rows, setRows] = useState([
    {
      name: "Ravi Kumar",
      email: "ravi@gmail.com",
      phone: "9876543210",
      location: "Hyderabad",
      status: "Active"
    },
    {
      name: "Sneha Sharma",
      email: "sneha@gmail.com",
      phone: "9123456780",
      location: "Delhi",
      status: "Inactive"
    },
    {
      name: "Arjun Mehta",
      email: "arjun@gmail.com",
      phone: "9012345678",
      location: "Mumbai",
      status: "Active"
    },
    {
      name: "Priya Reddy",
      email: "priya@gmail.com",
      phone: "9988776655",
      location: "Bangalore",
      status: "Active"
    },
    {
      name: "Kiran Das",
      email: "kiran@gmail.com",
      phone: "9871234560",
      location: "Kolkata",
      status: "Inactive"
    }
  ]);

  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [viewMode, setViewMode] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    status: "Active"
  });

  function handleOpen(row, index) {
    setViewMode(false);

    if (row) {
      setForm(row);
      setEditIndex(index);
    } else {
      setForm({
        name: "",
        email: "",
        phone: "",
        location: "",
        status: "Active"
      });
      setEditIndex(null);
    }

    setOpen(true);
  }

  function handleView(index) {
    setForm(rows[index]);
    setViewMode(true);
    setOpen(true);
  }

  function handleSave() {
    if (editIndex !== null) {
      var updated = [...rows];
      updated[editIndex] = form;
      setRows(updated);
    } else {
      setRows([...rows, form]);
    }
    setOpen(false);
  }

  function handleDelete(index) {
    var updatedRows = rows.filter(function (_, i) {
      return i !== index;
    });
    setRows(updatedRows);
  }

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>Agents</Typography>

      {/* Stat Cards */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={3}>
          <Card><CardContent>
            <Typography>Total Agents</Typography>
            <Typography variant="h6">{rows.length}</Typography>
          </CardContent></Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card><CardContent>
            <Typography>Active</Typography>
            <Typography variant="h6">
              {rows.filter(r => r.status === "Active").length}
            </Typography>
          </CardContent></Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card><CardContent>
            <Typography>Inactive</Typography>
            <Typography variant="h6">
              {rows.filter(r => r.status === "Inactive").length}
            </Typography>
          </CardContent></Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card><CardContent>
            <Typography>Pending</Typography>
            <Typography variant="h6">0</Typography>
          </CardContent></Card>
        </Grid>
      </Grid>

      {/* Header */}
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <TextField size="small" placeholder="Search agent..." />
        <Button variant="contained" onClick={() => handleOpen()}>
          Add Agent
        </Button>
      </Stack>

      {/* Table */}
      <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
        <Table stickyHeader>

          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>

                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.location}</TableCell>

                <TableCell>
                  <Chip
                    label={row.status}
                    color={row.status === "Active" ? "success" : "default"}
                    size="small"
                  />
                </TableCell>

                <TableCell>

                  <IconButton onClick={() => handleOpen(row, index)}>
                    <Edit />
                  </IconButton>

                  <IconButton color="error" onClick={() => handleDelete(index)}>
                    <Delete />
                  </IconButton>

                  <IconButton color="primary" onClick={() => handleView(index)}>
                    <Visibility />
                  </IconButton>

                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

      {/* Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>

        <DialogTitle>
          {viewMode
            ? "View Agent"
            : editIndex !== null
              ? "Edit Agent"
              : "Add Agent"}
        </DialogTitle>

        <DialogContent>

          <TextField
            fullWidth label="Name" margin="dense"
            value={form.name}
            disabled={viewMode}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <TextField
            fullWidth label="Email" margin="dense"
            value={form.email}
            disabled={viewMode}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <TextField
            fullWidth label="Phone" margin="dense"
            value={form.phone}
            disabled={viewMode}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <TextField
            fullWidth label="Location" margin="dense"
            value={form.location}
            disabled={viewMode}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />

          <TextField
            select
            fullWidth
            label="Status"
            margin="dense"
            value={form.status}
            disabled={viewMode}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </TextField>

        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            {viewMode ? "Close" : "Cancel"}
          </Button>

          {!viewMode && (
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          )}
        </DialogActions>

      </Dialog>

    </Box>
  );
}

export default Agentdetails;