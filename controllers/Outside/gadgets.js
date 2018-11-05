var express 		= require('express');
var gadgetsModel 	= require('../.././models/gadgets-model');
var router 			= express.Router();

router.get('/:cat.:brand', function(req, res){
	var cat_name = req.params.cat;
	var brand_name = req.params.brand;
	gadgetsModel.getAll(cat_name, brand_name, function(result){
		res.render('Outside/gadgets', {gadgets: result});
	});
});

module.exports = router;