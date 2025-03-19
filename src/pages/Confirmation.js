import React from 'react';

const Confirmation = () => {
  return (
    <div style={styles.container}>
      <h2>Booking Confirmed!</h2>
      <p>Thank you for booking with us. Have a safe journey! 🚗</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#fff',
    margin: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
};

export default Confirmation;
