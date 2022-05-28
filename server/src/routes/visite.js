const router = require('express').Router();
const visite = require('../controllers/visite.js');

router.post('/create', visite.createVisite);
router.get('/get', visite.getVisite);
router.get('/getAll', visite.getAllVisites);
router.get('/getAllLogement', visite.getAllVisitesForALogement);
router.post('/update', visite.updateVisite);
router.delete('/remove', visite.deleteVisite);

module.exports = router;
