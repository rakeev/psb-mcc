'use strict';

var gulp = require('gulp'),
    plug = require('gulp-load-plugins')(),
    qs = require('querystring');

var path = 'res',
    scripts = 'src/*.js',
    styles = 'src/*.scss',
    verb = false;

gulp.task('js', function() {
    var trans = plug.insert.transform(function(cont) {
        return 'var code = "'+qs.escape(cont)+'";';
    });
    gulp.src(scripts)
        .pipe(plug.uglify())
        .on('error', console.warn)
        .pipe(plug.if(/main\.js$/, trans))
        .pipe(plug.concat('script.js'))
        .pipe(gulp.dest(path))
        .pipe(plug.if(verb, plug.notify('Rebuilt js')))
        .pipe(plug.livereload());
});

gulp.task('css', function() {
    gulp.src(styles)
        .pipe(plug.sass())
        .on('error', console.warn)
        .pipe(plug.concat('style.css'))
        .pipe(plug.autoprefixer())
        .pipe(plug.minifyCss())
        .pipe(gulp.dest(path))
        .pipe(plug.if(verb, plug.notify('Rebuilt css')))
        .pipe(plug.livereload());
});

gulp.task('watch', function() {
    plug.livereload.listen();
    gulp.watch('index.html', function(event) {
        plug.livereload.changed(event.path);
    });
    verb = true;
    gulp.watch(scripts, ['js']);
    gulp.watch(styles, ['css']);
});

gulp.task('default', ['js', 'css']);
