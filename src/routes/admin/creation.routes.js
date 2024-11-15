const express = require('express');
const router = express.Router();
const {userValidator} = require('../../validators/user/user.validators')
const {createAdmin} =  require('../../controllers/admin/admin.controller')

router.post("/create", userValidator, createAdmin);

module.exports = router;