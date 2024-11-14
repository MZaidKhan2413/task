const jwt = require('jwt');

exports.verifyToken = (req, res, next)=>{
    try {
        const token = req.headers.autherization?.split(" ")[1];
        if(!token) {
            return res.status(401).json({ message: 'Token is required' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        // req.user = decoded.id;
        next();
    } catch (error) {
        console.log(error);
    }
}