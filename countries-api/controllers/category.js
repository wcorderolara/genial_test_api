
var models = require("../../models");
var service = require('../services/service');
var codes = require('../services/serverCodes.json');


exports.post = function (req, res, next) {
    models.Category.create({
        name: req.body.name
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Create', 'the Category')});            
        }else {
            service.sendJSONresponse(res, codes.created, {"type": true, "message": service.successMessage('Created', 'Category')});
        }
    }).catch ((err) => {
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Create', 'the Category')});
    })
};

exports.put = (req, res, next) => {
    models.Category.update({
        name: req.body.name
    },{
        where: {
            id: req.params.id
        }
    }).then((response)=>{
        if(!response) {
            service.sendJSONresponse(res,codes.notFound, {"type":false, "message": service.errorMessage('Update', 'The Category')});
        }else {
            service.sendJSONresponse(res, codes.ok, {"type":true, "message": service.successMessage('Updated','Category')});
        }
    }).catch ((err) => {
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Update', 'the Category')});
    })
};

exports.delete = (req, res, next) => {
    models.Category.update({
        status: 0
    }, {
        where: {
            id: req.params.id
        }
    }).then((response)=>{
        if(!response) {
            service.sendJSONresponse(res,codes.serverError, {"type":false, "message": service.errorMessage('Delete', 'The Category')});
        }else {
            service.sendJSONresponse(res, codes.ok, {"type":true, "message": service.successMessage('Deleted','Category')});
        }
    }).catch ((err) => {
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Delete', 'the Category')});
    })
};

exports.getAll = (req, res, next) => {
    models.Category.findAll({
        where: {
            status: 1
        }
    }).then((response)=>{
        if(!response) {
            service.sendJSONresponse(res,codes.serverError, {"type":false, "message": service.errorMessage('Get', 'The Categories')});
        }else {
            service.sendJSONresponse(res, codes.ok, {"type":true, data: response});
        }
    }).catch ((err) => {
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Create', 'the Category')});
    })
};

exports.getById = (req, res, next) => {
    models.Category.findOne({
        where: {
            id: req.params.id,
            status: 1
        }
    }).then((response)=>{
        if(!response) {
            service.sendJSONresponse(res,codes.notFound, {"type":false, "message": service.errorMessage('Get', 'The Category')});
        }else {
            service.sendJSONresponse(res, codes.ok, {"type":true, data: response});
        }
    }).catch ((err) => {
        service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Create', 'the Category')});
    })
};