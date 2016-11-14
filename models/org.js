/**
 * Created by brillwill on 16/10/31.
 */
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var orgSchema = mongoose.Schema({
    name:{type:String, unique:true},
    admin:{
        type:ObjectId,
        ref:"User",
    },
    focals:[{type:ObjectId, ref:"User"}],
    type:String,
    stamps:[{type:ObjectId, ref:"Stamp"}],
    managePassword:String
});

orgSchema.static('checkCreationParams', function(params){
    return !!params
        && !!params.name
        && !!params.admin
        && !!params.type
        && !!params.managePassword;
});

var Org = mongoose.model("Org", orgSchema);
module.exports = Org;

