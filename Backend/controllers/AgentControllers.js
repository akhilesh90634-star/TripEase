const UserModel = require("../model/UserModel");
const { AccessToken, RefreshToken } = require("../utils/Token");

async function agentLogin(req, res) {
  try {
    const { email, password } = req.body;

    const agent = await UserModel.findOne({
      email,
      password,
      role: "agent"
    });

    if (!agent) {
      return res.status(401).json({
        message: "Invalid agent credentials"
      });
    }

    res.json({
      accessToken: AccessToken(agent),
      refreshToken: RefreshToken(agent)
    });

  } catch {
    res.status(500).json({
      message: "Agent login failed"
    });
  }
}

module.exports = { agentLogin };