var gulp = require("gulp"),
    browserSync = require('browser-sync');

// Server
gulp.task('server', function() {
    browserSync({
        port: 9000,
        server: {
            baseDir: 'app'
        }
    });
});

// Verfolgen
gulp.task('watch', function() {
    gulp.watch([
        'app/*.html',
        'app/js/**/*.js',
        'app/css/**/*.css'
    ]).on('change', browserSync.reload);
});

// default Aufgabe
gulp.task('default', ['server', 'watch']);