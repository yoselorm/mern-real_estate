const express = require ('express');
const { test } = require('../controllers/user.controller');

const userRouter = express.Router()

userRouter.get('/test',test)

module.exports = userRouter;