var express = require('express')
  , nib = require('nib');

var app = express();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.use(express.logger('dev'))
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index')
});

app.listen(3000);