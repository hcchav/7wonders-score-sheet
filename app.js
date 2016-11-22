var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression');

var app = express();
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));

app.use(morgan('dev'));

// All other routes should redirect to the index.html

app.route('/*').get(function (req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    console.log(__dirname);
    res.sendFile('index.html', { root: __dirname + '/client'});
});


// start server
app.listen(process.env.PORT || 3000);

console.log("listening on port 3000");