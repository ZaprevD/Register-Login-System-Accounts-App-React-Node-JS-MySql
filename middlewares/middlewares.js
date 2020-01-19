var jwt = require('jsonwebtoken');
logger = (req, res, next) => {
    console.log(`Requested! Method : ${req.method} URL : ${req.url}`);
    next();
}

isAdmin = (req, res, next) => {
    let token = req.headers.authorization.substring(req.headers.authorization.indexOf(" ") + 1);
    var decoded = jwt.decode(token);
    if (decoded.dbUser.Is_Admin > 0) {
        next();
    } else {
        let error = new Error("You are not admin to see all users");
        error.status = 403;
        next(error);
    }
}

wrongRoute = (req, res, next) => {
    var error = new Error("Route does not exists please try with another route");
    error.code = 404;
    next(error);
}

errorHandler = (err, req, res, next) => {
    var errObj = {
        status: err.code,
        error: {
            message: err.message
        }
    };
    res.status(err.status).json(errObj);
};


module.exports = { logger, wrongRoute, errorHandler, isAdmin }