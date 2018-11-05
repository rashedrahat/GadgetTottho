var db = require('./db');

module.exports={

	getAll: function(gad_cat_name, gad_id, callback){
				var sql = "SELECT * FROM price_comparison WHERE gadget_id="+gad_id;
				db.getResult(sql, function(result){
				callback(result);
				console.log(result);
			});
	},
}