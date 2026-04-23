const UserModel = require("../model/UserModel");
const { AccessToken, RefreshToken } = require("../utils/Token");

async function adminLogin(req, res) {
  try {
    const { email, password } = req.body;

    const admin = await UserModel.findOne({
      email,
      password,
      role: "admin"
    });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid admin credentials"
      });
    }

    res.json({
      accessToken: AccessToken(admin),
      refreshToken: RefreshToken(admin)
    });

  } catch {
    res.status(500).json({
      message: "Admin login failed"
    });
  }
}

module.exports = { adminLogin };