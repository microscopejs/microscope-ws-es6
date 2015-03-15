// Imports
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var babel  = require('gulp-babel');

gulp.task('test', function() {
  	return gulp.src('./src/*.js')
	    .pipe(jshint())
	    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build', ['test'], function () {
	return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'));
});