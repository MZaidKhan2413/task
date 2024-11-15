const User = require("../../models/user.model");
const ApiResponse = require("../../utils/apiResponse");
const asyncHandler = require("../../middlewares/asyncHandler");

exports.createAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const checkUser = await User.findOne({ email });
  if (checkUser) {
    return res.status(409).json(new ApiResponse(409, "User already exists!"));
  }
  const user = new User({ name, email, password, role: "admin" });
  await user.save();
  res
    .status(201)
    .json(new ApiResponse(200, "Admin created successfully.", user));
});
