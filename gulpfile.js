const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () =>{
    return gulp.src('./assets/style/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/style'));
});

gulp.task('sass:watch', () =>{
    gulp.watch('./assets/style/*.scss', gulp.series('sass'));
});