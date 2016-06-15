var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var babel = require('gulp-babel');

gulp.task('build', () => {
    gulp.src([
        'src/hab.js/*.csv',
    ]).pipe(gulp.dest('data'));


    gulp.src([
        'src/hab.js/hab.js',
    ]).pipe(babel({
        presets: ['es2015'],
    }))
    .pipe(browserify())
    .pipe(uglify())
    .pipe(gulp.dest('js'));


    return 1;
});

gulp.task('debug', () => {
    gulp.src([
        'src/hab.js/*.csv',
    ]).pipe(gulp.dest('data'));


    gulp.src([
        'src/hab.js/hab.js',
    ]).pipe(babel({
        presets: ['es2015'],
    }))
    .pipe(browserify())
    .pipe(gulp.dest('js'));
});

gulp.task('default', ['build']);
gulp.task('devmode', ['debug']);

gulp.task('watch', () => {
    gulp.watch('src/hab.js/hab.js', ['default']);
});

gulp.task('watchdev', () => {
    gulp.watch('src/hab.js/hab.js', ['devmode']);
});

