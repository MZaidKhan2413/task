const User = require("../../models/user.model");
const ApiResponse = require('../../utils/apiResponse');
const asyncHandler = require("../../middlewares/asyncHandler");

exports.getAllUsers = asyncHandler(async (req, res)=>{
    const  users = await User.find({});
    res.status(200).json(new ApiResponse(200, "Users retrieved successfully", users));
})

exports.getUser = asyncHandler(async (req, res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    if(!user) return res.status(404).json(new ApiResponse(404, "User not found"));
    res.status(200).json(new ApiResponse(200, "User retrieved successfully", user));
})

exports.updateUser = asyncHandler(async (req, res)=>{
    const {id} = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body);
    if(!updatedUser) return res.status(404).json(new ApiResponse(404, "User not found"));
    res.status(200).json(new ApiResponse(200, "User updated successfully", updatedUser));
})

exports.deleteUser = asyncHandler(async (req, res)=> {
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id);
    if(!user) return res.status(404).json(new ApiResponse(404, "User not found"));
    res.status(200).json(new ApiResponse(200, "User deleted successfully", user));
})