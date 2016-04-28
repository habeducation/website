var gulp = require('gulp');
var gulp_uglify = require('gulp-uglify');
var gulp_rename = require('gulp-rename');
var gulp_concat = require('gulp-concat');
var gulp_browserify = require('gulp-browserify');

gulp.task('build', function() {
  gulp.src([
    'src/hab.js/*.csv'
  ]).pipe(gulp.dest('data'))


  gulp.src([
    'src/hab.js/hab.js'
  ]).pipe(gulp_browserify())
    .pipe(gulp_uglify())
    .pipe(gulp.dest('js'));


  return 1
});



gulp.task('debug', function() {
  gulp.src([
    'src/hab.js/*.csv'
  ]).pipe(gulp.dest('data'))


  gulp.src([
    'src/hab.js/hab.js'
  ]).pipe(gulp_browserify())
    .pipe(gulp.dest('js'));
});

gulp.task('default', ['build']);
gulp.task('devmode', ['debug']);

gulp.task('watch', function() {
  gulp.watch('src/hab.js/hab.js', ['default']);
});

gulp.task('watchdev', function() {
  gulp.watch('src/hab.js/hab.js', ['devmode']);
});


// Handle the error
function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}
