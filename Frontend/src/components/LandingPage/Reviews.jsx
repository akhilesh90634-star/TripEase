import React from "react";
import {Container,Grid,Card,CardContent,Typography,Box,Rating} from "@mui/material";

function Reviews() {

  const reviews = [
    {
      name: "Aarav Sharma",
      rating: 5,
      comment: "Amazing experience! Everything was well organized and smooth. Loved TripEase planning.",
      place: "Goa Beach Escape"
    },
    {
      name: "Priya Verma",
      rating: 4,
      comment: "Great service and good hotel selection. Minor delay but overall very nice.",
      place: "Manali Adventure Trip"
    },
    {
      name: "Rohit Kumar",
      rating: 4,
      comment: "It`s a great experience! I had a lot of fun booking, and the support was excellent",
      place: "Kerala Backwaters"
    },
    {
      name: "Sneha Reddy",
      rating: 4,
      comment: "Very well planned itinerary. Worth the money for group trips.",
      place: "Rajasthan Heritage Tour"
    },
    {
      name: "Vikram Singh",
      rating: 5,
      comment: "Best travel platform I have used so far. Smooth booking experience.",
      place: "Himalayan Trek"
    }
  ];

  return (
    <Box sx={{ background: "#f5f7fb", py: 6 }}>

      <Container>

        <Typography
          variant="h5"
          fontWeight="bold"
          mb={3}
          textAlign="center"
        >
           REVIEWS
        </Typography>

        <Grid container spacing={3} justifyContent="center">

          {reviews.map((item, index)=> {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >

                <Card
                  sx={{
                    width: "100%",
                    maxWidth: 350,
                    borderRadius: 4,
                    background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  }}
                >

                  <CardContent>

                    <Typography fontWeight="bold" fontSize="16px">
                      {item.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {item.place}
                    </Typography>

                    <Box sx={{ mt: 1, mb: 1 }}>
                      <Rating value={item.rating} readOnly precision={0.5} />
                    </Box>

                    <Typography variant="body2" sx={{ color: "#555" }}>
                      {item.comment}
                    </Typography>

                  </CardContent>

                </Card>

              </Grid>
            );
          })}

        </Grid>

      </Container>

    </Box>
  );
}

export default Reviews;