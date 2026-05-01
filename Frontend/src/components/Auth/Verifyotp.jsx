import React, { useState, useRef, useEffect } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../Api/Api";

function VerifyOtp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const inputs = useRef([]);

  const location = useLocation();
  const navigate = useNavigate();

  // EMAIL LOGIC
  const email =
    location.state?.email || localStorage.getItem("otpEmail");

  useEffect(() => {
    if (!email) {
      navigate("/register");
    }
  }, [email, navigate]);

  // countdown timer
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // handle change
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      handleVerify(newOtp.join(""));
    }
  };

  // backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // verify
  const handleVerify = async (finalOtp) => {
    try {
      await api.post("/auth/verify-otp", {
        email,
        otp: finalOtp
      });

     alert("Verified successfully");

      localStorage.removeItem("otpEmail");
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    }
  };

  // resend OTP
  const handleResend = async () => {
    try {
      await api.post("/auth/resend-otp", { email });

      alert("OTP resent successfully");
      setTimer(30);
      setOtp(["", "", "", "", "", ""]);
      inputs.current[0].focus();

    } catch (err) {
      alert(err.response?.data?.message || "Failed to resend OTP");
    }
  };

  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h5">Enter OTP</Typography>

      <Box display="flex" justifyContent="center" gap={2} mt={3}>
        {otp.map((digit, index) => (
          <TextField
            key={index}
            value={digit}
            inputRef={(el) => (inputs.current[index] = el)}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            inputProps={{
              maxLength: 1,
              style: { textAlign: "center", fontSize: "20px" }
            }}
            sx={{ width: 50 }}
          />
        ))}
      </Box>

      {/* resend button */}
      <Box mt={3}>
        <Button
          variant="contained"
          onClick={handleResend}
          disabled={timer > 0}
        >
          {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
        </Button>
      </Box>
    </Box>
  );
}

export default VerifyOtp;