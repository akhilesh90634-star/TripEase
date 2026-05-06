const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Enter valid email"]
  },

  mobile: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true,
    select: false
  },

  role: {
    type: String,
    enum: ["user", "admin", "agent"],
    default: "user"
  }
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);