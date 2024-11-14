const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');

exports.userSignUp = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.userLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if(user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        return res.json({token});

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}