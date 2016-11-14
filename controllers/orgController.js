/**
 * Created by brillwill on 16/10/31.
 */
var util = require("../common/util");
var orgRepository = require("../repositories/orgRepository");

exports.createOrg = function (req, res) {
    var params = req.body;
    if (!orgRepository.checkCreationParams(params)) {
        res.json(util.wrapBody("Bad Parameter", "E"));
        return;
    }

    orgRepository.createOrg(params).then(function success(data){
        res.json(util.wrapBody(data));
    }, function fail(error) {
        res.json(util.wrapBody(error, "E"));
    });
}

exports.updateOrg = function(req, res) {
    var params = req.body;
    if(!params || !params.orgId || !params.updateContent){
        res.json(util.wrapBody("Bad Parameter", "E"));
        return;
    }

    orgRepository.updateOrg(params.orgId, params.updateContent).then(function(data){
        res.json(util.wrapBody(data));
    }).catch(function(error){
        res.json(util.wrapBody(error, "E"));
    });
}

exports.getOrgById = function(req, res){
    var params = req.params;
    if (!params || !params.orgId) {
        res.json(util.wrapBody("Bad Parameter", "E"));
        return;
    }

    orgRepository.getOrgById(params.orgId).then(function success(org){
        res.json(util.wrapBody(org));
    }, function fail(error){
        res.json(util.wrapBody(error, "E"));
    });
}

exports.getAllOrgs = function(req, res){
    orgRepository.getAllOrgs().then(function success(orgs){
        res.json(util.wrapBody(orgs));
    }, function fail(error){
        res.json(util.wrapBody(error, "E"));
    });
}

exports.checkName = function(req, res){
    var params = req.params;
    if (!params || !params.name) {
        res.json(util.wrapBody("Bad Parameter", "E"));
        return;
    }

    orgRepository.checkName(params.name).then(function success(data) {
       if (!!data){
           res.json(util.wrapBody({result:1}));
       }
       else {
            res.json(util.wrapBody({result:0}));
       }
    }, function fail(error){
            res.json(util.wrapBody(error, "E"));
    });
}

exports.orgsOfUser = function (req, res) {
    var params = req.params;
    if (!params || !params.userId) {
        res.json(util.wrapBody("Bad Parameter", "E"));
        return;
    }

    orgRepository.orgsOfUser(params.userId).then(function success(data) {
        res.json(util.wrapBody(data));
    }, function fail(error) {
        res.json(util.wrapBody(error, "E"));
    });
}



// -------- Org Stamp ----------

exports.createOrgStamp = function (req, res) {
    var params = req.body;
    if (!params || !params.name || !params.image || !params.org) {
        res.json(util.wrapBody("Bad Parameter", "E"));
        return;
    }

    orgRepository.createOrgStamp(params.org, params.name, params.image).then(function success(data){
        res.json(util.wrapBody(data));
    }, function fail(error){
        res.json(util.wrapBody(error, "E"));
    });
}

exports.updateStamp = function(req, res){
    var params = req.body;
    if (!params || !params.stampId || !params.updateContent){
        res.json(util.wrapBody("Bad Parameter", "E"));
        return;
    }

    orgRepository.updateStamp(params.stampId, params.updateContent).then(function(data){
        res.json(util.wrapBody(data));
    }).catch(function(error){
        res.json(util.wrapBody(error, "E"));
    });
}

exports.getStampById = function (req, res) {
    var params = req.params;
    if (!params || !params.stampId) {
        res.json(util.wrapBody("Bad Parameter", "E"));
        return;
    }

    orgRepository.getStampById(params.stampId).then(function success(data) {
        res.json(util.wrapBody(data));
    }, function fail(error) {
        res.json(util.wrapBody(error, "E"));
    });
}

exports.getAllStamps = function(req, res){
    orgRepository.getAllStamps().then(function success(stamps) {
        res.json(util.wrapBody(stamps));
    }, function fail(error){
        res.json(util.wrapBody(error,"E"));
    });
}