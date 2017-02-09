var express = require('express');
var app = express();
var path = require("path");

app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'dist')));
app.listen(8080);

app.get('/', function (req, res) {
  res.render('index.html');
});

