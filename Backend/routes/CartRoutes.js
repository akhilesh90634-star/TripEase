const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  removeItem,
  clearCart
} = require("../controllers/CartController");

//(No auth for now — to avoid errors)
router.post("/cart", addToCart);
router.get("/cart", getCart);
router.delete("/cart/item/:itemId", removeItem);
router.delete("/cart", clearCart);

module.exports = router;