var Review = require('../models/review');
var accepts = require('accepts');

/*
* GET ALL reviews
* @method GET
*/
exports.index = function (req, res, next) {
    var accept = accepts(req);
    Review.find(function(err, reviews){
        if(accept.type(['json', 'html']) == 'json') {
            res.setHeader('Content-Type', 'application/json')
            res.status(200).json(reviews);
        }else {
            res.setHeader('Content-Type', 'text/html')
            res.render('reviews/index', {reviews: reviews})
        }
    });
}

/*
* CREATE a new reviews
* @method POST
* @params id
*/
exports.create = function (req, res, next) {
    var review = new Review(req.body);
    review.save(function(err){
        if (err) {
            res.status(400).json('bad review')
        }
        res.status(201).json('created');
    });
}

exports.edit = function (req, res, next) {
    var accept = accepts(req);
    Review.findById(req.params.id, function(err, review){
        if(err) {
            res.status(404).send('review not found');
        }
        if(accept.type(['html']) == 'html') {
            res.setHeader('Content-Type', 'text/html')
            res.render('reviews/edit', {review: review})
        }else {
             res.status(404).send('no json');
        }
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
    var accept = accepts(req);
    Review.findById(req.params.id, function(err, review){
        if(err) {
            res.status(404).send('review not found');
        }
        if(accept.type(['json', 'html']) == 'json') {
            res.setHeader('Content-Type', 'application/json')
            res.status(200).send(review);
        }else {
            res.setHeader('Content-Type', 'text/html')
            res.render('reviews/show', {review: review})
        }
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


