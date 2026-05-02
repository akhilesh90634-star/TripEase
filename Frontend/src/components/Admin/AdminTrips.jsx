import React,{useState} from "react";
import {Box,Typography,Grid,Card,CardContent,Table,TableBody,TableCell,TableContainer,
TableHead,TableRow,Paper,Button,IconButton,Dialog,DialogTitle,DialogContent,DialogActions,TextField,
Stack,Chip
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

function AdminTrips(){

const [rows,setRows]=useState([
{name:"Manali Adventure",destination:"Manali",duration:"4 Days",price:"₹12,499",status:"Upcoming"},
{name:"Goa Beach",destination:"Goa",duration:"5 Days",price:"₹15,999",status:"Ongoing"}
])

const [open,setOpen]=useState(false)
const [edit,setEdit]=useState(null)
const [form,setForm]=useState({name:"",destination:"",duration:"",price:"",status:"Upcoming"})

function handleOpen(row,i){
if(row){setForm(row);setEdit(i)}
else{setForm({name:"",destination:"",duration:"",price:"",status:"Upcoming"});setEdit(null)}
setOpen(true)
}

function handleSave(){
        if(edit!==null){
        const d=[...rows];
        d[edit]=form;
        setRows(d)
        }else{
        setRows([...rows,form])
        }
        setOpen(false)
        }

function handleDelete (i){
  const updatedRows = rows.filter((item, index) => {

    if (index !== i) {
      return true;
    } else {
      return false;
    }

  });

  setRows(updatedRows);

};

return(
<Box p={3}>
<Typography variant="h5" mb={2}>Trips</Typography>

{/* Stat Cards */}
<Grid container spacing={2} mb={3}>
<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Total Trips</Typography>
<Typography variant="h5" fontWeight={700}>56</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Upcoming</Typography>
<Typography variant="h5" fontWeight={700}>18</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Ongoing</Typography>
<Typography variant="h5" fontWeight={700}>12</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{borderRadius:3}}>
<CardContent>
<Typography color="text.secondary">Completed</Typography>
<Typography variant="h5" fontWeight={700}>26</Typography>
</CardContent>
</Card>
</Grid>
</Grid>

{/* Search + Button */}
<Stack direction="row" justifyContent="space-between" mb={2}>
<TextField size="small" placeholder="Search trip..." />
<Button variant="contained" onClick={()=>handleOpen()}>
Add Trip
</Button>
</Stack>

<TableContainer component={Paper} sx={{borderRadius:3}}>
<Table>
<TableHead>
<TableRow>
<TableCell>Trip</TableCell>
<TableCell>Destination</TableCell>
<TableCell>Duration</TableCell>
<TableCell>Price</TableCell>
<TableCell>Status</TableCell>
<TableCell>Actions</TableCell>
</TableRow>
</TableHead>

<TableBody>
{rows.map((r,i)=>(
<TableRow key={i}>
<TableCell>{r.name}</TableCell>
<TableCell>{r.destination}</TableCell>
<TableCell>{r.duration}</TableCell>
<TableCell>{r.price}</TableCell>

<TableCell>
<Chip
label={r.status}
color={
r.status==="Upcoming" ? "primary" :
r.status==="Ongoing" ? "warning" :
"success"
}
size="small"
/>
</TableCell>

<TableCell>
<IconButton onClick={()=>handleOpen(r,i)}>
<Edit/>
</IconButton>

<IconButton color="error" onClick={()=>handleDelete(i)}>
<Delete/>
</IconButton>
</TableCell>

</TableRow>
))}
</TableBody>
</Table>
</TableContainer>

<Dialog open={open} onClose={()=>setOpen(false)}>
<DialogTitle>{edit!==null?"Edit":"Add"} Trip</DialogTitle>

<DialogContent>
<TextField fullWidth label="Trip" margin="dense"
value={form.name}
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<TextField fullWidth label="Destination" margin="dense"
value={form.destination}
onChange={(e)=>setForm({...form,destination:e.target.value})}
/>

<TextField fullWidth label="Duration" margin="dense"
value={form.duration}
onChange={(e)=>setForm({...form,duration:e.target.value})}
/>

<TextField fullWidth label="Price" margin="dense"
value={form.price}
onChange={(e)=>setForm({...form,price:e.target.value})}
/>
</DialogContent>

<DialogActions>
<Button onClick={()=>setOpen(false)}>Cancel</Button>
<Button variant="contained" onClick={handleSave}>Save</Button>
</DialogActions>
</Dialog>

</Box>
)
}

export default AdminTrips;