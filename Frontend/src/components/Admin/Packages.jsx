import React,{useState} from "react";
import {
Box,Typography,Grid,Card,CardContent,
Table,TableBody,TableCell,TableContainer,
TableHead,TableRow,Paper,Stack,
TextField,Button,Chip,IconButton
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

function Packages(){

const [rows,setRows]=useState([
{
name:"Manali Adventure",
destination:"Manali",
duration:"4 Days",
price:"₹12,499",
status:"Active"
},
{
name:"Goa Beach",
destination:"Goa",
duration:"5 Days",
price:"₹15,999",
status:"Inactive"
}
])

return(
<Box p={3}>
<Typography variant="h5" mb={2}>Packages</Typography>

{/* Stat Cards */}
<Grid container spacing={2} mb={3}>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Total Packages</Typography>
<Typography variant="h5" fontWeight={700}>64</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Active</Typography>
<Typography variant="h5" fontWeight={700}>42</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Inactive</Typography>
<Typography variant="h5" fontWeight={700}>14</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Draft</Typography>
<Typography variant="h5" fontWeight={700}>8</Typography>
</CardContent>
</Card>
</Grid>

</Grid>

{/* Header */}
<Stack direction="row" justifyContent="right" mb={2}>
<Button variant="contained">
Add Package
</Button>
</Stack>

<TableContainer component={Paper} sx={{borderRadius:3}}>
<Table>

<TableHead>
<TableRow>
<TableCell>Package</TableCell>
<TableCell>Destination</TableCell>
<TableCell>Duration</TableCell>
<TableCell>Price</TableCell>
<TableCell>Status</TableCell>
<TableCell>Actions</TableCell>
</TableRow>
</TableHead>

<TableBody>
{rows.map((row,index)=>(
<TableRow key={index}>

<TableCell>{row.name}</TableCell>
<TableCell>{row.destination}</TableCell>
<TableCell>{row.duration}</TableCell>
<TableCell>{row.price}</TableCell>

<TableCell>
<Chip
label={row.status}
color={row.status==="Active"?"success":"default"}
size="small"
/>
</TableCell>

<TableCell>
<IconButton size="small">
<Edit/>
</IconButton>

<IconButton
size="small"
color="error"
onClick={()=>setRows(rows.filter((_,i)=>i!==index))}
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

export default Packages