passport = require('passport');
User     = require('../models/user');

exports.requiresLogin = function(req, res, next){
    
    if (!req.headers.token || !req.headers.email) {
        return res.status(400).json('not authenticate');
    }
    passport.tokenLogin(req, req.headers.token, req.headers.email, function(code, message, user){
        if (!user) {
            return res.status(401).json(message)
        }
        next();
    });
}

