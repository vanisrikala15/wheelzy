import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div style={styles.card}>
      <img src={car.image} alt={car.name} style={styles.img} />
      <h3>{car.name}</h3>
      <p>Price per day: ₹{car.price}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    padding: '15px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    width: '220px',
    textAlign: 'center',
  },
  img: {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '5px',
  }
};

export default CarCard;
