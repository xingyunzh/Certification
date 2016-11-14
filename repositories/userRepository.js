/**
 * Created by brillwill on 16/10/31.
 */
var User = require("../models/user");

exports.addUser = function (info) {
    var user = new User(info);
    return user.save();
};

exports.update = function(userId, updateContent){
    return User.findByIdAndUpdate(userId, updateContent).exec();
}

exports.delete = function(userId){
    return User.findByIdAndRemove(userId).exec();
}

exports.verify = function(username, password) {
    return User.findOne({username:username, password:password}).exec();
};

exports.save = function (user) {
    return user.save();
}

exports.getById = function (id) {
    return User.findById(id).exec();
}

exports.getAll = function(){
    return User.find().exec();
}