const express = require('express');
const router = express.Router();
const {userSignUp} = require('../../controllers/user/user.controller');

router.post('/signup', userSignUp);
// router.post('/login')

module.exports = router;