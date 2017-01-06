var express = require('express')
	, path = require('path')
	, logger = require('morgan')
	, favicon = require('serve-favicon');

var app = express();

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(logger('combined'))
app.use('/favicon.ico', express.static('/public/images/favicon.ico'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(3000);