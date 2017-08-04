var models = require("../../models");
var service = require('../services/service');
var codes = require('../services/serverCodes.json');

exports.post = (req, res, next) => {
    models.Municipality.create({
        name: req.body.name,
        population: req.body.population,
        SubDivisionId: req.SubDivisionId
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Create', 'the Municipality')});            
        }else {
            service.sendJSONresponse(res, codes.created, {"type": true, "message": service.successMessage('Created', 'Municipality')});
        }
    }).catch((err)=>{
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Create', 'the Municipality')});
    })
};

exports.put = (req, res, next) => {
    models.Municipality.update({
        name: req.body.name,
        population: req.body.population,
        SubDivisionId: req.SubDivisionId
    }, {
        where: {
            id: req.params.id
        }
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Update', 'the Municipality')});            
        }else {
            service.sendJSONresponse(res, codes.created, {"type": true, "message": service.successMessage('Updated', 'Municipality')});
        }
    }).catch((err)=>{
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Update', 'the Municipality')});
    })
};

exports.delete = (req, res, next) => {
    models.Municipality.update({
        status: 0
    }, {
        where: {
            id: req.params.id
        }
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Delete', 'the Municipality')});            
        }else {
            service.sendJSONresponse(res, codes.created, {"type": true, "message": service.successMessage('Deleted', 'Municipality')});
        }
    }).catch((err)=>{
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Delete', 'the Municipality')});
    })
};

exports.deleteAll = (req, res, next) => {
    var sequelize = service.getConnectionString();

    sequelize.query(`Update municipality
                     set status = 0
                     where SubDivision = ${req.params.subId}`).spread((results, metadata) => {
                        service.sendJSONresponse(res, codes.ok, {"type": true, "results":results, "metadata":metadata});             
                     })
};

exports.getAll = (req, res, next) => {
    models.Municipality.findAll({
        where: {
            SubDivisionId: req.params.subId,
            status: 1
        },
        include: [
            {
                model: models.SubDivision,
                attributes: ['id','name']
            }
        ]
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Get', 'the Municipality')});            
        }else {
            service.sendJSONresponse(res, codes.created, {"type": true, "data": response});
        }
    }).catch((err)=>{
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Get', 'the Municipality')});
    })
};

exports.getById = (req, res, next) => {
    models.Municipality.findOne({
        where: {
            id: req.params.id,
            status: 1
        },
        include: [
            {
                model: models.SubDivision,
                attributes: ['id','name']
            }
        ]
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Get', 'the Municipality')});            
        }else {
            service.sendJSONresponse(res, codes.created, {"type": true, "data": response});
        }
    }).catch((err)=>{
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Get', 'the Municipality')});
    })
};