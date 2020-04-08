var gulp = require('gulp'),
    uglify = require('gulp-uglify'); 
gulp.task('jsmin',async function () {
    gulp.src(['a.js','b.js'])
    	.pipe(uglify())
        .pipe(gulp.dest('dist/js'));
    gulp.src(['src/**/*.js'])
    	.pipe(uglify())
        .pipe(gulp.dest('dist/js/src'));
});
gulp.task('abc', async function() {
  gulp.src('package.json').pipe(gulp.dest('dist/js'));
});
gulp.task('default',gulp.series('jsmin','abc'));