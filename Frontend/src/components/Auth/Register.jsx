import React, { useState } from "react";
import { Box, TextField, Button, Typography, Card, Grid, IconButton, InputAdornment, Snackbar, 
  Alert} from "@mui/material";
import {Visibility, VisibilityOff, Email, Person, Phone, Lock} from "@mui/icons-material";
import Navbar from "../LandingPage/Navbar";
import api from "../Api/Api";
import { useNavigate } from "react-router-dom";
import EmailOtpVerification from "./EmailOtpVerification";

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: ""
  });

  const [errors, setErrors] = useState({});
  const [verified, setVerified] = useState(false);

  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [type, setType] = useState("success");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // REGEX
  const emailPattern =
    /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const mobilePattern = /^[6-9]\d{9}$/;

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

  // HANDLE CHANGE
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));

    let err = "";

    if (name === "email" && value && !emailPattern.test(value)) {
      err = "Email must be validiate";
    }

    if (name === "mobile" && value && !mobilePattern.test(value)) {
      err = "Mobile must be 10 digits";
    }

    if (name === "password" && value && !passwordPattern.test(value)) {
      err = "Min 6 chars with A-Z, a-z, number & special char";
    }

    if (name === "confirmPassword" && value !== data.password) {
      err = "Passwords do not match";
    }

    setErrors((prev) => ({ ...prev, [name]: err }));
  }

  // VALIDATE ALL
  function validateAll() {
    let newErrors = {};

    if (!data.name) newErrors.name = "Name required";

    if (!data.email) newErrors.email = "Email required";
    else if (!emailPattern.test(data.email))
      newErrors.email = "Invalid email";

    if (!data.mobile) newErrors.mobile = "Mobile required";
    else if (!mobilePattern.test(data.mobile))
      newErrors.mobile = "Invalid mobile";

    if (!data.password) newErrors.password = "Password required";
    else if (!passwordPattern.test(data.password))
      newErrors.password = "Weak password";

    if (!data.confirmPassword)
      newErrors.confirmPassword = "Confirm password required";
    else if (data.password !== data.confirmPassword)
      newErrors.confirmPassword = "Passwords mismatch";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setMsg("Please fill the details");
      setType("error");
      setOpen(true);
    }

    return Object.keys(newErrors).length === 0;
  }

  // REGISTER
  async function handleRegister() {
    if (!validateAll()) return;

    try {
      await api.post("/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        mobile: data.mobile
      });

      setMsg("Registration Successful ");
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
          minHeight: "100vh",
          pt: 10,
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
            url('/Register.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Grid container>

          {/* LEFT */}
         <Grid item xs={12} md={6}
            sx={{
              color: "white",
              p: 6,
              display: "flex",
              flexDirection: "column",
              justifyContent: "start"
            }}
          >
              <Typography variant="h3" fontWeight="bold">
              Your Adventure Starts Here .
              <Box component="span" sx={{ fontStyle: "italic" }}>
                Join TripEase Today
              </Box>
            </Typography>

            <Typography variant="h6" sx={{ mt: 2, maxWidth: 400 }}>
              Sign up to discover destinations, plan trips, and travel without limits.
            </Typography>
          </Grid>

          {/* RIGHT */}
          <Grid item xs={12} md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={{ p: 4, width: 420, borderRadius: 4 }}>
              <Typography variant="h5" textAlign="center">
                Create Account
              </Typography>

              <TextField fullWidth label="Name" name="name"
                margin="normal" onChange={handleChange}
                error={!!errors.name} helperText={errors.name}
                InputProps={{ startAdornment: <InputAdornment position="start"><Person /></InputAdornment> }}
              />

              <TextField fullWidth label="Email" name="email"
                margin="normal" onChange={handleChange}
                error={!!errors.email} helperText={errors.email}
                InputProps={{ startAdornment: <InputAdornment position="start"><Email /></InputAdornment> }}
              />

              <TextField fullWidth label="Mobile" name="mobile"
                margin="normal" onChange={handleChange}
                error={!!errors.mobile} helperText={errors.mobile}
                InputProps={{ startAdornment: <InputAdornment position="start"><Phone /></InputAdornment> }}
              />

              <TextField fullWidth label="Password"
                type={showPassword ? "text" : "password"}
                name="password" margin="normal"
                onChange={handleChange}
                error={!!errors.password} helperText={errors.password}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Lock /></InputAdornment>,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <TextField fullWidth label="Confirm Password"
                type={showConfirm ? "text" : "password"}
                name="confirmPassword" margin="normal"
                onChange={handleChange}
                error={!!errors.confirmPassword} 
                helperText={errors.confirmPassword}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Lock /></InputAdornment>,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowConfirm(!showConfirm)}>
                        {showConfirm ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              {/* OTP */}
              <EmailOtpVerification
                email={data.email}
                onVerified={setVerified}
                validateAll={validateAll}
                setMsg={setMsg}
                setType={setType}
                setOpen={setOpen}
              />

              {verified && (
                <Button fullWidth variant="contained" sx={{ mt: 3 }}
                  onClick={handleRegister}>
                  Register
                </Button>
              )}

              <Typography textAlign="center" sx={{ mt: 2 }}>
                Already have an account?{" "}
                <span style={{ color: "#1976d2", cursor: "pointer" }}
                  onClick={() => navigate("/login")}>
                  Login
                </span>
              </Typography>

            </Card>
          </Grid>
        </Grid>

        <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
          <Alert severity={type}>{msg}</Alert>
        </Snackbar>
      </Box>
    </div>
  );
}

export default Register;