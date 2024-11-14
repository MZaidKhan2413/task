const User = require('../models/user.model');
const ApiResponse = require('../utils/apiResponse');

const checkAdmin = async(req, res, next) => {
    try {
        const user = await User.findById(req.user);
        if(user.role !== 'admin') {
            return res.status(403).json(new ApiResponse(403, "You do not have this permission"));
        }
        next();
    } catch (error) {
        // next(error);
        console.error(error);
    }
}

module.exports = {checkAdmin};