var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(req, res){
  res.render('Outside/signUp');
});

router.post('/', function(req, res){
		
		var user={
		username: req.body.uname,
		name    : req.body.name,
		mail    : req.body.mail,
		phone   : req.body.number,
		gender  : req.body.gen,
		birth   : req.body.dob,
		password: req.body.pass
	}

	userModel.insert(user, function(status){
		
		if(status == true){
			res.redirect('/login');
		}else{
			res.send('Error in signing up!');
		}
		
	});
});

module.exports = router;