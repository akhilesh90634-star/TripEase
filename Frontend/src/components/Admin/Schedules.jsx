import React from "react";
import { Box, Typography, Card, CardContent, Grid, IconButton, Stack, Chip} from "@mui/material";
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";

export default function Schedule() {
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  const dates = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    event: i === 2 ? "Manali Trip" :
           i === 6 ? "Goa Booking" :
           i === 14 ? "Kerala Tour" : null
  }));

  return (
    <Box p={3}>
      

      <Card sx={{ borderRadius: 3 }}>
        <CardContent>

          <Stack direction="row" justifyContent="space-between" mb={2}>
            <Typography variant="h6">May 2025</Typography>

            <Stack direction="row">
              <IconButton>
                <ArrowBackIosNewOutlined fontSize="small" />
              </IconButton>
              <IconButton>
                <ArrowForwardIosOutlined fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>

          {/* Days */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              mb: 1
            }}
          >
            {days.map((d) => (
              <Typography key={d} align="center" variant="body2">
                {d}
              </Typography>
            ))}
          </Box>

          {/* Dates */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: 1
            }}
          >
            {dates.map((date, i) => (
              <Card key={i} sx={{ p: 1, minHeight: 80 }}>
                <Typography fontWeight={600}>
                  {date.day}
                </Typography>

                {date.event && (
                  <Chip
                    label={date.event}
                    size="small"
                    sx={{ mt: 1 }}
                  />
                )}
              </Card>
            ))}
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}