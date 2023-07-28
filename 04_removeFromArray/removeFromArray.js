/* My original function
const removeFromArray = function(array, ...targets) {
    // Runs through every parameter passed after the initial array
    for (const target of targets) {
        // If the parameter passed doesn't exist in the array, ignore it
        if (!array.includes(target)) continue;
    
        // Splice removes from array from index to increment
        let index = array.indexOf(target);
        array.splice(index, 1);
    }
    
    return array;
};
*/

// More complex function for practice
const removeFromArray = function(array, ...targets) {
    // Filter returns values that match the boolean
    // In this case, we return an array of the values that are not also included in the targets array
    return array.filter(x => !targets.includes(x));
};

console.log(removeFromArray([1, 2, 3, 4], 3, "taco"));

// Do not edit below this line
module.exports = removeFromArray;
