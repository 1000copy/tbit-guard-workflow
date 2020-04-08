# 工程自动化的方法

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

## 如何执行一组命令
	
	run = require('gulp-run-command').default;
	gulp.task('buildclient', run('cmd /c cd ../client && npm run build && cmd /c cd ../server'))

## 如何让uglify支持mini化ES6代码？

前置一个babel转义环节？

	gulp.src(['gpl/**/*.js'])
    	 .pipe(babel({presets: ['es2015']})).pipe(uglify())
        .pipe(gulp.dest('dist/gpl'));

试过uglify-es,但是会真的把代码搞乱，逻辑错误。我这里是sequelize的sql生成就是错的。且此包官方也号称放弃。

## 最终依赖包列表

	"devDependencies": {
	    "@babel/core": "^7.9.0",
	    "gulp": "^4.0.2",
	    "gulp-babel": "^8.0.0",
	    "gulp-run-command": "0.0.10",
	    "gulp-uglify": "^3.0.2",
	    "gulp-uglify-es": "^2.0.0",
	  }
