const routes = require('express').Router();
const expenseController = require('../controllers/expense.controller')

routes.get('/expenses', expenseController.getexpenses);
routes.get('/add-expense', expenseController.getAddexpense);
routes.post('/add-expense', expenseController.postAddExpense);
routes.get('/edit-expense/:expenseId',expenseController.getEditexpense)



module.exports = routes;