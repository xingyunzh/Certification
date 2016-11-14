/**
 * Created by brillwill on 16/10/31.
 */
var Certification = require("../models/certification");


exports.create = function(info){
    return new Certification(info).save();
}

exports.getById = function(certId) {
    return Certification.findById(certId).populate("issuedBy stamps creator owner").exec();
}

exports.getAll = function(){
    return Certification.find().populate("issuedBy stamps creator owner").exec();
}

exports.delete = function(certId) {
    return Certification.findByIdAndRemove(certId).exec();
}

exports.update = function(certId , updateContent) {
    return Certification.findByIdAndUpdate(certId, updateContent).exec();
}

exports.checkCreationParams = Certification.checkCreationParams;