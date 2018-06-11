var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('htmlmin', function(){
	return gulp.src('*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/'));
});

gulp.task('copy', function(){
	return gulp.src('css/*')
    .pipe(gulp.dest('dist/css'))
});

gulp.task('default', ['htmlmin', 'copy']);


