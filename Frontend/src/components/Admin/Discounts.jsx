import React, { useState } from "react";
import {Box,Typography,Grid,Card,CardContent,Table,TableBody,TableCell,TableContainer,
  TableHead,TableRow,Paper,Stack,Button,TextField,Chip,IconButton} from "@mui/material";
import {   Delete,  Edit } from "@mui/icons-material";


 function Discounts() {
  const [rows] = useState([
    {
      name: "Festival Offer",
      type: "Percentage",
      value: "15%",
      status: "Active"
    },
    {
      name: "Summer Sale",
      type: "Flat",
      value: "₹2000",
      status: "Inactive"
    }
  ]);

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>
        Discounts
      </Typography>

      {/* Stat Cards */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography color="text.secondary">
                Total Discounts
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                24
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
                18
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography color="text.secondary">
                Expired
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                4
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography color="text.secondary">
                Scheduled
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                2
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
          Add Discount
        </Button>
      </Stack>

      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.value}</TableCell>
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

                <TableCell>
                  <IconButton size="small">
                    <Edit />
                  </IconButton>

                  <IconButton size="small" color="error">
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
export default Discounts;