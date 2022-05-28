const router = require('express').Router();
const logement = require('../controllers/logement.js');

router.get('/get', logement.getLogement);
router.get('/getAll', logement.getAllLogements);
router.post('/update', logement.updateLogement);
router.delete('/remove', logement.deleteLogement);

module.exports = router;
