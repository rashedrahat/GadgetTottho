var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(req, res){
  res.render('Outside/logIn');
});

router.post('/', function(req, res){
  var user = {
		username : req.body.uname,
		password : req.body.pass
	};

	userModel.validate(user, function(status){
		if(status){
			req.session.un = req.body.uname;
			res.cookie('username', req.body.uname);
			res.cookie('password', req.body.pass);
			res.redirect('/homeSA');
		}else{
			//res.send('Invalid username or password!');
			res.redirect('/login');
		}
	});
});

module.exports = router;