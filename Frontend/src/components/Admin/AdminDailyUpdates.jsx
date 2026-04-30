import React,{useState} from "react";
import {
Box,Typography,Grid,Card,CardContent,
Table,TableBody,TableCell,TableContainer,
TableHead,TableRow,Paper,Stack,
TextField,Button,Chip,IconButton
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";


 function AdminDailyUpdates(){

const [rows]=useState([
{title:"Road Closed",category:"Travel",date:"21 May",status:"Active"},
{title:"Weather Alert",category:"Safety",date:"22 May",status:"Active"},
{title:"Festival Traffic",category:"Traffic",date:"23 May",status:"Inactive"}
])

return(
<Box p={3}>
<Typography variant="h5" mb={2}>Daily Updates</Typography>

{/* Stat Cards */}
<Grid container spacing={2} mb={3}>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Total Updates</Typography>
<Typography variant="h5" fontWeight={700}>24</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Travel</Typography>
<Typography variant="h5" fontWeight={700}>10</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Safety</Typography>
<Typography variant="h5" fontWeight={700}>8</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Traffic</Typography>
<Typography variant="h5" fontWeight={700}>6</Typography>
</CardContent>
</Card>
</Grid>

</Grid>

{/* Header */}
<Stack direction="row" justifyContent="right" mb={2}>

<Button variant="contained">
Add Update
</Button>
</Stack>

<TableContainer component={Paper} sx={{borderRadius:3}}>
<Table>

<TableHead>
<TableRow>
<TableCell>Title</TableCell>
<TableCell>Category</TableCell>
<TableCell>Date</TableCell>
<TableCell>Status</TableCell>
<TableCell>Actions</TableCell>
</TableRow>
</TableHead>

<TableBody>
{rows.map((row,index)=>(
<TableRow key={index}>

<TableCell>{row.title}</TableCell>

<TableCell>
<Chip
label={row.category}
color="primary"
size="small"
/>
</TableCell>

<TableCell>{row.date}</TableCell>

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

export default AdminDailyUpdates;