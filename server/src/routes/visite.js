const router = require('express').Router();
const visite = require('../controllers/visite.js');

router.get('/create', visite.createVisite);
router.get('/get', visite.getVisite);
router.get('/getAllLogement', visite.getAllVisitesForALogement);
router.get('/update', visite.updateVisite);
router.get('/remove', visite.deleteVisite);

module.exports = router;
