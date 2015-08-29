var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: false,
      defaultFile: 'index.html',
      port: 8000,
    }));
});
