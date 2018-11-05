var db = require('./db');


module.exports={

	get: function(userName, callback){
		var sql = "select * from user_info where user_name='"+userName+"'";
		db.getResult(sql, function(result){
			//console.log(result);
			callback(result[0]);
		});
	},

	getAll: function(callback){
		var sql = "SELECT * FROM user_info WHERE u_type_name='NU' AND status='Pending'";
		db.getResult(sql, function(result){
			callback(result);
		});
	},
		
	insert: function(user, callback){
		var sql = "INSERT INTO user_info values('"+user.username+"','"+user.name+"','"+user.mail+"','"+user.phone+"','"+user.gender+"','"+user.birth+"','"+user.password+"','NU','Pending')";
		db.execute(sql, function(success){
			callback(success);
		});
	},

	create: function(user, callback){
		var sql = "INSERT INTO user_info values('"+user.username+"','"+user.name+"','"+user.mail+"','"+user.phone+"','"+user.gender+"','"+user.birth+"','"+user.password+"','NA','Pending')";
		db.execute(sql, function(success){
			callback(success);
		});
	},

	validate: function(user, callback){
		var sql = "select * from user_info where user_name='"+user.username+"' and password='"+user.password+"'";
		db.getResult(sql, function(result){
			
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	update: function(user, callback){
		var sql = "UPDATE user_info set name='"+user.name+"', email='"+user.mail+"', phone='"+user.phone+"', dob='"+user.birth+"', password='"+user.password+"' where user_name='"+user.username+"'";
	
		db.execute(sql, function(status){
			callback(status);
		});
	},
	
	
}