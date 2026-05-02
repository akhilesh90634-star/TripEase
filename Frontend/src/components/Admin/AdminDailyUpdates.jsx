import React, { useState } from "react";
import {
  Box, Typography, Grid, Card, CardContent,
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Chip
} from "@mui/material";

function AdminDailyUpdates() {

  const [rows] = useState([
    { title: "Road Closed", category: "Travel", date: "21 May" },
    { title: "Weather Alert", category: "Safety", date: "22 May" },
    { title: "Festival Traffic", category: "Traffic", date: "23 May" }
  ]);

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>Daily Updates</Typography>

      {/* Stat Cards */}
      <Grid container spacing={2} mb={3}>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography>Total Updates</Typography>
              <Typography variant="h6">{rows.length}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography>Travel</Typography>
              <Typography variant="h6">
                {rows.filter(r => r.category === "Travel").length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography>Safety</Typography>
              <Typography variant="h6">
                {rows.filter(r => r.category === "Safety").length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography>Traffic</Typography>
              <Typography variant="h6">
                {rows.filter(r => r.category === "Traffic").length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>

                <TableCell>{row.title}</TableCell>

                <TableCell>
                  <Chip label={row.category} color="primary" size="small" />
                </TableCell>

                <TableCell>{row.date}</TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

    </Box>
  );
}

export default AdminDailyUpdates;