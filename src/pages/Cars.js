import React from 'react';
import CarCard from '../components/CarCard';

const carData = [
  {
    name: 'Maruti Swift',
    price: 1500,
    image: 'https://cdn.pixabay.com/photo/2016/10/25/12/28/car-1769898_960_720.jpg',
  },
  {
    name: 'Hyundai Creta',
    price: 2500,
    image: 'https://cdn.pixabay.com/photo/2020/06/07/13/42/hyundai-5269223_960_720.jpg',
  },
  {
    name: 'Tata Nexon',
    price: 2200,
    image: 'https://cdn.pixabay.com/photo/2021/06/24/15/30/suv-6360935_960_720.jpg',
  },
];

const Cars = () => {
  return (
    <div style={styles.container}>
      <h2>Available Cars</h2>
      <div style={styles.grid}>
        {carData.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px 40px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '20px',
  },
};

export default Cars;
