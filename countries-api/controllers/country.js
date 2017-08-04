var models = require("../../models");
var service = require('../services/service');
var codes = require('../services/serverCodes.json');

exports.uploadImage = (req, res, next) => {
    let result = service.uploadImage(req.files.file.path);
    service.sendJSONresponse(res, codes.created, {"type": true, "data": result})
}

exports.post = (req, res, next) => {
    models.Country.create({
        name: req.body.name,
        alpha2Code: req.body.alpha2Code,
        alpha3Code: req.body.alpha3Code,
        isoCode: req.body.isoCode,
        linkToIsoCode: req.body.linkToIsoCode,
        independent: req.body.independent,
        flag: req.body.flag
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Create', 'the Country')});            
        }else {
            service.sendJSONresponse(res, codes.created, {"type": true, "message": service.successMessage('Created', 'Country')});
        }
    }).catch((err)=>{
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Create', 'the Country')});
    })
};

exports.put = (req, res, next) => {
    models.Country.update({
        name: req.body.name,
        alpha2Code: req.body.alpha2Code,
        alpha3Code: req.body.alpha3Code,
        isoCode: req.body.isoCode,
        linkToIsoCode: req.body.linkToIsoCode,
        independent: req.body.independent,
        flag: req.body.flag
    }, {
        where: {
            id: req.params.id
        }
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Update', 'the Country')});            
        }else {
            service.sendJSONresponse(res, codes.created, {"type": true, "message": service.successMessage('Updated', 'Country')});
        }
    }).catch((err)=>{
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Update', 'the Country')});
    })
};

exports.delete = (req, res, next) => {
    models.Country.update({
        status: 0
    }, {
        where: {
            id: req.params.id
        }
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Delete', 'the Country')});            
        }else {
            service.sendJSONresponse(res, codes.created, {"type": true, "message": service.successMessage('Deleted', 'Country')});
        }
    }).catch((err)=>{
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Delete', 'the Country')});
    })
};

exports.getAll = (req, res, next) => {
    models.Country.findAll({
        where: {
            status: 1
        }
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Get', 'the Countries')});            
        }else {
            service.sendJSONresponse(res, codes.ok, {"type":true, data: response});
        }
    }).catch((err)=>{
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Get', 'the Country')});
    })
}

exports.search = (req, res, next) => {
    var sequelize = service.getConnectionString();

    sequelize.query(`select * from country
                     where lower(name) = lower('${req.params.countryName}');`, {type: sequelize.QueryTypes.SELECT})
        .then(function(response){
            if(!response) {
                service.sendJSONresponse(res, 500, {"type": false, "message": "Error al obtener las citas", "data": response});
            }else {
                service.sendJSONresponse(res, 200, {"type": true, "data": response});
            }
        }).catch((err)=>{
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Search', 'the Country')});
        });
}

exports.getById = (req, res, next) => {
    models.Country.findOne({
        where: {
            id: req.params.id,
            status: 1
        }
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Get', 'the Country')});            
        }else {
            service.sendJSONresponse(res, codes.ok, {"type":true, data: response});
        }
    }).catch((err)=>{
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Get', 'the Country')});
    })
}