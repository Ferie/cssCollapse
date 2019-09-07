// Include gulp and plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    del = require('del'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

/************************\
|*  GULP CONFIGRATIONS  *|
\************************/
var pathSass = 'sass/',
    pathJs = 'js/',
	jsLibs = 'js/libs/',
    distCssPath = 'dist/css/',
    distCssFile = 'app.css',
    distJsPath = 'dist/js/',
    distJsFile = 'app.min.js';

// Remove all file in distribution folder
gulp.task('clean', function() {
    console.log('[' + (new Date).toLocaleTimeString() + '] Deleting files inside folders:\n', distCssPath, '\n', distJsPath);
    return del([distCssPath, distJsPath]);
});

// Compile Sass
gulp.task('sass', function() {
    console.log('[' + (new Date).toLocaleTimeString() + '] Compiling SASS');
    return gulp.src(pathSass + '*.scss')
        .pipe(sourcemaps.init()) // Process the original sources
            .pipe(sass())
            .pipe(concat(distCssFile))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distCssPath));
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src(pathJs + '*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// Concatenate & Minify JS
gulp.task('scripts', ['lint'], function() {
    console.log('[' + (new Date).toLocaleTimeString() + '] Concatenating and Minifying JavaScripts');
    return gulp.src([jsLibs + '*.js', pathJs + '*.js'])
        .pipe(sourcemaps.init()) // Process the original sources
            .pipe(concat(distJsFile))
            .pipe(gulp.dest(distJsPath))
            // only uglify if gulp is ran with '--type production'
            .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distJsPath));
});

// Watch Files For Changes
gulp.task('watch', ['sass', 'scripts'], function() {
    gulp.watch([pathJs + '*.js', pathJs + '**/*.js'], ['lint', 'scripts']);
    gulp.watch([pathSass + '*.*', pathSass + '**/*.*'], ['sass']);
    console.log('===========================');
    console.log('| Gulp is now watching... |');
    console.log('===========================');
});

// Default Task
gulp.task('default', ['clean'], function() {
    console.log('===========================');
    console.log('| Gulp is now building... |');
    console.log('===========================');
    gulp.start('sass', 'scripts');
});