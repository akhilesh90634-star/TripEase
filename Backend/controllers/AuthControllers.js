const UserModel = require("../model/UserModel");
const { AccessToken, RefreshToken } = require("../utils/Token");
const transporter = require("../config/mailer");

// temporary store
const tempUsers = {};


// REGISTER
async function registerUser(req, res) {
  try {
    const data = req.body;

    const exists = await UserModel.findOne({
      email: data.email
    });

    if (exists) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // store temporarily
    tempUsers[data.email] = {
      name: data.name,
      email: data.email,
      password: data.password,
      mobile: data.mobile,
      role: "user",
      otp,
      otpExpiry: Date.now() + 10 * 60 * 1000
    };

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: data.email,
      subject: "Verify Your Account",
      html: `
        <div style="font-family:sans-serif">
          <h2>TripEase OTP Verification</h2>
          <p>Your OTP is:</p>
          <h1>${otp}</h1>
          <p>This OTP is valid for 10 minutes</p>
        </div>
      `
    });

    res.json({
      message: "OTP sent to email"
    });

  } catch (err) {
    console.log("REGISTER ERROR:", err);

    res.status(500).json({
      message: "Registration failed"
    });
  }
}


// VERIFY OTP
async function verifyOtp(req, res) {
  try {
    const { email, otp } = req.body;

    const tempUser = tempUsers[email];

    if (
      !tempUser ||
      String(tempUser.otp) !== String(otp) ||
      tempUser.otpExpiry < Date.now()
    ) {
      return res.status(400).json({
        message: "Invalid or expired OTP"
      });
    }

    await UserModel.create({
      name: tempUser.name,
      email: tempUser.email,
      password: tempUser.password,
      mobile: tempUser.mobile,
      role: "user",
      isVerified: true
    });

    delete tempUsers[email];

    res.json({
      message: "Account verified successfully"
    });

  } catch (err) {
    console.log("VERIFY OTP ERROR:", err);

    res.status(500).json({
      message: "Verification failed"
    });
  }
}


// RESEND OTP
async function resendOtp(req, res) {
  try {
    const { email } = req.body;

    const tempUser = tempUsers[email];

    if (!tempUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    tempUser.otp = otp;
    tempUser.otpExpiry = Date.now() + 10 * 60 * 1000;

    tempUsers[email] = tempUser;

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Resend OTP - Verify Your Account",
      html: `
        <div style="font-family:sans-serif">
          <h2>TripEase OTP Verification</h2>
          <p>Your new OTP is:</p>
          <h1>${otp}</h1>
          <p>This OTP is valid for 10 minutes</p>
        </div>
      `
    });

    res.json({
      message: "OTP resent successfully"
    });

  } catch (err) {
    console.log("RESEND OTP ERROR:", err);

    res.status(500).json({
      message: "Failed to resend OTP"
    });
  }
}


// LOGIN
async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email }).select("+password");

    if (!user || user.password !== password) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    res.json({
      accessToken: AccessToken(user),
      refreshToken: RefreshToken(user),
      role: user.role
    });

  } catch (err) {
    console.log("LOGIN ERROR:", err);

    res.status(500).json({
      message: "Login failed"
    });
  }
}

module.exports = {
  registerUser,
  verifyOtp,
  resendOtp,
  login
};