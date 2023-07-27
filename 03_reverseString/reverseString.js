const reverseString = function(input) {
    // My original solution
    /*
    let reversedInput = "";
    let inputArray = input.split("");
    for (let i = 0; i < inputArray.length; i++) {
        reversedInput = inputArray[i] + reversedInput;
    }

    return reversedInput;
    */

    // The better solution
    return input.split("").reverse().join("")
};

reverseString("dog");

// Do not edit below this line
module.exports = reverseString;
