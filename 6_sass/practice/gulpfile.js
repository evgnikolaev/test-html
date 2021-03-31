var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('./sass/**/*.scss')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
	gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});