var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    nodemon = require('gulp-nodemon'),
    browserSync = require('browser-sync');

var public = 'public',
    private = 'private',
    views = 'views';

// server connection
var ipAddress = 'http://localhost:',
    port = 3000,
    server = ipAddress + port;
// nodemon task
gulp.task('start', function () {
  nodemon({
    script: './bin/www'
  })
})
    

// scssToCss
gulp.task('scssToCss', function () {
    gulp.src(private + '/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(plumber())
        .pipe(gulp.dest(public + '/css/'));
});

gulp.task('browser-sync', function() {
    browserSync({
        proxy: server,
        port: 8080,
        open: true,
        notify: false,
        files: [views + '/**/**/*.ejs', public + '/css/*.css', public + '/img/*.png', public + '/js/*.js']
    });
});


/* Watch for changes */
/* Generic */
gulp.task('watch', function () {
    gulp.watch(private + '/scss/**/*.scss', ['scssToCss']);
});

/* Default Gulp task */
/* type Gulp in console */
gulp.task('default', ['scssToCss', 'browser-sync', 'watch']);

// with server
gulp.task('startServer', ['start','scssToCss', 'browser-sync', 'watch']);