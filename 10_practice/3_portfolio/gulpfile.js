var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function () {
	return gulp.src('css/style.less')
		.pipe(less())
		.pipe(gulp.dest('css'))
});


gulp.task('default', function () {
	gulp.watch('css/**/*.less', gulp.series('less'));
});