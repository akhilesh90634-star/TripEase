import React,{useState} from "react";
import {
Box,Typography,Grid,Card,CardContent,
Table,TableBody,TableCell,TableContainer,
TableHead,TableRow,Paper,Stack,
TextField,Button,Chip,IconButton
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

 function AdminIssues(){

const [rows]=useState([
{subject:"Payment Failed",priority:"High",status:"Open"},
{subject:"Booking Error",priority:"Medium",status:"In Progress"},
{subject:"Refund Delay",priority:"Low",status:"Closed"}
])

return(
<Box p={3}>
<Typography variant="h5" mb={2}>Issues</Typography>

{/* Stat Cards */}
<Grid container spacing={2} mb={3}>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Total Issues</Typography>
<Typography variant="h5" fontWeight={700}>42</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Open</Typography>
<Typography variant="h5" fontWeight={700}>18</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">In Progress</Typography>
<Typography variant="h5" fontWeight={700}>12</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Closed</Typography>
<Typography variant="h5" fontWeight={700}>12</Typography>
</CardContent>
</Card>
</Grid>

</Grid>

<TableContainer component={Paper} sx={{borderRadius:3}}>
<Table>
<TableHead>
<TableRow>
<TableCell>Subject</TableCell>
<TableCell>Priority</TableCell>
<TableCell>Status</TableCell>
<TableCell>Actions</TableCell>
</TableRow>
</TableHead>

<TableBody>
{rows.map((row,index)=>(
<TableRow key={index}>

<TableCell>{row.subject}</TableCell>

<TableCell>
<Chip
label={row.priority}
color={
row.priority==="High" ? "error" :
row.priority==="Medium" ? "warning" :
"success"
}
size="small"
/>
</TableCell>

<TableCell>
<Chip
label={row.status}
color={
row.status==="Open" ? "error" :
row.status==="In Progress" ? "warning" :
"success"
}
size="small"
/>
</TableCell>

<TableCell>
<IconButton size="small">
<Edit/>
</IconButton>

<IconButton size="small" color="error">
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

export default AdminIssues;