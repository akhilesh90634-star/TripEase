const express = require("express");
const router = express.Router();

const {registerUser,login,verifyOtp,resendOtp} = require("../controllers/AuthControllers");

router.post("/register", registerUser);
router.post("/login", login);
router.post("/verify-otp", verifyOtp);
router.post("/resend-otp", resendOtp);

module.exports = router;