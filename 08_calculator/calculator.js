const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
};

const multiply = function(numbers) {
  // Doesn't need a default value
  return numbers.reduce((a, b) => {return a * b});
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(a) {
  if (a === 0) return 1;

  let final = 1;
	for(let i = 1; i <= a; i++) {
    final *= i;
  }
  return final;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
