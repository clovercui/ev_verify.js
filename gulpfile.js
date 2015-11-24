var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('default',function(){
        return gulp.src('everify.js')
          .pipe(uglify())
          .pipe(rename("everify.min.js"))
          .pipe(gulp.dest(''));
    })
