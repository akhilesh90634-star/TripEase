import React, { useState } from "react";

const TripDetails = () => {
  const [travelType, setTravelType] = useState("Solo");
  const [travellers, setTravellers] = useState(1);
  const [roomType, setRoomType] = useState("Standard Room");

  const basePrice = 12499;
  const tax = Math.round(basePrice * 0.09);
  const discount = Math.round(basePrice * 0.1);

  const total = basePrice + tax - discount;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      
      {/* Navbar */}
      <div style={styles.navbar}>
        <h2>TripEase</h2>
        <div>
          <span style={styles.link}>Explore</span>
          <span style={styles.link}>Cart</span>
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        Home › Beach › Goa Beach Escape
      </div>

      <div style={styles.container}>
        
        {/* LEFT SIDE */}
        <div style={{ flex: 2 }}>
          
          <div style={styles.image}>🏖</div>

          <h2>Goa Beach Escape</h2>

          <div style={styles.tags}>
            <span>📅 5 Days</span>
            <span>🌙 4 Nights</span>
            <span>📍 Goa</span>
            <span>⭐ 4.8</span>
          </div>

          <p style={styles.desc}>
            Experience the vibrant beaches, culture, and cuisine of Goa.
            Includes hotel stay, breakfast, water sports, and guided tours.
          </p>

          <h3>What's Included</h3>
          <ul>
            <li>Hotel stay (4 nights)</li>
            <li>Daily breakfast</li>
            <li>Water sports</li>
            <li>Guided tours</li>
            <li>Pickup & drop</li>
          </ul>

        </div>

        {/* RIGHT SIDE BOOKING */}
        <div style={styles.bookingCard}>
          
          <h3>Plan & Book</h3>

          {/* Travel Type */}
          <div style={styles.toggle}>
            <button
              onClick={() => setTravelType("Solo")}
              style={travelType === "Solo" ? styles.activeBtn : styles.btn}
            >
              Solo
            </button>
            <button
              onClick={() => setTravelType("Group")}
              style={travelType === "Group" ? styles.activeBtn : styles.btn}
            >
              Group
            </button>
          </div>

          {/* Travellers */}
          <div>
            <label>No. of Travellers</label>
            <input
              type="number"
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
              style={styles.input}
            />
          </div>

          {/* Room */}
          <div>
            <label>Room Type</label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              style={styles.input}
            >
              <option>Standard Room</option>
              <option>Deluxe Room</option>
              <option>Suite</option>
            </select>
          </div>

          {/* Price */}
          <div style={styles.priceBox}>
            <p>Base: ₹{basePrice}</p>
            <p>Tax: ₹{tax}</p>
            <p style={{ color: "green" }}>Discount: -₹{discount}</p>
            <hr />
            <h3>Total: ₹{total}</h3>
          </div>

          <button style={styles.bookBtn}>
            Book Now ₹{total}
          </button>

        </div>
      </div>
    </div>
  );
};

export default TripDetails;

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  link: {
    marginLeft: "15px",
    cursor: "pointer",
  },
  breadcrumb: {
    marginBottom: "20px",
    color: "gray",
  },
  container: {
    display: "flex",
    gap: "20px",
  },
  image: {
    height: "250px",
    background: "#dfefff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "60px",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  tags: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  desc: {
    marginBottom: "15px",
  },
  bookingCard: {
    flex: 1,
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    height: "fit-content",
  },
  toggle: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  btn: {
    flex: 1,
    padding: "8px",
    border: "1px solid gray",
    cursor: "pointer",
  },
  activeBtn: {
    flex: 1,
    padding: "8px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "5px 0 10px",
  },
  priceBox: {
    background: "#f5f5f5",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  bookBtn: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};