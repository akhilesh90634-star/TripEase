const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
  title: String,
  image: String,
  dates: String,
  duration: String,
  progress: Number,
  status: String,
  agentId: String
}, { timestamps: true });

module.exports = mongoose.model("Trip", TripSchema);