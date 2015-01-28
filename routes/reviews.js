var reviews = require('../controllers/reviews')
, express   = require('express') 
, router    = express.Router();

router.route('/')
    .get(reviews.index)
    .post(reviews.create)
;

router.route('/:id')
    .put(reviews.update)
    .delete(reviews.delete)
;

module.exports = router;