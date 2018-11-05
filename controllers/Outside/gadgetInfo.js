var express 			= require('express');
var gadgetInfoModel 	= require('../.././models/gadget-info-model');
//var pricesInfoModel 	= require('../.././models/prices-info-model');
var router 				= express.Router();

router.get('/:gad_cat_name.:gad_id', function(req, res){
	var gad_cat_name = req.params.gad_cat_name;
	var gad_id = req.params.gad_id;
	gadgetInfoModel.get(gad_cat_name, gad_id, function(result){
		
		//result.gadget_cat_name = req.params.gad_cat_name;
		res.render('Outside/gadgetInfo', {gadgetInfo: result});
	})
})
/*
router.get('/:gad_cat_name.:gad_id', function(req, res, next){
	var gad_cat_name = req.params.gad_cat_name;
	var gad_id = req.params.gad_id;
	gadgetInfoModel.get(gad_cat_name, gad_id, function(result){
		
		//result.gadget_cat_name = req.params.gad_cat_name;
		res.render('Outside/gadgetInfo', {gadgetInfo: result});
		console.log(result);
		next();
	})
	}, function(req, res){
		var gad_id = req.params.gad_id;
		pricesInfoModel.getAll(gad_id, function(result){
		res.render('Outside/gadgetInfo', {prices: result});
		console.log(result);
	})
})
*/

module.exports = router;

/*
router.get('/:gad_cat_name.:gad_id', function(req, res, next){
	var gad_cat_name = req.params.gad_cat_name;
	var gad_id = req.params.gad_id;
	gadgetInfoModel.get(gad_cat_name, gad_id, function(result){
		
		//result.gadget_cat_name = req.params.gad_cat_name;
		res.render('Outside/gadgetInfo', {gadgetInfo: result});
		console.log(result);
		next();
	})
	}, function(req, res){
		var gad_id = req.params.gad_id;
		pricesInfoModel.getAll(gad_id, function(result){
		res.render('Outside/gadgetInfo', {prices: result});
		console.log(result);
	})
})
*/