const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  role: {
    type: String,
    default: "agent"
  }
}, { timestamps: true });

module.exports = mongoose.model("Agent", AgentSchema);