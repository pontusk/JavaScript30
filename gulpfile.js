const gulp = require('gulp');
const connect = require('gulp-connect');

const cssSources = ['**/*.css'];
const htmlSources = ['**/*.html'];

gulp.task('css', () => gulp.src(cssSources).pipe(connect.reload()));

gulp.task('html', () => gulp.src(htmlSources).pipe(connect.reload()));

gulp.task('watch', () => {
  gulp.watch(cssSources, ['css']);
  gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', () => {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('default', ['css', 'html', 'watch', 'connect']);
