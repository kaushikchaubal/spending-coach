var gulp        = require('gulp'),
    path        = require('path'),
    through     = require('through2'),
    gutil       = require('gulp-util'),
    expect      = require('gulp-expect-file'),
    PluginError = gutil.PluginError;

// VENDOR CONFIG
var vendor = {
  app: {
    source: require('./vendor.json'),
    dest: '../Angle/vendor/assets/components'
  }
};

//---------------
// TASKS
//---------------

// copy file from bower folder into the rails vendor folder
gulp.task('vendor', function() {
  
  return gulp.src(vendor.app.source, {base: 'bower_components'})
      .pipe(expect(vendor.app.source))
      .pipe( gulp.dest(vendor.app.dest) );
});


gulp.task('default', ['vendor'], function(){

  gutil.log(gutil.colors.cyan('************'));
  gutil.log(gutil.colors.cyan('* All Done *'), 'Bower components has been installed into Rails application.');
  gutil.log(gutil.colors.cyan('************'));

});

// Error handler
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

