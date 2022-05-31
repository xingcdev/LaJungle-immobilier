const router = require('express').Router();
const etatHabitation = require('../controllers/etatHabitation.js');

router.get('/getList', etatHabitation.getList);

module.exports = router;
