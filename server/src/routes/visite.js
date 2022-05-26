const router = require('express').Router();
const visite = require('../controllers/visite.js');

router.get('/get', visite.getVisite);
router.get('/getAll', visite.getAllVisitesForALogement);
router.get('/update', visite.updateVisite);
router.get('/remove', visite.deleteVisite);

module.exports = router;
