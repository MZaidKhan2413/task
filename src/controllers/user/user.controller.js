const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const ApiResponse = require('../../utils/apiResponse');
const bcrypt = require('bcryptjs');
const asyncHandler = require("../../middlewares/asyncHandler");

exports.userSignUp = asyncHandler(async (req, res) => {
    let {name, email, password} = req.body;
    const checkUser = await User.findOne({email});
    if(checkUser) {
        return res.status(409).json(new ApiResponse(409, "User already exists!",));
    }
    password = await bcrypt.hash(password, 8);
    const user = await User.create({
        name,
        email,
        password
    });
    res.status(201).json(new ApiResponse(201, "User created successfully", user));
})

exports.userLogin = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({ email });
    if(!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    if(!bcrypt.compare(password, user.password)) {
        return res.status(401).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    return res.json(new ApiResponse(200, "user logged in succesfully", token));
})

exports.getProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user);
    return res.status(200).json(new ApiResponse(200, "Profile retrieved successfully", user));
});