var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var babel = require('gulp-babel');
var smoosh = require('gulp-smoosher');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
 
gulp.task('minifycss', (cb) => {
    return gulp.src('css/master.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css/'));
});

gulp.task('inlinecss', ['minifycss'], () => {
    return gulp.src('_preprocess/head.html')
        .pipe(smoosh())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('_includes/'));
});


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

gulp.task('default', ['build','minifycss','inlinecss']);
gulp.task('devmode', ['debug','minifycss','inlinecss']);

gulp.task('watch', () => {
    gulp.watch('src/hab.js/hab.js', ['default']);
});

gulp.task('watchdev', () => {
    gulp.watch('src/hab.js/hab.js', ['devmode']);
});

