var mongoose = require("mongoose");

module.exports = {
	initialise: function(environment){
		var connectionString = 'mongodb://admin:admin123@ds161620.mlab.com:61620/food-posts';
		mongoose.connect(connectionString);
		var database = mongoose.connection;

		database.on('error', function(err){
			console.log('Error connection to database ' + err);
		});

		database.once('open', function(){
			console.log('Successfully connected to database with connection string ' + connectionString);
		});
	}
}