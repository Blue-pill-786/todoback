const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');

// Compile Sass to CSS
gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'));
  });

// Minify JavaScript files
gulp.task('minify-js', function () {
  return gulp.src('src/js/*.js')
    .pipe(minify())
    .pipe(gulp.dest('dist/js'));
});

// Build task (run 'sass' and 'minify-js' tasks)
gulp.task('build', gulp.series('sass', 'minify-js'));

// Default task to run the development environment
gulp.task('default', gulp.series('build'));
