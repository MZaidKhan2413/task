const express = require('express');
const router = express.Router();
const {userSignUp, userLogin} = require('../../controllers/user/user.controller');
const {userValidator} = require('../../validators/user/user.validators')
const {loginValidator} = require('../../validators/user/login.validators')

router.post('/signup', userValidator, userSignUp);
router.post('/login', loginValidator, userLogin);

module.exports = router;