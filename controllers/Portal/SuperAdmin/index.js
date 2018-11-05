var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('*', function(req, res, next){
	
	if(req.session.un != ""){
		next();
	}else{
		res.redirect('/login');
	}
});

router.get('/', function(req, res){
  res.render('Portal/SuperAdmin/index', {sessUname: req.session.un});
});

router.get('/profileinfo/:uname', function(req, res){
  var userName = req.params.uname;
  userModel.get(userName, function(result){
			res.render('Portal/SuperAdmin/ProfileInfo/index', {user: result});
		});
});

router.post('/profileinfo/:uname', function(req, res){
	var user = {
		username: req.body.uname,
		name    : req.body.name,
		mail    : req.body.mail,
		phone   : req.body.number,
		gender  : req.body.gen,
		birth   : req.body.dob,
		password: req.body.pass
	}
  	
  	userModel.update(user, function(status){

			if(status){
				
				res.send('Updated successfully :)');
			}else{
				res.send('Error in updating!');
			}
			
		});
});

router.get('/createadmin', function(req, res){
  res.render('Portal/SuperAdmin/ManageAdmins/createAdmin');
});

router.post('/createadmin', function(req, res){
  var user={
		username: req.body.uname,
		name    : req.body.name,
		mail    : req.body.mail,
		phone   : req.body.number,
		gender  : req.body.gen,
		birth   : req.body.dob,
		password: req.body.pass
	}

	userModel.create(user, function(status){
		
		if(status == true){
			res.redirect('/homeSA/createadmin');
		}else{
			res.send('Error in signing up!');
		}
		
	});
});

router.get('/existadmins', function(req, res){
  res.render('Portal/SuperAdmin/ManageAdmins/existAdmins');
});

router.post('/existadmins', function(req, res){
  res.redirect('/existadmins');
});

router.get('/requsers', function(req, res){
	userModel.getAll(function(result){
		res.render('Portal/SuperAdmin/ManageUsers/reqUsers', {reqUsers: result});
});
});


router.get('/regusers', function(req, res){
  res.render('Portal/SuperAdmin/ManageUsers/regUsers');
});

module.exports = router;