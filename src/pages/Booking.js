import React from 'react';
import './Booking.css';
import car1 from '../assets/car1.png';
import car2 from '../assets/car2.webp';
import car3 from '../assets/car3.jpg';
import car4 from '../assets/car4.jpeg';
import car5 from '../assets/car5.png';
import car6 from '../assets/car6.jpg';


const cars = [
  {
    id: 1,
    name: 'Dodge Durango',
    seats: 4,
    bags: 2,
    doors: 4,
    ac: true,
    transmission: 'Auto',
    price: 3470,
    rating: 9.8,
    distance: '6.1 km from city centre',
    dealProvider: 'KLOOK',
    offer: 'Excellent offer from KLOOK',
    image: car1
  },
  {
    id: 2,
    name: 'Ford Escape',
    seats: 5,
    bags: 2,
    doors: 4,
    ac: true,
    transmission: 'Auto',
    price: 3470,
    rating: 9.8,
    distance: '6.1 km from city centre',
    dealProvider: 'KLOOK',
    offer: 'Excellent offer from KLOOK',
    image: car2
  },
  {
    id: 3,
    name: 'Hyundai Creta',
    seats: 5,
    bags: 2,
    doors: 4,
    ac: true,
    transmission: 'Auto',
    price: 3470,
    rating: 9.8,
    distance: '6.1 km from city centre',
    dealProvider: 'KLOOK',
    offer: 'Excellent offer from KLOOK',
    image: car3
  },
  {
    id: 2,
    name: 'Kia Carnival',
    seats: 5,
    bags: 2,
    doors: 4,
    ac: true,
    transmission: 'Auto',
    price: 3470,
    rating: 9.8,
    distance: '6.1 km from city centre',
    dealProvider: 'KLOOK',
    offer: 'Excellent offer from KLOOK',
    image: car4
  },
  {
    id: 2,
    name: 'Nissan SV Fwd',
    seats: 5,
    bags: 2,
    doors: 4,
    ac: true,
    transmission: 'Auto',
    price: 3470,
    rating: 9.8,
    distance: '6.1 km from city centre',
    dealProvider: 'KLOOK',
    offer: 'Excellent offer from KLOOK',
    image: car5
  },
  {
    id: 2,
    name: 'Toyota Fortuner',
    seats: 5,
    bags: 2,
    doors: 4,
    ac: true,
    transmission: 'Auto',
    price: 3470,
    rating: 9.8,
    distance: '6.1 km from city centre',
    dealProvider: 'KLOOK',
    offer: 'Excellent offer from KLOOK',
    image: car6
  }
];

const Booking = () => {
  return (
    <div className="booking-container">
      <h2 className="booking-title">Available Cars</h2>
      <div className="car-list">
        {cars.map(car => (
          <div key={car.id} className="car-card">
            <div className="car-info">
            <div className="car-image">
    <img src={car.image} alt={car.name} />
  </div>
              <div className="car-text">
                <h3>{car.name}</h3>
                <p>{car.distance}</p>
                <ul className="car-details">
                  <li>{car.seats} Seats</li>
                  <li>{car.bags} Bags</li>
                  <li>{car.doors} Doors</li>
                  <li>{car.transmission}</li>
                  <li>{car.ac ? 'A/C' : 'No A/C'}</li>
                </ul>
                <p className="car-offer">{car.rating} ★ - {car.offer}</p>
              </div>
              <div className="car-price">
                <h4>₹ {car.price}</h4>
                <button className="deal-btn">View Deal</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
