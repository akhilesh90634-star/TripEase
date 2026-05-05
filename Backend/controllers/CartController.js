const Cart = require("../model/CartModel");

//ADD TO CART
const addToCart = async (req, res) => {
  try {
    const { packageId, travellers, roomType, totalPrice } = req.body;

    // TEMP user (replace with req.user.id later)
    const userId = req.user?.id || "64f000000000000000000001";

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [{ packageId, travellers, roomType, totalPrice }]
      });
    } else {
      cart.items.push({ packageId, travellers, roomType, totalPrice });
      await cart.save();
    }

    res.json(cart);

  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};


//GET CART
const getCart = async (req, res) => {
  try {
    const userId = req.user?.id || "64f000000000000000000001";

    const cart = await Cart.findOne({ userId })
      .populate("items.packageId");

    res.json(cart);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//REMOVE ITEM
const removeItem = async (req, res) => {
  try {
    const { itemId } = req.params;

    const userId = req.user?.id || "64f000000000000000000001";

    const cart = await Cart.findOne({ userId });

    cart.items = cart.items.filter(
      item => item._id.toString() !== itemId
    );

    await cart.save();

    res.json({ message: "Item removed", cart });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//CLEAR CART
const clearCart = async (req, res) => {
  try {
    const userId = req.user?.id || "64f000000000000000000001";

    await Cart.findOneAndDelete({ userId });

    res.json({ message: "Cart cleared" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  addToCart,
  getCart,
  removeItem,
  clearCart
};