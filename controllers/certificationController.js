/**
 * Created by brillwill on 16/10/31.
 */
var util = require("../common/util");
var certificationRepository = require("../repositories/certificationRepository");

exports.create = function(req, res){
    var params = req.body;
    if (!certificationRepository.checkCreationParams(params)){
        res.json(util.wrapBody("Bad Parameter", "E"));
        return;
    }
    
    certificationRepository.create(params).then(function success(data){
        res.json(util.wrapBody(data));
    }).catch(function(error){
        res.json(util.wrapBody(error,"E"));
    });;
}

exports.getById = function(req, res) {
    var params = req.params;
    if (!params || !params.certificationId) {
        res.json(util.wrapBody("Bad Parameter", "E"));
        return;
    }

    certificationRepository.getById(params.certificationId).then(function(data){
        res.json(util.wrapBody(data));
    }).catch(function(error){
        res.json(util.wrapBody(error,"E"));
    });
}

exports.getAll = function(req, res){
    certificationRepository.getAll().then(function(data){
        res.json(util.wrapBody(data));
    }).catch(function(error){
        res.json(util.wrapBody(error,"E"));
    });
}

exports.delete = function(req, res) {
    var params = req.params;
    if (!params || !params.certificationId) {
        res.json(util.wrapBody("Bad Parameter", "E"));
        return;
    }

    certificationRepository.delete(params.certificationId).then(function(data){
        res.json(util.wrapBody(data));
    }).catch(function(error){
        res.json(util.wrapBody(error,"E"));
    });
}

exports.update = function(req, res) {
    var params = req.body;
    if (!params || !params.certificationId || !params.updateContent) {
        res.json(util.wrapBody("Bad Parameter", "E"));
        return;
    }

    certificationRepository.update(params.certificationId, params.updateContent).then(function(data){
        res.json(util.wrapBody(data));
    }).catch(function(error){
        res.json(util.wrapBody(error,"E"));
    });
}

