import React, { useState } from "react";
import "./TripDetails.css";

function TripDetails() {
  const [travelType, setTravelType] = useState("Solo");
  const [travellers, setTravellers] = useState(1);
  const [roomType, setRoomType] = useState("Standard Room");

  const basePrice = 12499;
  const tax = Math.round(basePrice * 0.09);
  const discount = Math.round(basePrice * 0.1);
  const total = basePrice + tax - discount;

  return (
    <div className="page">

      {/* Navbar */}
      <div className="navbar">
        <h2>TripEase</h2>
        <div>
          <span className="link">Explore</span>
          <span className="link">Cart</span>
        </div>
      </div>

      <div className="container">

        {/* LEFT SIDE */}
        <div className="left">

          <div className="image">🏖</div>

          <h2>Goa Beach Escape</h2>

          <div className="tags">
            <span>📅 5 Days</span>
            <span>🌙 4 Nights</span>
            <span>📍 Goa</span>
            <span>⭐ 4.8</span>
          </div>

          <p className="desc">
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

        {/* RIGHT SIDE */}
        <div className="bookingCard">

          <h3>Plan & Book</h3>

          {/* Travel Type */}
          <div className="toggle">
            <button
              onClick={() => setTravelType("Solo")}
              className={travelType === "Solo" ? "activeBtn" : "btn"}
            >
              Solo
            </button>
            <button
              onClick={() => setTravelType("Group")}
              className={travelType === "Group" ? "activeBtn" : "btn"}
            >
              Group
            </button>
          </div>

          {/* Travellers */}
          <label>No. of Travellers</label>
          <input
            type="number"
            value={travellers}
            onChange={(e) => setTravellers(e.target.value)}
            className="input"
          />

          {/* Room */}
          <label>Room Type</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="input"
          >
            <option>Standard Room</option>
            <option>Deluxe Room</option>
            <option>Suite</option>
          </select>

          {/* Price */}
          <div className="priceBox">
            <p>Base: ₹{basePrice}</p>
            <p>Tax: ₹{tax}</p>
            <p className="discount">Discount: -₹{discount}</p>
            <hr />
            <h3>Total: ₹{total}</h3>
          </div>

          <button className="bookBtn">
            Book Now ₹{total}
          </button>

        </div>

      </div>
    </div>
  );
}

export default TripDetails;