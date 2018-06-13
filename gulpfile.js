var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cleanCss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var connect = require('gulp-connect');

gulp.task('clean', function(){
	return gulp.src('dist/')
	.pipe(clean());
});

gulp.task('jshint', function(){
	return gulp.src('js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('uglify', function(){
	return gulp.src(['assets/*.js', 'js/*.js'])
	.pipe(uglify())
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('htmlmin', function(){
	return gulp.src('*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/'));
});

gulp.task('cssmin', function(){
	return gulp.src('css/*.css')
	.pipe(cleanCss())
	.pipe(concat('all.min.css'))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('imagemin', function(){
	return gulp.src('img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'));
});	

gulp.task('connect', function(){
	connect.server({
		root: 'dist',
		livereload: true
	});
});

gulp.task('copy', function(){
	return gulp.src('assets/jquery/*')
	.pipe(gulp.dest('dist/assets'));
});

gulp.task('default', ['jshint', 'htmlmin', 'uglify', 'imagemin', 'cssmin', 'copy', 'connect']);


