// app.js

var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";


// STEP 1 //
/*
mongo.connect(url, function(err, db){
	var collection = db.collection('restaurants');
	collection.find().toArray(function(err, docs){
		console.log(docs);
	});
});
*/


// STEP 2 //
/*
mongo.connect(url, function(err, db){
	var collection = db.collection('restaurants');
	var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
	if(allChoice == "all"){
		collection.find().toArray(function(err, docs){
    		console.log(docs);
    	});
	} else {
		console.log("Awe, you don't want to see the restaurants?");
	}
});
*/


// TASK 1 //
/*
mongo.connect(url, function(err, db){
	var collection = db.collection('restaurants');
	var nameChoice = prompt("Type 'name' and press enter to display a restaurant: ");
		collection.find({"name":nameChoice}).toArray(function(err, docs){
    		console.log(docs);
    	});
});
*/


// TASK 2: //
/*
mongo.connect(url, function(err, db){
	var collection = db.collection('restaurants');
	var insertChoice = prompt("enter a new restaurant: ");
	var insertStreet = prompt("enter street address: ");
	var insertZip = prompt("enter zip code: ");
	var yelpChoice = prompt("enter the yelp link: ");
		collection.insert({
			"name":insertChoice,
			"street":insertStreet,
			"zipcode": insertZip,
			"yelp":yelpChoice,
		});
});
*/


// HOMEWORK 1 //

//connect to data base restaurants 
mongo.connect(url, function(err, db){
	var collection = db.collection('restaurants');
	// create prompt to enter a restaurtant name
	var nameChoice = prompt("Type 'name' and press enter to display a restaurant: ");
	// if name matches name in database, console log resuls
	if (collection.find({"name":nameChoice}).toArray(function(err, docs) {
    		console.log(docs);
    	// prompt to update name
    	var editName = prompt("Edit restaurant name: ");
    	// edit restaurant name
    	collection.update({ $set: { name:editName }});
    }
    /*else {
    	collection.find({"name": false}) {
    		console.log("Sorry, no restaurant in our data base with that name.");
    	}
	}
	*/
});


/*
// HOMEWORK 2 //
// connect to data base destaurants
mongo.connect(url, function(err, db){
	// set var for db
	var collection = db.collection('restaurants');
	// prompt to delete restaurant
	var deleteChoice = prompt("To delete restaurant, type 'name' and press enter to delete: ");
	// action to delete named restaurant
	collection.remove({ name: deleteChoice });
	// console log that it worked
		console.log("Restaurant removed");
});
*/