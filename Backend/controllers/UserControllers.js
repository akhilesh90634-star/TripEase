const UserModel = require("../model/UserModel");
const {AccessToken, RefreshToken } = require("../utils/Token");

async function registerUser(req, res) {
  try {
    const data = req.body;
    const exists = await UserModel.findOne({
      email: data.email
    });
    if (exists) {
      return res.json({
        message: "Email already exists"
      });
    }

    data.role = "user";
    await UserModel.create(data);
    res.json({
      message: "User registered"
    });

  } catch (err) {
    console.log("REGISTER ERROR:", err); 
    res.status(500).json({
      message: "Registration failed"
    });
  }
}


async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({
      email,
      password,
      role: "user"
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    res.json({
      accessToken: AccessToken(user),
      refreshToken: RefreshToken(user)
    });

  } catch {
    res.status(500).json({
      message: "Login failed"
    });
  }
}

module.exports = {
  registerUser,
  loginUser
};