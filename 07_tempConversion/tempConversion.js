const convertToCelsius = function(temp) {
  // Conversion of Fahrenheit to Celsius is (x - 32) * (5/9)
  // .toFixed returns a string with only '1' decimal, so we must convert it to a number with the +
  return +((temp - 32) * (5/9)).toFixed(1);
};

const convertToFahrenheit = function(temp) {
  // Conversion equation of Celsius to Fahrenheit is (x * (9/5)) + 32
  return +((temp * (9/5)) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
