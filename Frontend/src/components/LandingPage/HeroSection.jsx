import { Box, Button, Chip, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

// const packages = [
//   {title:"Goa Beach Escape",price:"₹12,499",days:"5 days . Goa",rating:"4.8"},
//   { title: "Manali Trek & Camp", price: "₹18,999", days: "7 days • Himachal", rating: "4.9" },
//   {title:"Jaipur Heritage Tour",price:"₹9,499",days:"4 days . Goa",rating:"4.7"},
//   {title:"Thar Desert Camp",price:"₹7,999",days:"8 days . Goa",rating:"4.8"},
//   {title:"Kerala Backwaters",price:"₹14,999",days:"4 days . Goa",rating:"4.7"},
//   {title:"Golden Triangle Tour",price:"₹22,499",days:"5 days . Goa",rating:"4.8"},
//   {title:"Coorg Coffee Trail",price:"₹11,299",days:"6 days . Goa",rating:"4.8"},
//   {title:"Leh–Ladakh Expedition",price:"₹34,999",days:"11 days . Goa",rating:"4.9"},


// ]
function HeroSection() {
  return (
    <div>
       <Box  sx={{
                // background: "linear-gradient(to right, #1e3c72, #2a5298)",
                backgroundColor:" #1e3c72",
                color: "white",
                py: 10,
                textAlign: "center",
              }}>
                <Typography variant="h4" fontWeight="bold" mb={2}>Where do you want to explore next?</Typography>

                <Typography mb={4}> Solo adventures or group journeys — discover your perfect trip</Typography>

                <Stack  direction="row" justifyContent="center" spacing={2}>
                  <TextField placeholder="Search destinations,activities..."  
                  sx={{ bgcolor: "white", borderRadius: 2, width: "300px" }}/>
                  <Button variant="contained" color="success">Search Trips</Button>
                </Stack>
              </Box>
              <Container sx={{
                mt: 3
              }}>
                <Stack direction="row"
                       spacing={1}
                       flexWrap="wrap"
                >
                  {["All", "Beach", "Mountain", "City", "Desert", "Nature","Heritage",
                  "Solo","Group","Under ₹10,000","₹10k-₹20k","₹20k+"].map((item)=>(
                    <Chip key={item} label={item} clickable/>
                  ))}
                </Stack>
              </Container>
    </div>
  )
}

export default HeroSection