const User = require("../../models/user.model");
const ApiResponse = require('../../utils/apiResponse');

exports.getAllUsers = async (req, res)=>{
    try {
        const  users = await User.find({});
        res.status(200).json(new ApiResponse(200, "Users retrieved successfully", users));
    } catch (error) {
        console.error(error);
    }
}

exports.getUser = async (req, res)=>{
    try {
        const {id} = req.params;
        console.log(id);
        const user = await User.findById(id);
        if(!user) return res.status(404).json(new ApiResponse(404, "User not found"));
        res.status(200).json(new ApiResponse(200, "User retrieved successfully", user));
    } catch (error) {
        res.status(500).json(new ApiResponse(500, "Some error occurred", error));
    }
}

exports.updateUser = async (req, res)=>{
    try {
        const {id} = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body);
        if(!updatedUser) return res.status(404).json(new ApiResponse(404, "User not found"));
        res.status(200).json(new ApiResponse(200, "User updated successfully", updatedUser));
    } catch (error) {
        res.status(500).json(new ApiResponse(500, "Some error occurred", error));
    }
}

exports.deleteUser = async (req, res)=> {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user) return res.status(404).json(new ApiResponse(404, "User not found"));
        res.status(200).json(new ApiResponse(200, "User deleted successfully", user));
    } catch (error) {
        res.status(500).json(new ApiResponse(500, "Some error occurred", error));
    }
}