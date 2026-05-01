const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  title: String,
  price: String,
  days: String,
  rating: String,
  category: String,
  image: String,
  bookingType: String
});

//Virtual populate
packageSchema.virtual("details", {
  ref: "PackageDetails",
  localField: "_id",
  foreignField: "packageId",
  justOne: true
});

// Important to show virtual field
packageSchema.set("toObject", { virtuals: true });
packageSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Package", packageSchema);