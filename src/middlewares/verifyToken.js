const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token) {
            return res.status(401).json({ message: 'Token is required' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    } catch (error) {
        console.log(error);
    }
}