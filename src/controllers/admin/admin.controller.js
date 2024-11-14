const User = require("../../models/user.model");

exports.createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password, role: "admin" });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};
