var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	req.session.un = "";
	res.redirect('/login');
});


module.exports = router;