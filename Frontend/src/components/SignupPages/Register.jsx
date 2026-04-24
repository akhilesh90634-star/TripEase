import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  Link,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Navbar from "../LandingPage/Navbar";
import api from "../api/Api";

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
      await api.post("/user/register", {
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        password: data.password
      });

      setMsg("Registration successful");
      setType("success");
      setOpen(true);

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (err) {
      setMsg(err.response?.data?.message || "Registration failed");
      setType("error");
      setOpen(true);
    }
  }

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          minHeight: "85vh",
          pt: { xs: 6, md: 3, lg: 13.7 },
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
            url('/Register.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Grid
          container
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // 🔥 responsive preserved
            justifyContent: "center",
            alignContent: "center"
          }}
        >

          {/* LEFT SIDE */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              paddingTop: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center",
              px: 8,
              color: "#fff"
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
                textAlign: "center"
              }}
            >
              Your Adventure Starts Here <br />
              <Box component="span" sx={{ fontStyle: "italic" }}>
                Join TripEase Today
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{ mt: 2, maxWidth: 400, fontStyle: "italic" }}
            >
              Sign up to discover destinations, <br />
              plan trips, and travel without limits.
            </Typography>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: { xs: 3, md: 0 },
              mb: { xs: 3, md: 0 }
            }}
          >
            <Card
              sx={{
                p: 3,
                width: { xs: "70%", md: 400 },
                borderRadius: 4,
                backgroundColor: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.3)"
              }}
            >
              <Typography variant="h5" textAlign="center" mb={1}>
                Create Account
              </Typography>

              <TextField
                fullWidth
                label="Full Name"
                name="name"
                margin="normal"
                value={data.name}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                margin="normal"
                value={data.email}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="Mobile"
                name="mobile"
                margin="normal"
                value={data.mobile}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                margin="normal"
                value={data.password}
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

              <TextField
                fullWidth
                label="Confirm Password"
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                margin="normal"
                value={data.confirmPassword}
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
                sx={{ mt: 3, mb: 2 }}
                onClick={handleRegister}
              >
                Register
              </Button>

              <Typography textAlign="center">
                Already have an account?{" "}
                <Link component="button" onClick={() => navigate("/login")}>
                  Login
                </Link>
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity={type} onClose={() => setOpen(false)}>
            {msg}
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
}

export default Register;