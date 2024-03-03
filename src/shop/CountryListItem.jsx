import React, { useEffect, useState } from "react";
const CountryListItem = ({countryName, onClick }) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
  
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
          // Extract country names from the response data
          const countryNames = data.map(country => country.name.common);
          setCountries(countryNames);
        })
        .catch(error => console.error('Error fetching country data:', error));
    }, []);
  
    const handleCountryClick = (countryName) => {
      setSelectedCountry(countryName);
    };
  
    return (
        
      <div>
        <h1>Selected Country: {selectedCountry}</h1>
        <li onClick={onClick}>
        {countryName}
      </li>
        <ul>
          {countries.map((country, index) => (
            <CountryListItem key={index} countryName={country} onClick={() => handleCountryClick(country)} />
          ))}
        </ul>
      </div>
    );
  };

export default CountryListItem