var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');
var greetings = require("./greetings.js");
var mailUtils = require('./email-utils.js');
var archiverUtils = require('./archiver-utils');

//This is the object that exports when people require our module
module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames),
    hello: greetings.sayHelloInEnglish,
    zipReport: archiverUtils.archiveReport,
    sendEmail: mailUtils.sendSampleGmail,
    sendEmailAttachment: mailUtils.sendEmailWithAttachment
};
