module.exports = function(grunt) {
  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'mochawesome',
          clearRequireCache: true
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
  
    
  grunt.registerTask('default', ['mochaTest']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('zip', ['compress']);
  grunt.registerTask('report', 'An asynchronous task to sending emails', function() {
      var done = this.async();
      var mailUtils = require('./src/email-utils.js'); 
      mailUtils.sendEmailWithAttachment();
      function handler(error,info){
          done();
      };      
    });
};