const express = require ('express');
const router = express.Router();
const {body} = require("express-validator")
const userController = require ('../controllers/user.controllers');
const { authUser } = require('../middlewares/auth.middleware');
const authMiddleware = require('../middlewares/auth.middleware');


//body emails syntax cheack if wrong say err
router.post('/register',[
    body('email').isEmail().withMessage('invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name should contain atlest 3 char'),
    body('password').isLength({min:6}).withMessage("password must  contain atlest 6 char")
],


userController.registerUser)
router.post('/login',[
    body('email').isEmail().withMessage('invalid Email'),
    body('password').isLength({min:6}).withMessage("password must  contain atlest 6 char")
],
userController.loginUser)


router.get('/profile',authMiddleware.authUser,userController.getUserProfile,)
router.get('/logout',authMiddleware.authUser,userController.logoutUser,)

module.exports = router