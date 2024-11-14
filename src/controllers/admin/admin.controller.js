const User = require("../../models/user.model");
const ApiResponse = require('../../utils/apiResponse');
exports.createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password, role: "admin" });
    await user.save();
    res.status(201).json(new ApiResponse(200, "Admin created successfully.", user));
  } catch (error) {
    console.log(error);
  }
};
