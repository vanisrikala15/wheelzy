import React, { useEffect, useState } from "react";
import "./Login.css"; // Import the CSS file

function Signup() {
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("CA"); // Default to Canada

  useEffect(() => {
    // Fetch country codes from the API
    const fetchCountryCodes = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const codes = data.map((country) => ({
          name: country.name.common,
          code: country.cca2, // Using cca2 as the country code
          flag: country.flags.png, // Get the flag URL
        }));

        // Sort the country codes alphabetically by name
        codes.sort((a, b) => a.name.localeCompare(b.name));

        setCountryCodes(codes);
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };

    fetchCountryCodes();
  }, []);

  return (
    <div className="signup-page">
      <h2>Car Rental Signup</h2>
      <form>
        <div>
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" name="country" required />
        </div>
        <div>
          <label htmlFor="country-code">Country/Territory Code*:</label>
          <select
            id="country-code"
            name="country-code"
            value={selectedCountryCode}
            onChange={(e) => setSelectedCountryCode(e.target.value)}
            required
          >
            <option value="">Select Country Code</option>
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name} ({country.code})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
