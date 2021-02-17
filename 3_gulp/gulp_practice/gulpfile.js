var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var connect = require('gulp-connect');

gulp.task('css', function () {
	return gulp.src('dev/**/*.css')     		    // gulp.src() -  путь относительно gulp.js, откуда взять файлы   (** - рекурсивно в папке)
		.pipe(concatCss("bundle.css"))    	// .pipe() - задача, concatCss() - ф-ия плагина
		.pipe(gulp.dest('build/'))      			//  gulp.dest() - путь, куда выложить результат
		.pipe(connect.reload());
});

gulp.task('connect', function (done) {
	connect.server({
		root: 'build',
		livereload: true,
		port: 80,
	});
	done()
});

gulp.task('watch', function () {
	gulp.watch(['dev/**/*.css'], gulp.parallel('css'));
});

gulp.task('default', gulp.series('connect', 'css', 'watch'));























