import React from "react";
import { Box, Grid, Card, CardContent, Typography, Stack } from "@mui/material";

function DashboardAdmin() {
  const stats = [
    {
      title: "Total Users",
      value: "12,568",
      change: "+8.5%",
      note: "Up from yesterday"
    },
    {
      title: "Total Bookings",
      value: "2,354",
      change: "+5.2%",
      note: "Up from yesterday"
    },
    {
      title: "Revenue",
      value: "₹18,75,300",
      change: "+12.6%",
      note: "Up from yesterday"
    },
    {
      title: "Total Trips",
      value: "342",
      change: "+3.1%",
      note: "Up from yesterday"
    }
  ];

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>
        Dashboard
      </Typography>

      <Grid container spacing={2}>
        {stats.map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0px 2px 8px rgba(0,0,0,0.05)"
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>

                <Typography variant="h5" fontWeight={700} mt={1}>
                  {item.value}
                </Typography>

                <Stack direction="row" spacing={1} mt={1}>
                  <Typography
                    variant="caption"
                    sx={{ color: "success.main", fontWeight: 600 }}
                  >
                    {item.change}
                  </Typography>

                  <Typography variant="caption" color="text.secondary">
                    {item.note}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DashboardAdmin;