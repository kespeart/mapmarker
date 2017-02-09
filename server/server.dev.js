var express = require('express');
var app = express();
var path = require("path");
var webpackConfig = require('../config/webpack.dev');
var webpack = require('webpack');
var request = require('request');
var config = require('./config.api');

var compiler = webpack(webpackConfig);
var webpackDevMiddleware = require ('webpack-dev-middleware');
var webpackHotMiddleware = require ('webpack-hot-middleware');

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

app.get('/maps*/', (req, res) => {
    var url = config.endpoints.googleMaps + req.url;
    request(url).pipe(res);
});

app.listen(8080,  ()=> console.log('listening on port 8080'));

