const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../middlewares/verifyToken");
const {checkAdmin} = require("../../middlewares/checkAdmin");
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../../controllers/admin/user.controller");

router.get("/all", verifyToken, checkAdmin, getAllUsers);
router
  .route("/:id")
  .get(verifyToken, checkAdmin, getUser)
  .delete(verifyToken, checkAdmin, deleteUser)
  .put(verifyToken, checkAdmin, updateUser);

module.exports = router;
