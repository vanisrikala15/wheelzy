import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars"; // Ensure this path is correct and the file exists
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import CarDetails from "./pages/CarDetails"; // Import CarDetails
import Login from "./pages/Login"; // Import the Login component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/car-details" element={<CarDetails />} />{" "}
        {/* Ensure this matches */}
        <Route path="/login" element={<Login />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
