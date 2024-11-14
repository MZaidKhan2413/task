const express = require('express');
const router = express.Router();
const userRoutes = require("./user/user.routes");
const adminIndexRoutes = require('./admin/index.routes');

router.use("/user", userRoutes);
router.use("/admin", adminIndexRoutes) 

module.exports = router;