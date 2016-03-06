module.exports = function(grunt) {
  var testUtils = require('./src/test-runner-utils.js');
  var reportFolderParent = 'mochawesome-reports';
  var reportDirectory = reportFolderParent + '/' + testUtils.getReportDir();
  var reportName = testUtils.getReportName();
  
  grunt.initConfig({
    mkdir: {
     all: {
      options: {
        mode: 0700,
        create: [reportDirectory]
      },
     },
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'mochawesome',
          clearRequireCache: true,
          reporterOptions: {
              reportDir: reportDirectory,
              reportName: reportName,
              reportTitle: 'customReportTitle',
              inlineAssets: true
            }
        },
        src: ['test-suites/*.test.js']
      },
    },
    compress: {
        zip: {
            options: {
                archive: './report.zip',
                mode: 'zip'
            },
            files: [
                { src: 'mochawesome-reports/**' }
            ]
         }
    }
  });
    
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-compress');  
  grunt.loadNpmTasks('grunt-mkdir');
    
  grunt.registerTask('default', ['mochaTest']);
  grunt.registerTask('test', ['mkdir','mochaTest']);
  grunt.registerTask('zip', ['compress']);
  grunt.registerTask('setup', ['mkdir']);
  grunt.registerTask('report', 'An asynchronous task to sending emails', function() {
      var done = this.async();
      var mailUtils = require('./src/email-utils.js'); 
      mailUtils.sendEmailWithAttachment();
      function handler(error,info){
          done();
      };      
    });
};