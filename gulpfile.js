// 添加引用
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

//这个可以让express启动
gulp.task("node", function() {
    nodemon({
        script: './bin/www',
        ext: 'js ejs',
        env: {
            'NODE_ENV': 'development'
        }
    })
});

// gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('server',["node"], function() {

    var files = [
        'views/**/*.ejs',
        'routes/**/*.js',
        'public/**/*.css',
        'app.js'
    ];

    browserSync.init(files, {
        proxy: 'http://localhost:3000',
        browser: ['chrome','safari'],
        notify: false,
        port: 4001,
        open:false,
        ghostMode: {
            clicks: true,
            scroll: true
        }
    });

    gulp.watch(files).on("change", reload);
});