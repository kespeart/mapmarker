var gulp = require('gulp');
var webpack = require('webpack-stream');
var gulpSequence = require('gulp-sequence');
var webpackConfig = require('./config/webpack.prod.js');
var gls = require('gulp-live-server');
var del = require('del');

gulp.task('build', webpackBuild);

gulp.task('prod-server', prod);
gulp.task('clean', () => del(['dist/']));
gulp.task('prod', gulpSequence('clean', 'build', 'prod-server'));
gulp.task('dev', dev);

/**
 * @desc dev server function
 */
function dev(){
     var server = gls.new('./server/server.dev.js');
     server.start();
    gulp.watch(['src/**/*.*', 'src/*.*'], function (file) {
        server.notify.apply(server, [file]);
    });
}

/**
 * @desc function to start production server
 */
function prod(){
    var server = gls.new('./server/server.prod.js');
    server.start();
}
/**
*@desc run webpack build which will create dist folder
*/
function webpackBuild(){
    return gulp.src('src/main.ts')
             .pipe(webpack(webpackConfig))
             .pipe(gulp.dest('dist/'));
}
