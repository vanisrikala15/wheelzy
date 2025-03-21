import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Added useLocation
import "./Booking.css";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.webp";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpeg";
import car5 from "../assets/car5.png";
import car6 from "../assets/car6.jpg";

const cars = [
  {
    id: 1,
    name: "Dodge Durango",
    type: "or similar SUV",
    seats: 5,
    bags: 4,
    ac: true,
    transmission: "Auto",
    price: 38,
    rating: 4.5,
    image: car1,
  },
  {
    id: 2,
    name: "Ford Escape",
    type: "or similar Compact",
    seats: 4,
    bags: 2,
    ac: true,
    transmission: "Auto",
    price: 25.47,
    rating: 5,
    image: car2,
  },
  {
    id: 3,
    name: "Hyundai Creta",
    type: "or similar SUV",
    seats: 5,
    bags: 3,
    ac: true,
    transmission: "Auto",
    price: 30,
    rating: 3.5,
    image: car3,
  },
  {
    id: 4,
    name: "Kia Carnival",
    type: "or similar Minivan",
    seats: 5,
    bags: 3,
    ac: true,
    transmission: "Auto",
    price: 40,
    rating: 5,
    image: car4,
  },
  {
    id: 5,
    name: "Nissan SV Fwd",
    type: "or similar Sedan",
    seats: 6,
    bags: 4,
    ac: true,
    transmission: "Auto",
    price: 42,
    rating: 4.5,
    image: car5,
  },
  {
    id: 6,
    name: "Toyota Fortuner",
    type: "or similar SUV",
    seats: 8,
    bags: 5,
    ac: true,
    transmission: "Auto",
    price: 45.21,
    rating: 5,
    image: car6,
  },
];

const Booking = () => {
  const navigate = useNavigate(); // Initialize navigate
  const location = useLocation(); // Initialize location
  const bookingData = location.state?.bookingData; // Get booking data

  // State for filters
  const [filters, setFilters] = useState({
    price: "",
    seats: "",
    bags: "",
    rating: "",
  });

  // State for filter visibility
  const [showFilters, setShowFilters] = useState(false);

  // Function to handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Function to filter cars based on selected criteria
  const filteredCars = cars.filter((car) => {
    return (
      (filters.price ? car.price <= filters.price : true) &&
      (filters.seats ? car.seats >= filters.seats : true) &&
      (filters.bags ? car.bags >= filters.bags : true) &&
      (filters.rating ? car.rating >= filters.rating : true)
    );
  });

  const handleViewDeal = (car) => {
    navigate(`/car-details`, { state: { car } }); // Ensure the path matches the route
  };

  return (
    <div className="booking-container">
      {bookingData && (
        <div className="booking-details">
          <h3>Booking Details</h3>
          <div className="booking-info-line">
            <span>Location: {bookingData.pickup}</span>
            <span>
              Pick-up:{" "}
              {new Date(
                bookingData.pickupDate + "T" + bookingData.pickupTime
              ).toLocaleString()}
            </span>
            <span>
              Drop-off:{" "}
              {new Date(
                bookingData.dropDate + "T" + bookingData.dropTime
              ).toLocaleString()}
            </span>
          </div>
        </div>
      )}

      {/* Container for title and filter button */}
      <div className="header-container">
        <h2 className="booking-title">Available Cars</h2>
        <button
          className="filter-button"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filter Section */}
      {showFilters && (
        <div className="filter-section">
          <h4>Filter Cars</h4>
          <label>
            Max Price:
            <input
              type="number"
              name="price"
              value={filters.price}
              onChange={handleFilterChange}
              placeholder="Max Price"
            />
          </label>
          <label>
            Min Seats:
            <input
              type="number"
              name="seats"
              value={filters.seats}
              onChange={handleFilterChange}
              placeholder="Min Seats"
            />
          </label>
          <label>
            Min Bags:
            <input
              type="number"
              name="bags"
              value={filters.bags}
              onChange={handleFilterChange}
              placeholder="Min Bags"
            />
          </label>
          <label>
            Min Rating:
            <input
              type="number"
              name="rating"
              value={filters.rating}
              onChange={handleFilterChange}
              placeholder="Min Rating"
              step="0.1"
              min="0"
              max="5"
            />
          </label>
        </div>
      )}

      <div className="car-list">
        {filteredCars.map((car) => (
          <div key={car.id} className="car-card">
            <div className="car-header">
              <div className="car-actions"></div>
              <div className="car-title">
                <h3>{car.name}</h3>
                <p className="car-type">{car.type}</p>
              </div>
            </div>

            <div className="car-content">
              <div className="car-left">
                <div className="car-image">
                  <img src={car.image} alt={car.name} />
                </div>
                <div className="car-company"></div>
              </div>

              <div className="car-middle">
                <div className="car-specs">
                  <span>👤 {car.seats}</span>
                  <span>🧳 {car.bags}</span>
                  <span>⚙️ {car.transmission}</span>
                  <span>❄️ {car.ac ? "A/C" : "No A/C"}</span>
                </div>

                <div className="car-location">
                  <div className="location-icon">📍</div>
                  <div className="location-details">
                    <div>{bookingData?.pickup || "Location not specified"}</div>
                  </div>
                </div>

                <div className="car-rating">
                  <span className="rating-box">{car.rating}</span>
                </div>

                <div className="car-benefits">
                  <div className="benefit">✓ Free cancellation</div>
                  <div className="benefit">✓ Fair fuel policy</div>
                  <div className="benefit">✓ Unlimited kilometres</div>
                  <div className="benefit">✓ GPS</div>
                  <div className="benefit">✓ WIFI</div>
                  <div className="benefit">✓ Baby seats</div>
                  <div className="benefit">✓ Collision damage waiver</div>
                </div>
              </div>

              <div className="car-right">
                <div className="provider-main">
                  <div className="provider-price">C$ {car.price}</div>
                  <div className="price-label">Total</div>
                  <button
                    className="deal-btn"
                    onClick={() => handleViewDeal(car)}
                  >
                    View Deal
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
