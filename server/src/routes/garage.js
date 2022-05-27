const router = require('express').Router();
const garage = require('../controllers/garage.js');

router.get('/get', garage.getGarage);
router.get('/getAll', garage.getAllGarages);
router.get('/update', garage.updateGarage);
router.get('/remove', garage.deleteGarage);

module.exports = router;
