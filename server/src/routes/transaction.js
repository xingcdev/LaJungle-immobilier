const router = require('express').Router();
const transaction = require('../controllers/transaction.js');

router.get('/get', transaction.getTransaction);
router.get('/getAll', transaction.getAllTransactions);
router.get('/update', transaction.updateTransaction);
router.get('/remove', transaction.deleteTransaction);

module.exports = router;
