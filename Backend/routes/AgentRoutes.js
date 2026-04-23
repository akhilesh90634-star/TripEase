const express = require("express");
const router = express.Router();

const { agentLogin } = require("../controllers/AgentControllers");

router.post("/login", agentLogin);

module.exports = router;