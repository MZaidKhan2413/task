const express = require('express');
const router = express.Router();
const {userSignUp, userLogin, getProfile} = require('../../controllers/user/user.controller');
const {userValidator} = require('../../validators/user/user.validators')
const {loginValidator} = require('../../validators/user/login.validators')
const { verifyToken } = require("../../middlewares/verifyToken");

router.post('/signup', userValidator, userSignUp);
router.post('/login', loginValidator, userLogin);
router.get('/profile', verifyToken, getProfile)

module.exports = router;