//import all necessary components
//Express provides tools to help us make a minimum web application
var express = require('express');
//create the app itself from Express
var router = require("./routes/router.js");
//adding in the router
var app = express();
//initalizing the app

app.get('/', router.launch);

var port = Number(process.env.PORT || 5000);
app.listen(port, function(){
	console.log("Listening on " + port);
});