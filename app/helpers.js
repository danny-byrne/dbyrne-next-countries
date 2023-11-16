export const parseCountryData = (country) => {
  const capital = country?.capital?.length ? country.capital[0] : "";

  return {
    name: country.name.common,
    capital: capital,
    population: country.population,
    area: country.area,
    flag: country.flags.svg,
    continent: country.continents[0],
  };
};

export const formatNumberWithCommas = (number) => {
  // Convert the number to a string
  let numberString = number.toString();

  // Use a regular expression to add commas to the number string
  // This regex adds commas for every three digits from the right
  numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Return the formatted string
  return numberString;
};
