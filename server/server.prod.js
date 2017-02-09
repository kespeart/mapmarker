var express = require('express');
var app = express();
var path = require("path");
var config = require('./config.api');
var request = require('request');

app.set('views', __dirname + '/../dist/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '/../dist')));
app.listen(8080, ()=> console.log('runng on port 8080'));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/maps*/', (req, res) => {
    var url = config.endpoints.googleMaps + req.url;
    request(url).pipe(res);
});