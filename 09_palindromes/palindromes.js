const palindromes = function (sentence) {
    const clean = sentence
    .toLowerCase()
    .replaceAll(/[\.,?!]/g, "") // replaces punctuation
    .replaceAll(' ', ''); // replaces spaces

    let reversed = clean
    .split('') // turns into array
    .reverse() // flips array
    .join(''); // turns back into string

    return clean === reversed;
};

// Do not edit below this line
module.exports = palindromes;
