var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify'),
  jshint = require('gulp-jshint');

gulp.task('default', function () {
  gulp.start('minifyjs','minifycss');
});

gulp.task('minifyjs', function () {
  return gulp.src(['js/swiper-3.4.2.min.js','zepto.min.js'])      //压缩的文件
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())   //执行压缩
    .pipe(gulp.dest('js'))
    .pipe(notify({messafe: 'ok!'}))
});
gulp.task('minifycss', function () {
  return gulp.src('css/*.css')      //压缩的文件
      .pipe(concat('main.css'))
      .pipe(rename({suffix: '.min'}))
      .pipe(minifyCSS())   //执行压缩
      .pipe(gulp.dest('css'))
      .pipe(notify({messafe: 'ok!'}))
});

