import React from "react";
import {Box,Typography,Card,CardContent,Grid} from "@mui/material";

export default function AdminTripDetails(){
return(
<Box p={3}>
<Typography variant="h5" mb={2}>Trip Details</Typography>
<Card>
<CardContent>
<Grid container spacing={2}>
<Grid item xs={6}>
<Typography>Trip: Manali Adventure</Typography>
<Typography>Duration: 4 Days</Typography>
<Typography>Price: ₹12,499</Typography>
</Grid>
<Grid item xs={6}>
<Typography>Start: 24 May</Typography>
<Typography>End: 27 May</Typography>
<Typography>Status: Active</Typography>
</Grid>
</Grid>
</CardContent>
</Card>
</Box>
)
}
