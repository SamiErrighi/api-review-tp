var User = require('../models/user')
, passport = require('passport');


exports.login = function (req, res, next) {
    console.log('ssss')
    passport.authenticate('local-login', function(err, user, message){
        if (user) {
            res.status(200).json(user)
        }else {
            res.status(400).json(message)
        }
    })(req, res, next)
}