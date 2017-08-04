var express = require('express');
var router = express.Router();
var fs = require('fs');
var jwt = require('express-jwt');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var auth = jwt({
	secret: process.env.JWT_SECRET,
	userProperty: 'payload'
});
var controllers = {},
	controllers_path = process.cwd() + '/countries-api/controllers';

fs.readdirSync(controllers_path).forEach(function (file){
	if(file.indexOf('.js') != -1){
		controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
	}
})

var routesController = function (server){
	// Categories
	server.get("/category/get", controllers.category.getAll);
	server.get("/category/get/:id", controllers.category.getById);
	server.post("/category/create", controllers.category.post);
	server.put("/category/put/:id", controllers.category.put);
	server.put("/category/delete/:id", controllers.category.delete);

	// Countries
	server.get("/country/get", controllers.country.getAll);
	server.get("/country/get/:id", controllers.country.getById);
	server.post("/country/create", controllers.country.post);
	server.post("/country/upload/avatar", multipartMiddleware, controllers.country.uploadImage);
	server.search("/country/search/:countryName", controllers.country.search);
	server.put("/country/put/:id", controllers.country.put);
	server.put("/country/delete/:id", controllers.country.delete);

	// Information
	server.get("/info/get/country/:id", controllers.info.getCountryInfo);
	server.get("/info/get/subdivision/:id", controllers.info.getSubDivisionInfo);
	server.get("/info/get/municipality/:id", controllers.info.getMunicipalityInfo);
	server.post("/info/create", controllers.info.post);
	server.put("/info/put/:id", controllers.info.put);
	server.delete("/info/delete/:id", controllers.info.delete);

	// Sub Divisions
	server.get("/subdivision/get/country/:countryId", controllers.subDivision.getAll);
	server.get("/subdivision/get/:id", controllers.subDivision.getById);
	server.post("/subdivision/create", controllers.subDivision.post);
	server.post("/subdivision/upload/avatar", multipartMiddleware, controllers.subDivision.uploadImage);
	server.put("/subdivision/put/:id", controllers.subDivision.put);
	server.put("/subdivision/delete/:id", controllers.subDivision.delete);
	server.put("/subdivision/delete/all/:countryId", controllers.subDivision.deleteAll);

	// Municipalities
	server.get("/municipality/get/subdivision/:subId", controllers.municipality.getAll);
	server.get("/municipality/get/:id", controllers.municipality.getById);
	server.post("/municipality/create", controllers.municipality.post);
	server.put("/municipality/put/:id", controllers.municipality.put);
	server.put("/municipality/delete/:id", controllers.municipality.delete);
	server.put("/municipality/delete/all/:subId", controllers.municipality.deleteAll);


	// Users
	server.get("/user/get/:id", controllers.user.getInfo);
	server.post("/user/create", controllers.user.create);
	server.post("/auth/login", controllers.user.login);
	server.post("/user/upload/avatar", multipartMiddleware, controllers.user.uploadAvatar);
	server.put("/user/update/avatar/:id", controllers.user.putAvatar);

};

module.exports = routesController;
