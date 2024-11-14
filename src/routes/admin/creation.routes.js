const express = require('express');
const router = express.Router();
const {createAdmin} =  require('../../controllers/admin/admin.controller')

router.post("/create", createAdmin);

module.exports = router;