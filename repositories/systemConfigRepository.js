/**
 * Created by brillwill on 16/11/8.
 */
var fs = require('fs');
var q = require('q');

var cacheHere = null;

exports.getOSSConfig = function(){
    var deferred = q.defer();
    fs.readFile("/root/keys/certificationKeys.json", "utf8", function(err, data){
        if (err) {
            deferred.reject(err);
        }
        else {
            var aliyunOSS = JSON.parse(data).aliyunOSS;
            deferred.resolve(aliyunOSS);
        }
    });

    return deferred.promise;
}