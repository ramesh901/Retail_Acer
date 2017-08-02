var mongodb = require('mongodb');
var uri = 'mongodb://localhost:27017/example';

mongodb.MongoClient.connect(uri,function(error,db) {
	if(error){
		console.log(error);
		process.exit(1);
	}

	doc = {
		title: 'jaws',
		director: 'steven',
		year: 1975,
		rating: 'PG',
		ratings: {
			critic: 80,
			audience: 97
		},
		screenplay: ['peter', 'carl']
	};

	db.collection('movies').insert(doc,function(error, result){
		if(error){
		console.log(error);
		process.exit(1);
	}

	query = {
		year: 1975, ratings: {audience: {'$gte': 90}}
	}

	db.collection('movies').find().toArray(function(error,docs){
		if(error){
		console.log(error);
		process.exit(1);
	}

	console.log("document found");
	docs.forEach(function(doc){
		console.log(JSON.stringify(doc));
	});
	process.exit(0);
	})
	})
})

