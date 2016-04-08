// Include gulp
var gulp = require('gulp');

// Include Gulp Plugins
var ts = require('gulp-typescript');
var gls = require('gulp-live-server');

var path = require('path');

/**
 * Tasks for building, and testing angular-log
 */
// build
var tsProject = ts.createProject('src/tsconfig.json', {});
gulp.task('build_src', function() {

    var tsResult = gulp.src([
            'node_modules/angular2/typings/browser.d.ts',
            'src/*.ts'
        ])
        .pipe(ts(tsProject, ts.reporter.defaultReporter()));

    tsResult.dts.pipe(gulp.dest('./lib'));
    return tsResult.js.pipe(gulp.dest('./lib'));
});

// build watch
gulp.task('watch_src', function() {
    gulp.watch(['src/*.ts'], ['build_src']);
});


