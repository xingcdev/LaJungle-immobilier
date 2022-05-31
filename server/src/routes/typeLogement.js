const router = require('express').Router();
const typeLogement = require('../controllers/typeLogement.js');

router.get('/getList', typeLogement.getList);

module.exports = router;
