const spawn = require('child_process').spawn;
const gulp = require('gulp');
const babel = require('gulp-babel');
const livereload = require('gulp-livereload');
const path = require('path');

const DIST_PATH = 'dist/';
const BASE_OPTIONS = { base: '.' };
const isWin = process.platform === "win32";

gulp.task('html', () => {
  return gulp.src('index.html', BASE_OPTIONS)
      .pipe(gulp.dest(DIST_PATH));
});

gulp.task('css', () => {
  return gulp.src(['css/**/*.css', ], BASE_OPTIONS)
      .pipe(gulp.dest(DIST_PATH));
});

gulp.task('js', () => {
  return gulp
    .src(['src/**/*.js'], BASE_OPTIONS)
    .pipe(babel())
    .pipe(gulp.dest(DIST_PATH));
});

gulp.task('run-electron', () => {
  const extension = isWin ? '.cmd' : '';
  const electronPath = path.join(__dirname, `node_modules/.bin/electron${extension}`);

  return spawn(electronPath, ['./dist/src/main/index.js'], { stdio: 'inherit' }).on(
    'close',
    () => process.exit()
  );
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('index.html', gulp.series('html'));
  gulp.watch('css/**/*.css', gulp.series('css'));
  gulp.watch('src/**/*.js', gulp.series('js'));
});

gulp.task('start', gulp.series('html', 'css', 'js', 'run-electron'));

gulp.task('default', gulp.parallel('start', 'watch'));
