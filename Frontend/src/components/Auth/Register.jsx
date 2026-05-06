import React, { useState } from "react";
import { Box, TextField, Button, Typography, Card, Grid, IconButton, InputAdornment, 
  Snackbar, Alert} from "@mui/material";
import { Visibility, VisibilityOff, Email, Person, Phone, Lock} from "@mui/icons-material";
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
  const [showOtp, setShowOtp] = useState(false);

  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [type, setType] = useState("success");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const emailPattern =
    /^[a-zA-Z](?!.*\.\.)[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  const mobilePattern = /^[6-9]\d{9}$/;

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;

  function handleChange(e) {
    const { name, value } = e.target;

    const updatedData = { ...data, [name]: value };
    setData(updatedData);

    let newErrors = { ...errors };

    if (name === "name") {
      if (!value.trim()) newErrors.name = "Name required";
      else if (value.length < 3) newErrors.name = "Min 3 characters";
      else newErrors.name = "";
    }

    if (name === "email") {
      if (!emailPattern.test(value)) {
        newErrors.email = "Email must start with letter & be valid";
      } else newErrors.email = "";
    }

    if (name === "mobile") {
      if (!mobilePattern.test(value)) {
        newErrors.mobile = "Enter valid 10-digit mobile";
      } else newErrors.mobile = "";
    }

    if (name === "password") {
      if (!passwordPattern.test(value)) {
        newErrors.password =
          "Min 8 chars with A-Z, a-z, number & special char";
      } else newErrors.password = "";
    }

    if (
      updatedData.password &&
      updatedData.confirmPassword &&
      updatedData.password !== updatedData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    } else newErrors.confirmPassword = "";

    setErrors(newErrors);
  }

  function validateAll() {
    let newErrors = {};

    if (!data.name || data.name.length < 3)
      newErrors.name = "Valid name required";

    if (!emailPattern.test(data.email))
      newErrors.email = "Enter valid email";

    if (!mobilePattern.test(data.mobile))
      newErrors.mobile = "Enter valid mobile";

    if (!passwordPattern.test(data.password))
      newErrors.password = "Strong password required";

    if (data.password !== data.confirmPassword)
      newErrors.confirmPassword = "Passwords mismatch";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setMsg("Please fill all fields properly");
      setType("error");
      setOpen(true);
    }

    return Object.keys(newErrors).length === 0;
  }

  async function handleRegister() {
    if (!validateAll()) return;

    if (!verified) {
      setMsg("Please verify email first");
      setType("error");
      setOpen(true);
      return;
    }

    try {
      await api.post("/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        mobile: data.mobile
      });

      setMsg("Registration Successful");
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
          <Grid item xs={12} md={6} sx={{ color: "white", p: 6 }}>
            <Typography variant="h3" fontWeight="bold">
              Your Adventure Starts Here.
              <Box component="span" sx={{ fontStyle: "italic" }}>
                Join TripEase Today
              </Box>
            </Typography>

            <Typography variant="h6" sx={{ mt: 2, maxWidth: 400 }}>
              Sign up to discover destinations, plan trips, and travel without limits.
            </Typography>
          </Grid>

          {/* RIGHT */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Card sx={{ p: 4, width: 420, borderRadius: 4 }}>
              <Typography variant="h5" textAlign="center">
                Create Account
              </Typography>

              <TextField
                fullWidth label="Name"
                name="name"
                placeholder="John"
                margin="normal"
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><Person /></InputAdornment>
                  )
                }}
              />

              {/* EMAIL WITH VERIFY BUTTON */}
              <TextField
                fullWidth
                label="Email"
                name="email"
                placeholder="john@gmail.com"
                margin="normal"
                onChange={handleChange}
                disabled={verified} 
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><Email /></InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      {!verified ? (
                        <Button
                          size="small"
                          variant="contained"
                          onClick={() => setShowOtp(true)}
                          disabled={!emailPattern.test(data.email) || showOtp}
                          sx={{ textTransform: "none", borderRadius: "8px" }}
                        >
                          Verify
                        </Button>
                      ) : (
                        <Box
                          sx={{
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            background: "#4caf50",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "14px"
                          }}
                        >
                          ✓
                        </Box>
                      )}
                    </InputAdornment>
                  )
                }}
              />

              {/* OTP SECTION */}
              {showOtp && (
                <EmailOtpVerification
                  email={emailPattern.test(data.email) ? data.email : ""}
                  onVerified={setVerified}
                  setMsg={setMsg}
                  setType={setType}
                  setOpen={setOpen}
                />
              )}

              <TextField
                fullWidth label="Mobile"
                name="mobile"
                placeholder="9876543210"
                margin="normal"
                onChange={handleChange}
                error={!!errors.mobile}
                helperText={errors.mobile}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><Phone /></InputAdornment>
                  )
                }}
              />

              <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Abc@123"
                margin="normal"
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><Lock /></InputAdornment>
                  ),
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
                placeholder="Re-Enter Password"
                margin="normal"
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><Lock /></InputAdornment>
                  ),
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
                  sx={{ mt: 3 }}
                  onClick={handleRegister}          
                >
                  Register
                </Button>

              <Typography textAlign="center" sx={{ mt: 2 }}>
                Already have an account?{" "}
                <span
                  style={{ color: "#1976d2", cursor: "pointer" }}
                  onClick={() => navigate("/login")}
                >
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