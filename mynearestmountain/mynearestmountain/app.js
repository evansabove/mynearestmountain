var express = require('express')
  , stylus = require('stylus')
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
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'));

var mountains = [
	{ name: "Ben Nevis", location: [56, 47, 49, 'N', 5, 0, 13, 'W']},
	{ name: "Scafell Pike", location: [54, 27, 15.2, 'N', 3, 12, 41.5 'W']},
	{ name: "Snowdon", location: [53, 4, 6.59, 'N', 4, 4, 34.43 'W']}
]

app.get('/', function (req, res) {
  res.render('index', { title : 'Home' } );
});

app.listen(3000);