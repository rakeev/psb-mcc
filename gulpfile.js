'use strict';

var gulp = require('gulp'),
    plug = require('gulp-load-plugins')(),
    qs = require('querystring');

var path = 'res',
    scripts = './src/*.js',
    styles = ['node_modules/picnic/src/picnic.scss', './src/*.scss'];

gulp.task('js', function() {
    var trans = plug.insert.transform(function(cont) {
        return 'var code = "'+qs.escape(cont)+'";';
    });
    gulp.src(scripts).pipe(plug.uglify()).pipe(plug.if(/main\.js$/, trans))
        .pipe(plug.concat('script.js')).pipe(gulp.dest(path)).pipe(plug.notify('Rebuilt js'));
});

gulp.task('css', function() {
    gulp.src(styles).pipe(plug.sass()).pipe(plug.rename('style.css')).pipe(plug.autoprefixer())
        .pipe(plug.minifyCss()).pipe(gulp.dest(path)).pipe(plug.notify('Rebuilt css'));
});

gulp.task('watch', function() {
    gulp.watch(scripts, ['js']);
    gulp.watch(styles, ['css']);
});

gulp.task('default', ['js', 'css']);
