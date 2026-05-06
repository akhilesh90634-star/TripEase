import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardContent, Table, TableBody, TableCell, 
    TableContainer,TableHead, TableRow, Paper, IconButton,Dialog, DialogTitle, 
    DialogContent, DialogActions,TextField, Button} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import api from "../Api/api";

function Users() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch users
  async function fetchUsers () {
    try {
      const res = await api.get("/users");
      const usersData = res.data. users ||res.data;
      const onlyUsers = usersData.filter((user) => {
        if (!user.role)
             return false;
        return user.role.toLowerCase().trim() === "user";
      });

      setRows(onlyUsers);
    } catch (err) {
      console.log(err);
    }
  };

  //  Delete
  async function handleDelete (id){
    try {
      await api.delete(`/users/${id}`);
      setRows(rows.filter((user) => user._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  //  Open edit modal
  async function handleEditClick (user){
    setSelectedUser(user);
    setOpen(true);
  };

  //  Close 
  function handleClose  () {
    setOpen(false);
    setSelectedUser(null);
  };

  // Handle input change
  function handleChange (e){
    setSelectedUser({
      ...selectedUser,
      [e.target.name]: e.target.value
    });
  };

  //  Update user
  async function handleUpdate  () {
    try {
      await api.put(`/users/${selectedUser._id}`, selectedUser);

      // update UI
      const updatedRows = rows.map((user) => {
        if (user._id === selectedUser._id) {
          return selectedUser;
        }
        return user;
      });

      setRows(updatedRows);
      handleClose();

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>
        Users
      </Typography>

      {/* Stats */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography color="text.secondary">
                Total Users
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                {rows.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.mobile}</TableCell>

                <TableCell>
                  {/* EDIT */}
                  <IconButton
                    color="primary"
                    onClick={() => handleEditClick(row)}
                  >
                    <Edit />
                  </IconButton>

                  {/* DELETE */}
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(row._id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

      {/*  EDIT MODAL */}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Edit User</DialogTitle>

        <DialogContent>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            value={selectedUser?.name || ""}
            onChange={handleChange}
          />

          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            value={selectedUser?.email || ""}
            onChange={handleChange}
          />

          <TextField
            label="Mobile"
            name="mobile"
            fullWidth
            margin="normal"
            value={selectedUser?.mobile || ""}
            onChange={handleChange}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleUpdate}>
            Update
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
}

export default Users;