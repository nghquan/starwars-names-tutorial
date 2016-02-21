# starwars-names-tutorial
npm:
- Configure npm   https://docs.npmjs.com
- Create a package.json file with:
npm init
- Save correct version of the reference libraries:
npm set save-excact true
- Check if npm is installed:
npm -- version
- To install library:
npm install --save <libraryname>
examples:
npm install --save dev mocha chai
npm -D mocha chai

working with libraries:
- Use require to add a reference to a library
- exports object is the object that exports when people require your library
module.exports = {}
or
exports{}

working with git:
To make a commit:
1. Check status:
git status
2. Put ignore files to:
.gitignore
3. add/agree all your changes:
git add -A
4. commit your changes:
git commit -m '<message>'
5. send your changes to server:
git push

Mocha & chai
- Install mocha and chai:
npm -D mocha chai
- In package.json to set up test run with mocha:      
    View test report in command line
        "test": "mocha src/index.test.js -w"
    Generate test report in mochawesome-reports folder
        "test": "mocha src/index.test.js --reporter mochawesome”
- To run test:
npm test
- Mochawesome:
Generate a report page (include html, css, javascript, report data in json format), having chart, codes, results

Node mailer: https://github.com/nodemailer/nodemailer
- install command:
npm install nodemailer
- Using with Gmail:
Use the codes sample on the https://nodemailer.com
Enable https://www.google.com/settings/security/lesssecureapps
- Send attachment:
Extend mailOptions object

Using fs and archiver libraries
- To zip directory:
http://stackoverflow.com/questions/15641243/need-to-zip-an-entire-directory-using-node-js

grunt: task runner
- using with mocha: use grunt-mocha-test library
 install mocha
npm install mocha --save-dev
 install grunt mocha test
npm install grunt-mocha-test --save-dev
- using compress library to produce report.zip
 install grunt compress
npm install grunt-contrib-compress --save-dev
- create a self-defined task for sending email http://gruntjs.com/creating-tasks
  The nodemailer sending email in asynchronous mode so we have to use an asynchronous method