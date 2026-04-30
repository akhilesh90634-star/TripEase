import React, { useState } from "react";
import {Box,Typography,Grid,Card,CardContent,Table,TableBody,TableCell,TableContainer,
  TableHead,TableRow,Paper,Chip,Stack,Button,TextField} from "@mui/material";

 function Hotels() {
  const [rows] = useState([
    {
      name: "Snow Valley Resort",
      location: "Manali",
      category: "4 Star",
      price: "₹4,500",
      status: "Active"
    },
    {
      name: "Sea View Resort",
      location: "Goa",
      category: "5 Star",
      price: "₹7,200",
      status: "Inactive"
    }
  ]);

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>
        Hotels
      </Typography>

      {/* Stat Cards */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography color="text.secondary">
                Total Hotels
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                128
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography color="text.secondary">
                Active
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                110
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography color="text.secondary">
                Inactive
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                12
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography color="text.secondary">
                Pending
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                6
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Header */}
      <Stack
        direction="row"
        justifyContent="right"
        mb={2}
      >
        
        <Button variant="contained">
          Add Hotel
        </Button>
      </Stack>

      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hotel</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={
                      row.status === "Active"
                        ? "success"
                        : "default"
                    }
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default Hotels;