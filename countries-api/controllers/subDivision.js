
var models = require("../../models");
var service = require('../services/service');
var codes = require('../services/serverCodes.json');

exports.uploadImage = (req, res, next) => {
    let result = service.uploadImage(req.files.file.path);
    service.sendJSONresponse(res, codes.created, {"type": true, "data": result})
}

exports.post = (req, res, next) => {
    models.SubDivision.create({
        name: req.body.name,
        code: req.body.code,
        alpha2Code: req.body.alpha2Code,
        isoCode: req.body.isoCode,
        linkToIsoCode: req.body.linkToIsoCode,
        flag: req.body.flag,
        CategoryId: req.body.CategoryId,
        CountryId: req.body.CountryId        
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Create', 'the Sub Division')});            
        }else {
            service.sendJSONresponse(res, codes.created, {"type": true, "message": service.successMessage('Created', 'Sub Division')});
        }
    }).catch((err)=>{
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Create', 'the Sub Division')});            
    })
};

exports.put = (req, res, next) => {
    models.SubDivision.update({
        name: req.body.name,
        code: req.body.code,
        alpha2Code: req.body.alpha2Code,
        isoCode: req.body.isoCode,
        linkToIsoCode: req.body.linkToIsoCode,
        flag: req.body.flag,
        CategoryId: req.body.CategoryId,
        CountryId: req.body.CountryId        
    }, {
        where:{
            id: req.params.id
        }
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Update', 'the Sub Division')});            
        }else {
            service.sendJSONresponse(res, codes.ok, {"type": true, "message": service.successMessage('Updated', 'Sub Division')});
        }
    }).catch((err)=>{
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Update', 'the Sub Division')});            
    })
};

exports.delete = (req, res, next) => {
    models.SubDivision.update({
        status: 0       
    }, {
        where:{
            id: req.params.id
        }
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Delete', 'the Sub Division')});            
        }else {
            service.sendJSONresponse(res, codes.ok, {"type": true, "message": service.successMessage('Deleted', 'Sub Division')});
        }
    }).catch((err)=>{
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Delete', 'the Sub Division')});            
    })
};

exports.deleteAll = (req, res, next) => {
    var sequelize = service.getConnectionString();

    sequelize.query(`Update subdivision
                     set status = 0
                     where CountryId = ${req.params.countryId}`).spread((results, metadata) => {
                        service.sendJSONresponse(res, codes.ok, {"type": true, "results":results, "metadata":metadata});             
                     })
};

exports.getAll = (req, res, next) => {
    models.SubDivision.findAll({
        where:{
            CountryId: req.params.countryId,
            status: 1
        },
        include: [
            {
                model: models.Country,
                attributes: ['id','name']
            },
            {
                modle: models.Category,
                attributes: ['id','name']
            }
        ]
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Get', 'the Sub Division')});            
        }else {
            service.sendJSONresponse(res, codes.ok, {"type": true, "data": response});
        }
    }).catch((err)=>{
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Get', 'the Sub Division')});            
    })
};

exports.getById = (req, res, next) => {
    models.SubDivision.findOne({
        where:{
            id: req.params.id,
            status: 1
        },
        include: [
            {
                model: models.Country,
                attributes: ['id','name']
            },
            {
                modle: models.Category,
                attributes: ['id','name']
            }
        ]
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Get', 'the Sub Division')});            
        }else {
            service.sendJSONresponse(res, codes.ok, {"type": true, "data": response});
        }
    }).catch((err)=>{
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Get', 'the Sub Division')});            
    })
};