The solution is designed around GRUNT, a Javascript task runner. You can find more details about it here http://gruntjs.com

The solution has 3 steps:

1. Run the test suites. After this step, a mochawesome-reports folder will be created. It contains the test report

grunt test

The task will run all of the test-suite scripts placed in test-suites folder. It is looking for the files than ends with '.test.js'

2. Compress the test report folder into a report.zip file

grunt zip

3. Send an email with that report.zip attachment to stakeholders

grunt report

It is using chai, mocha and mochawsome to running the tests and output a report.

Chai(http://chaijs.com) is an assertion library for node and browser that can be paired with any javascript testing framework. In the solution, I use Chai with Mocha. Mocha(https://mochajs.org) is a feature-rich JavaScript test framework running on Node.js and browser. And mochawesome(http://adamgruber.github.io/mochawesome/) extends mocha for a custom reporter. It generates a full fledged HTML/CSS report that helps visualize your test suites.

The grunt-contrib-compress plugin(https://github.com/gruntjs/grunt-contrib-compress) is a Grunt plugin that does compress files and folders. It is using node libraries archiver (for zip/tar) and zlib (for gzip).

And the nodemailer library (https://nodemailer.com) is a npm library that does send emails with Node.JS. I got an interesting issue while I were playing around the library with grunt. The library sends emails asynchronously so you have to setup an asynchronous grunt task to executing the send email method.

