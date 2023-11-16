// components/CountryCard.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CountryCard from "../components/CountryCard";

const mockCountry = {
  name: "Test Country",
  capital: "Test Capital",
  population: 1000000,
  area: 5000,
  flag: "test-flag-url",
};

describe("CountryCard", () => {
  it("renders CountryCard component correctly", () => {
    render(<CountryCard country={mockCountry} onClick={() => {}} />);

    expect(screen.getByText(/Test Country/)).toBeInTheDocument();
    expect(screen.getByText(/Test Capital/)).toBeInTheDocument();
    expect(screen.getByText(/Population: 1,000,000/)).toBeInTheDocument();
    expect(screen.getByText(/Area: 5,000 km\/sq/)).toBeInTheDocument();
    expect(screen.getByAltText("Country Flag")).toHaveAttribute(
      "src",
      "test-flag-url"
    );
  });
});

test("calls onClick when card is clicked", () => {
  const mockOnClick = jest.fn(); // Create a mock function

  render(<CountryCard country={mockCountry} onClick={mockOnClick} />);

  fireEvent.click(screen.getByText(/Test Country/));
  expect(mockOnClick).toHaveBeenCalled();
});
