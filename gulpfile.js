var gulp = require('gulp');
var webpack = require('webpack-stream');
var gulpSequence = require('gulp-sequence');
var webpackConfig = require('./config/webpack.prod.js');
var server = require('gulp-express');
var del = require('del');

gulp.task('build', webpackBuild);
gulp.task('server', startServer);
gulp.task('clean', cleanTask);


gulp.task('prod', gulpSequence('clean', 'build', 'server'));

/*
* @desc start express server
*/
function startServer(){
    server.run(['server.js'], null, false);
}

/**
*@desc run webpack build which will create dist filder
*/
function webpackBuild(){
    return gulp.src('src/main.ts')
             .pipe(webpack(webpackConfig))
             .pipe(gulp.dest('dist/'));
}


function cleanTask(){
    del(['dist/'])
}