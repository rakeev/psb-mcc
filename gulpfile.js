'use strict';

var gulp = require('gulp'),
    plug = require('gulp-load-plugins')(),
    uglify = require('uglify-js'),
    qs = require('querystring'),
    fs = require('fs');

gulp.task('build', function() {
    var code = 'var script = "'+qs.escape(uglify.minify('src/script.js').code)+'";';
    fs.existsSync('res') || fs.mkdirSync('res', '0755');
    fs.writeFile('res/data.js', code);

    gulp.src('node_modules/picnic/src/picnic.scss').pipe(plug.sass()).pipe(plug.rename('style.css'))
        .pipe(plug.autoprefixer()).pipe(plug.minifyCss()).pipe(gulp.dest('res'));
});

gulp.task('default', ['build']);
