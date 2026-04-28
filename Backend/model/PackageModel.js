// const mongoose = require("mongoose");

// const packageSchema = new mongoose.Schema({
//   title: String,
//   price: String,
//   days: String,
//   rating: String,
//   category: String,
//   image: String
// }, { timestamps: true });

// module.exports = mongoose.model("Package", packageSchema);

// const mongoose = require("mongoose");

// const packageSchema = new mongoose.Schema({
//   title: String,
//   price: String,
//   days: String,
//   rating: String,
//   category: String,
//   image: String
// });

// module.exports = mongoose.model("Package", packageSchema);

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

module.exports = mongoose.model("Package",packageSchema);