const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const search = require('./search');
const album = require('./album');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');



app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000;

app.get('/search', (req, res, next) => {
	//var string;
	search(req.query.title, string => {
		res.send(string);
	});
	
	//res.render('index.hbs', {
	//	pageTitle: 'Welcome to the Music Site'
	//});
});

app.get('/album', (req, res, next) => {
	album(req.query.id, album => {
		res.json({ 
			'Title': album.title,
			'Cover': album.cover_medium,
			'Tracks': album.tracks
		});
	});
});
app.listen(port, () => {
	console.log('Server is up for port ' + port);
});