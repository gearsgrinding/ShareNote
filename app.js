//import all necessary components
//Express provides tools to help us make a minimum web application
var express = require('express');
//create the app itself from Express
var router = require("./routes/router.js");
//adding in the router
var app = express();
//initalizing the app
var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var morgan = require('morgan');

var methodOverride= require('method-override');

mongoose.connect('mongodb://localhost/test1', function(err){
	//if there's an error, print out the error message
	if (err) {
		console.log(err);
	}
	//if you successfully connect to the database, print on the cons
    else {
    	console.log('DB success');
    }
});


//tell the application to look in the /public directory for extra files
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());

app.get('/', router.launch);

var port = Number(process.env.PORT || 5000);
app.listen(port, function(){
	console.log("Listening on " + port);
});