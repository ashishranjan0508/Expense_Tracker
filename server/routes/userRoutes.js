const express = require('express');
const userRouter = express.Router();
const userAuth = require('../middlewares/userAuth.js');

const userController = require('../controllers/userController.js');
const budgetController = require('../controllers/budgetController.js');
const expensesController = require('../controllers/expensesController.js');
const incomeController = require('../controllers/incomeController.js');



userRouter.post('/register', userController.registerUser);
userRouter.post('/login', userController.loginUser);

userRouter.post('/budget', userAuth, budgetController.createBudget);
userRouter.get('/budget', userAuth, budgetController.getBudget);

userRouter.post('/expense', userAuth, expensesController.createExpenses);
userRouter.get('/expense', userAuth, expensesController.getExpenses);

userRouter.post('/income', userAuth, incomeController.createIncome);
userRouter.get('/income', userAuth, incomeController.getIncome);

module.exports = userRouter;