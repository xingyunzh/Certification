/**
 * Created by brillwill on 16/10/31.
 */
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var certificationSchema = mongoose.Schema({
    name:String,
    title:String,
    toName:String,
    content:String,
    signature:String,
    issuedBy:{
        type:ObjectId,
        ref:"Org"
    },
    issuedDate:Date,
    expireDate:Date,
    serialNumber:String,  //used by external
    stamps:[{type:ObjectId, ref:"Stamp"}],

    creator:{type:ObjectId, ref:"User"},
    owner:{type:ObjectId, ref:"User"},
    passcode:String,
    state:String
});

certificationSchema.static('checkCreationParams', function(params){
    return !!params
        && !!params.name
        && !!params.title
        && !!params.toName
        && !!params.content
        && !!params.issuedBy
        && !!params.issuedDate
        && !!params.creator
        && !!params.owner
        && !!params.state;
});

var Certification = mongoose.model("Certification", certificationSchema);
module.exports = Certification;
