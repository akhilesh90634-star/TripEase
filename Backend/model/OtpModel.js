const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  otp: String,
  isVerified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// 🔥 TTL → auto delete after 10 minutes
otpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 600 });

module.exports = mongoose.models.Otp || mongoose.model("Otp", otpSchema);