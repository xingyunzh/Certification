/**
 * Created by brillwill on 16/10/31.
 */
exports.wrapBody = function(obj, statusCode){
    var statusCode = arguments[1] ? arguments[1] : 'S';
    var wrapper = {
        status: statusCode,
        body : obj
    };

    return wrapper;
};