const fibonacci = function(index) {
    if(+index < 0) return "OOPS";
    
    let a = 0;
    let b = 1;
    let series = [a, b]; // sets first two values

    for(let i = 1; i < +index; i++) {
        let sum = a + b;
        series.push(sum);
        
        // moves everything to the right one
        a = b;
        b = sum;
    }
    
    // returns last value in array
    return series.pop();
};

// Do not edit below this line
module.exports = fibonacci;
