var reviews = require('../controllers/reviews')
, express   = require('express') 
, router    = express.Router()
, authorization = require('../config/authorization');

router.route('/')
    .get(reviews.index)
    .post(authorization.requiresLogin, reviews.create)
    .delete(authorization.requiresLogin, reviews.removeAll)
;

router.route('/:id')
    .get(reviews.show)
    .put(authorization.requiresLogin, reviews.update)
    .delete(authorization.requiresLogin, reviews.remove)
;

module.exports = router;