var express 			= require('express');
//var gadgetInfoModel 	= require('../.././models/gadget-info-model');
var reviewsInfoModel 	= require('../.././models/review-info-model');
var router 				= express.Router();


router.get('/:gad_cat_name.:gad_id', function(req, res){
	//var gad_cat_name = req.params.gad_cat_name;
	//var gad_id = req.params.gad_id;
	//pricesInfoModel.getAll(gad_cat_name, gad_id, function(result){
		
		//result.gadget_cat_name = req.params.gad_cat_name;
		//result.gadget_id = req.params.gad_id;
		res.render('Outside/gadgetInfoReviews');
	})
//})

module.exports = router;