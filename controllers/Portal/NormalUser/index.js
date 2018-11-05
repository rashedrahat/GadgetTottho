var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('Portal/NormalUser/index');
});

router.get('/profileinfo', function(req, res){
  res.render('Portal/NormalUser/ProfileInfo/index');
});

router.post('/profileinfo', function(req, res){
  res.redirect('/profileinfo');
});

module.exports = router;