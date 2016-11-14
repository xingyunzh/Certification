/**
 * Created by brillwill on 16/10/31.
 */
var Org = require("../models/org");
var User = require("../models/user");
var Stamp = require("../models/stamp");
var q = require("q");
var ObjectId = require("mongoose").Schema.Types.ObjectId;
var _ = require("lodash");

exports.createOrg = function (info) {
    return new Org(info).save();
}

exports.updateOrg = function(orgId, updateContent){
    return Org.findByIdAndUpdate(orgId, updateContent).exec();
}

exports.checkName = function (name) {
    return Org.findOne({name:name}).populate("admin focals stamps").exec();
}

exports.orgsOfUser = function (userID) {
    var deferred = q.defer();
    Org.find({admin:new ObjectId(userID)}).populate("admin focals stamps").then(function ok(orgs) {
        if (orgs.length > 0){
            deferred.resolve(orgs);
        }
        else {
            Org.find(function(){
                return this.focals.indexOf(ObjectId(userID)) > 0;
            }).populate("admin focals stamps").exec().then(function ok(orgsAsFocal){
                deferred.resolve(orgsAsFocal);
            }, function (error) {
                deferred.reject(error);
            })
        }

    }, function fail(error) {
        deferred.reject(error);
    });

    return deferred.promise;
}

exports.getOrgById = function(orgId){
    return Org.findOneById(orgId).populate("admin focals stamps").exec();
}

exports.save = function (org) {
    return org.save();
}

exports.deleteOrg = function(orgId){
    return Org.findByIdAndRemove(orgId).exec();
}

// -------Stamp----------

exports.createOrgStamp = function(org, name,image){
    var stamp = new Stamp({
        name:name,
        image:image,
        startDate:new Date(),
        endDate:new Date("2099-12-31")
    });

    var deferred = q.defer();
    Org.findById(org).then(function success(data) {
        if (!!data){
            stamp.save().then(function ok(data) {
                org.stamps.push(data);
                org.save().then(function ok(orgData){
                    deferred.resolve(orgData);
                }, function fail(error) {
                    deferred.reject(error);
                });
            }, function fail(error) {
                deferred.reject(error);
            });
        }
        else {
            deferred.reject("The org does not exist.");
        }
    }, function fail(error){
        deferred.reject(error);
    });

    return deferred.promise;
}

exports.getStampById = function(stampId){
    return Stamp.findOneById(stampId).exec();
}

exports.updateStamp = function(stampId, updateContent){
    return Stamp.findByIdAndUpdate(stampId, updateContent).exec();
}

exports.getAllOrgs = function(){
    return Org.find().populate("admin focals stamps").exec();
}

exports.getAllStamps = function(){
    return Stamp.find().exec();
}

exports.deleteStamp = function(stampId){
    return Stamp.findByIdAndRemove(stampId).exec();
}

exports.checkCreationParams = Org.checkCreationParams;