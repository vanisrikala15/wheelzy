// src/pages/Home.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const validateDates = (pickupDate, pickupTime, dropDate, dropTime) => {
    const now = new Date();
    const pickup = new Date(`${pickupDate}T${pickupTime}`);
    const dropoff = new Date(`${dropDate}T${dropTime}`);

    if (pickup < now) {
      return "Pick-up date and time cannot be in the past";
    }
    if (dropoff < now) {
      return "Drop-off date and time cannot be in the past";
    }
    if (dropoff < pickup) {
      return "Drop-off date and time must be after pick-up date and time";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookingData = {
      pickup: formData.get("pickup"),
      pickupDate: formData.get("pickupDate"),
      pickupTime: formData.get("pickupTime"),
      dropDate: formData.get("dropDate"),
      dropTime: formData.get("dropTime"),
    };

    const error = validateDates(
      bookingData.pickupDate,
      bookingData.pickupTime,
      bookingData.dropDate,
      bookingData.dropTime
    );

    if (error) {
      setError(error);
      return;
    }
    setError("");
    navigate("/booking", { state: { bookingData } });
  };

  return (
    <div className="home-container">
      <div className="top-image"></div>

      <div className="trending-offers">
        <h2>Trending Offers</h2>
        <div className="offers-container">
          <div className="offer">
            Flat 15% off on Daily Rentals. Minimum Rental Amount should be C$
            30.
          </div>
          <div className="offer">
            Flat 20% off on Weekly Rentals. Minimum Rental Amount should be C$
            50.
          </div>
          <div className="offer">
            Flat 25% off on Monthly Rentals. Minimum Rental Amount should be C$
            60.
          </div>
          <div className="offer">
            Flat 30% off on Special Events. Minimum Rental Amount should be C$
            70.
          </div>
        </div>
      </div>

      <div className="overlay-content">
        <form className="search-form" onSubmit={handleSubmit}>
          <label htmlFor="pickup">Pick Up Location</label>
          <input
            type="text"
            id="pickup"
            name="pickup"
            placeholder="Pick Up City Name"
            required
          />

          <div className="date-group">
            <div>
              <label htmlFor="pickupDate">Pick Up Date</label>
              <input type="date" id="pickupDate" name="pickupDate" required />
            </div>

            <div>
              <label htmlFor="pickupTime">Pick Up Time</label>
              <input type="time" id="pickupTime" name="pickupTime" required />
            </div>
          </div>

          <div className="date-group">
            <div>
              <label htmlFor="dropDate">Drop Off Date</label>
              <input type="date" id="dropDate" name="dropDate" required />
            </div>

            <div>
              <label htmlFor="dropTime">Drop Off Time</label>
              <input type="time" id="dropTime" name="dropTime" required />
            </div>
          </div>

          {error && (
            <div
              className="error-message"
              style={{ color: "red", marginTop: "10px" }}
            >
              {error}
            </div>
          )}
          <button type="submit">Check Rates</button>
        </form>
      </div>

      <div className="bottom-image"></div>
    </div>
  );
}

export default Home;
