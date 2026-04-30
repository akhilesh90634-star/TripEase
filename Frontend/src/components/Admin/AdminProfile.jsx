import React from "react";
import {
Box,
Typography,
Grid,
TextField,
Button,
Card,
CardContent,
Avatar,
Stack
} from "@mui/material";

function AdminProfile(){
return(
<Box p={3}>

<Typography variant="h5" mb={2}>
Profile
</Typography>

<Card sx={{borderRadius:3}}>
<CardContent>

<Grid container spacing={3} alignItems="center">

{/* Avatar Section */}
<Grid item xs={12} md={3}>
<Stack alignItems="center" spacing={2}>
<Avatar
sx={{ width: 90, height: 90 }}
src="/admin.png"
/>

<Typography fontWeight={600}>
Super Admin
</Typography>

<Typography variant="body2" color="text.secondary">
Administrator
</Typography>

<Button variant="outlined" size="small">
Change Photo
</Button>
</Stack>
</Grid>

{/* Form Section */}
<Grid item xs={12} md={9}>
<Grid container spacing={2}>

<Grid item xs={12} md={6}>
<TextField
fullWidth
label="Full Name"
defaultValue="Super Admin"
/>
</Grid>

<Grid item xs={12} md={6}>
<TextField
fullWidth
label="Email"
defaultValue="admin@gmail.com"
/>
</Grid>

<Grid item xs={12} md={6}>
<TextField
fullWidth
label="Phone"
defaultValue="9876543210"
/>
</Grid>

<Grid item xs={12} md={6}>
<TextField
fullWidth
label="Role"
defaultValue="Administrator"
/>
</Grid>

<Grid item xs={12}>
<Stack direction="row" justifyContent="flex-end">
<Button variant="contained">
Update Profile
</Button>
</Stack>
</Grid>

</Grid>
</Grid>

</Grid>
</CardContent>
</Card>

</Box>
)
}

export default AdminProfile