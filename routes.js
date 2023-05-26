const express = require('express');
const router = express.Router();

const controllers = require('./controllers');

router.post('/post/expense', controllers.postExpenses);
router.get('/get-expense', controllers.getExpenses);
router.delete('/delete-expense/:id', controllers.deleteExpenses);
router.get('/editExpense/:id', controllers.editExpense);
module.exports = router;