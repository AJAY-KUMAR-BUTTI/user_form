const { Router } = require('express');
const { postUser, signup } = require('../controllers/userController');

const userRouter = Router();

userRouter.post('/signup', signup);

module.exports = userRouter;