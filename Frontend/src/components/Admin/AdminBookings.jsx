import React,{useState} from "react";
import {
Box,Typography,Grid,Card,CardContent,
Table,TableBody,TableCell,TableContainer,
TableHead,TableRow,Paper,IconButton,
Stack,TextField,Chip
} from "@mui/material";
import { Delete } from "@mui/icons-material";


function AdminBookings(){

const [rows,setRows]=useState([
{user:"Rahul",trip:"Manali",date:"24 May",amount:"₹12,499",status:"Confirmed"},
{user:"Sneha",trip:"Goa",date:"25 May",amount:"₹15,999",status:"Pending"},
{user:"Amit",trip:"Kerala",date:"26 May",amount:"₹18,500",status:"Cancelled"}
])

return(
<Box p={3}>
<Typography variant="h5" mb={2}>Bookings</Typography>

{/* Stat Cards */}
<Grid container spacing={2} mb={3}>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Total</Typography>
<Typography variant="h5" fontWeight={700}>2,354</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Confirmed</Typography>
<Typography variant="h5" fontWeight={700}>1,892</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Pending</Typography>
<Typography variant="h5" fontWeight={700}>312</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Cancelled</Typography>
<Typography variant="h5" fontWeight={700}>150</Typography>
</CardContent>
</Card>
</Grid>

</Grid>

<TableContainer component={Paper} sx={{borderRadius:3}}>
<Table>

<TableHead>
<TableRow>
<TableCell>User</TableCell>
<TableCell>Trip</TableCell>
<TableCell>Date</TableCell>
<TableCell>Amount</TableCell>
<TableCell>Status</TableCell>
<TableCell>Actions</TableCell>
</TableRow>
</TableHead>

<TableBody>
{rows.map((r,i)=>(
<TableRow key={i}>

<TableCell>{r.user}</TableCell>
<TableCell>{r.trip}</TableCell>
<TableCell>{r.date}</TableCell>
<TableCell>{r.amount}</TableCell>

<TableCell>
<Chip
label={r.status}
color={
r.status==="Confirmed" ? "success" :
r.status==="Pending" ? "warning" :
"error"
}
size="small"
/>
</TableCell>

<TableCell>
<IconButton
color="error"
onClick={()=>setRows(rows.filter((_,x)=>x!==i))}
>
<Delete/>
</IconButton>
</TableCell>

</TableRow>
))}
</TableBody>

</Table>
</TableContainer>

</Box>
)
}
export default  AdminBookings;