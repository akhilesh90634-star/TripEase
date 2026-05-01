const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
  desc: String,
  date: String,
  status: {
    type: String,
    default: "Open"
  }
}, { timestamps: true });

module.exports = mongoose.model("Issue", IssueSchema);