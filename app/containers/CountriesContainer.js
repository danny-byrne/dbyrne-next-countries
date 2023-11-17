"use client";
import React, { useState } from "react";
import { useCountryAndFilterData } from "../hooks/useCountryAndFilterData";
import CountryCard from "../components/CountryCard";
import Modal from "../components/Modal";
import { useMobileView } from "../hooks/useMobileView";

const CountriesContainer = () => {
  const { countries, selectedCountry, setSelectedCountry } =
    useCountryAndFilterData();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCountry(null);
  };

  const handleSelectCountry = (index) => {
    setSelectedCountry(countries[index]);
    setShowModal(true);
  };

  const isMobile = useMobileView();

  const backGroundColor = isMobile ? "bg-red-200" : "bg-teal-200";

  return (
    <>
      <div className={`h-full w-screen ${backGroundColor} text-gray-800 `}>
        <div className="flex flex-col gap-4 place-items-center ">
          <div
            className="text-3xl mt-6"
            aria-label="List of Countries of the World"
            role="heading"
            aria-level="1"
          >
            Countries of the World
          </div>
          {countries.map((country, index) => (
            <CountryCard
              key={country.name}
              country={country}
              onClick={() => handleSelectCountry(index)}
            />
          ))}
        </div>
      </div>
      {showModal && (
        <Modal hideModal={handleCloseModal} selectedCountry={selectedCountry} />
      )}
    </>
  );
};

export default CountriesContainer;
