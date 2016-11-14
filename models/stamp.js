var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var stampSchema = mongoose.Schema({
    name:String,
    image:String,
    startDate:Date,
    endDate:Date,
});

stampSchema.static('checkCreationParams', function(params){
    return  !!params.name
        && !!params.admin
        && !!params.type
        && !!params.managePassword;
});

var Stamp = mongoose.model("Stamp", stampSchema);
module.exports = Stamp;
