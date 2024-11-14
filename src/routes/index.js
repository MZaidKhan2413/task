const express = require('express');
const router = express.Router();
const userRoutes = require("./user/user.routes");

router.use("/user", userRoutes);
// router.use("/admin") 

module.exports = router;