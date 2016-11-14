/**
 * Created by brillwill on 16/10/31.
 */
var userRepository = require("../repositories/userRepository");
var util = require("../common/util");

exports.addUser = function (req, res) {
    var params = req.body;
    if (!params || !params.name || !params.username || !params.password || !params.uid) {
        res.json(util.wrapBody("Bad parameter", "E"));
        return;
    }

    userRepository.addUser(params).then(function ok(data) {
        res.json(util.wrapBody(data));
    }, function fail(error) {
        res.json(util.wrapBody(error, "E"));
    });
};

exports.update = function(req, res){
    var params = req.body;
    if(!params || !params.userId || !params.updateContent){
        res.json(util.wrapBody("Bad Parameter", "E"));
        return;
    }

    userRepository.update(params.userId, params.updateContent).then(function(data){
        res.json(util.wrapBody(data));
    }).catch(function(error){
        res.json(util.wrapBody(error, "E"));
    });
}

exports.getById = function (req, res) {
    var params = req.params;
    if (!params || !params.userId){
        res.json(util.wrapBody("Bad Parameter", "E"));
        return;
    }

    userRepository.getById(params.userId).then(function ok(data) {
        res.json(util.wrapBody(data));
    }, function fail(error) {
        res.json(util.wrapBody(error, "E"));
    });
}

exports.getAll = function(req, res) {
    userRepository.getAll().then(function success(data){
        res.json(util.wrapBody(data));
    }, function fail(error) {
        res.json(util.wrapBody(error, "E"));
    });
}

exports.verify = function(req, res){
    var params = req.body;
    if (!params || !params.username || !params.password){
        res.json(util.wrapBody("Bad Parameter", "E"));
        return;
    }

    userRepository.verify(params.username, params.password).then(function success(data){
        if (!!data){
            res.json(util.wrapBody({result:1, user:data}));
        }
        else {
            res.json(util.wrapBody({result:0}));
        }
    }, function fail(error){
        res.json(util.wrapBody(error, "E"));
    });
}