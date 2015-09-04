var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('serve', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: false,
      defaultFile: 'index.html',
      port: 8000,
    }));
});
