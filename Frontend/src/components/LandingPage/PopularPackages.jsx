import {
  Box, Container, Grid, Stack,
  Typography, Card, CardContent, Button
} from "@mui/material";

const packages = [
  {title:"Goa Beach Escape",price:"₹12,499",days:"5 days . Goa",rating:"4.8"},
  { title: "Manali Trek & Camp", price: "₹18,999", days: "7 days • Himachal", rating: "4.9" },
  {title:"Jaipur Heritage Tour",price:"₹9,499",days:"4 days . Goa",rating:"4.7"},
  {title:"Thar Desert Camp",price:"₹7,999",days:"8 days . Goa",rating:"4.8"},
  {title:"Kerala Backwaters",price:"₹14,999",days:"4 days . Goa",rating:"4.7"},
  {title:"Golden Triangle Tour",price:"₹22,499",days:"5 days . Goa",rating:"4.8"},
  {title:"Coorg Coffee Trail",price:"₹11,299",days:"6 days . Goa",rating:"4.8"},
  {title:"Leh–Ladakh Expedition",price:"₹34,999",days:"11 days . Goa",rating:"4.9"},
]

function PopularPackages() {
  return (
    <Container sx={{ mt: 5 }}>

      {/* HEADER */}
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Typography variant="h6">Popular Packages</Typography>
        <Typography color="primary">See all 50+ trips</Typography>
      </Stack>

      {/* GRID */}
      <Grid container spacing={3}>
        {packages.map((pkg, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>

            <Card
              sx={{
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 6
                }
              }}
            >

              {/* TOP COLOR */}
              <Box
                sx={{
                  height: 130,
                  background: "linear-gradient(to right, #89f7fe, #66a6ff)"
                }}
              />

              {/* CONTENT */}
              <CardContent>

                <Typography fontWeight="bold">
                  {pkg.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {pkg.days} • ⭐ {pkg.rating}
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mt={2}
                >
                  <Typography color="primary" fontWeight="bold">
                    {pkg.price}
                  </Typography>

                  <Button
                    size="small"
                    variant="outlined"
                    sx={{ borderRadius: "20px" }}
                  >
                    Add to Cart
                  </Button>
                </Stack>

              </CardContent>

            </Card>

          </Grid>
        ))}
      </Grid>

    </Container>
  );
}

export default PopularPackages;