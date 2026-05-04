const express = require("express");
const router = express.Router();

const {
  sendOtp,
  verifyOtp,
  resendOtp,
  registerUser,
  login
} = require("../controllers/AuthControllers");

const OtpModel = require("../model/OtpModel");


// ================= DEBUG ROUTES =================

// View all OTP records
router.get("/debug/otp", async (req, res) => {
  try {
    const data = await OtpModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching OTP data" });
  }
});


// View single OTP record
router.get("/debug/otp/:email", async (req, res) => {
  try {
    const data = await OtpModel.findOne({ email: req.params.email });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching OTP" });
  }
});


// Delete OTP record (testing)
router.delete("/debug/otp", async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required"
      });
    }

    const result = await OtpModel.deleteOne({ email });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "OTP record not found"
      });
    }

    res.json({
      success: true,
      message: "OTP record deleted"
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Delete failed"
    });
  }
});


// ================= MAIN ROUTES =================

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/resend-otp", resendOtp);
router.post("/register", registerUser);
router.post("/login", login);

module.exports = router;