const mongoose = require("mongoose");

const UpdateSchema = new mongoose.Schema({
  date: String,
  day: String,
  activity: String,
  hotel: String,
  location: String
}, { timestamps: true });

module.exports = mongoose.model("Update", UpdateSchema);