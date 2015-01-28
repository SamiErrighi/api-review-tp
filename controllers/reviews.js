var _ = require('underscore');

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
*/
exports.index = function (req, res, next) {
    res.json(reviews)
}

/*
* CREATE a new reviews
* @params id
*/
exports.create = function (req, res, next) {
    res.json('post')
}

/*
* CREATE a new reviews
* @params id
*/
exports.update = function (req, res, next) {
    res.json('put')
}

/*
* remove a review
* @params id
*/
exports.remove = function (req, res, next) {
    res.json('delete')
}

/*
* display a review
* @params id
*/
exports.show = function (req, res, next) {
    res.json(_.findWhere(reviews, {id: parseInt(req.params.id)}))
}

/*
* remove all reviews
*/
exports.removeAll = function (req, res, next) {
    res.json('delete')
}

