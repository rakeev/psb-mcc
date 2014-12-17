'use strict';

var gulp = require('gulp'),
    uglify = require('uglify-js'),
    qs = require('querystring'),
    fs = require('fs');

gulp.task('build', function() {
    var code = 'var script = "'+qs.escape(uglify.minify('src/script.js').code)+'";';
    fs.existsSync('res') || fs.mkdirSync('res', '0755');
    fs.writeFile('res/data.js', code);
});

gulp.task('default', ['build']);
