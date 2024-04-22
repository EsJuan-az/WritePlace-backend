module.exports.success = function(req, res, body, status  = 200){
    return res.status(status).json({
        error: false,
        status,
        body,
    });
};
module.exports.error = function(req, res, body = 'Internal Server Error', status = 500){
    return res.status(status).json({
        error: true,
        status,
        body,
    });
}