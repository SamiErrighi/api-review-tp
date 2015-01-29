var Review = require('../models/review');
var _ = require('lodash');

/*
* GET ALL reviews
* @method GET
*/
exports.index = function (req, res, next) {
    Review.find(function(err, reviews){
        return res.status(200).json(reviews);
    });
}

/*
* CREATE a new reviews
* @method POST
* @params id
*/
exports.create = function (req, res, next) {
    console.log('here')
    var review = new Review(req.body);
    review.save(function(err){
        if (err) {
            res.status(400).json('bad review')
        }
        res.status(201).json('created');
    });
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

/*
* remove all reviews
*/
exports.removeAll = function (req, res, next) {
    Review.remove(function(){
        return res.status(204)
    });
}


