var db = require('./db');

module.exports={

	getAll: function(gad_cat_name, callback){
		var sql = "SELECT * FROM brand_categorys WHERE category_name='"+gad_cat_name+"'";
		db.getResult(sql, function(result){
			callback(result);
		});
	},
}