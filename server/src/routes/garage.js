const router = require('express').Router();
const garage = require('../controllers/garage.js');

// router.post('/create', garage.createGarage); // TODO
router.get('/get', garage.getGarage);
router.get('/getAll', garage.getAllGarages);
router.post('/update', garage.updateGarage);
router.delete('/remove', garage.deleteGarage);

module.exports = router;
