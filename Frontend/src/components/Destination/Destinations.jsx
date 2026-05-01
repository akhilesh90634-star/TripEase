import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";

const destinationcards = [
{ name: "Beach", desc: "Relax on pristine beaches", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
{ name: "Mountains", desc: "Breathtaking mountain views", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
{ name: "Nature", desc: "Enjoy waterfalls & forests", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
{ name: "City", desc: "Explore urban lifestyle", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b" },
{ name: "Desert", desc: "Experience desert safari", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
{ name: "Heritage", desc: "Discover historical places", img: "https://images.unsplash.com/photo-1548013146-72479768bada" }
];

function Destinations() {
  const navigate = useNavigate();

  return (
    <Box>
     
      {/* Page Content */}
      <Box sx={{ px: 4, py: 12 }}>
        <Typography
          variant="h4"
          mb={4}
          fontWeight="bold"
          textAlign="center"
        >
          Explore Destinations
        </Typography>

        <Grid container spacing={4}>
          {destinationcards.map((item, ind) => (
            <Grid item xs={12} sm={6} md={4} key={ind}>
              <Box
                sx={{
                  height: 400,
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
                  }
                }}
              >

                {/* Dark Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.4)"
                  }}
                />

                {/* Center Content */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "#fff",
                    width: "100%",
                    px: 2
                  }}
                >
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ letterSpacing: 1 }}
                  >
                    {item.name}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mt: 1, opacity: 0.9 }}
                  >
                    {item.desc}
                  </Typography>

                  <Button
                    variant="contained"
                    size="small"
                    onClick={() =>
                      navigate(`/destinations/${item.name.toLowerCase()}`)
                    }
                    sx={{
                      mt: 2,
                      borderRadius: 3,
                      textTransform: "none"
                    }}
                  >
                    Explore
                  </Button>
                </Box>

              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Destinations;