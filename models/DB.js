//create a mongoose object to manipulate when calling the database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var File=new Schema({
		name : String
});

var statusDB = {

	}

module.exports=statusDB;