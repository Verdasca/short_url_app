var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('urllist', ['urllist']);
var bodyParser = require('body-parser');
var open = require("open");

var PORT = process.env.PORT || 80;


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


//Open the original url when using the short url by id
app.get('/s/:id', function (req, res){
	var id = req.params.id;
	console.log(id);
	db.urllist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
	    res.json(doc);
	    console.log("Open original url");
	    //console.log(doc.original);
	    open(doc.original, function (err) {
		  if ( err ) throw err;    
		});
	});
});

//Save the url in the DB 
app.post('/urllist', function(req, res){
	console.log(req.body);
	//Insert the new url in the DB to obtain the id first
	//Instead of creating a random value to the short url, reuse the id create in the DB
	db.urllist.insert(req.body, function(err, doc){
		//console.log("ID: " +doc._id);
		var _id = doc._id;									//Id
		var short = "http://localhost:80/s/" + _id;			//Short url version host + id
		//console.log("Short: " + short);
		//Update the url short version according to the id 
		db.urllist.findAndModify({
		    query: {_id: _id},
		    update: {$set: {short: short}},
		    new: true}, function (err, docUpdate) {
		    	console.log(docUpdate);
		      	res.json(docUpdate);
		    }
		);
	})
});

//Get url list of the DB
app.get('/urllist', function (req, res){
	//console.log("GET request");
	db.urllist.find(function(err, docs){
		//console.log(docs);
		res.json(docs);
	})
});

app.listen(PORT, function() {
	console.log('Server running on ' + PORT);
});