var express 		= require('express');
var brandCatModel 	= require('../.././models/brand-cat-model');
var router 			= express.Router();

router.get('/:name', function(req, res){
	var gad_cat_name = req.params.name;
	brandCatModel.getAll(gad_cat_name, function(result){
		res.render('Outside/brands', {brandCats: result});
	});
});

module.exports = router;