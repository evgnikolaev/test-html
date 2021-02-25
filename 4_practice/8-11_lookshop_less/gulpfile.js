var gulp = require('gulp');
var less = require('gulp-less');
var concatCss = require('gulp-concat-css');
var includer = require('gulp-htmlincluder');
var replace = require('gulp-html-replace');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var spritesmith = require('gulp.spritesmith');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

gulp.task('connect', function () {
	connect.server({
		root: 'build',
		livereload: true
	});
});

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
	return gulp.src('dev/less/general.less').pipe(plumber()).pipe(less()).pipe(gulp.dest('build/css')).pipe(connect.reload());
});

gulp.task('htmlCreator', function () {
	gulp.src('dev/**/*.html').pipe(includer()).pipe(gulp.dest('build/')).pipe(connect.reload());
});


gulp.task('default', function () {

	gulp.start('spriteCreator','connect', 'cssCreator', 'htmlCreator');

	gulp.watch(['dev/**/*.html'], function (event) {
		gulp.start('htmlCreator');
	});
	gulp.watch(['dev/**/*.less'], function (event) {
		gulp.start('cssCreator');
	});

});

























