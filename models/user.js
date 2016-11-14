var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var userSchema = mongoose.Schema({
    name:String,
    username:String,
    password:String,
    uid:String,
    signatures:[String]
});

var User = mongoose.model("User", userSchema);
module.exports = User;