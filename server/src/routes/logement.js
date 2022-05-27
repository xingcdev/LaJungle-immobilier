const router = require('express').Router();
const logement = require('../controllers/logement.js');

router.get('/get', logement.getLogement);
router.get('/getAll', logement.getAllLogements);
router.get('/update', logement.updateLogement);
router.get('/remove', logement.deleteLogement);

module.exports = router;
