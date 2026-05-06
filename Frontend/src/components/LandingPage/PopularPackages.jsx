import { Card,CardContent,CardMedia,Container,Grid,Stack,Typography,Chip,Box, Button} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PopularPackages({ packages }) {
 const navigate = useNavigate();
  const [showAll,setShowAll] = useState(false);
  const visiblePackages = showAll  ? packages : packages.slice(0, 8);

  return (
    <Box sx={{background: "#f5f7fb", py: 5 }}>
      <div>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            mb={3}
        
          >
            <Typography variant="h6" mt={3}>
              Popular Packages
            </Typography>

            <Typography
              color="primary"
              sx={{ cursor: "pointer" }}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "See all trips"}
            </Typography>
          </Stack>

          <Grid container spacing={3 }>
            {visiblePackages.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ borderRadius: 3, 
                  position: "relative",
                  }}>

                  {/* SOLO / GROUP CHIP */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      zIndex: 2
                    }}
                  >
                    <Chip
                      label={item.bookingType}
                      size="small"
                      color={
                        item.bookingType === "Solo"? "success": "primary"
                      }
                    />
                  </Box>

                  <CardMedia
                    component="img"
                    height="160"
                    image={item.image}
                    alt={item.title}
                  />

                  <CardContent >
                  
                    <Typography fontWeight="bold">
                      {item.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {item.days} • {item.rating}
                    </Typography>

                    <Typography color="primary">
                      {item.price}
                    </Typography>
                  </CardContent>
                <Box sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      const token = localStorage.getItem("token");

                      if (!token) {
                        navigate("/login");
                      } else {
                        navigate("/customer/mycart");
                      }
                    }}
                  >
                    Book Now
                  </Button>
                </Box>

                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </Box>
  );
}

export default PopularPackages;