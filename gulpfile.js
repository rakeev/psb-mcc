'use strict';

var gulp = require('gulp'),
    plug = require('gulp-load-plugins')(),
    qs = require('querystring');

gulp.task('build', function() {
    var trans = plug.insert.transform(function(cont) {
        return 'var code = "'+qs.escape(cont)+'";';
    });
    gulp.src('./src/*.js').pipe(plug.uglify()).pipe(plug.if(/main\.js$/, trans))
        .pipe(plug.concat('script.js')).pipe(gulp.dest('res'));

    gulp.src('node_modules/picnic/src/picnic.scss').pipe(plug.sass()).pipe(plug.rename('style.css'))
        .pipe(plug.autoprefixer()).pipe(plug.minifyCss()).pipe(gulp.dest('res'));
});

gulp.task('default', ['build']);
