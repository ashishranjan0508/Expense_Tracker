const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/userController.js');
const budgetController = require('../controllers/budgetController.js');
const expensesController = require('../controllers/expensesController.js');


import userAuth from '../middlewares/auth.js';

userRouter.post('/register', userController.registerUser);
userRouter.post('/login', userController.loginUser);
userRouter.post('/budget', userAuth, budgetController.createBudget);
userRouter.get('/budget', userAuth, budgetController.getBudget);
userRouter.post('/expenses', userAuth, expensesController.createExpense);
userRouter.get('/expenses', userAuth, expensesController.getExpenses);

module.exports = userRouter;

