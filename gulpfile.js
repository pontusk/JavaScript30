var gulp = require('gulp'),
    connect = require('gulp-connect');

var cssSources = [
    '**/*.css'
];

var htmlSources = [
    '**/*.html'
];

gulp.task('css', function () {
    gulp.src(cssSources)
    .pipe(connect.reload())
});

gulp.task('html', function () {
    gulp.src(htmlSources)
    .pipe(connect.reload())
});

gulp.task('watch', function () {
    gulp.watch(cssSources, ['css']);
    gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function () {
    connect.server({
        root: '',
        livereload: true
    });
});

gulp.task('default', ['css', 'html', 'watch', 'connect']);