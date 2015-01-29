var express       = require('express')
, router          = express.Router()
, reviews         = require('./reviews.js')
, users           = require('./users.js')
, sessions        = require('./sessions.js');

router.use('/reviews', reviews)
router.use('/users', users)
module.exports = router