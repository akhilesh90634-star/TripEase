import { Box, Button, Chip, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

function HeroSection() {
  return (
    <div>
       <Box  sx={{
                background: "linear-gradient(to right, #1e3c72, #2a5298)",
                color: "white",
                py: 10,
                textAlign: "center",
              }}>
                <Typography variant="h4" fontWeight="bold" mb={2}>Where do you want to explore next?</Typography>

                <Typography mb={4}> Solo adventures or group journeys — discover your perfect trip</Typography>

                <Stack  direction="row" justifyContent="center" spacing={2}>
                  <TextField placeholder="Search destinations,activities,or countries..."  
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
                  {["All", "Beach", "Mountain", "City", "Desert", "Nature","Heritage","Solo","Group","Under ₹10,000","₹10k-₹20k","₹20k+"].map((item)=>(
                    <Chip key={item} label={item} clickable/>
                  ))}
                </Stack>
              </Container>
    </div>
  )
}

export default HeroSection