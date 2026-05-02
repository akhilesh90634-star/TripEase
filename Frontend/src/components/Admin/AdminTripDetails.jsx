import React from 'react';
import TripDetails from '../Customer/Tripdetails/TripDetails';
import { Box, Button } from "@mui/material";

function AdminTripDetails() {

  function handleAdd() {
    console.log("Add Product");
  }

  function handleEdit() {
    console.log("Edit Trip");
  }

  function handleDelete() {
    var confirmDelete = window.confirm("Delete this trip?");
    if (confirmDelete) {
      console.log("Deleted");
    }
  }

  return (
    <Box>

      {/*Buttons */}
      <Box display="flex" justifyContent="flex-end" gap={2} p={2}>
        <Button variant="contained" color="success" onClick={handleAdd}>
          Add
        </Button>

        <Button variant="contained" color="warning" onClick={handleEdit}>
          Edit
        </Button>

        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </Box>

      {/*  hide Explore & Cart */}
      <Box
        sx={{
          "& .navbar .link": {
            display: "none"
          }
        }}
      >
        <TripDetails />
      </Box>

    </Box>
  );
}

export default AdminTripDetails;