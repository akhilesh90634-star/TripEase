import React, { useState, useEffect } from "react";

function getCartData() {
  const savedCart = localStorage.getItem("cart");
  return savedCart
    ? JSON.parse(savedCart)
    : [
        {
          id: 1,
          name: "Goa Beach Escape",
          date: "15 May 2026",
          type: "Solo",
          persons: 1,
          price: 12375,
          image: "/Goa.jpg",
        },
        {
          id: 2,
          name: "Thar Desert Camp",
          date: "22 Jun 2026",
          type: "Group",
          persons: 4,
          price: 7999,
          image: "/thar.jpg",
        },
        {
          id: 3,
          name: "Manali Trek & Camp",
          date: "10 Jul 2026",
          type: "Group",
          persons: 6,
          price: 18999,
          image: "/Manali.jpg",
        },
      ];
}

function Mycart() {
 
  const [cart, setCart] = useState(getCartData);

  function increaseQty(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, persons: item.persons + 1 }
          : item
      )
    );
  }

  function decreaseQty(id) {
    setCart(
      cart.map((item) =>
        item.id === id && item.persons > 1
          ? { ...item, persons: item.persons - 1 }
          : item
      )
    );
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  // save cart whenever it changes
  useEffect(function () {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.persons,
    0
  );

  const discount = 1249;
  const tax = Math.round(subtotal * 0.09);
  const total = subtotal - discount + tax;

  return (
    <div style={{ padding: "30px", background: "#f5f5f5" }}>
      <h2>Your Cart — {cart.length} Trips</h2>

      <div style={{ display: "flex", gap: "30px" }}>
        <div style={{ flex: 2 }}>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
                padding: "15px",
                borderRadius: "12px",
                marginBottom: "15px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ display: "flex", gap: "15px" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />

                <div>
                  <h4 style={{ margin: 0 }}>{item.name}</h4>
                  <p style={{ margin: "5px 0", color: "#555" }}>
                    {item.date} · {item.persons === 1 ? "Solo" : "Group"} · {item.persons} persons
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
  
  {/* DECREMENT */}
  <button
    onClick={() => decreaseQty(item.id)}
    style={{
      width: "26px",
      height: "26px",
      borderRadius: "50%",
      border: "1px solid #e0ddd6",
      background: "#fff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
    }}
  >
    -
  </button>

  {/* VALUE */}
  <span style={{ fontSize: "13px", fontWeight: "500", minWidth: "20px", textAlign: "center" }}>
    {item.persons}
  </span>

  {/* INCREMENT */}
  <button
    onClick={() => increaseQty(item.id)}
    style={{
      width: "26px",
      height: "26px",
      borderRadius: "50%",
      border: "1px solid #e0ddd6",
      background: "#fff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
    }}
  >
    +
  </button>

  {/* REMOVE */}
  <button
    onClick={() => removeItem(item.id)}
    style={{
      fontSize: "11px",
      color: "#A32D2D",
      cursor: "pointer",
      border: "1px solid #F7C1C1",
      padding: "3px 10px",
      borderRadius: "99px",
      background: "#FCEBEB",
      marginLeft: "8px",
    }}
  >
    Remove
  </button>

</div>
                </div>
              </div>

              <div style={{ fontWeight: "bold" }}>
                ₹{item.price * item.persons}
              </div>
            </div>
          ))}
        </div>

        <div style={{ flex: 1, background: "#fff", padding: "20px", borderRadius: "12px" }}>
          <h3>Order Summary</h3>

          {cart.map((item) => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{item.name} (×{item.persons})</span>
              <span>₹{item.price * item.persons}</span>
            </div>
          ))}

          <hr />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Coupon discount</span>
            <span>-₹{discount}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Taxes</span>
            <span>₹{tax}</span>
          </div>

          <hr />

          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <button
  style={{
    width: "100%",
    marginTop: "15px",
    padding: "10px",
    background: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }}
>
  Proceed to Checkout
</button>
        </div>
      </div>
    </div>
  );
}

export default Mycart;