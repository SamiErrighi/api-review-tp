passport = require('passport');
User     = require('../models/user');

exports.requiresLogin = function(req, res, next){
    
    if (!req.cookies.token || !req.cookies.email) {
        return res.json('no token found');
    }
    passport.tokenLogin(req, req.cookies.token, req.cookies.email, function(code, message, user){
        if (!user)
            res.status(code);
            return res.json(message)
        next();
    });
}

