const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  items: [
    {
      packageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package",
        required: true
      },
      travellers: {
        type: Number,
        default: 1
      },
      roomType: String,
      totalPrice: Number
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Cart", cartSchema);