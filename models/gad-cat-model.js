var db = require('./db');

module.exports={

	getAll: function(callback){
		var sql = "SELECT * FROM gadget_categorys";
		db.getResult(sql, function(result){
			callback(result);
		});
	},
}