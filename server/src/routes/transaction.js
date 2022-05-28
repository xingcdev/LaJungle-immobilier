const router = require('express').Router();
const transaction = require('../controllers/transaction.js');

router.get('/get', transaction.getTransaction);
router.get('/getAll', transaction.getAllTransactions);
router.post('/update', transaction.updateTransaction);
router.delete('/remove', transaction.deleteTransaction);

module.exports = router;
