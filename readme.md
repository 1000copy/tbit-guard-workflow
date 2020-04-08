## 如何输出搞乱js代码？

From NPM for use as a command line app:

	npm install uglify-js -g

搞乱a.js

	uglifyjs a.js 

搞乱a.js,结果输出到a.min.js

	uglifyjs a.js -o a.min.js

## 如何使用gulp搞乱代码？
  
	var gulp = require('gulp'),
	    uglify = require('gulp-uglify'); 
	gulp.task('jsmin',async function () {
	    gulp.src(['a.js','b.js'])
	    	.pipe(uglify())
	        .pipe(gulp.dest('dist/js'));	
	});  

##  如何拷贝文件？copying file with gulp

	gulp.src('package.json').pipe(gulp.dest('dist/js'));


##  如何整个目录继承树的输出搞乱代码？


		gulp.src(['src/**/*.js'])
	    	.pipe(uglify())
	        .pipe(gulp.dest('dist/js/src'));


Gulp: uglify in different destination folder with same hierarchy inside

Try:

gulp.src('app/**/*.js')
and everything else as you have it and let me know if that works for you. In this case your components_min should replace the app folder - everything before the glob - and maintain your folder structure.

## 如何批量化多个gulp task?

使用gulp.serial 或者parallel 函数：

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
	gulp.task('default',gulp.series('jsmin','abc'));"# tbit-guard-workflow" 
