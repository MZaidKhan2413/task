const express = require('express');
const router = express.Router();
const createRoute = require('./creation.routes')

// router.use("/:id")
router.use("/", createRoute)

module.exports = router;