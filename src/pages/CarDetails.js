import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Change useHistory to useNavigate
import "./CarDetails.css";

function CarDetails() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const car = location.state?.car; // Retrieve car data from state

  console.log("Car details received:", car); // Debug the state

  if (!car) {
    return <p>No car details available. Please go back and select a car.</p>;
  }

  const handleReserveClick = () => {
    navigate("/login"); // Redirect to login page using navigate
  };

  return (
    <div className="car-details-page">
      <div className="left-container">
        <div className="great-deal">Great Deal</div>
        <h2 className="car-name">{car.name}</h2>
        <p className="car-type">{car.type}</p>
        <div className="car-details-container">
          <div className="car-details">
            <div className="car-detail-item">👤 {car.seats} Passengers</div>
            <div className="car-detail-item">🧳 {car.bags} Bags</div>
            <div className="car-detail-item">
              ❄️ {car.ac ? "Yes" : "No"} Air conditioning
            </div>
            <div className="car-detail-item">
              ⚙️ {car.transmission} Automatic
            </div>
            <div className="car-detail-item">⭐ {car.rating} Rating</div>
            <div className="car-detail-item">✓ Free cancellation</div>
            <div className="car-detail-item">✓ Fair fuel policy</div>
            <div className="car-detail-item">✓ Unlimited kilometres</div>
            <div className="car-detail-item">✓ GPS</div>
            <div className="car-detail-item">✓ WIFI</div>
            <div className="car-detail-item">✓ Baby seats</div>
            <div className="car-detail-item">✓ Collision damage waiver</div>
          </div>
          <img src={car.image} alt={car.name} className="car-image" />
        </div>
      </div>
      <div className="right-container">
        <div className="price-details">
          <h2>C$ {car.price}</h2>
          <p className="free-cancellation">Free cancellation</p>
          <p className="pay-at-pickup">Pay at pickup</p>
          <h2>Price details</h2>
          <p className="pay-at-pickup">Pay at pickup</p>
          <div className="price-item1">
            <span>Car rental fee x 1 day</span>
            <span>C$ {car.price - 12.78}</span>{" "}
          </div>
          <div className="price-item1">
            <span>Taxes and fees</span>
            <span>C$ 12.78</span>{" "}
          </div>
          <div className="price-item">
            <span>Total</span>
            <span>C$ {car.price}</span>{" "}
          </div>
          <div className="price-item3">
            <span>Pay at pick-up</span>
            <span>C$ {car.price}</span>{" "}
          </div>
          <div className="price-item3">
            <span>Pay now</span>
            <span>C$ 0</span>{" "}
          </div>
          <button className="reserve-button" onClick={handleReserveClick}>
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
