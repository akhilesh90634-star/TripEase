import React, { useState } from "react";
import {
  Box, TextField, Button, Typography, Card, Grid,
  IconButton, InputAdornment, Snackbar, Alert,
  Dialog, DialogContent
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";
import api from "../api/Api";
import VerifyOtp from "./Verifyotp";

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [type, setType] = useState("error");
  const [loading, setLoading] = useState(false);
  const [openOtp, setOpenOtp] = useState(false);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleRegister() {
    if (!data.name || !data.email || !data.mobile || !data.password || !data.confirmPassword) {
      setMsg("Please fill all fields");
      setType("error");
      setOpen(true);
      return;
    }

    if (data.password !== data.confirmPassword) {
      setMsg("Passwords do not match");
      setType("error");
      setOpen(true);
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/register", {
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        password: data.password
      });

      localStorage.setItem("accessToken", res.data.token);
      localStorage.setItem("otpEmail", data.email);

      setMsg("OTP sent to your email");
      setType("success");
      setOpen(true);

      setTimeout(() => {
        setOpenOtp(true);
      }, 800);

    } catch (err) {
      const msg = err.response?.data?.message || "";

      if (msg.toLowerCase().includes("email")) {
        setMsg("Email already exists");
      } else if (msg.toLowerCase().includes("mobile")) {
        setMsg("Mobile number already exists");
      } else {
        setMsg("User already exists");
      }

      setType("error");
      setOpen(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Navbar />

      <Box
        sx={{
          minHeight: "100vh",
          pt: { xs: 10, md: 12 }, 
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
            url('/Register.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Grid container>

          {/* LEFT SIDE */}
          <Grid item xs={12} md={6}
            sx={{
              color: "white",
              p: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "start"
            }}
          >
            <Typography variant="h3" fontWeight="bold">
              Your Adventure Starts Here <br />
              <Box component="span" sx={{ fontStyle: "italic" }}>
                Join TripEase Today
              </Box>
            </Typography>

            <Typography variant="h6" sx={{ mt: 2, maxWidth: 400 }}>
              Sign up to discover destinations, plan trips, and travel without limits.
            </Typography>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",   
                pt: { xs: 2, md:0 },       
              }}
            >
            <Card sx={{ p: 4, width: 400, borderRadius: 4, marginTop:"4px"}}>

              <Typography variant="h5" textAlign="center">
                Create Account
              </Typography>

              <TextField fullWidth label="Full Name" name="name" margin="normal" onChange={handleChange} />
              <TextField fullWidth label="Email" name="email" margin="normal" onChange={handleChange} />
              <TextField fullWidth label="Mobile" name="mobile" margin="normal" onChange={handleChange} />

              {/* Password */}
              <TextField
                fullWidth label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                margin="normal"
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              {/* Confirm Password */}
              <TextField
                fullWidth label="Confirm Password"
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                margin="normal"
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowConfirm(!showConfirm)}>
                        {showConfirm ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
                onClick={handleRegister}
              >
                {loading ? "Sending OTP..." : "Register"}
              </Button>

            </Card>
          </Grid>
        </Grid>

        {/* SNACKBAR */}
        <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
          <Alert severity={type}>{msg}</Alert>
        </Snackbar>
      </Box>

      {/* OTP DIALOG */}
      <Dialog open={openOtp} maxWidth="xs" fullWidth>
        <DialogContent>
          <VerifyOtp />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Register;