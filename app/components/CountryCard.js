import React from "react";
import Image from "next/image";
import { formatNumberWithCommas } from "../helpers";

const FLAG_WIDTH = 120;
const FLAG_HEIGHT = (3 / 5) * FLAG_WIDTH;

const CountryCard = ({ country, onClick }) => {
  const { name, capital, population, area, flag } = country;
  const formattedPopulation = formatNumberWithCommas(population);
  const formattedArea = formatNumberWithCommas(area);
  return (
    <div
      className="w-96 md:w-1/2 h-24 bg-gray-100  border-zinc-700 rounded pl-3 pt-2 shadow-lg shadow-indigo-500/40 hover:shadow-indigo-700/40 hover:cursor-pointer text-gray-800"
      onClick={onClick}
    >
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2 gap-1 text-xs">
          {name}
          <Image
            src={flag}
            alt="Country Flag"
            width={FLAG_HEIGHT}
            height={FLAG_WIDTH}
          />
        </div>
        <div className="flex flex-col w-1/2 text-xs pt-1 gap-1">
          {capital && <div>Capital: {capital}</div>}
          <div>Population: {formattedPopulation}</div>
          <div>Area: {formattedArea} km/sq</div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
