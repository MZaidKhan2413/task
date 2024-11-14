const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const ApiResponse = require('../../utils/apiResponse');
const bcrypt = require('bcryptjs');

exports.userSignUp = async (req, res) => {
    try {
        let {name, email, password} = req.body;
        password = await bcrypt.hash(password, 8);
        const user = await User.create({
            name,
            email,
            password
        });
        res.status(201).json(new ApiResponse(201, "User created successfully", user));
    } catch (err) {
        // res.status(400).json({ message: err.message });
        next(err);
    }
}

exports.userLogin = async (req, res) => {
    try {
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

    } catch (error) {
        // res.status(400).json({ message: error.message });
        next(error);
    }
}