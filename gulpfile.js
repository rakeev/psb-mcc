'use strict';

var gulp = require('gulp'),
    bonus = require('./src/bonus'),
    uglify = require('uglify-js'),
    qs = require('querystring'),
    fs = require('fs');

gulp.task('build', function() {
    Object.keys(bonus).forEach(function(key) {
       bonus[key] = uglify.parse(bonus[key].toString(), {expression: true}).print_to_string();
    });
    var code = 'var bonus = '+JSON.stringify(bonus);
    code += ', script = "'+qs.escape(uglify.minify('src/script.js').code)+'";';
    fs.existsSync('res') || fs.mkdirSync('res', '0755');
    fs.writeFile('res/data.js', code);
});

gulp.task('default', ['build']);
