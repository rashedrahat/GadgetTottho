var db = require('./db');

module.exports={

	get: function(gad_cat_name, gad_id, callback){
		//var sql = "SELECT * FROM gadget_info WHERE category_name='"+cat_name+"' AND gadget_id = '"+gad_id+"'";
			if (gad_cat_name == "Computer") {
				var sql = "SELECT * FROM computer_specs WHERE gadget_id="+gad_id;
				//var sql = "SELECT * FROM `specs_info_computer` WHERE specs_id=5";
				db.getResult(sql, function(result){
				callback(result[0]);
			});
		}
		else if (gad_cat_name == "Mobile") {
			var sql = "SELECT * FROM mobile_specs WHERE gadget_id = '"+gad_id+"'";
			db.getResult(sql, function(result){
			callback(result[0]);
		});
		}
		else {
			var sql = "SELECT * FROM watch_specs WHERE gadget_id = '"+gad_id+"'";
			db.getResult(sql, function(result){
			callback(result[0]);
		});
		}
	},
}