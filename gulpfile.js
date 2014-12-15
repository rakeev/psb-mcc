'use strict';

var gulp = require('gulp'),
    plug = require('gulp-load-plugins')();

gulp.task('build', function() {
    gulp.src('node_modules/picnic/src/picnic.scss').pipe(plug.sass()).pipe(plug.rename('style.css'))
        .pipe(plug.autoprefixer()).pipe(plug.minifyCss()).pipe(gulp.dest('res'));
});

gulp.task('default', ['build']);
