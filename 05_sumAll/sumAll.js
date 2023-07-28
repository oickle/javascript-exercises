const sumAll = function(num1, num2) {
    // Prevents sum from being competely negative by preventing any negatives as parameters
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (typeof(num1) !== "number" || typeof(num2) !== "number") return "ERROR";

    // Sets start and end based on which value is lesser or greater
    let start = num1 < num2 ? num1 : num2;
    let end = num1 > num2 ? num1 : num2;

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
