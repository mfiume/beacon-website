var conf = require('./conf');
var gulp = require('gulp');
var path = require('path');
var template = require('gulp-template');

gulp.task('sitemap', function () {
  var date = new Date();
  var dateIso = date.toISOString();

  return gulp.src(path.join(conf.paths.src, '/sitemap.xml'))
    .pipe(template({currentDate: dateIso}))
    .pipe(gulp.dest(path.join(conf.paths.dist)));
});

