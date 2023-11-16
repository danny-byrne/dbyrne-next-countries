import { useState, useEffect } from "react";
const REST_COUNTRIES_ENDPOINT = "https://restcountries.com/v3.1/all";
import { parseCountryData } from "../helpers";

export const useCountryAndFilterData = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [population, setPopulation] = useState("");
  const [squareMile, setSquareMile] = useState("");
  const [gdp, setGDP] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(REST_COUNTRIES_ENDPOINT);

      if (response.ok) {
        const data = await response.json();

        const parsedCountries = data.map((country) => {
          return parseCountryData(country);
        });

        const sortedCountries = parsedCountries.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });

        setCountries(sortedCountries);
      } else {
        console.error(
          "Error fetching countries:",
          response.status,
          response.statusText
        );
      }
    };

    fetchData();
  }, []);

  return {
    countries,
    selectedCountry,
    setSelectedCountry,
  };
};
