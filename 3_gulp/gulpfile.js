var gulp = require('gulp');
var concatCss = require('gulp-concat-css');

gulp.task('concatcss', function () {
	return gulp.src('dev/**/*.css')     		   // gulp.src() -  путь относительно gulp.js, откуда взять файлы   (** - рекурсивно в папке)
		.pipe(concatCss("bundle.css"))    // .pipe() - задача, concatCss() - ф-ия плагина
		.pipe(gulp.dest('build/'));   			  //  gulp.dest() - путь, куда выложить результат
});


























