var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var includer = require('gulp-htmlincluder');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

gulp.task('connect', function () {
	connect.server({
		root: 'build',
		livereload: true
	});
});

gulp.task('concatCss', function () {
	return gulp.src('dev/**/*.css')     		    // gulp.src() -  путь относительно gulp.js, откуда взять файлы   (** - рекурсивно в папке)
		.pipe(concatCss("bundle.css"))    	// .pipe() - задача, concatCss() - ф-ия плагина
		.pipe(gulp.dest('build/css'))      			//  gulp.dest() - путь, куда выложить результат
		.pipe(connect.reload());
});

gulp.task('htmlIncluder', function () {
	gulp.src('dev/**/*.html')
		.pipe(includer())
		.pipe(gulp.dest('build/'))
		.pipe(connect.reload());
});


gulp.task('default', function () {

	gulp.start('connect', 'concatCss', 'htmlIncluder');

	gulp.watch(['dev/**/*.html'], function (event) {
		gulp.start('htmlIncluder');
	});
	gulp.watch(['dev/**/*.css'], function (event) {
		gulp.start('concatCss');
	});
});

























