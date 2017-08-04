
var models = require("../../models");
var service = require('../services/service');
var codes = require('../services/serverCodes.json');

exports.post = (req, res, next) => {
    models.Info.create({
        description: req.body.description,
        etymology: req.body.etymology,
        history: req.boy.history,
        geography: req.body.geography,
        demographics: req.body.demographics,
        government: req.body.government,
        economy: req.body.economy,
        infrastructure: req.body.infrastructure,
        education: req.body.education,
        culture: req.body.culture,
        mortality: req.body.mortality,
        CountryId: req.body.CountryId,
        MunicipalityId: req.body.MunicipalityId,
        SubDivisionId: req.body.SubDivisionId
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Create', 'the Information')});            
        }else {
            service.sendJSONresponse(res, codes.created, {"type": true, "message": service.successMessage('Created', 'Information')});
        }
    })
};

exports.put = (req, res, next) => {
    models.Info.update({
        description: req.body.description,
        etymology: req.body.etymology,
        history: req.boy.history,
        geography: req.body.geography,
        demographics: req.body.demographics,
        government: req.body.government,
        economy: req.body.economy,
        infrastructure: req.body.infrastructure,
        education: req.body.education,
        culture: req.body.culture,
        mortality: req.body.mortality,
        CountryId: req.body.CountryId,
        MunicipalityId: req.body.MunicipalityId,
        SubDivisionId: req.body.SubDivisionId
    },{
        where: {
            id: req.params.id
        }
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Update', 'the Information')});            
        }else {
            service.sendJSONresponse(res, codes.created, {"type": true, "message": service.successMessage('Updated', 'Information')});
        }
    })
};

exports.delete = (req, res, next) => {
    models.Info.destroy({
        where: {
            id: req.params.id
        }
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('Delete', 'the Information')});            
        }else {
            service.sendJSONresponse(res, codes.created, {"type": true, "message": service.successMessage('Deleted', 'Information')});
        }
    })
};

exports.getCountryInfo = (req, res, next) => {
    models.Info.findOne({
        where: {
            CountryId: req.params.id            
        },
        include: [
            {
                model: models.Country,
                attributes: ['id','name']
            }
        ]
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('GET', 'the Information')});            
        }else {
            service.sendJSONresponse(res, codes.ok, {"type":true, data: response});
        }
    })
}

exports.getSubDivisionInfo = (req, res, next) => {
    models.Info.findOne({
        where: {
            SubDivisionId: req.params.id            
        },
        include: [
            {
                model: models.SubDivision,
                attributes: ['id','name']
            }
        ]
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('GET', 'the Information')});            
        }else {
            service.sendJSONresponse(res, codes.ok, {"type":true, data: response});
        }
    })
}

exports.getMunicipalityInfo = (req, res, next) => {
    models.Info.findOne({
        where: {
            MunicipalityId: req.params.id            
        },
        include: [
            {
                model: models.Municipality,
                attributes: ['id','name']
            }
        ]
    }).then((response)=>{
        if(!response){
            service.sendJSONresponse(res,codes.serverError, {"type": false, "message": service.errorMessage('GET', 'the Information')});            
        }else {
            service.sendJSONresponse(res, codes.ok, {"type":true, data: response});
        }
    })
}