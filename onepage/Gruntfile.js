module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      
    less: {
        development: {
            files: {
                'css/grayscale.css': 'less/grayscale.less'
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
    
  grunt.registerTask('default', ['less']);
};