import React from "react";
import {Box,Typography,Paper,LinearProgress,Button,Chip} from "@mui/material";

const trips = [
  {
    title: "Goa Beach Escape",
    image: "/Goa.jpg",
    dates: "22 May - 27 May 2025",
    duration: "6 Days / 5 Nights",
    progress: 50,
    status: "Ongoing"
  },
  {
    title: "Manali Adventure",
    image: "/Manali.jpg",
    dates: "15 May - 20 May 2025",
    duration: "6 Days / 5 Nights",
    progress: 20,
    status: "Ongoing"
  },
  {
    title: "Kerala Backwaters",
    image: "/kerala.jpg",
    dates: "10 May - 15 May 2025",
    duration: "6 Days / 5 Nights",
    progress: 100,
    status: "Completed"
  }
];

function Trip() {
  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "auto",
        mt: 4,
        p: 2
      }}
    >
      <Typography fontWeight="bold" fontSize={18} mb={2}>
        All trips assigned to you.
      </Typography>

      {trips.map((trip, index) => (
        <Paper
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            mb: 2,
            borderRadius: 3,
            border: "1px solid #eee",
            transition: "0.3s",
            "&:hover": {
              boxShadow: 3
            }
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={trip.image}
            alt={trip.title}
            sx={{
              width: 110,
              height: 90,
              borderRadius: 2,
              objectFit: "cover",
              mr: 2
            }}
          />

          {/* Content */}
          <Box sx={{ flexGrow: 1 }}>
            <Box display="flex" justifyContent="space-between">
              <Typography fontWeight="bold">
                {trip.title}
              </Typography>

              <Chip
                label={trip.status}
                size="small"
                sx={{
                  bgcolor:
                    trip.status === "Ongoing"
                      ? "#e8f5e9"
                      : "#e3f2fd",
                  color:
                    trip.status === "Ongoing"
                      ? "green"
                      : "blue",
                  fontWeight: 500
                }}
              />
            </Box>

            <Typography fontSize={13} color="text.secondary">
              {trip.dates}
            </Typography>

            <Typography fontSize={13} color="text.secondary" mb={1}>
              {trip.duration}
            </Typography>

            {/* Progress */}
            {trip.status !== "Completed" && (
              <Box display="flex" alignItems="center">
                <Box sx={{ width: "60%", mr: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={trip.progress}
                    sx={{
                      height: 6,
                      borderRadius: 5
                    }}
                  />
                </Box>
                <Typography fontSize={12}>
                  {trip.progress}%
                </Typography>
              </Box>
            )}
          </Box>

          {/* Button */}
          <Button
            variant="outlined"
            size="small"
            sx={{
              ml: 2,
              borderRadius: 2,
              textTransform: "none"
            }}
          >
            View Details
          </Button>
        </Paper>
      ))}
    </Box>
  );
}
export default Trip;