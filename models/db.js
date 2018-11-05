var mysql = require('mysql');

var confiq = {
		host	: 'localhost',
		user 	: 'root',
		password: '',
		database: 'gadto'
	};

var getConnection = function(){
	var connection = mysql.createConnection(confiq);
	connection.connect(function(err) {
		  if (err) {
		    console.error('error connecting: ' + err.stack);
		    return;
		  }
		  console.log('connected as id ' + connection.threadId);
	});
	return connection;
}
	

module.exports= {

	getResult: function(sql, callback) {
		var connection = getConnection();
		connection.query(sql, function (error, results) {
		  if(error){
		  	callback([]);
		  }else{
			callback(results);
		  }
		});

		connection.end(function(error){
		  	console.log('connection ending...');
		});
	},

	execute: function(sql, callback) {
		var connection = getConnection();
		connection.query(sql, function (error, results) {
		  if(error){
		  	console.log(error.stack);
		  	callback(false);
		  }else{
		  	console.log(results);
			callback(true);
		  }
		});

		connection.end(function(error){
		  	console.log('connection ending...');
		});
	}
}
