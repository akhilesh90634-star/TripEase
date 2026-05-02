import React, { useState } from "react";
import {
  Box, Typography, Grid, Card, CardContent,
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton,
  Chip, Select, MenuItem
} from "@mui/material";
import { Delete } from "@mui/icons-material";

function AdminBookings() {

  const [rows, setRows] = useState([
    { user: "Rahul", trip: "Manali", date: "24 May", amount: "₹12,499", status: "Confirmed", agent: "" },
    { user: "Sneha", trip: "Goa", date: "25 May", amount: "₹15,999", status: "Pending", agent: "" },
    { user: "Amit", trip: "Kerala", date: "26 May", amount: "₹18,500", status: "Cancelled", agent: "" }
  ]);

  //  agents list
  const agents = ["Ravi", "Kiran", "Priya", "Arjun"];

  // Assign agent
  function handleAssign(index, value) {
    const updated = [...rows];
    updated[index].agent = value;
    setRows(updated);
  }

  // Delete
  function handleDelete(index) {

  const updatedRows = rows.filter((item, i) => {
    if (i !== index) {
      return true;
    } else {
      return false;
    }
  });

  setRows(updatedRows);
}

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>Bookings</Typography>

      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Trip</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Assign Agent</TableCell> {/* NEW */}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((r, i) => (
              <TableRow key={i}>

                <TableCell>{r.user}</TableCell>
                <TableCell>{r.trip}</TableCell>
                <TableCell>{r.date}</TableCell>
                <TableCell>{r.amount}</TableCell>

                <TableCell>
                  <Chip
                    label={r.status}
                    color={
                      r.status === "Confirmed" ? "success" :
                      r.status === "Pending" ? "warning" :
                      "error"
                    }
                    size="small"
                  />
                </TableCell>

                {/* Assign Agent Dropdown */}
                <TableCell>
                  <Select
                    size="small"
                    value={r.agent}
                    displayEmpty
                    onChange={(e) => handleAssign(i, e.target.value)}
                    sx={{ minWidth: 120 }}
                  >
                    <MenuItem value="">Assign</MenuItem>
                    {agents.map((a, index) => (
                      <MenuItem key={index} value={a}>
                        {a}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>

                <TableCell>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(i)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

    </Box>
  );
}

export default AdminBookings;