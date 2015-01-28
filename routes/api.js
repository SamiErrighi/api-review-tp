var express       = require('express')
, router          = express.Router()
, reviews         = require('./reviews.js');

router.use('/reviews', reviews)

module.exports = router