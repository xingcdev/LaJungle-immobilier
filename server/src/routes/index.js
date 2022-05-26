const router = require('express').Router();
const { isAuthorized } = require('../middlewares/auth.js');

const user = require('./user.js');
const auth = require('./auth.js');
const logement = require('./logement.js');
const transaction = require('./transaction.js');
const visite = require('./visite.js');

router.use('/user', isAuthorized, user);
router.use('/auth', auth);
router.use('/logement', logement);
router.use('/transaction', transaction);
router.use('/visite', visite);

module.exports = router;
