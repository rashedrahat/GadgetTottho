var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('Portal/NormalAdmin/index');
});

router.get('/profileinfo', function(req, res){
  res.render('Portal/NormalAdmin/ProfileInfo/index');
});

router.post('/profileinfo', function(req, res){
  res.redirect('/profileinfo');
});

router.get('/requsers', function(req, res){
  res.render('Portal/NormalAdmin/ManageUsers/reqUsers');
});

router.get('/regusers', function(req, res){
  res.render('Portal/NormalAdmin/ManageUsers/regUsers');
});

module.exports = router;