import { formatNumberWithCommas } from "../helpers";

test("formats number with commas", () => {
  // Arrange
  const inputNumber = 44700000;
  const expectedOutput = "44,700,000";

  // Act
  const result = formatNumberWithCommas(inputNumber);

  // Assert
  expect(result).toBe(expectedOutput);
});
