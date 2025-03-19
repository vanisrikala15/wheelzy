// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import bgVideo from "../assets/bg.mp4";

function Home() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/booking");
  };

  return (
    <div className="home-container">
      <video autoPlay muted loop className="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay-content">
        <h1>The Road Awaits – Find Your Perfect Rental Today</h1>
        <form className="search-form" onSubmit={handleSubmit}>
          <label htmlFor="pickup">Pick Up Location</label>
          <input
            type="text"
            id="pickup"
            name="pickup"
            placeholder="Pick Up city name or airport code"
            required
          />

          <label>
            <input type="checkbox" name="differentDrop" />
            Different Drop Off Location
          </label>

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

          <button type="submit">Check Rates</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
