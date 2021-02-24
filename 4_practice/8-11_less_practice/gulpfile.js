var gulp = require('gulp');
var less = require('gulp-less');
var concatCss = require('gulp-concat-css');
var includer = require('gulp-htmlincluder');
var replace = require('gulp-html-replace');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var spritesmith = require('gulp.spritesmith');
var rename = require('gulp-rename');

gulp.task('spriteCreator', function () {
	var spriteData = gulp.src('dev/img/icons/*.png').pipe(spritesmith({
		imgName: '../img/sprite.png',
		cssName: 'sprite.less',
		cssFormat: 'less',
		algoritm: 'binary-tree',
		padding: 10
	}));
	spriteData.img.pipe(rename('sprite.png')).pipe(gulp.dest('build/img/'));
	spriteData.css.pipe(gulp.dest('dev/less/imports/'));
});


gulp.task('cssCreator', function () {
	return gulp.src('dev/less/general.less')
		.pipe(less())
		.pipe(gulp.dest('build/css'))
		.pipe(connect.reload());
});



gulp.task('connect', function () {
	connect.server({
		root: 'build',
		livereload: true
	});
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


gulp.task('default', function () {

	gulp.start('connect', 'concatCss', 'htmlIncluder');

	gulp.watch(['dev/**/*.html'], function (event) {
		gulp.start('htmlIncluder');
	});
	gulp.watch(['dev/**/*.css'], function (event) {
		gulp.start('concatCss');
	});
});

























