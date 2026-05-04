const UserModel = require("../model/usermodel");
const OtpModel = require("../model/OtpModel");
const { AccessToken, RefreshToken } = require("../utils/token");
const transporter = require("../config/mailer");


// ===================== SEND OTP =====================
async function sendOtp(req, res) {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required"
      });
    }

    // ❌ Block if already registered
    const exists = await UserModel.findOne({ email });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Email already registered"
      });
    }

    // 🔥 Check existing OTP record
    const existingOtp = await OtpModel.findOne({ email });

    // ❌ Block resend if already verified
    if (existingOtp && existingOtp.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Email already verified"
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // 🔥 Upsert OTP
    await OtpModel.findOneAndUpdate(
      { email },
      {
        email,
        otp,
        isVerified: false,
        createdAt: new Date()
      },
      { upsert: true, new: true }
    );

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Verify Your Email",
      html: `
        <div style="font-family:sans-serif">
          <h2>TripEase Email Verification</h2>
          <p>Your OTP is:</p>
          <h1>${otp}</h1>
          <p>This OTP is valid for 10 minutes</p>
        </div>
      `
    });

    return res.json({
      success: true,
      message: "OTP sent successfully"
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
}


// ===================== VERIFY OTP =====================
async function verifyOtp(req, res) {
  const { email, otp } = req.body;

  try {
    const record = await OtpModel.findOne({ email });

    if (!record || record.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired OTP"
      });
    }

    record.isVerified = true;
    await record.save();

    return res.json({
      success: true,
      message: "Email verified successfully"
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Verification failed"
    });
  }
}


// ===================== RESEND OTP =====================
async function resendOtp(req, res) {
  const { email } = req.body;

  try {
    const record = await OtpModel.findOne({ email });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Please verify email again"
      });
    }

    // ❌ Block resend if already verified
    if (record.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Email already verified"
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    record.otp = otp;
    record.createdAt = new Date();
    await record.save();

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Resend OTP",
      html: `
        <div style="font-family:sans-serif">
          <h2>TripEase OTP Verification</h2>
          <p>Your new OTP is:</p>
          <h1>${otp}</h1>
        </div>
      `
    });

    return res.json({
      success: true,
      message: "OTP resent successfully"
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to resend OTP"
    });
  }
}


// ===================== REGISTER =====================
async function registerUser(req, res) {
  const { name, email, password, mobile } = req.body;

  try {
    const record = await OtpModel.findOne({ email });

    if (!record || !record.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Please verify your email first"
      });
    }

    const exists = await UserModel.findOne({ email });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Email already registered"
      });
    }

    await UserModel.create({
      name,
      email,
      password,
      mobile,
      role: "user",
      isVerified: true
    });

    // 🔥 Clean OTP record
    await OtpModel.deleteOne({ email });

    return res.json({
      success: true,
      message: "Registration successful"
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Registration failed"
    });
  }
}


// ===================== LOGIN =====================
async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email }).select("+password");

    if (!user || user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    return res.json({
      success: true,
      accessToken: AccessToken(user),
      refreshToken: RefreshToken(user),
      role: user.role
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Login failed"
    });
  }
}


module.exports = {
  sendOtp,
  verifyOtp,
  resendOtp,
  registerUser,
  login
};