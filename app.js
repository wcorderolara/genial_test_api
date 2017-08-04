require('dotenv').load();

var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

var models = require('./models');
var cors = require('cors');
var routesApi = require('./countries-api/api/routes');

require('./config/passport');

var app = express();

app.use(bodyParser.json({ type: 'application/json'}));  
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(cors());
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(passport.initialize());
routesApi(app);
models.sequelize.sync();

var port = process.env.PORT || 3005;

app.listen(port, function(err){
	if(err){
		console.error(err);
	}else{
		console.log('%s Country Api is Up! %s');
	}
});

module.exports = app;