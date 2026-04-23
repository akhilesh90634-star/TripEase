import React, { useState } from "react";
import { Box, TextField, Button, Typography, Card, Link, Grid,IconButton, InputAdornment, 
  Snackbar, Alert} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Navbar from "../LandingPage/Navbar";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");           
  const [type, setType] = useState("error");    

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  function handleLogin() {
    if (!data.email || !data.password) {
      setMsg("Please fill the details"); 
      setType("error");
      setOpen(true);
      return;
    }

    console.log("Login success", data);

    setMsg("Login Successful ");
    setType("success");
    setOpen(true);

    // clear form
    setData({
      email: "",
      password: ""
    });

    setShowPassword(false);
  }

  return (
<div> 
  <Navbar/>
    <Box
      sx={{
        minHeight: "88vh",
         pt: { xs: 6, md: 0},
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
          url('/login.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: {
          xs: "center",
          md: "center"
        }
      }}
    >
      <Grid container sx={{  height: "82vh"}}>

        {/* LEFT SIDE TEXT */}
    
        <Grid item xs={12}  md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",  
              px: 8,
              color: "#fff",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                textShadow: "2px 2px 10px rgba(0,0,0,0.7)"
              }}
            >
              Welcome To{" "}
                <Box component="span" sx={{ fontStyle: "italic" }}>
                  TripEase
                </Box>
                  
           </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  maxWidth: 400,
                  fontStyle: "italic"
                }}
              >
                Login to explore destinations, <br />
                manage your trips, and travel with ease.
              </Typography>
        </Grid>

        {/* RIGHT SIDE LOGIN */}
        <Grid item xs={12} md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
             mt: { xs: 3, md: 6 } ,
             mb: { xs: 3, md: 0 } ,
             px:2,
              height: "100%",
          }}
        >
          <Card
            sx={{
              p: 3,
              width: 350,
              borderRadius: 4,
              backgroundColor: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)"
            }}
          >
            <Typography variant="h5" fontWeight="bold" textAlign="center" mb={1}>
              Login
            </Typography>

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
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              margin="normal"
              value={data.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>

            <Typography textAlign="center">
              Don't have an account?{" "}
              <Link
                component="button"
                onClick={() => navigate("/register")}
              >
                Register
              </Link>
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={5000}
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

export default Login;