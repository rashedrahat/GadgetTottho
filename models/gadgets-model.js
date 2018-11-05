var db = require('./db');

module.exports={

	getAll: function(cat_name, brand_name, callback){
		var sql = "SELECT * FROM  gadget_info WHERE brand_id = (SELECT brand_id FROM brand_categorys WHERE brand_name='"+brand_name+"' AND category_name='"+cat_name+"');";
		db.getResult(sql, function(result){
			callback(result);
		});
	},
}