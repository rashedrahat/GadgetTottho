//DECLARATION
var express 				= require('express');
var bodyParser 				= require('body-parser');
var expressSession 			= require('express-session');
var cookieParser 			= require('cookie-parser');
var signup 					= require('./controllers/Outside/signUp');
var login 					= require('./controllers/Outside/logIn');
var logout 					= require('./controllers/Outside/logOut');
var brands 					= require('./controllers/Outside/brands');
var gadgets 				= require('./controllers/Outside/gadgets');
var gadgetInfo 				= require('./controllers/Outside/gadgetInfo');
var gadgetInfoPrices 		= require('./controllers/Outside/gadgetInfoPrices');
var gadgetInfoReviews 		= require('./controllers/Outside/gadgetInfoReviews');
var homeNU 		    		= require('./controllers/Portal/NormalUser/index');
var homeSA 		    		= require('./controllers/Portal/SuperAdmin/index');
var homeNA 		    		= require('./controllers/Portal/NormalAdmin/index');
var gadCatModel 			= require('./models/gad-cat-model');
var app 					= express();

//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({secret: 'secret', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use(express.static('assets'));
app.use('CSS', express.static('assets'));
app.use('Images', express.static('assets'));
app.use('jQuery-UI', express.static('assets'));

//ROUTING
app.use('/signup', signup);
app.use('/login', login);
app.use('/logout', logout);
app.use('/brands', brands);
app.use('/gadgets', gadgets);
app.use('/gadgetinfo', gadgetInfo);
app.use('/gadgetinfoprices', gadgetInfoPrices);
app.use('/gadgetinforeviews', gadgetInfoReviews);
app.use('/homeNU', homeNU);
app.use('/homeSA', homeSA);
app.use('/homeNA', homeNA);


app.get('/', function(req, res){
	gadCatModel.getAll(function(result){
		res.render('index', {gadgetCats: result});
	});
});


//SERVER STARTUP
app.listen(2018, function(){
	console.log("Server startead at 2018...");
});