import { Box, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const packages = [
  {title:"Goa Beach Escape",price:"₹12,499",days:"5 days . Goa",rating:"4.8",image:"/Goa.jpg"},
  { title: "Manali Trek & Camp", price: "₹18,999", days: "7 days • Himachal", rating: "4.9",image:"/Manali.jpg"},
  {title:"Jaipur Heritage Tour",price:"₹9,499",days:"4 days . Goa",rating:"4.7",image:"/jaipur.jpg"},
  {title:"Thar Desert Camp",price:"₹7,999",days:"8 days . Goa",rating:"4.8",image:"/thar.jpg"},
  {title:"Kerala Backwaters",price:"₹14,999",days:"4 days . Goa",rating:"4.7",image:"/kerala.jpg"},
  {title:"Golden Triangle Tour",price:"₹22,499",days:"5 days . Goa",rating:"4.8",image:"/Golden.jpg"},
  {title:"Coorg Coffee Trail",price:"₹11,299",days:"6 days . Goa",rating:"4.8",image:"/Coorg.jpg"},
  {title:"Leh–Ladakh Expedition",price:"₹34,999",days:"11 days . Goa",rating:"4.9",image:"/Ladakh.jpg"},
]
function PopularPackages() {
  return (
    <div>
      <Container>
        <Stack direction="row"
               justifyContent="space-between"
               mb={3}
        >
        <Typography variant="h6">Popular Packages</Typography>
        <Typography color="primary">See all 50+ trips</Typography>
        </Stack>
       <Grid container spacing={3}>
        {packages.map((item,index)=>(
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{
              borderRadius:3
            }}>
              <CardMedia component="img"
                         height="160"
                         image={item.image}
                         alt={item.title}
                         sx={{objectFit:"cover"}}
              />
                <CardContent>
                  <Typography fontWeight="bold">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:"4px"
                  }}>{item.days}. {item.rating}</Typography>
                  <Typography color="primary">{item.price}</Typography>
                </CardContent>
            </Card>
            </Grid>
        ))}
       </Grid>
      </Container>
    </div>
  )
}

export default PopularPackages