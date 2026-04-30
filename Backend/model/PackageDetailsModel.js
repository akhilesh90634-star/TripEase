const mongoose = require("mongoose");

const packageDetailsSchema = new mongoose.Schema({
  description: String,
  highlights: [String],
  includes: [String],
  base: Number,
  discount: Number,
  noOfTravellers: Number,
  roomType: [String],
  tax: Number,
  total: Number,

  // ✅ Reference to Package
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Package",
    required: true
  }
});

module.exports = mongoose.model("PackageDetails", packageDetailsSchema);