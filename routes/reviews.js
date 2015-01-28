var reviews = require('../controllers/reviews')
, express   = require('express') 
, router    = express.Router();

router.route('/')
    .get(reviews.index)
    .post(reviews.create)
    .delete(reviews.removeAll)
;

router.route('/:id')
    .get(reviews.show)
    .delete(reviews.remove)
;

module.exports = router;