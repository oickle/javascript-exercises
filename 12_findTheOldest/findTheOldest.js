const findTheOldest = function(people) {
    const oldest = people.sort(function(a, b) {
        // Checks to see whether anyone is still living, if so, use current year instead of non-existent death year
        const today = new Date();
        let aDeath = ('yearOfDeath' in a) ? a.yearOfDeath : today.getFullYear();
        let bDeath = ('yearOfDeath' in b) ? b.yearOfDeath : today.getFullYear(); 
        
        // Calculates the age of the two people being compared
        const previous = aDeath - a.yearOfBirth;
        const next = bDeath - b.yearOfBirth;

        if (previous < next){
            return -1; // place a BEFORE b in array (e.g. [a, b])
        } 
        else if (next > previous) {
            return 1; // place a AFTER b in array (e.g. [a, b])
        }

        return 0; // otherwise, keep a & b in their original places
    });

    return oldest.pop(); // returns last value in array (AKA the oldest person)
};

// Do not edit below this line
module.exports = findTheOldest;
