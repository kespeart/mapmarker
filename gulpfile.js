var gulp = require('gulp');
var webpack = require('webpack-stream');
var gulpSequence = require('gulp-sequence');
var webpackConfig = require('./config/webpack.prod.js');
var server = require('gulp-express');
var del = require('del');

gulp.task('build', webpackBuild);

gulp.task('server', ()=> server.run(['./server/server.prod.js'], null, false));
gulp.task('clean', cleanTask);
gulp.task('dev', ()=> server.run(['./server/server.dev.js'], null, false));
gulp.task('prod', gulpSequence('clean', 'build', 'server'));


/**
*@desc run webpack build which will create dist folder
*/
function webpackBuild(){
    return gulp.src('src/main.ts')
             .pipe(webpack(webpackConfig))
             .pipe(gulp.dest('dist/'));
}


function cleanTask(){
    del(['dist/'])
}