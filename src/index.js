var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');

//This is the object that exports when people require our module
module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};
