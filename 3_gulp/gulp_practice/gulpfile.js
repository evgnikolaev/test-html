var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var includer = require('gulp-htmlincluder');
var replace = require('gulp-html-replace');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var spritesmith = require('gulp.spritesmith');

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
		.pipe(replace({
			css: 'css/bundle.css'
		}))
		.pipe(gulp.dest('build/'))
		.pipe(connect.reload());
});


gulp.task('sprite', function () {
	var spriteData = gulp.src('dev/img/icons/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		imgPath: '../img/sprite.png',
		cssName: 'sprite.css',
		algoritm: 'binary-tree'
	}));
	spriteData.img.pipe(gulp.dest('build/img/'));
	spriteData.css.pipe(gulp.dest('build/css/'));
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

























