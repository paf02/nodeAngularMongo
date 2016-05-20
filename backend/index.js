var express = require('express');
// var wagner = require('wagner-core');

// require('./models')(wagner);

var app = express();

app.use(express.static('public'));

// app.use('/api/v1', require('./api')(wagner));

// app.set('view engine', 'jade');

// app.set('views','../frontend/dist');



app.get('/test/:id', function(req, res) {
	res.send(req.params.id)
});


app.get('/', function(req, res) {
	// res.render('index', {hola: 'tons q carepi'});

	// res.render('index.html');
	res.sendFile(__dirname + '/index.html');


});

app.listen(3000);
console.log('Listen on port 3000!');