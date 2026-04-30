import React,{useState} from "react";
import {
Box,Typography,Grid,Card,CardContent,
Table,TableBody,TableCell,TableContainer,
TableHead,TableRow,Paper,Stack,
TextField,Chip,IconButton
} from "@mui/material";
import { Delete } from "@mui/icons-material";

function Users(){

const [rows,setRows]=useState([
{
name:"Rahul Sharma",
email:"rahul@gmail.com",
phone:"9876543210",
role:"Customer",
status:"Active"
},
{
name:"Anita Verma",
email:"anita@gmail.com",
phone:"9123456780",
role:"Customer",
status:"Inactive"
}
])

return(
<Box p={3}>
<Typography variant="h5" mb={2}>Users</Typography>

{/* Stat Cards */}
<Grid container spacing={2} mb={3}>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Total Users</Typography>
<Typography variant="h5" fontWeight={700}>12,568</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Active</Typography>
<Typography variant="h5" fontWeight={700}>10,245</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Inactive</Typography>
<Typography variant="h5" fontWeight={700}>1,876</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Blocked</Typography>
<Typography variant="h5" fontWeight={700}>447</Typography>
</CardContent>
</Card>
</Grid>

</Grid>

<TableContainer component={Paper} sx={{borderRadius:3}}>
<Table>

<TableHead>
<TableRow>
<TableCell>Name</TableCell>
<TableCell>Email</TableCell>
<TableCell>Phone</TableCell>
<TableCell>Role</TableCell>
<TableCell>Status</TableCell>
<TableCell>Actions</TableCell>
</TableRow>
</TableHead>

<TableBody>
{rows.map((row,index)=>(
<TableRow key={index}>

<TableCell>{row.name}</TableCell>
<TableCell>{row.email}</TableCell>
<TableCell>{row.phone}</TableCell>
<TableCell>{row.role}</TableCell>

<TableCell>
<Chip
label={row.status}
color={row.status==="Active"?"success":"default"}
size="small"
/>
</TableCell>

<TableCell>
<IconButton
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

export default Users