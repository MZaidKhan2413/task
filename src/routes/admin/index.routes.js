const express = require('express');
const router = express.Router();
const createRoute = require('./creation.routes');
const userRoutes = require('./user.routes');

router.use("/user", userRoutes);
router.use("/", createRoute)

module.exports = router;