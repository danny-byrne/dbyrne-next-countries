import { useState, useEffect } from "react";
import { parseCountryData } from "../helpers";

const CountryFilter = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [population, setPopulation] = useState("");
  const [squareMile, setSquareMile] = useState("");
  const [gdp, setGDP] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleFilterToggle = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div>
      Coming Soon
      {/* <label>
        Select a country:
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">-- No Country Selected --</option>
          {countries.map((country) => (
            <option key={country.cca2} value={country.cca2}>
              {country.name.common}
            </option>
          ))}
        </select>
      </label>

      <button onClick={handleFilterToggle}>
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {showFilters && (
        <div>
          <label>
            Population:
            <input
              type="number"
              value={population}
              onChange={(e) => setPopulation(e.target.value)}
            />
          </label>

          <label>
            Square Mile:
            <input
              type="number"
              value={squareMile}
              onChange={(e) => setSquareMile(e.target.value)}
            />
          </label>

          <label>
            GDP:
            <input
              type="number"
              value={gdp}
              onChange={(e) => setGDP(e.target.value)}
            />
          </label>
        </div>
      )} */}
    </div>
  );
};

export default CountryFilter;
