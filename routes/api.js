var express       = require('express')
, router          = express.Router()
, reviews         = require('./reviews.js')
, users           = require('./users.js');

router.use('/reviews', reviews)
router.use('/users', users)
module.exports = router