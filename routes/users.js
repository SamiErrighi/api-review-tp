var users       = require('../controllers/users')
, express       = require('express') 
, router        = express.Router()
, authorization = require('../config/authorization');

router.route('/')
    .post(users.create)
    .post(users.login)
    .get(authorization.requiresLogin, users.show)
    .put(authorization.requiresLogin, users.update)
    .delete(users.remove)
;

module.exports = router;