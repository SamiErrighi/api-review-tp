var _ = require('lodash');

var reviews = [
    {
        id: 1,
        name: 'McDo',
        placeType: 'Fastfood',
        stars: 3
    },
    {
        id: 2,
        name: 'KFC',
        placeType: 'Fastfood',
        stars: 2
    },
    {
        id: 3,
        name: 'SUBWAY',
        placeType: 'Fastfood',
        stars: 3    
    }
]
/*
* GET ALL reviews
* @method GET
*/
exports.index = function (req, res, next) {
    res.status(200).json(reviews);
}

/*
* CREATE a new reviews
* @method POST
* @params id
*/
exports.create = function (req, res, next) {
    var review = req.body;
    if (checkReview(review)) {
        reviews.push(review);
        res.status(201).json('created');
    }

    res.status(400).json('bad review')
}

/*
* UPDATE a new reviews
* @params id
*/
exports.update = function (req, res, next) {
    var review = getReview(req.params.id);
    if (!review) {
        return res.status(400).json('review not found')
    }
    if(!checkReview(req.body)) {
        return res.status(400).json('bad review')
    }
    console.log(req.body)
    _.drop(reviews, review);
    reviews.push(req.body);

    return res.status(204).json('review updated')
}

/*
* remove a review
* @params id
*/
exports.remove = function (req, res, next) {
    var review = getReview(req.params.id)
    if (!review) {
        res.status(404).json('error')
    }
    res.status(204).json('review delete')
}

/*
* display a review
* @params id
*/
exports.show = function (req, res, next) {
    var review = getReview(req.params.id)

    if(getReview(req.params.id)) {
        res.status(200).json(review);
    }

    res.status(404).json('bad review')
}

/*
* remove all reviews
*/
exports.removeAll = function (req, res, next) {
    reviews = [];
    res.json('delete')
}

getReview = function(id){
    return _.find(reviews, function(review) { return review.id == id; })
}

checkReview = function(review) {

    if (review.name && review.name != "" && review.placeType && review.placeType != "" && review.stars && review.stars != "") {
        return true
    }
    return false;
}

