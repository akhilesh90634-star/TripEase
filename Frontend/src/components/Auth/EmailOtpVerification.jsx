import React, { useState, useEffect, useRef } from "react";
import { Box, TextField, Button, CircularProgress } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import api from "../Api/Api";

function EmailOtpVerification({
  email,
  onVerified,
  setMsg,
  setType,
  setOpen,
  onVerifyClick
}) {
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const [loadingVerify, setLoadingVerify] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);
  const [loadingResend, setLoadingResend] = useState(false);

  const sentRef = useRef(false);

  useEffect(() => {
    if (email && !sentRef.current) {
      sendOtp();
      sentRef.current = true;
    }
  }, [email]);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (otpSent && timer > 0 && !verified) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0) {
      setCanResend(true);
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [otpSent, timer, verified]);

  // SEND OTP
  async function sendOtp() {
    if (!email) {
      setMsg("Please fill the details");
      setType("error");
      setOpen(true);
      return;
    }

    setLoadingSend(true);

    try {
      await api.post("/auth/send-otp", { email });

      setOtpSent(true);
      setTimer(60);
      setCanResend(false);

      setMsg("OTP sent successfully");
      setType("success");
      setOpen(true);

    } catch (err) {
      setMsg(err.response?.data?.message || "Failed to send OTP");
      setType("error");
      setOpen(true);
    } finally {
      setLoadingSend(false);
    }
  }

  // RESEND OTP
  async function resendOtp() {
    setLoadingResend(true);

    try {
      await api.post("/auth/resend-otp", { email });

      setTimer(60);
      setCanResend(false);

      setMsg("OTP resent successfully");
      setType("info");
      setOpen(true);

    } catch {
      setMsg("Resend failed");
      setType("error");
      setOpen(true);
    } finally {
      setLoadingResend(false);
    }
  }

  // VERIFY OTP
  async function verifyOtp() {
    if (!otp) {
      setMsg("Enter OTP");
      setType("error");
      setOpen(true);
      return;
    }

    setLoadingVerify(true);

    try {
      await api.post("/auth/verify-otp", { email, otp });

      setVerified(true);
      onVerified(true);

      clearInterval(intervalRef.current);
      setTimer(0);
      setCanResend(false);

      setMsg("Email verified successfully");
      setType("success");
      setOpen(true);

    } catch {
      setMsg("Invalid OTP");
      setType("error");
      setOpen(true);
    } finally {
      setLoadingVerify(false);
    }
  }

  return (
    <Box sx={{ mt: 2 }}>

      {/* OTP INPUT */}
      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        <TextField
          fullWidth
          label="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          disabled={verified || loadingVerify}
        />

        {!verified ? (
          <Button onClick={verifyOtp} disabled={loadingVerify}>
            {loadingVerify ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Verify"
            )}
          </Button>
        ) : (
          <CheckCircle color="success" />
        )}
      </Box>

      {/* RESEND */}
      <Button
        sx={{ mt: 1 }}
        onClick={resendOtp}
        disabled={!canResend || loadingResend || verified}
      >
        {loadingResend ? (
          <CircularProgress size={18} color="inherit" />
        ) : canResend ? (
          "Resend OTP"
        ) : (
          `Resend (${timer}s)`
        )}
      </Button>

    </Box>
  );
}

export default EmailOtpVerification;