const UserModel = require("../model/UserModel");
const { AccessToken, RefreshToken } = require("../utils/Token");
const transporter = require("../config/mailer");


//  REGISTER
async function registerUser(req, res) {
  try {
    const data = req.body;

    // check email
    const exists = await UserModel.findOne({
      email: data.email
    });

    if (exists) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    // role default
    data.role = data.role || "user";

    let otp;

    // generate otp only for user
    if (data.role === "user") {
      otp = Math.floor(100000 + Math.random() * 900000).toString();

      data.otp = otp;
      data.otpExpiry = Date.now() + 10 * 60 * 1000;
      data.isVerified = false;
    }
    else {
      data.isVerified = true;
    }

    // create user
    const user = await UserModel.create(data);
     res.json({
      message:
        data.role === "user"
          ? "User registered successfully. OTP sent to email"
          : "Registered successfully"
    });

    // send otp ONLY for user
    if (data.role === "user") {
      try {
        const info = await transporter.sendMail({
          from: process.env.EMAIL,
          to: user.email,
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

        console.log("MAIL SENT:", info.response);
      } catch (mailErr) {
        console.log("MAIL ERROR:", mailErr);
      }
    }

  } catch (err) {
    res.status(500).json({
      message: "Registration failed"
    });
  }
}


//  VERIFY OTP
async function verifyOtp(req, res) {
  try {
    const { email, otp } = req.body;

    const user = await UserModel.findOne({ email });

    console.log("DB OTP:", user?.otp);
    console.log("USER OTP:", otp);

    if (
      !user ||
      user.role !== "user" ||
      String(user.otp) !== String(otp) ||
      user.otpExpiry < Date.now()
    ) {
      return res.status(400).json({
        message: "Invalid or expired OTP"
      });
    }

    user.isVerified = true;
    user.otp = null;
    user.otpExpiry = null;

    await user.save();

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


// resend otp
async function resendOtp(req, res) {
  try {
    const { email } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user || user.role !== "user") {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // generate new otp
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000;

    await user.save();

    try {
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: user.email,
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

      return res.json({
        message: "OTP resent successfully"
      });

    } catch (mailErr) {
      console.log("RESEND MAIL ERROR:", mailErr);

      return res.status(500).json({
        message: "OTP generated but email failed to send"
      });
    }

  } catch (err) {
    console.log("RESEND OTP ERROR:", err);

    return res.status(500).json({
      message: "Failed to resend OTP"
    });
  }
}


//  LOGIN
async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email }).select("+password");

    if (!user || user.password !== password) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    if (user.role === "user" && !user.isVerified) {
      return res.status(403).json({
        message: "Please verify OTP first"
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