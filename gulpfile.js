'use strict'
// Require gulp
const gulp = require('gulp');
// Require gulp-babel
const babel = require('gulp-babel');

gulp.task('es6', () => {
	return gulp.src('es6/lotto.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('default', ['es6'],() => {
	gulp.watch('es6/lotto.js',['es6'])
});
