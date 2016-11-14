/**
 * Created by brillwill on 16/10/31.
 */
var util = require('../common/util.js');
var shortID = require('shortid');
var systemConfigRepository = require('../repositories/systemConfigRepository');

exports.getOSSConfig = function(req, res){
    systemConfigRepository.getOSSConfig().then(function(data){
        res.json(util.wrapBody(data));
    }).catch(function(error){
        res.json(util.wrapBody(error, 'E'));
    });
}

exports.getShortID = function (req, res) {
    res.json(util.wrapBody(shortID.generate()));
}