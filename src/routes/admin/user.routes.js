const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../middlewares/verifyToken");
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../../controllers/admin/user.controller");

router.get("/all", verifyToken, getAllUsers);
router
  .route("/:id")
  .get(verifyToken, getUser)
  .delete(verifyToken, deleteUser)
  .put(verifyToken, updateUser);

module.exports = router;
