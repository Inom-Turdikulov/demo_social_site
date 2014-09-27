// Basic config
//===================================================================

var srcPath = 'src';
var devEnable = true

var options = {};

options.autoprefixer = {
  map: true,
  from: 'asset',
  to: 'asrp.min.css'
};

options.sass = {
  errLogToConsoleVal: true,
  sourceMapVal: 'sass',
  sourceCommentsVal: 'map'
};

// Import Modules
//===================================================================

// Used node modules
//run-sequence
//gulp-watchify
//gulp-watch
//gulp-connect
//gulp-plumber
//gulp-jade
//gulp.spritesmith
//gulp-autoprefixer
//gulp-sass
//csscomb
//gulp

var gulp = require('gulp');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var runSequence = require('run-sequence')

var jade = require('gulp-jade');
var sass = require('gulp-sass')
var prefix = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');

var Comb = require('csscomb');

var comb_config = require('./.csscomb.json');
var groupSize = require('csscomb-group-size');

// Создаём новый экземпляр «расчёски»:
var comb = new Comb(comb_config).use(groupSize);

var processWinPath = function(file) { //FIX TOKEN ERROR
  var path = require('path');
  if (process.platform === 'win32') {
    file.path = path.relative('.', file.path);
    file.path = file.path.replace(/\\/g, '/');
  }
};

// Define Tasks
//===================================================================

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('jade', function() {
  gulp.src(srcPath + '/jade/*.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload())
});

gulp.task('csscomb', function() {
  comb.processDirectory(srcPath + '/scss/');
});

gulp.task('sass', function () {
    gulp.src(srcPath + '/scss/*.scss')
        .on('data', processWinPath) //FIX TOKEN ERROR
        .pipe(plumber())
        .pipe(
          sass(options.sass)
        )
        .pipe(gulp.dest('./css/'))
        .pipe(connect.reload())
});

gulp.task('sprites', function () {
  var spriteData = gulp.src('img/basic-sprite/*.png').pipe(spritesmith({
    imgName: 'basic-sprite.png',
    cssName: '_basic-sprite.scss',
    cssFormat: 'scss',
    algorithm: 'binary-tree',
    imgPath: '../img/basic-sprite.png',
    cssTemplate: './.sprite.mustache',
    cssVarMap: function(sprite) {
        sprite.name = 's-' + sprite.name
    }
  }));
  spriteData.img.pipe(gulp.dest('./img'));
  spriteData.css.pipe(gulp.dest(srcPath + '/scss/'));
});

gulp.task('autoprefix', function() {
  gulp.src('./css/*.css')
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7", options.autoprefixer))
    .pipe(gulp.dest('./css/'));
});

// Define watch task
//===================================================================

gulp.task('watch', function() {
    gulp.watch('src/jade/*.jade',['jade']);
    gulp.watch('src/scss/*.scss', ['csscomb']);
    gulp.watch('src/scss/*.scss', ['sass']);
})

// Define watch task
//===================================================================
gulp.task('watch2', function(callback) {
    watch({glob: 'img/**/*.png'}, function(files) {
        return runSequence('sprites');
    });
});


// Define default task
//===================================================================

gulp.task('default', ['webserver', 'jade', 'csscomb', 'sass', 'watch']);