const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]

const getTheTitles = function(array) {
    // Due to it be an arrow function, automatically returns what is 
    // Map runs through every item in array and creates a new array with desires values (book.title in this case)
    const titles = array.map((book) => book.title);
    return titles; // could be one line but I didn't want it to be :)
};

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
