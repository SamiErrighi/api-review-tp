var User = require('../models/user')
, passport = require('passport');
/*
* CREATE a new reviews
* @method POST
* @params id
*/
exports.create = function (req, res, next) {
    passport.authenticate('local-signup', function(message, user){
        if (user) {
            res.status(201).json(user);
        }else{
            res.satatus(400).json(message);
        }
    })(req, res, next)
}

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

/*
* UPDATE a new reviews
* @params id
*/
exports.update = function (req, res, next) {
    console.log(req.body)
    Review.update({'_id': req.params.id}, req.body, function(err, review){
        if (err) {
            return res.status(400).json('bad review')
       }
        return res.status(200).json('created');
    });
}

/*
* remove a review
* @params id
*/
exports.remove = function (req, res, next) {
    Review.remove(req.params.id, function(err){
        console.log(err)
        if(err) {
            return res.status(404).json('review not found');
        }
        return res.status(204)
    });
}

/*
* display a review
* @params id
*/
exports.show = function (req, res, next) {
    Review.findById(req.params.id, function(err, review){
        console.log(review);
        if(err) {
            res.status(404).send('review not found');
        }
        res.status(200).send(review);
    });
}

